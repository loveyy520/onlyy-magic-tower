/*
 * @Author: loveyy520 201357337@qq.com
 * @Date: 2022-12-29 13:52:21
 * @LastEditors: loveyy520 201357337@qq.com
 * @LastEditTime: 2022-12-31 00:23:36
 * @FilePath: \rax-example\src\components\Card\index.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { createElement } from 'rax';
import View from 'rax-view';
import Text from 'rax-text';
import { Icon } from "@alifd/meet";

import styles from './index.module.css';

function Card() {
  const properties = [
    {
      className: 'role-life',
      icon: 'heart-filling',
      iconColor: 'red',
      propName: '生命',
      propValue: 1000
    },
    {
      className: 'role-attack',
      icon: 'heart-filling',
      iconColor: 'red',
      propName: '攻击',
      propValue: 100
    },
    {
      className: 'role-defense',
      icon: 'heart-filling',
      iconColor: 'red',
      propName: '防御',
      propValue: 100
    },
    {
      className: 'role-money',
      icon: 'heart-filling',
      iconColor: 'red',
      propName: '金钱',
      propValue: 0
    },

  ]
  const keys = [
    {
      color: 'brown',
      count: 0
    },
    {
      color: 'blue',
      count: 0
    },
    {
      color: 'red',
      count: 0
    }
  ]
  return (
    <View className={styles.card}>
      <View className={styles['role-properties']}>
        {properties.map(property => (
          <View className={styles[property.className]}>
            <Icon name={property.icon} className={styles['mr-50']} style={{ color: property.iconColor }}></Icon>
            <View className={styles['role-property']}>
              <Text className={[styles['property-name'], styles['mr-50']]}>{property.propName}</Text>
              <Text className={styles['property-value']}>{property.propValue}</Text>
            </View>
          </View>
        ))}
      </View>
      <View className={styles.keys}>
        {keys.map(key => (
          <View className={styles.key}>
            <Icon name="ascending" style={{ color: key.color }} className={styles['mr-50']}></Icon>
            <Text>{key.count}</Text>
          </View>
        ))}
      </View>
    </View>
  );
}

export default Card;
