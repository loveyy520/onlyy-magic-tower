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
  floorNumber: 9,
  walls: [
    {
      id: 'wall-9-1',
      name: 'wall',
      type: 'wall',
      positions: [
        [1, 6],
        [2, 3],
        [2, 6],
        [2, 9],
        [3, 2],
        [3, 3],
        [3, 4],
        [3, 6],
        [3, 9],
        [4, 3],
        [4, 6],
        [4, 8],
        [4, 9],
        [4, 10],
        [5, 6],
        [5, 9],
        [6, 4],
        [6, 2],
        [6, 3],
        [6, 5],
        [6, 6],
        [7, 9],
        [8, 3],
        [8, 2],
        [8, 4],
        [8, 5],
        [8, 6],
        [8, 7],
        [8, 9],
        [8, 10],
        [9, 4],
        [9, 7],
        [9, 9],
        [10, 4],
        [10, 5],
        [10, 7],
        [10, 9],
        [11, 7],
      ],
    },
  ],
  weakWalls: [],
  doors: [
    {
      id: 'door-9-1',
      name: 'yellow-door',
      type: 'door',
      positions: [
        [1, 3],
        [3, 5],
        [4, 7],
        [4, 11],
        [5, 3],
        [6, 1],
        [8, 1],
        [8, 8],
        [8, 11],
        [9, 8],
        [11, 4],
      ],
      doorType: 'yellow',
    },
    {
      id: 'door-9-2',
      name: 'blue-door',
      type: 'door',
      positions: [
        [3, 1],
        [6, 9],
      ],
      doorType: 'blue',
    },
  ],
  stairs: [
    {
      id: 'stair-9-1',
      name: 'stair-down',
      type: 'stair',
      positions: [[6, 11]],
      nextFloor: 8,
      nextStairPosition: [6, 10],
    },
    {
      id: 'stair-9-2',
      name: 'stair-up',
      type: 'stair',
      positions: [[1, 1]],
      nextFloor: 10,
      nextStairPosition: [1, 2],
    },
  ],
  monsters: [
    {
      id: 'monster-9-1',
      name: 'green-slime',
      type: 'monster',
      positions: [
        [9, 11],
        [10, 10],
      ],
    },
    {
      id: 'monster-9-2',
      name: 'red-slime',
      type: 'monster',
      positions: [[7, 6]],
    },
    {
      id: 'monster-9-3',
      name: 'little-bat',
      type: 'monster',
      positions: [
        [3, 7],
        [7, 2],
      ],
    },
    {
      id: 'monster-9-4',
      name: 'junior-wizard',
      type: 'monster',
      positions: [
        [9, 1],
        [11, 3],
      ],
    },
    {
      id: 'monster-9-5',
      name: 'skeleton-man',
      type: 'monster',
      positions: [
        [3, 11],
        [5, 2],
        [10, 2],
      ],
    },
    {
      id: 'monster-9-6',
      name: 'skeleton-soldier',
      type: 'monster',
      positions: [
        [1, 4],
        [1, 9],
        [4, 5],
        [11, 6],
      ],
    },
  ],
  articles: [
    {
      id: 'article-9-1',
      name: 'yellow-key',
      type: 'key',
      positions: [
        [1, 5],
        [2, 8],
        [2, 10],
        [5, 5],
        [5, 8],
        [7, 8],
        [9, 3],
      ],
      displayName: '黄钥匙',
    },
    {
      id: 'article-9-2',
      name: 'red-potion',
      type: 'potion',
      positions: [
        [2, 2],
        [11, 1],
        [11, 11],
      ],
    },
    {
      id: 'article-9-3',
      name: 'ruby',
      type: 'gem',
      positions: [[6, 7]],
    },
    {
      id: 'article-9-4',
      name: 'sapphire',
      type: 'gem',
      positions: [[1, 7]],
    },
    {
      id: 'article-9-5',
      name: 'iron-shield',
      type: 'equipment',
      positions: [[9, 5]],
    },
  ],
  npcs: [],
};

export const floor9 = {
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
