/*
 * @Author: loveyy520 201357337@qq.com
 * @Date: 2022-12-31 10:12:55
 * @LastEditors: loveyy520 201357337@qq.com
 * @LastEditTime: 2022-12-31 17:45:19
 * @FilePath: \magic-tower\src\models\floors.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
export const delay = (time: number) => new Promise<void>((resolve) => setTimeout(() => resolve(), time));

export default {
  // 定义 model 的初始 state
  state: {
    1: {
      walls: [
        {
          id: '1-1',
          position: [1, [4, 7, 10]],
        },
        {
          id: '1-2',
          position: [2, [10]]
        },
        {
          id: '1-3',
          position: [3, [4, 7, 10]],
        },
        {
          id: '1-4',
          position: [4, [1, 2, 3, 4, 5, 6, 7, 8, 10]],
        },
        {
          id: '1-5',
          position: [5, [3, 10]],
        },
        {
          id: '1-6',
          position: [6, [5, 7, 8, 9, 10]],
        },
        {
          id: '1-7',
          position: [7, [3, 5, 7, 10]],
        },
        {
          id: '1-8',
          position: [8, [1, 2, 3, 5, 7, 10]],
        },
        {
          id: '1-9',
          position: [9, [3, 5, 10]],
        },
        {
          id: '1-10',
          position: [10, [5, 6, 7, 8, 9, 10]],
        },
        {
          id: '1-11',
          position: [11, 3],
        },
      ],
      weakWalls: [],
      monsters: [],
      articles: [],
      npc: []
    }
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