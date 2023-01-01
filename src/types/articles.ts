/*
 * @Author: loveyy520 201357337@qq.com
 * @Date: 2022-12-31 11:01:50
 * @LastEditors: loveyy520 201357337@qq.com
 * @LastEditTime: 2023-01-01 17:06:37
 * @FilePath: \magic-tower\src\types\articles.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { MonsterType } from "@/types"

type EachMonster = ''
interface Property {
  life: number,
  atk: number,
  def: number,
  gold: number
}

export type EachArticle = 'wall' | 'weakWall' | 'door' | 'stair' | 'monster' | 'NPC' | 'article'

export interface ArticleType {
  id: string,
  name: string,
  type: EachArticle,
  positions: Position[],
  doorType?: 'yellow' | 'blue' | 'red' | 'steel' | 'magic',
  nextStair?: number,
  monsterType?: EachMonster,
  property?: Property,
  npcType?: 'sage' | 'thief' | 'businessman' | 'princess',
  articleType?: 'power' | 'consumable' | 'permanent',
}

export type Position = [number, number]

export interface WallType extends ArticleType {
  id: string,
  name: 'wall' | 'weak-wall',
  type: 'wall' | 'weakWall'
  positions: Position[]
}

export interface WeakWallType extends WallType {
  name: 'weak-wall'
}

export interface DoorType extends ArticleType {

}

export interface StairType extends ArticleType {
}

export interface NpcType extends ArticleType {
}

export type Obstacle = WallType | WeakWallType | NpcType | MonsterType