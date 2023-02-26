/*
 * @Author: loveyy520 201357337@qq.com
 * @Date: 2022-12-31 09:37:00
 * @LastEditors: loveyy520 201357337@qq.com
 * @LastEditTime: 2022-12-31 18:46:43
 * @FilePath: \magic-tower\src\components\Warrior\index.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { createElement, useState } from 'rax';
import View from 'rax-view';
import styles from './index.module.css';
import { Position } from '@/pages/Tower/types';

interface WarriorProps {
  position: Position;
  unitSize: number;
}
export function Warrior({ position: [x, y], unitSize }: WarriorProps) {
  const bgPositionMap = {
    up: '',
    down: '66.5% 41.2%',
    left: '',
    right: '',
  };
  const initBgPosition = (direction: 'up' | 'down' | 'left' | 'right') => bgPositionMap[direction];
  const [bgPosition, setBgPosition] = useState('66.5% 37.6%');
  return (
    <View
      className={['base-item', styles.warrior]}
      style={{
        left: `${(x - 1) * unitSize}rpx`,
        bottom: `${((y as number) - 1) * unitSize}rpx`,
        backgroundPosition: bgPosition,
      }}
    />
  );
}

export default Warrior;
