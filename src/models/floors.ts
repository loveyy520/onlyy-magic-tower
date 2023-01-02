/*
* @Author: loveyy520 201357337@qq.com
* @Date: 2022-12-31 10:12:55
 * @LastEditors: loveyy520 201357337@qq.com
 * @LastEditTime: 2023-01-02 20:21:53
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
          ],
          displayName: '黄钥匙'
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
          id: 'article-3-1',
          name: 'yellow-key',
          type: 'key',
          positions: [
            [1, 11], [2, 4], [4, 9], [4, 11], [5, 10], [6, 9], [6, 11], [11, 4]
          ],
          displayName: '黄钥匙'
        },
        {
          id: 'article-3-2',
          name: 'blue-key',
          type: 'key',
          positions: [
            [5, 9]
          ],
          displayName: '蓝钥匙'
        },
        {
          id: 'article-3-3',
          name: 'blue-potion',
          type: 'potion',
          positions: [
            [4, 10], [5, 11], [6, 10]
          ]
        },
        {
          id: 'article-3-4',
          name: 'red-potion',
          type: 'potion',
          positions: [
            [1, 3], [2, 10], [11, 11], [11, 5]
          ]
        },
        {
          id: 'article-3-5',
          name: 'ruby',
          type: 'gem',
          positions: [
            [2, 3]
          ]
        },
        {
          id: 'article-3-6',
          name: 'sapphire',
          type: 'gem',
          positions: [
            [2, 11]
          ]
        },
      ],
      npc: [
        {
          id: 'npc-3-1',
          name: 'sage',
          type: 'NPC',
          npcType: 'sage',
          positions: [
            [11, 8]
          ]
        }
      ]
    },
    4: {
      walls: [
        {
          id: 'wall-4-1',
          name: 'wall',
          type: 'wall',
          positions: [
            [1, 8],
            [2, 1],[2, 2], [2, 3], [2, 4],
            [3, 4], [3, 8],
            [4, 6], [4, 8], [4, 9], [4, 10], [4, 11],
            [5, 4], [5, 6], [5, 8],
            [6, 2], [6, 1], [6, 3], [6, 4], [6, 6],
            [7, 4], [7, 6], [7, 8],
            [8, 6], [8, 8], [8, 9], [8, 10], [8, 11],
            [9, 4], [9, 6], [9, 8],
            [10, 1], [10, 2], [10, 3], [10, 4], [10, 6],
            [11, 6], [11, 8]
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
            [1, 4], [2, 8], [4, 4], [4, 7], [8, 4], [10, 8], [11, 4],
          ],
          doorType: 'yellow'
        },
        {
          id: 'door-4-2',
          name: 'blue-door',
          type: 'door',
          positions: [
            [6, 8]
          ],
          doorType: 'blue'
        }
      ],
      stairs: [
        {
          id: 'stair-4-1',
          name: 'stair-down',
          type: 'stair',
          positions: [
            [11, 1]
          ],
          nextFloor: 3,
          nextStairPosition: [10, 1]
        },
        {
          id: 'stair-4-2',
          name: 'stair-up',
          type: 'stair',
          positions: [
            [1, 1]
          ],
          nextFloor: 5,
          nextStairPosition: [2, 1]
        }
      ],
      monsters: [
        {
          id: 'monster-4-1',
          name: 'green-slim',
          type: 'monster',
          positions: [
            [3, 2], [3, 5], [4, 1], [8, 1]
          ]
        },
        {
          id: 'monster-4-2',
          name: 'red-slim',
          type: 'monster',
          positions: [
            [1, 5], [6, 7]
          ]
        },
        {
          id: 'monster-4-3',
          name: 'little-bat',
          type: 'monster',
          positions: [
            [4, 3]
          ]
        },
        {
          id: 'monster-4-4',
          name: 'junior-wizard',
          type: 'monster',
          positions: [
            [2, 7], [8, 3]
          ]
        },
        {
          id: 'monster-4-5',
          name: 'skeleton-man',
          type: 'monster',
          positions: [
            [9, 7]
          ]
        },
        {
          id: 'monster-4-6',
          name: 'skeleton-soldier',
          type: 'monster',
          positions: [
            [10, 9]
          ]
        },
      ],
      articles: [
        {
          id: 'article-4-1',
          name: 'yellow-key',
          type: 'key',
          positions: [
            [3, 1], [3, 10], [5, 1], [5, 2], [9, 10]
          ],
          displayName: '黄钥匙',
        },
        {
          id: 'article-4-2',
          name: 'blue-key',
          type: 'key',
          positions: [
            [2, 11]
          ],
          displayName: '蓝钥匙'
        },
        {
          id: 'article-4-3',
          name: 'blue-potion',
          type: 'potion',
          positions: [
            [11, 10]
          ]
        },
        {
          id: 'article-4-4',
          name: 'red-potion',
          type: 'potion',
          positions: [
            [1, 10], [9, 2]
          ]
        },
        {
          id: 'article-4-5',
          name: 'ruby',
          type: 'gem',
          positions: [
            [7, 2]
          ]
        },
      ],
      npc: [
        {
          id: 'npc-4-1',
          name: 'sage',
          type: 'NPC',
          npcType: 'sage',
          positions: [
            [10, 11]
          ]
        }
      ]
    },
    5: {
      walls: [
        {
          id: 'wall-5-1',
          name: 'wall',
          type: 'wall',
          positions: [
            [1, 2], [1, 5], [1, 8],
            [2, 2], [2, 8], [2, 10], [2, 11],
            [3, 2], [3, 5], [3, 8],
            [4, 2], [4, 5],
            [5, 2], [5, 3], [5, 4], [5, 5], [5, 6], [5, 7], [5, 8], [5, 9], [5, 10],
            [7, 1], [7, 2], [7, 3], [7, 4], [7, 5], [7, 7], [7, 8], [7, 9], [7, 10], [7, 11],
            [8, 5], [8, 7],
            [9, 2], [9, 3], [9, 5], [9, 7],
            [10, 3], [10, 5], [10, 7], [10, 8], [10, 9], [10, 10],
            [11, 3]
          ],
        },
      ],
      weakWalls: [
        {
          id: 'weakWall-5-1',
          name: 'weak-wall',
          type: 'weakWall',
          positions: [
            [9, 1]
          ]
        }
      ],
      doors: [
        {
          id: 'door-5-1',
          name: 'yellow-door',
          type: 'door',
          positions: [
            [2, 9], [4, 8], [5, 11], [8, 3], [10, 11],
          ],
          doorType: 'yellow'
        }
      ],
      stairs: [
        {
          id: 'stair-5-1',
          name: 'stair-down',
          type: 'stair',
          positions: [
            [1, 1]
          ],
          nextFloor: 4,
          nextStairPosition: [11, 1]
        },
        {
          id: 'stair-5-2',
          name: 'stair-up',
          type: 'stair',
          positions: [
            [1, 11]
          ],
          nextFloor: 6,
          nextStairPosition: [1, 10]
        }
      ],
      monsters: [
        {
          id: 'monster-5-1',
          name: 'green-slim',
          type: 'monster',
          positions: [
            [6, 4], [7, 6], [8, 10], [9, 10]
          ]
        },
        {
          id: 'monster-5-2',
          name: 'red-slim',
          type: 'monster',
          positions: [
            [4, 11], [11, 5], [11, 10]
          ]
        },
        {
          id: 'monster-5-3',
          name: 'little-bat',
          type: 'monster',
          positions: [
            [3, 9], [4, 6], [6, 8]
          ]
        },
        {
          id: 'monster-5-4',
          name: 'junior-wizard',
          type: 'monster',
          positions: [
            [3, 7]
          ]
        },
        {
          id: 'monster-5-5',
          name: 'skeleton-soldier',
          type: 'monster',
          positions: [
            [2, 5]
          ]
        },
      ],
      articles: [
        {
          id: 'article-5-1',
          name: 'yellow-key',
          type: 'key',
          positions: [
            [1, 6], [1, 7], [2, 3], [6, 10], [8, 8], [8, 9], [9, 8], [9, 9]
          ],
          displayName: '黄钥匙'
        },
        {
          id: 'article-5-2',
          name: 'red-potion',
          type: 'potion',
          positions: [
            [3, 3]
          ]
        },
        {
          id: 'article-5-3',
          name: 'sapphire',
          type: 'gem',
          positions: [
            [1, 3]
          ]
        },
        {
          id: 'article-5-4',
          name: 'iron-sword',
          type: 'equipment',
          positions: [
            [11, 1]
          ]
        },
        {
          id: 'article-5-5',
          name: 'notebook',
          type: 'treasure',
          positions: [
            [4, 3]
          ],
          displayName: '记事本'
        },
      ],
      npc: []
    },
    6: {
      walls: [
        {
          id: 'wall-6-1',
          name: 'wall',
          type: 'wall',
          positions: [
            [1, 5],
            [2, 2], [2, 5], [2, 7], [2, 9], [2, 10], [2, 11],
            [3, 2], [3, 5], [3, 7], [3, 9],
            [4, 2], [4, 5], [4, 7], 
            [5, 2], [5, 3], [5, 4], [5, 5], [5, 7], [5, 9], [5, 10], [5, 11],
            [7, 1], [7, 2], [7, 3], [7, 5], [7, 7], [7, 8], [7, 9], [7, 10],
            [8, 3], [8, 5], [8, 7], [8, 10],
            [9, 7], [9, 5], [9, 10],
            [10, 5], [10, 1], [10, 7], [10, 2], [10, 3], [10, 10],
            [11, 7]
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
            [2, 8], [3, 8], [5, 8], [7, 4],
            [8, 4], [10, 4], [11, 10]
          ],
          doorType: 'yellow'
        },
      ],
      stairs: [
        {
          id: 'stair-6-1',
          name: 'stair-down',
          type: 'stair',
          positions: [
            [1, 11]
          ],
          nextFloor: 5,
          nextStairPosition: [1, 10]
        },
        {
          id: 'stair-6-2',
          name: 'stair-up',
          type: 'stair',
          positions: [
            [11, 1]
          ],
          nextFloor: 7,
          nextStairPosition: [11, 2]
        }
      ],
      monsters: [
        {
          id: 'monster-6-1',
          name: 'green-slim',
          type: 'monster',
          positions: [
            [2, 1], [10, 11]
          ],
        },
        {
          id: 'monster-6-2',
          name: 'red-slim',
          type: 'monster',
          positions: [
            [3, 6], [4, 9], [9, 3], [11, 3]
          ],
        },
        {
          id: 'monster-6-3',
          name: 'little-bat',
          type: 'monster',
          positions: [
            [2, 3], [11, 8]
          ],
        },
        {
          id: 'monster-6-4',
          name: 'junior-wizard',
          type: 'monster',
          positions: [
            [1, 4], [4, 6], [7, 11]
          ]
        },
        {
          id: 'monster-6-5',
          name: 'skeleton-man',
          type: 'monster',
          positions: [
            [5, 1], [8, 6], [10, 9]
          ],
        },
        {
          id: 'monster-6-6',
          name: 'skeleton-soldier',
          type: 'monster',
          positions: [
            [9, 6]
          ]
        },
      ],
      articles: [
        {
          id: 'article-6-1',
          name: 'yellow-key',
          type: 'key',
          positions: [
            [3, 11], [3, 10],
            [4, 10], [4, 11], [6, 6], [9, 11]
          ],
          displayName: '黄钥匙'
        },
        {
          id: 'article-6-2',
          name: 'red-potion',
          type: 'potion',
          positions: [
            [8, 1], [9, 1], [8, 9]
          ]
        },
        {
          id: 'article-6-3',
          name: 'sapphire',
          type: 'gem',
          positions: [
            [4, 3]
          ]
        },
      ],
      npc: [
        {
          id: 'npc-6-1',
          name: 'sage',
          type: 'NPC',
          npcType: 'sage',
          positions: [
            [4, 4]
          ]
        },
        {
          id: 'npc-6-2',
          name: 'businessman',
          type: 'NPC',
          npcType: 'businessman',
          positions: [
            [8, 8]
          ]
        }
      ]
    },
    7: {
      walls: [
        {
          id: 'wall-7-1',
          name: 'wall',
          type: 'wall',
          positions: [
            [2, 2], [2, 3], [2, 4], [2, 5], [2, 7], [2, 8], [2, 9], [2, 10], [2, 11],
            [4, 1], [4, 2], [4, 3], [4, 4], [4, 5], [4, 7], [4, 8], [4, 9], [4, 10], [4, 11],
            [6, 1], [6, 2], [6, 3], [6, 4], [6, 5], [6, 7], [6, 8], [6, 9],
            [8, 1], [8, 2], [8, 3], [8, 4], [8, 5], [8, 7], [8, 8], [8, 9], [8, 10], [8, 11],
            [10, 1], [10, 2], [10, 3], [10, 4], [10, 5], [10, 7], [10, 8], [10, 9], [10, 10], [10, 11],
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
            [1, 5], [1, 7,],
            [3, 5], [3, 7], [5, 5], [7, 5], [7, 7],
            [11, 5], [11, 7]
          ],
          doorType: 'yellow'
        },{
          id: 'door-7-2',
          name: 'blue-door',
          type: 'door',
          positions: [
            [5, 7]
          ],
          doorType: 'blue'
        },
      ],
      stairs: [
        {
          id: 'stair-7-1',
          name: 'stair-down',
          type: 'stair',
          positions: [
            [11, 1]
          ],
          nextFloor: 6,
          nextStairPosition: [11, 2]
        },
        {
          id: 'stair-7-2',
          name: 'stair-up',
          type: 'stair',
          positions: [
            [1, 11]
          ],
          nextFloor: 8,
          nextStairPosition: [1, 10]
        }
      ],
      monsters: [
        {
          id: 'monster-7-1',
          name: 'green-slim',
          type: 'monster',
          positions: [
            [1, 2], [3, 2], [11, 9], [11, 11]
          ],
        },
        {
          id: 'monster-7-2',
          name: 'red-slim',
          type: 'monster',
          positions: [
            [2, 1], [5, 9], [7, 3], [11, 10]
          ],
        },
        {
          id: 'monster-7-3',
          name: 'little-bat',
          type: 'monster',
          positions: [
            [3, 9], [5, 3]
          ],
        },
        {
          id: 'monster-7-4',
          name: 'junior-wizard',
          type: 'monster',
          positions: [
            [4, 6], [7, 2]
          ]
        },
        {
          id: 'monster-7-5',
          name: 'skeleton-man',
          type: 'monster',
          positions: [
            [9, 7]
          ],
        },
        {
          id: 'monster-7-6',
          name: 'skeleton-soldier',
          type: 'monster',
          positions: [
            [2, 6], [7, 9], [9, 5]
          ]
        },
      ],
      articles: [
        {
          id: 'article-7-1',
          name: 'yellow-key',
          type: 'key',
          positions: [
            [5, 1], [5, 2],
            [9, 1], [9, 2], [9, 10], [9, 11]
          ],
          displayName: '黄钥匙'
        },
        {
          id: 'article-7-2',
          name: 'red-potion',
          type: 'potion',
          positions: [
            [3, 10], [9, 9]
          ]
        },
        {
          id: 'article-7-3',
          name: 'blue-potion',
          type: 'potion',
          positions: [
            [7, 1], [9, 3]
          ]
        },
        {
          id: 'article-7-4',
          name: 'ruby',
          type: 'gem',
          positions: [
            [3, 11]
          ]
        },
      ],
      npc: [
        {
          id: 'npc-7-1',
          name: 'businessman',
          type: 'NPC',
          npcType: 'businessman',
          positions: [
            [6, 11]
          ]
        }
      ]
    },
    8: {
      walls: [
        {
          id: 'wall-8-1',
          name: 'wall',
          type: 'wall',
          positions: [
            [1, 5],
            [2, 3], [2, 5], [2, 7], [2, 8], [2, 9],
            [3, 2], [3, 3], [3, 5], [3, 7], [3, 9], [3, 10],
            [4, 3], [4, 5], [4, 7], [4, 9], [4, 10],
            [5, 3], [5, 7], [5, 9],
            [6, 1], [6, 2], [6, 3], [6, 5], [6, 6], [6, 7],
            [7, 3], [7, 9],
            [8, 3], [8, 5], [8, 6], [8, 7], [8, 8], [8, 9], [8, 10], [8, 11],
            [9, 2], [9, 3], [9, 5], [9, 8],
            [10, 3],
            [11, 5], [11, 8]
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
            [1, 3], [1, 9],
            [3, 11], [4, 11], [5, 5],
            [6, 9], [9, 1], [10, 5], [11, 3]
          ],
          doorType: 'yellow'
        },{
          id: 'door-8-2',
          name: 'blue-door',
          type: 'door',
          positions: [
            [3, 1]
          ],
          doorType: 'blue'
        },{
          id: 'door-8-3',
          name: 'magic-gate',
          type: 'door',
          positions: [
            [10, 8]
          ],
          doorType: 'magic'
        },
      ],
      stairs: [
        {
          id: 'stair-8-1',
          name: 'stair-down',
          type: 'stair',
          positions: [
            [1, 11]
          ],
          nextFloor: 7,
          nextStairPosition: [1, 10]
        },
        {
          id: 'stair-8-2',
          name: 'stair-up',
          type: 'stair',
          positions: [
            [6, 11]
          ],
          nextFloor: 9,
          nextStairPosition: [6, 10]
        }
      ],
      monsters: [
        {
          id: 'monster-8-1',
          name: 'green-slim',
          type: 'monster',
          positions: [
            [1, 2], [3, 6], [7, 10]
          ],
        },
        {
          id: 'monster-8-2',
          name: 'red-slim',
          type: 'monster',
          positions: [
            [2, 6], [4, 6]
          ],
        },
        {
          id: 'monster-8-3',
          name: 'little-bat',
          type: 'monster',
          positions: [
            [2, 1], [4, 4], [7, 5]
          ],
        },
        {
          id: 'monster-8-4',
          name: 'junior-wizard',
          type: 'monster',
          positions: [
            [8, 4], [7, 7]
          ]
        },
        {
          id: 'monster-8-5',
          name: 'skeleton-man',
          type: 'monster',
          positions: [
            [6, 4], [11, 2]
          ],
        },
        {
          id: 'monster-8-6',
          name: 'skeleton-soldier',
          type: 'monster',
          positions: [
            [10, 1]
          ]
        },
        {
          id: 'monster-8-7',
          name: 'junior-guard',
          type: 'monster',
          positions: [
            [9, 7], [11, 7]
          ]
        },
      ],
      articles: [
        {
          id: 'article-8-1',
          name: 'yellow-key',
          type: 'key',
          positions: [
            [3, 8], [4, 1], [4, 8], [5, 2],
            [5, 8], [7, 1], [9, 11], [11, 11],
          ],
          displayName: '黄钥匙'
        },
        {
          id: 'article-8-2',
          name: 'blue-key',
          type: 'key',
          positions: [
            [7, 2],
          ],
          displayName: '蓝钥匙'
        },
        {
          id: 'article-8-3',
          name: 'red-key',
          type: 'key',
          positions: [
            [10, 10]
          ],
          displayName: '红钥匙'
        },
        {
          id: 'article-8-4',
          name: 'red-potion',
          type: 'potion',
          positions: [
            [1, 7], [8, 2], [11, 9]
          ]
        },
        {
          id: 'article-8-5',
          name: 'blue-potion',
          type: 'potion',
          positions: [
            [9, 9]
          ]
        },
        {
          id: 'article-8-6',
          name: 'ruby',
          type: 'gem',
          positions: [
            [4, 2]
          ]
        },
        {
          id: 'article-8-7',
          name: 'sapphire',
          type: 'gem',
          positions: [
            [5, 1]
          ]
        },
      ],
      npc: []
    },
    9: {
      walls: [
        {
          id: 'wall-9-1',
          name: 'wall',
          type: 'wall',
          positions: [
            [1, 6],
            [2, 3], [2, 6], [2, 9],
            [3, 2], [3, 3], [3, 4], [3, 6], [3, 9],
            [4, 3], [4, 6], [4, 8], [4, 9], [4, 10],
            [5, 6], [5, 9],
            [6, 4], [6, 2], [6, 3], [6, 5], [6, 6],
            [7, 9],
            [8, 3], [8,2], [8, 4], [8, 5], [8, 6], [8, 7], [8, 9], [8, 10],
            [9, 4], [9, 7], [9, 9],
            [10, 4], [10, 5], [10, 7], [10, 9],
            [11, 7]
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
            [1, 3], [3, 5],
            [4, 7], [4, 11], [5, 3],
            [6, 1], [8, 1], [8, 8], [8, 11],
            [9, 8], [11, 4]
          ],
          doorType: 'yellow'
        },{
          id: 'door-9-2',
          name: 'blue-door',
          type: 'door',
          positions: [
            [3, 1], [6, 9]
          ],
          doorType: 'blue'
        }
      ],
      stairs: [
        {
          id: 'stair-9-1',
          name: 'stair-down',
          type: 'stair',
          positions: [
            [6, 11]
          ],
          nextFloor: 8,
          nextStairPosition: [6, 10]
        },
        {
          id: 'stair-9-2',
          name: 'stair-up',
          type: 'stair',
          positions: [
            [1, 1]
          ],
          nextFloor: 10,
          nextStairPosition: [1, 2]
        }
      ],
      monsters: [
        {
          id: 'monster-9-1',
          name: 'green-slim',
          type: 'monster',
          positions: [
            [9, 11], [10, 10]
          ],
        },
        {
          id: 'monster-9-2',
          name: 'red-slim',
          type: 'monster',
          positions: [
            [7, 6]
          ],
        },
        {
          id: 'monster-9-3',
          name: 'little-bat',
          type: 'monster',
          positions: [
            [3, 7], [7, 2]
          ],
        },
        {
          id: 'monster-9-4',
          name: 'junior-wizard',
          type: 'monster',
          positions: [
            [9, 1], [11, 3]
          ]
        },
        {
          id: 'monster-9-5',
          name: 'skeleton-man',
          type: 'monster',
          positions: [
            [3, 11], [5, 2], [10, 2]
          ],
        },
        {
          id: 'monster-9-6',
          name: 'skeleton-soldier',
          type: 'monster',
          positions: [
            [1, 4], [1, 9], [4, 5], [11, 6]
          ]
        }
      ],
      articles: [
        {
          id: 'article-9-1',
          name: 'yellow-key',
          type: 'key',
          positions: [
            [1, 5], [2, 8], [2, 10],
            [5, 5], [5, 8],
            [7, 8], [9, 3]
          ],
          displayName: '黄钥匙'
        },
        {
          id: 'article-9-2',
          name: 'red-potion',
          type: 'potion',
          positions: [
            [2, 2], [11, 1], [11, 11]
          ]
        },
        {
          id: 'article-9-3',
          name: 'ruby',
          type: 'gem',
          positions: [
            [6, 7]
          ]
        },
        {
          id: 'article-9-4',
          name: 'sapphire',
          type: 'gem',
          positions: [
            [1, 7]
          ]
        },
        {
          id: 'article-9-5',
          name: 'iron-shield',
          type: 'equipment',
          positions: [
            [9, 5]
          ]
        },
      ],
      npc: []
    },
    10: {
      walls: [
        {
          id: 'wall-10-1',
          name: 'wall',
          type: 'wall',
          positions: [
            [1, 7], [1, 10],
            [2, 1], [2, 2], [2, 3], [2, 7], [2, 10],
            [3, 7], [3, 10],
            [4, 2], [4, 3], [4, 4], [4, 5], [4, 6], [4, 7], [4, 9], [4, 10],
            [5, 3], [5, 4], [5, 5], [5, 6], [5, 9],
            [7, 3], [7, 4], [7, 5], [7, 6], [7, 9],
            [8, 2], [8, 3], [8, 4], [8, 5], [8, 6], [8, 7], [8, 9], [8, 10],
            [9, 7], [9, 10],
            [10, 1], [10, 2], [10, 3], [10, 7], [10, 10],
            [11, 7], [11, 10],
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
            [1, 3], [3, 3], [9, 3], [11, 3]
          ],
          doorType: 'yellow'
        },{
          id: 'door-10-2',
          name: 'red-door',
          type: 'door',
          positions: [
            [6, 3]
          ],
          doorType: 'red'
        },{
          id: 'door-10-3',
          name: 'magic-gate',
          type: 'door',
          positions: [
            [4, 8], [8, 8]
          ],
          doorType: 'magic'
        }
      ],
      stairs: [
        {
          id: 'stair-10-1',
          name: 'stair-down',
          type: 'stair',
          positions: [
            [1, 1]
          ],
          nextFloor: 9,
          nextStairPosition: [2, 1]
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
            [4, 1], [8, 1]
          ]
        },
        {
          id: 'monster-10-2',
          name: 'skeleton-man',
          type: 'monster',
          positions: [
            [1, 6], [1, 9], [2, 9],
            [3, 6], [3, 9],
            [9, 6], [9, 9],
            [11, 6], [11, 9], [10, 9]
          ],
        },
        {
          id: 'monster-10-3',
          name: 'skeleton-soldier',
          type: 'monster',
          positions: [
            [2, 5], [2, 8], [10, 5], [10, 8]
          ]
        },
        {
          id: 'monster-10-4',
          name: 'skeleton-captain',
          type: 'monster',
          positions: [
            [6, 8]
          ]
        }
      ],
      articles: [
        {
          id: 'article-10-1',
          name: 'yellow-key',
          type: 'key',
          positions: [],
          displayName: '黄钥匙'
        },
        {
          id: 'article-10-2',
          name: 'red-potion',
          type: 'potion',
          positions: []
        },
        {
          id: 'article-10-3',
          name: 'blue-potion',
          type: 'potion',
          positions: [
            [11, 1]
          ]
        },
        {
          id: 'article-10-4',
          name: 'ruby',
          type: 'gem',
          positions: [
            [10, 6]
          ]
        },
        {
          id: 'article-10-5',
          name: 'sapphire',
          type: 'gem',
          positions: [
            [2, 6]
          ]
        }
      ],
      npc: []
    },
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