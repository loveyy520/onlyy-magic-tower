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
  floorNumber: 7,
  walls: [
    {
      id: 'wall-7-1',
      name: 'wall',
      type: 'wall',
      positions: [
        [2, 2],
        [2, 3],
        [2, 4],
        [2, 5],
        [2, 7],
        [2, 8],
        [2, 9],
        [2, 10],
        [2, 11],
        [4, 1],
        [4, 2],
        [4, 3],
        [4, 4],
        [4, 5],
        [4, 7],
        [4, 8],
        [4, 9],
        [4, 10],
        [4, 11],
        [6, 1],
        [6, 2],
        [6, 3],
        [6, 4],
        [6, 5],
        [6, 7],
        [6, 8],
        [6, 9],
        [8, 1],
        [8, 2],
        [8, 3],
        [8, 4],
        [8, 5],
        [8, 7],
        [8, 8],
        [8, 9],
        [8, 10],
        [8, 11],
        [10, 1],
        [10, 2],
        [10, 3],
        [10, 4],
        [10, 5],
        [10, 7],
        [10, 8],
        [10, 9],
        [10, 10],
        [10, 11],
      ],
    },
  ],
  weakWalls: [],
  doors: [
    {
      id: 'door-7-1',
      name: 'yellow-door',
      type: 'door',
      positions: [
        [1, 5],
        [1, 7],
        [3, 5],
        [3, 7],
        [5, 5],
        [7, 5],
        [7, 7],
        [11, 5],
        [11, 7],
      ],
      doorType: 'yellow',
    },
    {
      id: 'door-7-2',
      name: 'blue-door',
      type: 'door',
      positions: [[5, 7]],
      doorType: 'blue',
    },
  ],
  stairs: [
    {
      id: 'stair-7-1',
      name: 'stair-down',
      type: 'stair',
      positions: [[11, 1]],
      nextFloor: 6,
      nextStairPosition: [11, 2],
    },
    {
      id: 'stair-7-2',
      name: 'stair-up',
      type: 'stair',
      positions: [[1, 11]],
      nextFloor: 8,
      nextStairPosition: [1, 10],
    },
  ],
  monsters: [
    {
      id: 'monster-7-1',
      name: 'green-slime',
      type: 'monster',
      positions: [
        [1, 2],
        [3, 2],
        [11, 9],
        [11, 11],
      ],
    },
    {
      id: 'monster-7-2',
      name: 'red-slime',
      type: 'monster',
      positions: [
        [2, 1],
        [5, 9],
        [7, 3],
        [11, 10],
      ],
    },
    {
      id: 'monster-7-3',
      name: 'little-bat',
      type: 'monster',
      positions: [
        [3, 9],
        [5, 3],
      ],
    },
    {
      id: 'monster-7-4',
      name: 'junior-wizard',
      type: 'monster',
      positions: [
        [4, 6],
        [7, 2],
      ],
    },
    {
      id: 'monster-7-5',
      name: 'skeleton-man',
      type: 'monster',
      positions: [[9, 7]],
    },
    {
      id: 'monster-7-6',
      name: 'skeleton-soldier',
      type: 'monster',
      positions: [
        [2, 6],
        [7, 9],
        [9, 5],
      ],
    },
  ],
  articles: [
    {
      id: 'article-7-1',
      name: 'yellow-key',
      type: 'key',
      positions: [
        [5, 1],
        [5, 2],
        [9, 1],
        [9, 2],
        [9, 10],
        [9, 11],
      ],
      displayName: '黄钥匙',
    },
    {
      id: 'article-7-2',
      name: 'red-potion',
      type: 'potion',
      positions: [
        [3, 10],
        [9, 9],
      ],
    },
    {
      id: 'article-7-3',
      name: 'blue-potion',
      type: 'potion',
      positions: [
        [7, 1],
        [9, 3],
      ],
    },
    {
      id: 'article-7-4',
      name: 'ruby',
      type: 'gem',
      positions: [[3, 11]],
    },
  ],
  npcs: [
    {
      id: 'npc-7-1',
      name: 'businessman',
      type: 'npc',
      npcType: 'businessman',
      positions: [[6, 11]],
    },
  ],
};

export const floor7 = {
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
