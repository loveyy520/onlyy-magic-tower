/*
 * @Author: loveyy520 201357337@qq.com
 * @Date: 2022-12-30 22:05:27
 * @LastEditors: loveyy520 201357337@qq.com
 * @LastEditTime: 2023-01-05 13:05:52
 * @FilePath: \rax-example\src\components\PropertyPanel\index.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { createElement } from 'rax';
import View from 'rax-view';
import Text from 'rax-text';
import { Icon } from '@alifd/meet';
import { Controller, Card, Message, Treasures } from '@/components';

import styles from './index.module.css';

import { Properties, Keys } from '@/types';

interface Props {
  properties: Properties;
  floor: number;
  keys: Keys;
  msg: string;
}

export function PropertyPanel({ properties, floor, keys, msg }: Props) {
  return (
    <View className={styles['property-panel']}>
      <View className={styles.header}>
        <Message msg={msg} />
        <View className={styles['header-right']}>
          <Text className={styles['mr-20']}>第{floor}层</Text>
          <Icon size="large" className={styles['mr-20']} type="form" style={{ color: 'blue' }} />
          <Icon size="large" type="list" style={{ color: '#333' }} />
        </View>
      </View>
      <Treasures />
      <Card properties={properties} keys={keys} />
      {/* <Controller /> */}
    </View>
  );
}

export default PropertyPanel;
