/*
* @Author: loveyy520 201357337@qq.com
* @Date: 2022-12-31 10:12:55
 * @LastEditors: loveyy520 201357337@qq.com
 * @LastEditTime: 2023-01-02 13:09:04
* @FilePath: \magic-tower\src\models\floors.ts
* @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
*/
import { FloorsState } from '@/types';
const delay = (time: number) => new Promise<void>((resolve) => setTimeout(() => resolve(), time));

export const floors = {
  // 定义 model 的初始 state
  state: <FloorsState>{
    1: {
      walls: [
        {
          id: 'wall-1-1',
          name: 'wall',
          type: 'wall',
          positions: [
            [1, 4], [1, 7], [1, 10],
            [2, 10],
            [3, 4], [3, 7], [3, 10],
            [4, 1], [4, 2], [4, 3], [4, 5], [4, 4], [4, 5], [4, 6], [4, 7], [4, 8], [4, 10],
            [5, 3], [5, 10],
            [6, 5], [6, 7], [6, 8], [6, 9], [6, 10],
            [7, 3], [7, 5], [7, 7], [7, 10],
            [8, 1], [8, 2], [8, 3], [8, 5], [8, 7], [8, 10],
            [9, 3], [9, 5], [9, 10],
            [10, 5], [10, 6], [10, 7], [10, 8], [10, 9], [10, 10],
            [11, 3]
          ],
        },
      ],
      weakWalls: [],
      doors: [
        {
          id: 'door-1-1',
          name: 'yellow-door',
          type: 'door',
          positions: [
            [2, 4], [2, 7], [4, 9], [6, 3],
            [6, 6], [9, 7], [10, 3]
          ],
          doorType: 'yellow'
        },
      ],
      stairs: [
        {
          id: 'stair-1-1',
          name: 'stair-up',
          type: 'stair',
          positions: [
            [1, 11]
          ],
          nextFloor: 2,
          nextStairPosition: [1, 10]
        }
      ],
      monsters: [
        {
          id: 'monster-1-1',
          name: 'green-slim',
          type: 'monster',
          positions: [
            [3, 11], [5, 11], [9, 1], [11, 1]
          ],
        },
        {
          id: 'monster-1-2',
          name: 'red-slim',
          type: 'monster',
          positions: [
            [4, 11]
          ],
        },
        {
          id: 'monster-1-3',
          name: 'little-bat',
          type: 'monster',
          positions: [
            [7, 6], [9, 6], [10, 2]
          ],
        },
        {
          id: 'monster-1-4',
          name: 'junior-wizard',
          type: 'monster',
          positions: [
            [8, 6]
          ]
        },
        {
          id: 'monster-1-5',
          name: 'skeleton-man',
          type: 'monster',
          positions: [
            [2, 8]
          ],
        },
        {
          id: 'monster-1-6',
          name: 'skeleton-soldier',
          type: 'monster',
          positions: [
            [2, 5]
          ]
        },
      ],
      articles: [
        {
          id: 'article-1-1',
          name: 'yellow-key',
          type: 'key',
          positions: [
            [1, 6], [3, 1], [3, 2],
            [5, 2], [8, 9]
          ],
          displayName: '黄钥匙'
        },
        {
          id: 'article-1-2',
          name: 'red-potion',
          type: 'potion',
          positions: [
            [1, 1], [1, 2], [1, 9], [8, 8]
          ]
        },
        {
          id: 'article-1-3',
          name: 'blue-potion',
          type: 'potion',
          positions: [
            [10, 1]
          ]
        },
        {
          id: 'article-1-4',
          name: 'ruby',
          type: 'gem',
          positions: [
            [7, 9]
          ]
        },
        {
          id: 'article-1-5',
          name: 'sapphire',
          type: 'gem',
          positions: [
            [7, 8]
          ]
        },
        {
          id: 'article-1-6',
          name: 'flying-cane',
          type: 'treasure',
          positions: [
            [2, 1]
          ],
          displayName: '飞行手杖'
        }
      ],
      npc: []
    },
    2: {
      walls: [
        {
          id: 'wall-2-1',
          name: 'wall',
          type: 'wall',
          positions: [
            [2, 1], [2, 2], [2, 3], [2, 4], [2, 5], [2, 6], [2, 7], [2, 8], [2, 9],
            [3, 3], [3, 6], [3, 9], [3, 10],
            [4, 3], [4, 6], [4, 9], [4, 10],
            [5, 2], [5, 3], [5, 5], [5, 6], [5, 8], [5, 9],
            [6, 9],
            [8, 9],
            [9, 3], [9, 5], [9, 10],
            [9, 2], [9, 3], [9, 5], [9, 6], [9, 8], [9, 9],
            [10, 3], [10, 6], [10, 9], [10, 10],
            [11, 3], [11, 6], [11, 9], [11, 10],
          ],
        },
      ],
      weakWalls: [],
      doors: [
        {
          id: 'door-2-1',
          name: 'blue-door',
          type: 'door',
          positions: [
            [3, 11]
          ],
          doorType: 'blue'
        },
        {
          id: 'door-2-1',
          name: 'iron-gate',
          type: 'door',
          positions: [
            [5, 1], [5, 4], [5, 7],
            [9, 1], [9, 4], [9, 7]
          ],
          doorType: 'iron'
        }
      ],
      stairs: [
        {
          id: 'stair-2-1',
          name: 'stair-down',
          type: 'stair',
          positions: [
            [1, 11]
          ],
          nextFloor: 1,
          nextStairPosition: [2, 11]
        },
        {
          id: 'stair-2-2',
          name: 'stair-up',
          type: 'stair',
          positions: [
            [1, 1]
          ],
          nextFloor: 3,
          nextStairPosition: [2, 1]
        }
      ],
      monsters: [
        {
          id: 'monster-2-1',
          name: 'intermediate-guard',
          type: 'monster',
          positions: [
            [6, 10], [8, 10]
          ]
        },
      ],
      articles: [
        {
          id: 'article-2-1',
          name: 'yellow-key',
          type: 'key',
          positions: [
            [3, 7], [3, 8], [4, 8]
          ]
        },
        {
          id: 'article-2-2',
          name: 'blue-potion',
          type: 'potion',
          positions: [
            [3, 1], [3, 2], [4, 2]
          ]
        },
      ],
      npc: [
        {
          id: 'npc-2-1',
          name: 'thief',
          type: 'NPC',
          npcType: 'thief',
          positions: [
            [3, 5]
          ],
        },
        {
          id: 'npc-2-2',
          name: 'businessman',
          type: 'NPC',
          npcType: 'businessman',
          positions: [
            [11, 5]
          ]
        },
        {
          id: 'npc-2-3',
          name: 'sage',
          type: 'NPC',
          npcType: 'sage',
          positions: [
            [11, 8]
          ]
        }
      ]
    },
    3: {
      walls: [
        {
          id: 'wall-3-1',
          name: 'wall',
          type: 'wall',
          positions: [
            [1, 2],
            [2, 2],[2, 6], [2, 8],
            [3, 2], [3, 3], [3, 4], [3, 5], [3, 6], [3, 8], [3, 9], [3, 10], [3, 11],
            [4, 2], [4, 5], [4, 8],
            [6, 2], [6, 5], [6, 8],
            [7, 1], [7, 2], [7, 3], [7, 4], [7, 5], [7, 6], [7, 8], [7, 9], [7, 10], [7, 11],
            [9, 2], [9, 3], [9, 5], [9, 6], [9, 8], [9, 9], [9, 11],
            [10, 3], [10, 6], [10, 9],
            [11, 3], [11, 6], [11, 9],
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
            [1, 6], [1, 8],
            [9, 1], [9, 4], [9, 10]
          ],
          doorType: 'yellow'
        }
      ],
      stairs: [
        {
          id: 'stair-3-1',
          name: 'stair-down',
          type: 'stair',
          positions: [
            [1, 1]
          ],
          nextFloor: 2,
          nextStairPosition: [1, 2]
        },
        {
          id: 'stair-3-2',
          name: 'stair-up',
          type: 'stair',
          positions: [
            [11, 1]
          ],
          nextFloor: 4,
          nextStairPosition: [11, 2]
        }
      ],
      monsters: [
        {
          id: 'monster-3-1',
          name: 'green-slim',
          type: 'monster',
          positions: [
            [7, 7]
          ]
        },
        {
          id: 'monster-3-2',
          name: 'red-slim',
          type: 'monster',
          positions: [
            [8, 2]
          ]
        },
        {
          id: 'monster-1-3',
          name: 'little-bat',
          type: 'monster',
          positions: [
            [3, 7], [10, 10]
          ]
        },
        {
          id: 'monster-1-4',
          name: 'junior-wizard',
          type: 'monster',
          positions: [
            [1, 9], [10, 4]
          ]
        },
        {
          id: 'monster-1-5',
          name: 'skeleton-man',
          type: 'monster',
          positions: [
            [1, 5]
          ]
        },
      ],
      articles: [
        {
          id: 'article-2-1',
          name: 'yellow-key',
          type: 'key',
          positions: [
            [3, 7], [3, 8], [4, 8]
          ]
        },
        {
          id: 'article-2-2',
          name: 'blue-potion',
          type: 'potion',
          positions: [
            [3, 1], [3, 2], [4, 2]
          ]
        },
      ],
      npc: [
        {
          id: 'npc-2-1',
          name: 'thief',
          type: 'NPC',
          npcType: 'thief',
          positions: [
            [3, 5]
          ],
        },
        {
          id: 'npc-2-2',
          name: 'businessman',
          type: 'NPC',
          npcType: 'businessman',
          positions: [
            [11, 5]
          ]
        },
        {
          id: 'npc-2-3',
          name: 'sage',
          type: 'NPC',
          npcType: 'sage',
          positions: [
            [11, 8]
          ]
        }
      ]
    }
  },

  // 定义改变该模型状态的纯函数
  reducers: {
    update (prevState: FloorsState, payload: Partial<FloorsState>) {
      return {
        ...prevState,
        ...payload,
      };
    },
  },

  // 定义处理该模型副作用的函数
  effects: (dispatch) => ({
    async updateUserInfo () {
      await delay(1000);
      dispatch.user.update({
        name: 'taobao',
        id: '123',
      });
    },
  }),
};