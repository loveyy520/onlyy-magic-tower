/*
 * @Author: loveyy520 201357337@qq.com
 * @Date: 2022-12-31 10:12:55
 * @LastEditors: loveyy520 201357337@qq.com
 * @LastEditTime: 2023-01-02 20:21:53
 * @FilePath: \magic-tower\src\models\floors.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { FloorState } from '@/types';

const delay = (time: number) => new Promise<void>((resolve) => setTimeout(() => resolve(), time));

const state: FloorState = {
  walls: [
    {
      id: 'wall-6-1',
      name: 'wall',
      type: 'wall',
      positions: [
        [1, 5],
        [2, 2],
        [2, 5],
        [2, 7],
        [2, 9],
        [2, 10],
        [2, 11],
        [3, 2],
        [3, 5],
        [3, 7],
        [3, 9],
        [4, 2],
        [4, 5],
        [4, 7],
        [5, 2],
        [5, 3],
        [5, 4],
        [5, 5],
        [5, 7],
        [5, 9],
        [5, 10],
        [5, 11],
        [7, 1],
        [7, 2],
        [7, 3],
        [7, 5],
        [7, 7],
        [7, 8],
        [7, 9],
        [7, 10],
        [8, 3],
        [8, 5],
        [8, 7],
        [8, 10],
        [9, 7],
        [9, 5],
        [9, 10],
        [10, 5],
        [10, 1],
        [10, 7],
        [10, 2],
        [10, 3],
        [10, 10],
        [11, 7],
      ],
    },
  ],
  weakWalls: [],
  doors: [
    {
      id: 'door-6-1',
      name: 'yellow-door',
      type: 'door',
      positions: [
        [1, 2],
        [2, 8],
        [3, 8],
        [5, 8],
        [7, 4],
        [8, 4],
        [10, 4],
        [11, 10],
      ],
      doorType: 'yellow',
    },
  ],
  stairs: [
    {
      id: 'stair-6-1',
      name: 'stair-down',
      type: 'stair',
      positions: [[1, 11]],
      nextFloor: 5,
      nextStairPosition: [1, 10],
    },
    {
      id: 'stair-6-2',
      name: 'stair-up',
      type: 'stair',
      positions: [[11, 1]],
      nextFloor: 7,
      nextStairPosition: [11, 2],
    },
  ],
  monsters: [
    {
      id: 'monster-6-1',
      name: 'green-slim',
      type: 'monster',
      positions: [
        [2, 1],
        [10, 11],
      ],
    },
    {
      id: 'monster-6-2',
      name: 'red-slim',
      type: 'monster',
      positions: [
        [3, 6],
        [4, 9],
        [9, 3],
        [11, 3],
      ],
    },
    {
      id: 'monster-6-3',
      name: 'little-bat',
      type: 'monster',
      positions: [
        [2, 3],
        [11, 8],
      ],
    },
    {
      id: 'monster-6-4',
      name: 'junior-wizard',
      type: 'monster',
      positions: [
        [1, 4],
        [4, 6],
        [7, 11],
      ],
    },
    {
      id: 'monster-6-5',
      name: 'skeleton-man',
      type: 'monster',
      positions: [
        [5, 1],
        [8, 6],
        [10, 9],
      ],
    },
    {
      id: 'monster-6-6',
      name: 'skeleton-soldier',
      type: 'monster',
      positions: [[9, 6]],
    },
  ],
  articles: [
    {
      id: 'article-6-1',
      name: 'yellow-key',
      type: 'key',
      positions: [
        [3, 11],
        [3, 10],
        [4, 10],
        [4, 11],
        [6, 6],
        [9, 11],
      ],
      displayName: '黄钥匙',
    },
    {
      id: 'article-6-2',
      name: 'red-potion',
      type: 'potion',
      positions: [
        [8, 1],
        [9, 1],
        [8, 9],
      ],
    },
    {
      id: 'article-6-3',
      name: 'sapphire',
      type: 'gem',
      positions: [[4, 3]],
    },
  ],
  npcs: [
    {
      id: 'npc-6-1',
      name: 'sage',
      type: 'npc',
      npcType: 'sage',
      positions: [[4, 4]],
    },
    {
      id: 'npc-6-2',
      name: 'businessman',
      type: 'npc',
      npcType: 'businessman',
      positions: [[8, 8]],
    },
  ],
};

export const floor6 = {
  // 定义 model 的初始 state
  state,

  // 定义改变该模型状态的纯函数
  reducers: {
    update(prevState: FloorState, payload: Partial<FloorState>) {
      return {
        ...prevState,
        ...payload,
      };
    },
  },

  // 定义处理该模型副作用的函数
  effects: (dispatch) => ({
    async updateUserInfo() {
      await delay(1000);
      dispatch.user.update({
        name: 'taobao',
        id: '123',
      });
    },
  }),
};
