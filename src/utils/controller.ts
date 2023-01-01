import { IRootDispatch } from '@/store';
/*
 * @Author: loveyy520 201357337@qq.com
 * @Date: 2023-01-01 11:27:30
 * @LastEditors: loveyy520 201357337@qq.com
 * @LastEditTime: 2023-01-01 21:23:32
 * @FilePath: \magic-tower\src\utils\controller.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import {
  HandleMove,
  MoveTo,
  Obstacle,
  ObstacleMap,
  GetObstacleMap,
  GetObstacleHandlers,
  HandleArticle,
  HasObstacle,
  ValidatePosition
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
  const originalWeakWalls = floorState.weakWalls
  const leftWeakWallPositions = originalWeakWalls[0].positions.filter(position => position !== weakWall.positions[0])
  const leftWeakWalls = {
    ...originalWeakWalls,
    positions: leftWeakWallPositions
  }
  updateFloors({
    [warriorState.floor]: {
      ...floorState,
      weakWalls: leftWeakWalls
    }
  })
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
  const originalDoors = floorState.doors
  const index = originalDoors.findIndex(doorObj => doorObj.doorType === door.doorType)
  if(index < 0) return setMessage('似乎门出了Bug.', updateWarrior)
  const sameTypeDoors = originalDoors[index]
  const leftSameTypeDoorPositions = sameTypeDoors.positions.filter(position => position !== door.positions[0])
  const leftSameTypeDoors = {
    ...sameTypeDoors,
    positions: leftSameTypeDoorPositions
  }
  const leftDoors = originalDoors.slice()
  leftDoors.splice(index, 1, leftSameTypeDoors)
  
  updateWarrior({
    keys: {
      ...keys,
      [doorType!]: keyCount - 1
    }
  })
  updateFloors({
    [floor]: {
      ...floorState,
      doors: leftDoors
    }
  })
  return setMessage(msgMap[doorType!][1], updateWarrior)
}
const handleStair: HandleArticle = (updateWarrior, updateFloors, stair, floorState, warriorState) => {
  updateWarrior({
    position: stair.positions[0]
  })
  setTimeout(() => {
    updateWarrior({
      floor: stair.nextFloor!,
      position: stair.nextStairPosition!
    })
  }, 0)
}
const handleMonster: HandleArticle = (updateWarrior, updateFloors, monster, floorState, warriorState) => null
const handleNPC: HandleArticle = (updateWarrior, updateFloors, NPC, warriorState, floorState) => null
const handleArticle: HandleArticle = (updateWarrior, updateFloors, article, warriorState, floorState) => null

const setMessage = (msg: string, updateWarrior: IRootDispatch['warrior']['update']) => {
  updateWarrior({
    msg
  })
}