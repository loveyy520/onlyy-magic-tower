import { Position } from '@/types';
import { createElement } from 'rax';
import View from 'rax-view';

import styles from './index.module.css';

interface MagicStoreProps {
  positions: Position[];
  unitSize: number;
}
export function MagicStore({ positions, unitSize }: MagicStoreProps) {
  const [x, y] = positions[1];
  return (
    <View
      className={['base-item', styles.store]}
      style={{
        left: `${(x - 2) * unitSize}rpx;`,
        bottom: `${(y - 1) * unitSize}rpx;`,
      }}
    >
      <View
        className={['base-item', styles['store-door']]}
        style={{
          left: `${unitSize + 4}rpx;`,
        }}
      />
    </View>
  );
}

export default MagicStore;
