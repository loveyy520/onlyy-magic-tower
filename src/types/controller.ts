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
  Position
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

export type HandleArticle = (
    updateWarrior: IRootDispatch['warrior']['update'],
    updateFloors: IRootDispatch['floors']['update'],
    article: ArticleType,
    floorState: IRootState['floors'][1],
    warriorState: IRootState['warrior']
  ) => void
export type GetObstacleMap = (floorState: IRootState['floors'][1]) => ObstacleMap
export type GetObstacleHandlers = () => ObstacleHandlers
export type ValidatePosition = (
    position: Position,
    obstaclesMap: ObstacleMap
  ) => ValidatePositionResult
export type HasObstacle = (position: Position, obstacles: Obstacle[]) => ObstacleJudgement
export type HandleMove = (
    position: Position,
    floorState: IRootState['floors'][1],
    warriorState: IRootState['warrior'],
    updateFloors: IRootDispatch['floors']['update'],
    updateWarrior: IRootDispatch['warrior']['update']
  ) =>  void
export type MoveTo = (position: Position, updateWarrior: IRootDispatch['warrior']['update']) => void

export interface ObstacleHandlers {
  wall: HandleArticle,
  weakWall: HandleArticle,
  door: HandleArticle,
  stair: HandleArticle,
  monster: HandleArticle,
  NPC: HandleArticle,
  article: HandleArticle
}

export type ValidatePositionResult = [boolean] | [false, Obstacle, string]
export type ObstacleJudgement = [false] | [true, Obstacle]