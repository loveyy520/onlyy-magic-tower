import { Position } from "./articles";

/*
 * @Author: loveyy520 201357337@qq.com
 * @Date: 2022-12-31 11:03:13
 * @LastEditors: loveyy520 201357337@qq.com
 * @LastEditTime: 2023-01-01 00:48:04
 * @FilePath: \magic-tower\src\types\monsters.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
export interface Biology {
  name: string,
  life: number,
  attack: number,
  defense: number,
  money: number,
  position: Position
}

export interface MonsterType extends Biology {
}