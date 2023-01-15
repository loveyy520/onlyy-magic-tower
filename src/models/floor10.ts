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
  floorNumber: 10,
  walls: [
    {
      id: 'wall-10-1',
      name: 'wall',
      type: 'wall',
      positions: [
        [1, 7],
        [1, 10],
        [2, 1],
        [2, 2],
        [2, 3],
        [2, 7],
        [2, 10],
        [3, 7],
        [3, 10],
        [4, 2],
        [4, 3],
        [4, 4],
        [4, 5],
        [4, 6],
        [4, 7],
        [4, 9],
        [4, 10],
        [5, 3],
        [5, 4],
        [5, 5],
        [5, 6],
        [5, 9],
        [7, 3],
        [7, 4],
        [7, 5],
        [7, 6],
        [7, 9],
        [8, 2],
        [8, 3],
        [8, 4],
        [8, 5],
        [8, 6],
        [8, 7],
        [8, 9],
        [8, 10],
        [9, 7],
        [9, 10],
        [10, 1],
        [10, 2],
        [10, 3],
        [10, 7],
        [10, 10],
        [11, 7],
        [11, 10],
      ],
    },
  ],
  weakWalls: [],
  doors: [
    {
      id: 'door-10-1',
      name: 'yellow-door',
      type: 'door',
      positions: [
        [1, 3],
        [3, 3],
        [9, 3],
        [11, 3],
      ],
      doorType: 'yellow',
    },
    {
      id: 'door-10-2',
      name: 'red-door',
      type: 'door',
      positions: [[6, 3]],
      doorType: 'red',
    },
    {
      id: 'door-10-3',
      name: 'magic-gate',
      type: 'door',
      positions: [
        [4, 8],
        [8, 8],
      ],
      doorType: 'magic',
    },
  ],
  stairs: [
    {
      id: 'stair-10-1',
      name: 'stair-down',
      type: 'stair',
      positions: [[1, 1]],
      nextFloor: 9,
      nextStairPosition: [2, 1],
    },
    // 击败骷髅队长之后出现去11层的门
    // {
    //   id: 'stair-10-2',
    //   name: 'stair-up',
    //   type: 'stair',
    //   positions: [
    //     [1, 1]
    //   ],
    //   nextFloor: 10,
    //   nextStairPosition: [1, 2]
    // }
  ],
  monsters: [
    {
      id: 'monster-10-1',
      name: 'junior-wizard',
      type: 'monster',
      positions: [
        [4, 1],
        [8, 1],
      ],
    },
    {
      id: 'monster-10-2',
      name: 'skeleton-man',
      type: 'monster',
      positions: [
        [1, 6],
        [1, 9],
        [2, 9],
        [3, 6],
        [3, 9],
        [9, 6],
        [9, 9],
        [11, 6],
        [11, 9],
        [10, 9],
      ],
    },
    {
      id: 'monster-10-3',
      name: 'skeleton-soldier',
      type: 'monster',
      positions: [
        [2, 5],
        [2, 8],
        [10, 5],
        [10, 8],
      ],
    },
    {
      id: 'monster-10-4',
      name: 'skeleton-captain',
      type: 'monster',
      positions: [[6, 8]],
    },
  ],
  articles: [
    {
      id: 'article-10-1',
      name: 'yellow-key',
      type: 'key',
      positions: [],
      displayName: '黄钥匙',
    },
    {
      id: 'article-10-2',
      name: 'red-potion',
      type: 'potion',
      positions: [],
    },
    {
      id: 'article-10-3',
      name: 'blue-potion',
      type: 'potion',
      positions: [[11, 1]],
    },
    {
      id: 'article-10-4',
      name: 'ruby',
      type: 'gem',
      positions: [[10, 6]],
    },
    {
      id: 'article-10-5',
      name: 'sapphire',
      type: 'gem',
      positions: [[2, 6]],
    },
  ],
  npcs: [],
  accidentPositions: [
    [6, 4],
    [1, 9], [2, 9], [3, 9],[2, 8],
    [11, 9], [10, 9], [9, 9], [10, 8],
    [6, 11]
  ]
};

export const floor10 = {
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
