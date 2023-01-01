import { IRootDispatch, IRootState } from '@/store'
import { 
  Obstacle,
  WallType,
  WeakWallType,
  DoorType,
  StairType,
  MonsterType,
  NpcType,
  ArticleType,
  SinglePosition
} from "./index"

export interface ObstacleMap {
  wall: WallType[],
  weakWall: WeakWallType[],
  door: DoorType[],
  stair: StairType[],
  monster: MonsterType[],
  NPC: NpcType[],
  article: ArticleType[]
}

export type HandleWall = (wall: WallType) => void
export type HandleWeakWall = (weakWall:WeakWallType) => void
export type HandleDoor = (door: DoorType) => void
export type HandleStair = (stair: StairType) => void
export type HandleMonster = (monster: MonsterType) => void
export type HandleNPC = (NPC: NpcType) => void
export type HandleArticle = (article: ArticleType) => void
export type GetObstacleMap = (floorState: IRootState['floors'][1]) => ObstacleMap
export type GetObstacleHandlers = () => ObstacleHandlers
export type ValidatePosition = (
    position: SinglePosition,
    obstaclesMap: ObstacleMap
  ) => ValidatePositionResult
export type HasObstacle = (position: SinglePosition, obstacles: Obstacle[]) => ObstacleJudgement
export type HandleMove = (
    position: SinglePosition,
    floorState: IRootState['floors'][1],
    updateWarrior: IRootDispatch['warrior']['update']
  ) =>  void
export type MoveTo = (position: SinglePosition, updateWarrior: IRootDispatch['warrior']['update']) => void

export interface ObstacleHandlers {
  wall: HandleWall,
  weakWall: HandleWeakWall,
  door: HandleDoor,
  stair: HandleStair,
  monster: HandleMonster,
  NPC: HandleNPC,
  article: HandleArticle
}

export type ValidatePositionResult = [boolean] | [false, Obstacle, string]
export type ObstacleJudgement = [false] | [true, Obstacle]