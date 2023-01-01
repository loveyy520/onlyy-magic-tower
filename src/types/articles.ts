/*
 * @Author: loveyy520 201357337@qq.com
 * @Date: 2022-12-31 11:01:50
 * @LastEditors: loveyy520 201357337@qq.com
 * @LastEditTime: 2023-01-01 12:56:12
 * @FilePath: \magic-tower\src\types\articles.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { MonsterType } from "@/types"

export interface ArticleType {

}

export type SinglePosition = [number, number]

export type Position = SinglePosition | [number, number[]] // 单个点或多个点： [x, y] | [x, [y1, y2, ...]]

export interface WallType {
  id: string,
  position: Position
}

export interface WeakWallType extends WallType {

}

export interface DoorType {
  position: Position
}

export interface StairType {
  position: Position
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