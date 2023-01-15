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
  floorNumber: 8,
  walls: [
    {
      id: 'wall-8-1',
      name: 'wall',
      type: 'wall',
      positions: [
        [1, 5],
        [2, 3],
        [2, 5],
        [2, 7],
        [2, 8],
        [2, 9],
        [3, 2],
        [3, 3],
        [3, 5],
        [3, 7],
        [3, 9],
        [3, 10],
        [4, 3],
        [4, 5],
        [4, 7],
        [4, 9],
        [4, 10],
        [5, 3],
        [5, 7],
        [5, 9],
        [6, 1],
        [6, 2],
        [6, 3],
        [6, 5],
        [6, 6],
        [6, 7],
        [7, 3],
        [7, 9],
        [8, 3],
        [8, 5],
        [8, 6],
        [8, 7],
        [8, 8],
        [8, 9],
        [8, 10],
        [8, 11],
        [9, 2],
        [9, 3],
        [9, 5],
        [9, 8],
        [10, 3],
        [11, 5],
        [11, 8],
      ],
    },
  ],
  weakWalls: [],
  doors: [
    {
      id: 'door-8-1',
      name: 'yellow-door',
      type: 'door',
      positions: [
        [1, 3],
        [1, 9],
        [3, 11],
        [4, 11],
        [5, 5],
        [6, 9],
        [9, 1],
        [10, 5],
        [11, 3],
      ],
      doorType: 'yellow',
    },
    {
      id: 'door-8-2',
      name: 'blue-door',
      type: 'door',
      positions: [[3, 1]],
      doorType: 'blue',
    },
    {
      id: 'door-8-3',
      name: 'magic-gate',
      type: 'door',
      positions: [[10, 8]],
      doorType: 'magic',
    },
  ],
  stairs: [
    {
      id: 'stair-8-1',
      name: 'stair-down',
      type: 'stair',
      positions: [[1, 11]],
      nextFloor: 7,
      nextStairPosition: [1, 10],
    },
    {
      id: 'stair-8-2',
      name: 'stair-up',
      type: 'stair',
      positions: [[6, 11]],
      nextFloor: 9,
      nextStairPosition: [6, 10],
    },
  ],
  monsters: [
    {
      id: 'monster-8-1',
      name: 'green-slime',
      type: 'monster',
      positions: [
        [1, 2],
        [3, 6],
        [7, 10],
      ],
    },
    {
      id: 'monster-8-2',
      name: 'red-slime',
      type: 'monster',
      positions: [
        [2, 6],
        [4, 6],
      ],
    },
    {
      id: 'monster-8-3',
      name: 'little-bat',
      type: 'monster',
      positions: [
        [2, 1],
        [4, 4],
        [7, 5],
      ],
    },
    {
      id: 'monster-8-4',
      name: 'junior-wizard',
      type: 'monster',
      positions: [
        [8, 4],
        [7, 7],
      ],
    },
    {
      id: 'monster-8-5',
      name: 'skeleton-man',
      type: 'monster',
      positions: [
        [6, 4],
        [11, 2],
      ],
    },
    {
      id: 'monster-8-6',
      name: 'skeleton-soldier',
      type: 'monster',
      positions: [[10, 1]],
    },
    {
      id: 'monster-8-7',
      name: 'junior-guard',
      type: 'monster',
      positions: [
        [9, 7],
        [11, 7],
      ],
    },
  ],
  articles: [
    {
      id: 'article-8-1',
      name: 'yellow-key',
      type: 'key',
      positions: [
        [3, 8],
        [4, 1],
        [4, 8],
        [5, 2],
        [5, 8],
        [7, 1],
        [9, 11],
        [11, 11],
      ],
      displayName: '黄钥匙',
    },
    {
      id: 'article-8-2',
      name: 'blue-key',
      type: 'key',
      positions: [[7, 2]],
      displayName: '蓝钥匙',
    },
    {
      id: 'article-8-3',
      name: 'red-key',
      type: 'key',
      positions: [[10, 10]],
      displayName: '红钥匙',
    },
    {
      id: 'article-8-4',
      name: 'red-potion',
      type: 'potion',
      positions: [
        [1, 7],
        [8, 2],
        [11, 9],
      ],
    },
    {
      id: 'article-8-5',
      name: 'blue-potion',
      type: 'potion',
      positions: [[9, 9]],
    },
    {
      id: 'article-8-6',
      name: 'ruby',
      type: 'gem',
      positions: [[4, 2]],
    },
    {
      id: 'article-8-7',
      name: 'sapphire',
      type: 'gem',
      positions: [[5, 1]],
    },
  ],
  npcs: [],
  accidentPositions: [[9, 7], [11, 7]]
};

export const floor8 = {
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
