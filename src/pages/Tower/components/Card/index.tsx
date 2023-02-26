/*
 * @Author: loveyy520 201357337@qq.com
 * @Date: 2022-12-29 13:52:21
 * @LastEditors: loveyy520 201357337@qq.com
 * @LastEditTime: 2023-01-01 18:46:06
 * @FilePath: \rax-example\src\components\Card\index.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { createElement } from 'rax';
import View from 'rax-view';
import Text from 'rax-text';
import { Icon } from '@alifd/meet';

import styles from './index.module.css';

import { Properties, Keys } from '@/pages/Tower/types';

interface Props {
  properties: Properties;
  keys: Keys;
}

export function Card({ properties, keys }: Props) {
  const propertyConfig = [
    {
      className: 'role-life',
      icon: 'heart-filling',
      iconColor: 'red',
      propName: '生命',
      propValue: properties.life,
    },
    {
      className: 'role-attack',
      icon: 'heart-filling',
      iconColor: 'red',
      propName: '攻击',
      propValue: properties.attack,
    },
    {
      className: 'role-defense',
      icon: 'heart-filling',
      iconColor: 'red',
      propName: '防御',
      propValue: properties.defense,
    },
    {
      className: 'role-money',
      icon: 'heart-filling',
      iconColor: 'red',
      propName: '金钱',
      propValue: properties.gold,
    },

  ];
  const keyConfig = [
    {
      color: 'brown',
      count: keys.yellow,
    },
    {
      color: 'blue',
      count: keys.blue,
    },
    {
      color: 'red',
      count: keys.red,
    },
  ];
  return (
    <View className={styles.card}>
      <View className={styles['role-properties']}>
        {propertyConfig.map((property) => (
          <View className={styles[property.className]} key={property.className}>
            <Icon name={property.icon} className={styles['mr-50']} style={{ color: property.iconColor }} />
            <View className={styles['role-property']}>
              <Text className={[styles['property-name'], styles['mr-50']]}>{property.propName}</Text>
              <Text className={styles['property-value']}>{property.propValue}</Text>
            </View>
          </View>
        ))}
      </View>
      <View className={styles.keys}>
        {keyConfig.map((key) => (
          <View className={styles.key} key={key.color}>
            <Icon name="ascending" style={{ color: key.color }} className={styles['mr-50']} />
            <Text>{key.count}</Text>
          </View>
        ))}
      </View>
    </View>
  );
}

export default Card;
