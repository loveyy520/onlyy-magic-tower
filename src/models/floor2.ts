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
      id: 'wall-2-1',
      name: 'wall',
      type: 'wall',
      positions: [
        [2, 1],
        [2, 2],
        [2, 3],
        [2, 4],
        [2, 5],
        [2, 6],
        [2, 7],
        [2, 8],
        [2, 9],
        [3, 3],
        [3, 6],
        [3, 9],
        [3, 10],
        [4, 3],
        [4, 6],
        [4, 9],
        [4, 10],
        [5, 2],
        [5, 3],
        [5, 5],
        [5, 6],
        [5, 8],
        [5, 9],
        [6, 9],
        [8, 9],
        [9, 3],
        [9, 5],
        [9, 10],
        [9, 2],
        [9, 3],
        [9, 5],
        [9, 6],
        [9, 8],
        [9, 9],
        [10, 3],
        [10, 6],
        [10, 9],
        [10, 10],
        [11, 3],
        [11, 6],
        [11, 9],
        [11, 10],
      ],
    },
  ],
  weakWalls: [],
  doors: [
    {
      id: 'door-2-1',
      name: 'blue-door',
      type: 'door',
      positions: [[3, 11]],
      doorType: 'blue',
    },
    {
      id: 'door-2-2',
      name: 'iron-gate',
      type: 'door',
      positions: [
        [5, 1],
        [5, 4],
        [5, 7],
        [9, 1],
        [9, 4],
        [9, 7],
      ],
      doorType: 'iron',
    },
  ],
  stairs: [
    {
      id: 'stair-2-1',
      name: 'stair-down',
      type: 'stair',
      positions: [[1, 11]],
      nextFloor: 1,
      nextStairPosition: [2, 11],
    },
    {
      id: 'stair-2-2',
      name: 'stair-up',
      type: 'stair',
      positions: [[1, 1]],
      nextFloor: 3,
      nextStairPosition: [2, 1],
    },
  ],
  monsters: [
    {
      id: 'monster-2-1',
      name: 'intermediate-guard',
      type: 'monster',
      positions: [
        [6, 10],
        [8, 10],
      ],
    },
  ],
  articles: [
    {
      id: 'article-2-1',
      name: 'yellow-key',
      type: 'key',
      positions: [
        [3, 7],
        [3, 8],
        [4, 8],
      ],
      displayName: '黄钥匙',
    },
    {
      id: 'article-2-2',
      name: 'blue-potion',
      type: 'potion',
      positions: [
        [3, 1],
        [3, 2],
        [4, 2],
      ],
    },
  ],
  npcs: [
    {
      id: 'npc-2-1',
      name: 'thief',
      type: 'npc',
      npcType: 'thief',
      positions: [[3, 5]],
      npcOwns: [
        {
          type: 'removal',
          once: false,
          articles: [
            {
              type: 'wall',
              positions: [[2, 5]],
            },
          ],
        },
      ],
      dialogContent: {
        conversations: [
          '你清醒了吗？你到监狱时还处于昏迷中，魔法警卫把你扔到我这个房间。',
          '但你很幸运，我刚完成逃跑的暗道，我们一起越狱吧。',
          '你的剑和盾被警卫拿走了，你必须先找到武器，我知道铁剑在 5 楼，铁盾在 9 楼，你最好先取到它们。',
          '我现在有事要做没法帮你，再见。',
        ],
      },
      articleType: 'consumable',
    },
    {
      id: 'npc-2-2',
      name: 'businessman',
      type: 'npc',
      npcType: 'businessman',
      positions: [[11, 5]],
      npcOwns: [],
      dialogContent: {
        conversations: [],
      },
      articleType: 'consumable',
    },
    {
      id: 'npc-2-3',
      name: 'sage',
      type: 'npc',
      npcType: 'sage',
      positions: [[11, 8]],
      npcOwns: [],
      dialogContent: {
        conversations: [],
      },
      articleType: 'consumable',
    },
  ],
};

export const floor2 = {
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
