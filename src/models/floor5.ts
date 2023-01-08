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
      id: 'wall-5-1',
      name: 'wall',
      type: 'wall',
      positions: [
        [1, 2],
        [1, 5],
        [1, 8],
        [2, 2],
        [2, 8],
        [2, 10],
        [2, 11],
        [3, 2],
        [3, 5],
        [3, 8],
        [4, 2],
        [4, 5],
        [5, 2],
        [5, 3],
        [5, 4],
        [5, 5],
        [5, 6],
        [5, 7],
        [5, 8],
        [5, 9],
        [5, 10],
        [7, 1],
        [7, 2],
        [7, 3],
        [7, 4],
        [7, 5],
        [7, 7],
        [7, 8],
        [7, 9],
        [7, 10],
        [7, 11],
        [8, 5],
        [8, 7],
        [9, 2],
        [9, 3],
        [9, 5],
        [9, 7],
        [10, 3],
        [10, 5],
        [10, 7],
        [10, 8],
        [10, 9],
        [10, 10],
        [11, 3],
      ],
    },
  ],
  weakWalls: [
    {
      id: 'weakWall-5-1',
      name: 'weak-wall',
      type: 'weakWall',
      positions: [[9, 1]],
    },
  ],
  doors: [
    {
      id: 'door-5-1',
      name: 'yellow-door',
      type: 'door',
      positions: [
        [2, 9],
        [4, 8],
        [5, 11],
        [8, 3],
        [10, 11],
      ],
      doorType: 'yellow',
    },
  ],
  stairs: [
    {
      id: 'stair-5-1',
      name: 'stair-down',
      type: 'stair',
      positions: [[1, 1]],
      nextFloor: 4,
      nextStairPosition: [11, 1],
    },
    {
      id: 'stair-5-2',
      name: 'stair-up',
      type: 'stair',
      positions: [[1, 11]],
      nextFloor: 6,
      nextStairPosition: [1, 10],
    },
  ],
  monsters: [
    {
      id: 'monster-5-1',
      name: 'green-slim',
      type: 'monster',
      positions: [
        [6, 4],
        [7, 6],
        [8, 10],
        [9, 10],
      ],
    },
    {
      id: 'monster-5-2',
      name: 'red-slim',
      type: 'monster',
      positions: [
        [4, 11],
        [11, 5],
        [11, 10],
      ],
    },
    {
      id: 'monster-5-3',
      name: 'little-bat',
      type: 'monster',
      positions: [
        [3, 9],
        [4, 6],
        [6, 8],
      ],
    },
    {
      id: 'monster-5-4',
      name: 'junior-wizard',
      type: 'monster',
      positions: [[3, 7]],
    },
    {
      id: 'monster-5-5',
      name: 'skeleton-soldier',
      type: 'monster',
      positions: [[2, 5]],
    },
  ],
  articles: [
    {
      id: 'article-5-1',
      name: 'yellow-key',
      type: 'key',
      positions: [
        [1, 6],
        [1, 7],
        [2, 3],
        [6, 10],
        [8, 8],
        [8, 9],
        [9, 8],
        [9, 9],
      ],
      displayName: '黄钥匙',
    },
    {
      id: 'article-5-2',
      name: 'red-potion',
      type: 'potion',
      positions: [[3, 3]],
    },
    {
      id: 'article-5-3',
      name: 'sapphire',
      type: 'gem',
      positions: [[1, 3]],
    },
    {
      id: 'article-5-4',
      name: 'iron-sword',
      type: 'equipment',
      positions: [[11, 1]],
    },
    {
      id: 'article-5-5',
      name: 'notebook',
      type: 'treasure',
      positions: [[4, 3]],
      displayName: '记事本',
    },
  ],
  npcs: [],
};

export const floor5 = {
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
