export const delay = (time: number) => new Promise<void>((resolve) => setTimeout(() => resolve(), time));
import { Position } from "@/types";
export default {
  // 定义 model 的初始 state
  state: {
    properties: {
      name: '',
      life: 1000,
      attack: 100,
      defense: 100,
      gold: 0
    },
    floor: 1,
    position: <Position>[6, 1], // 以左边和下边作为y轴和x轴
    sword: 'holy-sword',
    shield: 'holy-shield',
    keys: {
      yellow: 5,
      blue: 2,
      red: 1
    },
    treasure: [
      {
        id: 'monster-manual',
        name: '怪物手册',
        count: 0,
        consumable: false
      },
      {
        id: 'monster-manual',
        name: '怪物手册',
        count: 0,
        consumable: false
      },
      {
        id: 'flying-cane',
        name: '飞行手杖',
        count: 0,
        consumable: false
      },
      {
        id: 'monster-manual',
        name: '怪物手册',
        count: 0,
        consumable: false
      },
      {
        id: 'monster-manual',
        name: '怪物手册',
        count: 0,
        consumable: false
      },
      {
        id: 'monster-manual',
        name: '怪物手册',
        count: 0,
        consumable: false
      },
      {
        id: 'monster-manual',
        name: '怪物手册',
        count: 0,
        consumable: false
      },
      {
        id: 'monster-manual',
        name: '怪物手册',
        count: 0,
        consumable: false
      },
      {
        id: 'monster-manual',
        name: '怪物手册',
        count: 0,
        consumable: false
      },
      {
        id: 'monster-manual',
        name: '怪物手册',
        count: 0,
        consumable: false
      },
      {
        id: 'monster-manual',
        name: '怪物手册',
        count: 0,
        consumable: false
      },
      {
        id: 'monster-manual',
        name: '怪物手册',
        count: 0,
        consumable: false
      },
      {
        id: 'monster-manual',
        name: '怪物手册',
        count: 0,
        consumable: false
      },
      {
        id: 'monster-manual',
        name: '怪物手册',
        count: 0,
        consumable: false
      },
      {
        id: 'monster-manual',
        name: '怪物手册',
        count: 0,
        consumable: false
      },
      {
        id: 'monster-manual',
        name: '怪物手册',
        count: 0,
        consumable: false
      },
      {
        id: 'monster-manual',
        name: '怪物手册',
        count: 0,
        consumable: false
      },
      {
        id: 'monster-manual',
        name: '怪物手册',
        count: 0,
        consumable: false
      },
      {
        id: 'monster-manual',
        name: '怪物手册',
        count: 0,
        consumable: false
      },
      {
        id: 'monster-manual',
        name: '怪物手册',
        count: 0,
        consumable: false
      },
    ]
  },

  // 定义改变该模型状态的纯函数
  reducers: {
    update (prevState, payload) {
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