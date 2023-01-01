/*
 * @Author: loveyy520 201357337@qq.com
 * @Date: 2023-01-01 17:14:10
 * @LastEditors: loveyy520 201357337@qq.com
 * @LastEditTime: 2023-01-01 20:06:46
 * @FilePath: \magic-tower\src\types\floors.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { 
    WallType,
    WeakWallType,
    DoorType,
    StairType,
    MonsterType,
    ArticleType,
    NpcType
  } from './index';

interface FloorState {
  walls: WallType[],
  weakWalls: WeakWallType[],
  doors: DoorType[],
  stairs: StairType[],
  monsters: MonsterType[],
  articles: ArticleType[],
  npc: NpcType[]
}

interface PartialFloorState {
  walls?: WallType[],
  weakWalls?: WeakWallType[],
  doors?: DoorType[],
  stairs?: StairType[],
  monsters?: MonsterType[],
  articles?: ArticleType[],
  npc?: NpcType[]
}

export interface FloorsState {
  [index: number]: FloorState
}

export interface PartialFloorsState {
  [index: number]: PartialFloorState
}