/*
 * @Author: loveyy520 201357337@qq.com
 * @Date: 2022-12-31 09:45:03
 * @LastEditors: loveyy520 201357337@qq.com
 * @LastEditTime: 2023-01-02 00:57:02
 * @FilePath: \magic-tower\src\store.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { createStore, IStoreModels, IStoreDispatch, IStoreRootState } from 'rax-app';
import {
  warrior,
  floor1,
  floor2,
  floor3,
  floor4,
  floor5,
  floor6,
  floor7,
  floor8,
  floor9,
  floor10,
  floor11,
} from '@/models';

interface IAppStoreModels extends IStoreModels {
  warrior: typeof warrior;
  floor1: typeof floor1;
  floor2: typeof floor2;
  floor3: typeof floor3;
  floor4: typeof floor4;
  floor5: typeof floor5;
  floor6: typeof floor6;
  floor7: typeof floor7;
  floor8: typeof floor8;
  floor9: typeof floor9;
  floor10: typeof floor10;
  floor11: typeof floor11;
}

const models: IAppStoreModels = {
  warrior,
  floor1,
  floor2,
  floor3,
  floor4,
  floor5,
  floor6,
  floor7,
  floor8,
  floor9,
  floor10,
  floor11,
};

const store = createStore(models);

export default store;

export type IRootDispatch = IStoreDispatch<typeof models>;

export type IRootState = IStoreRootState<typeof models>;
