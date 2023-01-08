import { IRootDispatch, IRootState } from '@/store';
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
  WarriorState,
} from './index';

export type UpdateWarrior = IRootDispatch['warrior']['update'];
export type UpdateFloors<i extends number> = IRootDispatch[`floors${i}`]['update'];
export type RaxSetState<T> = Rax.Dispatch<Rax.SetStateAction<T>>;

export interface ObstacleMap {
  wall: WallType[];
  weakWall: WeakWallType[];
  door: DoorType[];
  stair: StairType[];
  monster: MonsterType[];
  NPC: NpcType[];
  article: ArticleType[];
}

export type HandleArticle = (article: ArticleType, floorState: FloorState, warriorState: IRootState['warrior']) => void;
export type GetObstacleMap = (floorState: FloorState) => ObstacleMap;
export type GetObstacleHandlers = () => ObstacleHandlers;
export type ValidatePosition = (position: Position, obstaclesMap: ObstacleMap) => ValidatePositionResult;
export type HasObstacle = (position: Position, obstacles: Obstacle[]) => ObstacleJudgement;
export type HandleMove = (
  position: Position,
  floorState: FloorState,
  warriorState: IRootState['warrior'],
  updateFloors: UpdateFloors<number>,
  updateWarrior: UpdateWarrior,
  setNpc: RaxSetState<NpcType | undefined>,
) => void;
export type MoveTo = (position: Position) => void;

export interface ObstacleHandlers {
  wall: HandleArticle;
  weakWall: HandleArticle;
  door: HandleArticle;
  stair: HandleArticle;
  monster: HandleArticle;
  NPC: HandleArticle;
  article: HandleArticle;
}

export type ValidatePositionResult = [boolean] | [false, Obstacle, string];
export type ObstacleJudgement = [false] | [true, Obstacle];

export interface FightingParams {
  round: number;
  injury: number;
  gold: number;
  enemyName: string;
  warriorProperty: Properties;
}

export type SetMessage = (msg: string, updateMsg?: UpdateWarrior) => void;

export type Fight = (params: FightingParams) => Promise<void>;

export type GainArticle = (article: ArticleType, warriorState: WarriorState) => void;
export type RemoveArticle = (article: ArticleType, floorState: FloorState) => void;
export type EnhanceAbility = (articleName: string, warriorState: WarriorState) => void;
