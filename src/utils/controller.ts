import { WallType } from '@/types';
/*
 * @Author: loveyy520 201357337@qq.com
 * @Date: 2023-01-01 11:27:30
 * @LastEditors: loveyy520 201357337@qq.com
 * @LastEditTime: 2023-01-01 14:12:07
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
  HandleWall,
  HandleWeakWall,
  HandleDoor,
  HandleMonster,
  HandleNPC,
  HandleStair,
  HandleArticle,
  HasObstacle,
  ValidatePosition
 } from "@/types"

export const handleMove: HandleMove = (position, floorState, updateWarrior) => {
  const obstacleMap = getObstacleMap(floorState)
  const [isValid, obstacle, obstacleType] = validatePosition(position, obstacleMap)
  if (isValid) return moveTo(position, updateWarrior)
  const obstacleHandlers = getObstacleHandlers()
  Object.keys(obstacleHandlers).includes(obstacleType!) && obstacleHandlers[obstacleType!](obstacle)
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
    wall: <WallType[]>walls,
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
  updateWarrior({ position })
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
      ? obstacle[0] === targetX && obstacle[1] === targetY
      : obstacle.position[0] === targetX && obstacle.position[1] === targetY)
  return item
    ? [true, item]
    : [false]
}

// 当新位置处有各种障碍物
const handleWall: HandleWall = (wall) => null
const handleWeakWall: HandleWeakWall = (weakWall) => null
const handleDoor: HandleDoor = (door) => null
const handleStair: HandleStair = (stair) => null
const handleMonster: HandleMonster = (monster) => null
const handleNPC: HandleNPC = (NPC) => null
const handleArticle: HandleArticle = (article) => null