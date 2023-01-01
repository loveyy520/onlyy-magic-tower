const delay = (time: number) => new Promise<void>((resolve) => setTimeout(() => resolve(), time));

export const controller = {
  // 定义 model 的初始 state
  state: {
    msg: '你获得了1把黄钥匙.'
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