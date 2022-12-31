/*
 * @Author: loveyy520 201357337@qq.com
 * @Date: 2022-12-30 21:59:57
 * @LastEditors: loveyy520 201357337@qq.com
 * @LastEditTime: 2023-01-01 01:44:35
 * @FilePath: \rax-example\src\components\Floor\index.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { createElement } from 'rax';
import View from 'rax-view';
import store from "@/store";
import { px2rpx, rpx2px } from '@uni/unit-tool';
import styles from './index.module.css'
import {
  Warrior, Wall,
  // WeakWall, Monster, Article, NPC 
} from '@/components'

import { WallType, WeakWallType, MonsterType, ArticleType, NpcType, Position, Obstacle } from '@/types'

interface Props {
  warriorPosition: Position,
  walls: WallType[],
  weakWalls: WeakWallType[],
  monsters: MonsterType[],
  articles: ArticleType[],
  npc: NpcType[],
  unitSize: number
}

function Floor({ warriorPosition, walls, weakWalls, monsters, articles, npc, unitSize }: Props) {
  const [{ position, floor }, warriorDispatchers] = store.useModel('warrior')
  const [floors, floorsDispatchers] = store.useModel('floors')
  const currentFloor = floors[floor]
  const handleFloorClick = (e) => {
    const [x, y] = position as [number, number]
    let { clientX, clientY } = e.touches[0]
    clientX = Math.ceil((px2rpx(clientX) - 34) / 62)
    clientY = Math.ceil((716 - px2rpx(clientY)) / 62)
    const isHorizontal = Math.abs(clientX - x) >= Math.abs(clientY - y)
    let newPosition: Position
    if (isHorizontal) {
      newPosition = clientX > x ? [x + 1, y] : clientX === x ? [x, y] : [x - 1, y]
    } else {
      newPosition = clientY > y ? [x, y + 1] : clientY === y ? [x, y] : [x, y - 1]
    }

    const [isValid, obstacle, obstacleType] = validatePosition(newPosition)
    if (isValid) return warriorDispatchers.update({ position: newPosition })
    switch (obstacleType) {
      case 'wall':
        // handleWall(obstacle)
        break
      case 'weakWall':
        // handleWeakWall(obstacle)
        break
      case 'monster':
        // handleMonster(obstacle)
        break
      case 'NPC':
        // handleNPC(obstacle)
        break
      case 'article':
        // handleArticle(obstacle)
        break
      default:
        return
    }
  }

  type ValidatePositionResult = [boolean] | [false, Obstacle, string]
  type ObstacleJudgement = [false] | [true, Obstacle]

  const validatePosition = (position: Position): ValidatePositionResult => {
    const [x, y] = position
    if (!x || !y || x === 12 || y === 12) return [false]
    const obstaclesMap = {
      wall: walls,
      weakWall: weakWalls,
      monster: monsters,
      NPC: npc,
      article: articles
    }
    for (const key in obstaclesMap) {
      const [isObstacle, obstacle] = hasObstacle(position, obstaclesMap[key])
      if (isObstacle) return [false, obstacle, key]
    }
    return [true]
  }

  const hasObstacle = ([targetX, targetY]: Position, obstacles: Obstacle[]): ObstacleJudgement => {
    const allObstacles = obstacles.reduce<Obstacle[]>((pre, cur) => {
      const [x, yPos] = cur.position
      if (typeof yPos === 'number') {
        pre.push(cur)
      } else {
        pre.push(...yPos.map<Obstacle>((y) => ({ ...cur, position: [x, y] })))
      }
      return pre
    }, [])
    const item = allObstacles.find((obstacle: Obstacle) =>
      Array.isArray(obstacle)
        ? obstacle[0] === targetX && (obstacle[1] as number) === targetY as number
        : obstacle.position[0] === targetX && obstacle.position[1] === targetY)
    return item
      ? [true, item]
      : [false]
  }

  return (
    <View
      className={styles.floor}
      style={{ backgroundSize: `${unitSize}rpx` }}
      onClick={handleFloorClick}>
      <Warrior position={warriorPosition} unitSize={unitSize}></Warrior>
      {walls.map(wall => (
        <Wall position={wall.position} key={wall.id} id={wall.id} unitSize={unitSize} />
      ))}
      {/* {weakWalls.map(weakWall => (
        <WeakWall position={weakWall.position} key={weakWall.id} unitSize={unitSize}/>
      ))}
      {monsters.map(monster => (
        <Monster position={monster.position} key={monster.id} unitSize={unitSize}/>
      ))}
      {articles.map(article => (
        <Article position={article.position} key={article.id} unitSize={unitSize}/>
      ))}
      {npc.map(item => (
        <NPC position={item.position} key={item.id} unitSize={unitSize}/>
      ))} */}
    </View>
  );
}

export default Floor;
