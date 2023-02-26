/*
 * @Author: loveyy520 201357337@qq.com
 * @Date: 2022-12-31 10:12:55
 * @LastEditors: loveyy520 201357337@qq.com
 * @LastEditTime: 2023-01-02 20:21:53
 * @FilePath: \magic-tower\src\models\floors.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { FloorState } from '@/pages/Tower/types';

const delay = (time: number) => new Promise<void>((resolve) => setTimeout(() => resolve(), time));

const state: FloorState = {
  floorNumber: 4,
  walls: [
    {
      id: 'wall-4-1',
      name: 'wall',
      type: 'wall',
      positions: [
        [1, 8],
        [2, 1],
        [2, 2],
        [2, 3],
        [2, 4],
        [3, 4],
        [3, 8],
        [4, 6],
        [4, 8],
        [4, 9],
        [4, 10],
        [4, 11],
        [5, 4],
        [5, 6],
        [5, 8],
        [6, 2],
        [6, 1],
        [6, 3],
        [6, 4],
        [6, 6],
        [7, 4],
        [7, 6],
        [7, 8],
        [8, 6],
        [8, 8],
        [8, 9],
        [8, 10],
        [8, 11],
        [9, 4],
        [9, 6],
        [9, 8],
        [10, 1],
        [10, 2],
        [10, 3],
        [10, 4],
        [10, 6],
        [11, 6],
        [11, 8],
      ],
    },
  ],
  weakWalls: [],
  doors: [
    {
      id: 'door-4-1',
      name: 'yellow-door',
      type: 'door',
      positions: [
        [1, 4],
        [2, 8],
        [4, 4],
        [4, 7],
        [8, 4],
        [10, 8],
        [11, 4],
      ],
      doorType: 'yellow',
    },
    {
      id: 'door-4-2',
      name: 'blue-door',
      type: 'door',
      positions: [[6, 8]],
      doorType: 'blue',
    },
  ],
  stairs: [
    {
      id: 'stair-4-1',
      name: 'stair-down',
      type: 'stair',
      positions: [[11, 1]],
      nextFloor: 3,
      nextStairPosition: [10, 1],
    },
    {
      id: 'stair-4-2',
      name: 'stair-up',
      type: 'stair',
      positions: [[1, 1]],
      nextFloor: 5,
      nextStairPosition: [2, 1],
    },
  ],
  monsters: [
    {
      id: 'monster-4-1',
      name: 'green-slime',
      type: 'monster',
      positions: [
        [3, 2],
        [3, 5],
        [4, 1],
        [8, 1],
      ],
    },
    {
      id: 'monster-4-2',
      name: 'red-slime',
      type: 'monster',
      positions: [
        [1, 5],
        [6, 7],
      ],
    },
    {
      id: 'monster-4-3',
      name: 'little-bat',
      type: 'monster',
      positions: [[4, 3]],
    },
    {
      id: 'monster-4-4',
      name: 'junior-wizard',
      type: 'monster',
      positions: [
        [2, 7],
        [8, 3],
      ],
    },
    {
      id: 'monster-4-5',
      name: 'skeleton-man',
      type: 'monster',
      positions: [[9, 7]],
    },
    {
      id: 'monster-4-6',
      name: 'skeleton-soldier',
      type: 'monster',
      positions: [[10, 9]],
    },
  ],
  articles: [
    {
      id: 'article-4-1',
      name: 'yellow-key',
      type: 'key',
      positions: [
        [3, 1],
        [3, 10],
        [5, 1],
        [5, 2],
        [9, 10],
      ],
      displayName: '黄钥匙',
    },
    {
      id: 'article-4-2',
      name: 'blue-key',
      type: 'key',
      positions: [[2, 11]],
      displayName: '蓝钥匙',
    },
    {
      id: 'article-4-3',
      name: 'blue-potion',
      type: 'potion',
      positions: [[11, 10]],
    },
    {
      id: 'article-4-4',
      name: 'red-potion',
      type: 'potion',
      positions: [
        [1, 10],
        [9, 2],
      ],
    },
    {
      id: 'article-4-5',
      name: 'ruby',
      type: 'gem',
      positions: [[7, 2]],
    },
  ],
  npcs: [
    {
      id: 'npc-4-1',
      name: 'sage',
      type: 'npc',
      npcType: 'sage',
      positions: [[10, 11]],
    },
  ],
  magicStore: {
    id: 'magic-store',
    positions: [
      [5, 11],
      [6, 11],
      [7, 11],
    ],
    selections: [
      {
        name: 'attack',
        displayName: '攻击力',
        type: 'properties',
        subType: 'attack',
        count: 2,
      },
      {
        name: 'defense',
        displayName: '防御力',
        type: 'properties',
        subType: 'defense',
        count: 4,
      },
      {
        name: 'life',
        displayName: '生命值',
        type: 'properties',
        subType: 'life',
        count: 200,
      },
    ],
  },
};

export const floor4 = {
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
