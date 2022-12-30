/*
 * @Author: loveyy520 201357337@qq.com
 * @Date: 2022-12-30 23:24:40
 * @LastEditors: loveyy520 201357337@qq.com
 * @LastEditTime: 2022-12-30 23:27:22
 * @FilePath: \rax-example\src\components\Controller\index.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { createElement } from 'rax';
import View from 'rax-view';
import Text from 'rax-text';
import styles from './index.module.css'
function Controller() {
  return (
    <View className={styles.controller}>
      <Text>
        Controller
      </Text>
    </View>
  );
}

export default Controller;
