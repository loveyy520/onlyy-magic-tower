import {WarriorState} from '@/types'

export const delay = (time: number) => new Promise<void>((resolve) => setTimeout(() => resolve(), time));
export const warrior = {
  // 定义 model 的初始 state
  state: <WarriorState>{
    properties: {
      name: '',
      life: 1000,
      attack: 100,
      defense: 100,
      gold: 0
    },
    floor: 1,
    msg: '你获得了1把黄钥匙.',
    position: [2, 11], // 以左边和下边作为y轴和x轴
    equipments: {
      sword: 'holy-sword',
      shield: 'holy-shield',
    },
    keys: {
      yellow: 5,
      blue: 2,
      red: 1
    },
    treasures: {
      'monster-manual': {
        displayName: '怪物手册',
        count: 0,
        consumable: false
      },
      'flying-cane': {
        displayName: '飞行手杖',
        count: 0,
        consumable: false
      }
    },
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