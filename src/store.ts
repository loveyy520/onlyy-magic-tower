/*
 * @Author: loveyy520 201357337@qq.com
 * @Date: 2022-12-31 09:45:03
 * @LastEditors: loveyy520 201357337@qq.com
 * @LastEditTime: 2023-01-01 19:07:12
 * @FilePath: \magic-tower\src\store.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { createStore, IStoreModels, IStoreDispatch, IStoreRootState } from 'rax-app';
import {warrior, floors, controller} from '@/models'

interface IAppStoreModels extends IStoreModels {
  warrior: typeof warrior;
  floors: typeof floors;
};

const models: IAppStoreModels = {
  warrior,
  floors,
  controller
}

const store = createStore(models);

export default store;

export type IRootDispatch = IStoreDispatch<typeof models>;

export type IRootState = IStoreRootState<typeof models>;