/*
 * @Author: loveyy520 201357337@qq.com
 * @Date: 2023-01-01 17:14:10
 * @LastEditors: loveyy520 201357337@qq.com
 * @LastEditTime: 2023-01-01 23:05:08
 * @FilePath: \magic-tower\src\types\floors.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { WallType, WeakWallType, DoorType, StairType, MonsterType, ArticleType, NpcType, MagicStore } from './index';

export interface FloorState {
  walls: WallType[];
  weakWalls: WeakWallType[];
  doors: DoorType[];
  stairs: StairType[];
  monsters: MonsterType[];
  articles: ArticleType[];
  npcs: NpcType[];
  magicStore?: MagicStore;
}

export interface Goods {
  name: string;
  displayName: string;
  type: 'properties' | 'keys' | 'treasures';
  subType: string;
  count: number;
  cost?: number;
  bgColor?: string;
}

export interface DialogContent {
  conversations: string[];
  selections?: Goods[];
}
