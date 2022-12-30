/*
 * @Author: loveyy520 201357337@qq.com
 * @Date: 2022-12-30 21:59:57
 * @LastEditors: loveyy520 201357337@qq.com
 * @LastEditTime: 2022-12-30 23:10:22
 * @FilePath: \rax-example\src\components\Floor\index.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { createElement } from 'rax';
import View from 'rax-view';
import Text from 'rax-text';

import styles from './index.module.css'

function FloorLayout() {
  return (
    <View className={styles.floor}>
      <Text>
        Floor
      </Text>
    </View>
  );
}

export default FloorLayout;
