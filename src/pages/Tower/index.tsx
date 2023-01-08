/*
 * @Author: loveyy520 201357337@qq.com
 * @Date: 2022-12-30 21:59:22
 * @LastEditors: loveyy520 201357337@qq.com
 * @LastEditTime: 2023-01-01 20:54:13
 * @FilePath: \rax-example\src\pages\Tower\index.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { createElement } from 'rax';
import store from '@/store';
import View from 'rax-view';
import Floor from '@/components/Floor';
import PropertyPanel from '@/components/PropertyPanel';

function Tower() {
  const [
    warriorState,
    { update: updateWarrior },
  ] = store.useModel('warrior');
  const { properties, floor, keys, msg } = warriorState;
  const unitSize = 62;
  // Math.floor((px2rpx(innerWidth) - 20) / 11)
  return (
    <View>
      <Floor
        warriorState={warriorState}
        unitSize={unitSize}
        updateWarrior={updateWarrior}
      />
      <PropertyPanel
        floor={floor}
        properties={properties}
        keys={keys}
        msg={msg}
      />
    </View>
  );
}

export default Tower;
