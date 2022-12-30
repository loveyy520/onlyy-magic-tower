/*
 * @Author: loveyy520 201357337@qq.com
 * @Date: 2022-12-30 22:05:27
 * @LastEditors: loveyy520 201357337@qq.com
 * @LastEditTime: 2022-12-30 23:37:57
 * @FilePath: \rax-example\src\components\PropertyPanel\index.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { createElement } from 'rax';
import View from 'rax-view';
import Text from 'rax-text';
import { Icon } from "@alifd/meet";
import Controller from "../Controller";
import Card from "../Card";

import styles from './index.module.css'

function PropertyPanel() {
  const floor = 1
  return (
    <View className={styles['property-panel']}>
      <View className={styles.header}>
        <Text className={styles['mr-20']}>第{floor}层</Text>
        <Icon size="large" className={styles['mr-20']} type="form" style={{ color: 'blue' }} />
        <Icon size="large" type="list" style={{ color: '#333' }} />
      </View>
      <Card />
      <Controller></Controller>
    </View>
  );
}

export default PropertyPanel;
