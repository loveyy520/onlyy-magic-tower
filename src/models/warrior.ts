/*
 * @Author: loveyy520 201357337@qq.com
 * @Date: 2022-12-31 09:47:24
 * @LastEditors: loveyy520 201357337@qq.com
 * @LastEditTime: 2023-01-02 19:55:58
 * @FilePath: \magic-tower\src\models\warrior.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
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
    floor: 9,
    msg: '你获得了1把黄钥匙.',
    position: [6, 10], // 以左边和下边作为y轴和x轴
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
      },
      notebook: {
        displayName: '记事本',
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