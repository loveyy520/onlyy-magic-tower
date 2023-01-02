/* @Author: loveyy520 201357337@qq.com
 * @Date: 2023-01-01 11:27:30
 * @LastEditors: loveyy520 201357337@qq.com
 * @LastEditTime: 2023-01-02 01:49:55
 * @FilePath: \magic-tower\src\utils\controller.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import propertyData from '@/article_property'
import {
  HandleMove,
  MoveTo,
  Obstacle,
  ObstacleMap,
  GetObstacleMap,
  GetObstacleHandlers,
  HandleArticle,
  HasObstacle,
  ValidatePosition,
  SetMessage,
  Fight,
  RemoveArticle,
  EnhanceAbility,
  GainArticle,
  ArticleType,
  Property
 } from "@/types"

export const handleMove: HandleMove = (position, floorState, warriorState, updateFloors, updateWarrior) => {
  const obstacleMap = getObstacleMap(floorState)
  const [isValid, obstacle, obstacleType] = validatePosition(position, obstacleMap)
  if (isValid) return moveTo(position, updateWarrior)
  const obstacleHandlers = getObstacleHandlers()
  Object.keys(obstacleHandlers).includes(obstacleType!) &&
    obstacleHandlers[obstacleType!](updateWarrior, updateFloors, obstacle, floorState, warriorState)
}

const getObstacleMap: GetObstacleMap = (floorState) => {
  const {
    walls,
    weakWalls,
    doors,
    stairs,
    monsters,
    npc,
    articles
  } = floorState
  const obstacleMap: ObstacleMap = {
    wall: walls,
    weakWall: weakWalls,
    door: doors,
    stair: stairs,
    monster: monsters,
    NPC: npc,
    article: articles
  }
  return obstacleMap
}

const validatePosition: ValidatePosition = (position, obstacleMap) => {
  const [x, y] = position
  if (!x || !y || x === 12 || y === 12) return [false]
  for (const key in obstacleMap) {
    const [isObstacle, obstacle] = hasObstacle(position, obstacleMap[key])
    if (isObstacle) return [false, obstacle, key]
  }
  return [true]
}

const moveTo: MoveTo = (position, updateWarrior) => {
  updateWarrior({ position, msg: ''})
}

const getObstacleHandlers:GetObstacleHandlers = () => ({
  wall: handleWall,
  weakWall: handleWeakWall,
  door: handleDoor,
  stair: handleStair,
  monster: handleMonster,
  NPC: handleNPC,
  article: handleArticle
})

const hasObstacle: HasObstacle = ([targetX, targetY], obstacles) => {
  const allObstacles = obstacles.reduce<Obstacle[]>((pre, cur) => {
    const positions = cur.positions
    pre.push(...positions.map(position => ({
      ...cur, positions: [position]
    })))
    return pre
  }, [])
  const item = allObstacles.find((obstacle: Obstacle) => {
    const [[x, y]] = obstacle.positions
    return x === targetX && y === targetY
  })
  return item
    ? [true, item]
    : [false]
}

// 当新位置处有各种障碍物
const handleWall: HandleArticle = (updateWarrior, updateFloors, wall) => {
  setMessage('一堵墙挡在了你面前.', updateWarrior)
}
const handleWeakWall: HandleArticle = (updateWarrior, updateFloors, weakWall, floorState, warriorState) => {
  removeArticle(weakWall, warriorState.floor, floorState, updateFloors)
}
const handleDoor: HandleArticle = (updateWarrior, updateFloors, door, floorState, warriorState) => {
  const msgMap = {
    yellow: ['你缺少1把黄钥匙.', '你消耗了1把黄钥匙打开了门.'],
    blue: ['你缺少1把蓝钥匙.', '你消耗了1把蓝钥匙打开了门.'],
    red: ['你缺少1把红钥匙.', '你消耗了1把红钥匙打开了门.'],
  }
  const withKeys: string[] = ['yellow', 'blue', 'red']
  const {doorType} = door
  if(!withKeys.includes(doorType!)) return setMessage('似乎目前无法打开这扇门.', updateWarrior)
  const {keys, floor} = warriorState
  const keyCount = keys[doorType!]
  if(!keyCount) return setMessage(msgMap[doorType!][0], updateWarrior)
  removeArticle(door, floor, floorState, updateFloors)
  updateWarrior({
    keys: {
      ...keys,
      [doorType!]: keyCount - 1
    },
    msg: msgMap[doorType!][1]
  })
}
const handleStair: HandleArticle = (updateWarrior, updateFloors, stair, floorState, warriorState) => {
  updateWarrior({
    position: stair.positions[0]
  })
  setTimeout(() => {
    updateWarrior({
      floor: stair.nextFloor!,
      position: stair.nextStairPosition!,
      msg: `你来到了第${stair.nextFloor}层.`
    })
  }, 0)
}
const handleMonster: HandleArticle = async(updateWarrior, updateFloors, monster, floorState, warriorState) => {
  const {atk, def, life, gold, displayName} = <Property>propertyData[monster.name]
  const {attack, defense, life: warriorLife} = warriorState.properties
  const damage = attack - def
  if(damage <= 0)  return setMessage('你还不能打败它.', updateWarrior)
  const round = Math.ceil(life / damage)
  const injury = atk - defense > 0 ? atk - defense : 0
  const canBeat = warriorLife > injury * (round - 1)
  if(!canBeat) return setMessage('你还不能打败它.', updateWarrior)
  moveTo(monster.positions[0], updateWarrior)
  const fightingParams = {round, injury, gold, enemyName: displayName!, warriorProperty: warriorState.properties, updateWarrior}
  await fight(fightingParams)
  removeArticle(monster, warriorState.floor, floorState, updateFloors)
}
const handleNPC: HandleArticle = (updateWarrior, updateFloors, NPC, warriorState, floorState) => null
const handleArticle: HandleArticle = (updateWarrior, updateFloors, article, floorState, warriorState) => {
  if(['potion', 'gem'].includes(article.type)) {
    enhanceAbility(article.name, warriorState, updateWarrior)
  } else {
    gainArticle(article, warriorState, updateWarrior)
  }
  removeArticle(article, warriorState.floor, floorState, updateFloors)
}

const setMessage: SetMessage = (msg, updateWarrior) => {
  updateWarrior({
    msg
  })
}

const fight: Fight = async({round, injury, gold, enemyName, warriorProperty, updateWarrior}) => {
  while(round--) {
    await new Promise<void>((resolve) => {
      setTimeout(() => {
        const properties = {
          ...warriorProperty,
          life: warriorProperty.life - injury
        }
        warriorProperty = properties
        updateWarrior({
          properties
        })
        resolve()
      }, 100);
    })
  }
  updateWarrior({
    properties: {
      ...warriorProperty,
      gold: warriorProperty.gold + gold
    },
    msg: `你击败了${enemyName}，获得了${gold}个金币!`
  })
}

const removeArticle: RemoveArticle = (article, floor, floorState, updateFloors) => {
  const {id, type, positions} = article
  const keys = ['door', 'weakWall', 'wall', 'monster', 'npc']
  const propType = keys.includes(type) ? `${type}s` : 'articles'
  const originalArticles: ArticleType[] = floorState[propType]
  const index = originalArticles.findIndex(originalArticle => originalArticle.id === id)
  
  if(index< 0) return
  const leftArticlePositions = originalArticles[index].positions.filter(position => position !== positions[0])
  const leftArticles = originalArticles.slice()
  leftArticles.splice(index, 1, {...originalArticles[index], positions: leftArticlePositions})
  updateFloors({
    [floor]: {
      ...floorState,
      [propType]: leftArticles
    }
  })
}

const enhanceAbility: EnhanceAbility = (articleName, warriorState, updateWarrior) => {
  const level = Math.floor(warriorState.floor / 10)
  const {life = 0, atk = 0, def = 0, gold = 0, displayName} = <Property>(propertyData[articleName][level])
  const {life: warriorLife, attack, defense, gold: warriorGold} = warriorState.properties
  let value: number, propertyName: string
  switch(true) {
    case !!life:
      value = life
      propertyName = '生命值'
      break
    case !!atk:
      value = atk
      propertyName = '攻击力'
      break
    case !!def:
      value = def
      propertyName = '防御力'
      break
    case !!gold:
      value = gold
      propertyName = '金币'
      break
    default:
      value = 0
      propertyName = 'Nothing'
  }
  
  updateWarrior({
    properties: {
      life: warriorLife + life,
      attack: attack + atk,
      defense: defense + def,
      gold: warriorGold + gold
    },
    msg: `你获得了${displayName},增加了${value}点${propertyName}.`
  })
}

const gainArticle: GainArticle = (article, warriorState, updateWarrior) => {
  switch(article.type) {
    case 'equipment':
      const property = <Property>propertyData[article.name]
      const {displayName} = property
      let value: number,
        propName: '攻击力' | '防御力',
        articleProp: 'atk' | 'def',
        prop: 'attack' | 'defense'
      if(property.atk) {
        value = property.atk
        propName = '攻击力',
        articleProp = 'atk'
        prop = 'attack'
      } else {
        value = property.def
        propName = '防御力'
        articleProp = 'def'
        prop = 'defense'
      }
      updateWarrior({
        properties: {
          ...warriorState.properties,
          [prop]: property[articleProp] + warriorState.properties[prop]
        },
        msg: `你获得了${displayName},增加了${value}点${propName}.`
      })
      break
    case 'key':
      const keyProp = article.name.split('-')[0]
      updateWarrior({
        keys: {
          ...warriorState.keys,
          [keyProp]: warriorState.keys[keyProp] + 1
        },
        msg: `你获得了一把${article.displayName}.`
      })
      break
    case 'treasure':
      const treasureName = article.name
      updateWarrior({
        treasures: {
          ...warriorState.treasures,
          [treasureName]: {
            ...warriorState.treasures[treasureName],
            count: warriorState.treasures[treasureName].count + 1
          }
        },
        msg: `你获得了${article.displayName}.`
      })
      break
    default:
      return
  }
}