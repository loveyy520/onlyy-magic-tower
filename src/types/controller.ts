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
  Position,
  FloorState,
  Properties,
  Property,
  WarriorState
} from "./index"

export type UpdateWarrior = IRootDispatch['warrior']['update']
export type UpdateFloors = IRootDispatch['floors']['update']

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
    updateWarrior: UpdateWarrior,
    updateFloors: UpdateFloors,
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
    updateFloors: UpdateFloors,
    updateWarrior: UpdateWarrior
  ) =>  void
export type MoveTo = (position: Position, updateWarrior: UpdateWarrior) => void

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

export interface FightingParams {
  round: number,
  injury: number,
  gold: number,
  enemyName: string,
  warriorProperty: Properties,
  updateWarrior: UpdateWarrior
}

export type SetMessage = (msg: string, updateWarrior: UpdateWarrior) => void

export type Fight = (params: FightingParams) => Promise<void>

export type GainArticle = (article: ArticleType, warriorState: WarriorState, updateWarrior: UpdateWarrior) => void
export type RemoveArticle = (article: ArticleType, floor: number, floorState: FloorState, updateFloors: UpdateFloors) => void
export type EnhanceAbility = (ariticleName: string, warriorState: WarriorState, updateWarrior: UpdateWarrior) => void