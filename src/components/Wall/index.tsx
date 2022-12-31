import { createElement } from 'rax';
import View from 'rax-view';

import styles from './index.module.css'

import { Position } from "@/types";
interface WallProps {
  id: string
  position: Position
  unitSize: number
}

export function Wall({ position, id, unitSize }: WallProps) {
  const [x, y] = position
  const yArr = Array.isArray(y) ? y : [y]

  return (<>
    {
      yArr.map(y => (
        <View
          className={['base-item', styles.wall]}
          style={{
            left: `${(x - 1) * unitSize}rpx;`,
            bottom: `${(y - 1) * unitSize}rpx;`,
            backgroundPosition: `0% 100%;`
          }}
          key={`${id}-${y}`}>
        </View>
      ))
    }
  </>)
}

export default Wall;
