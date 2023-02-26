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
  floorNumber: 3,
  walls: [
    {
      id: 'wall-3-1',
      name: 'wall',
      type: 'wall',
      positions: [
        [1, 2],
        [2, 2],
        [2, 6],
        [2, 8],
        [3, 2],
        [3, 3],
        [3, 4],
        [3, 5],
        [3, 6],
        [3, 8],
        [3, 9],
        [3, 10],
        [3, 11],
        [4, 2],
        [4, 5],
        [4, 8],
        [6, 2],
        [6, 5],
        [6, 8],
        [7, 1],
        [7, 2],
        [7, 3],
        [7, 4],
        [7, 5],
        [7, 6],
        [7, 8],
        [7, 9],
        [7, 10],
        [7, 11],
        [9, 2],
        [9, 3],
        [9, 5],
        [9, 6],
        [9, 8],
        [9, 9],
        [9, 11],
        [10, 3],
        [10, 6],
        [10, 9],
        [11, 3],
        [11, 6],
        [11, 9],
      ],
    },
  ],
  weakWalls: [],
  doors: [
    {
      id: 'door-3-1',
      name: 'yellow-door',
      type: 'door',
      positions: [
        [1, 6],
        [1, 8],
        [9, 1],
        [9, 4],
        [9, 10],
      ],
      doorType: 'yellow',
    },
  ],
  stairs: [
    {
      id: 'stair-3-1',
      name: 'stair-down',
      type: 'stair',
      positions: [[1, 1]],
      nextFloor: 2,
      nextStairPosition: [1, 2],
    },
    {
      id: 'stair-3-2',
      name: 'stair-up',
      type: 'stair',
      positions: [[11, 1]],
      nextFloor: 4,
      nextStairPosition: [11, 2],
    },
  ],
  monsters: [
    {
      id: 'monster-3-1',
      name: 'green-slime',
      type: 'monster',
      positions: [[7, 7]],
    },
    {
      id: 'monster-3-2',
      name: 'red-slime',
      type: 'monster',
      positions: [[8, 2]],
    },
    {
      id: 'monster-1-3',
      name: 'little-bat',
      type: 'monster',
      positions: [
        [3, 7],
        [10, 10],
      ],
    },
    {
      id: 'monster-1-4',
      name: 'junior-wizard',
      type: 'monster',
      positions: [
        [1, 9],
        [10, 4],
      ],
    },
    {
      id: 'monster-1-5',
      name: 'skeleton-man',
      type: 'monster',
      positions: [[1, 5]],
    },
  ],
  articles: [
    {
      id: 'article-3-1',
      name: 'yellow-key',
      type: 'key',
      positions: [
        [1, 11],
        [2, 4],
        [4, 9],
        [4, 11],
        [5, 10],
        [6, 9],
        [6, 11],
        [11, 4],
      ],
      displayName: '黄钥匙',
    },
    {
      id: 'article-3-2',
      name: 'blue-key',
      type: 'key',
      positions: [[5, 9]],
      displayName: '蓝钥匙',
    },
    {
      id: 'article-3-3',
      name: 'blue-potion',
      type: 'potion',
      positions: [
        [4, 10],
        [5, 11],
        [6, 10],
      ],
    },
    {
      id: 'article-3-4',
      name: 'red-potion',
      type: 'potion',
      positions: [
        [1, 3],
        [2, 10],
        [11, 11],
        [11, 5],
      ],
    },
    {
      id: 'article-3-5',
      name: 'ruby',
      type: 'gem',
      positions: [[2, 3]],
    },
    {
      id: 'article-3-6',
      name: 'sapphire',
      type: 'gem',
      positions: [[2, 11]],
    },
  ],
  npcs: [
    {
      id: 'npc-3-1',
      name: 'sage',
      type: 'npc',
      npcType: 'sage',
      positions: [[11, 8]],
    },
  ],
  accidentPositions: [[5, 3]],
};

export const floor3 = {
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
