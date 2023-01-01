/*
* @Author: loveyy520 201357337@qq.com
* @Date: 2022-12-31 10:39:19
 * @LastEditors: loveyy520 201357337@qq.com
 * @LastEditTime: 2023-01-01 21:44:51
* @FilePath: \magic-tower\src\types\warrior.ts
* @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
*/

import { Position } from '@/types';
export interface Properties {
  name: string,
  life: number,
  attack: number,
  defense: number,
  gold: number
}

export interface Keys {
  yellow: number,
  blue: number,
  red: number
}

export interface Treasure {
  id: string,
  name: string,
  count: number,
  consumable: boolean
}

export interface WarriorState {
  properties: Properties,
  floor: number,
  msg: string,
  position: Position,
  sword: string,
  shield: string,
  keys: Keys,
  treasure: Treasure[]
}