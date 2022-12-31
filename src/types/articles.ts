import { MonsterType } from "@/types"

export interface ArticleType {

}

export type Position = [number, number] | [number, number[]] // 单个点或多个点： [x, y] | [x, [y1, y2, ...]]

export interface WallType {
  id: string,
  position: Position
}

export interface WeakWallType extends WallType {

}

export interface NpcType {
  position: Position
}

export interface Keys {
  yellow: number,
  blue: number,
  red: number
}

export type Obstacle = WallType | WeakWallType | NpcType | MonsterType