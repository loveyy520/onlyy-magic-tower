/*
 * @Author: loveyy520 201357337@qq.com
 * @Date: 2023-01-04 13:13:08
 * @LastEditors: loveyy520 201357337@qq.com
 * @LastEditTime: 2023-01-05 13:25:01
 * @FilePath: \magic-tower\src\components\Treasures\index.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { createElement } from 'rax';
import View from 'rax-view';
import { Grid, Cell, Space } from '@alifd/mobile-layout';

import styles from './index.module.css';

const treasures = [
  {
    id: '1-1',
    cellStyle: { background: 'purple' },
  },
  {
    id: '1-2',
    cellStyle: { background: 'green' },
  },
  {
    id: '1-3',
    cellStyle: { background: 'purple' },
  },
  {
    id: '1-4',
    cellStyle: { background: 'green' },
  },
  {
    id: '1-5',
    cellStyle: { background: 'purple' },
  },
  {
    id: '1-6',
    cellStyle: { background: 'green' },
  },
  {
    id: '1-7',
    cellStyle: { background: 'purple' },
  },
  {
    id: '1-8',
    cellStyle: { background: 'green' },
  },
  {
    id: '2-1',
    cellStyle: { background: 'purple' },
  },
  {
    id: '2-2',
    cellStyle: { background: 'green' },
  },
  {
    id: '2-3',
    cellStyle: { background: 'purple' },
  },
  {
    id: '2-4',
    cellStyle: { background: 'green' },
  },
  {
    id: '2-5',
    cellStyle: { background: 'purple' },
  },
  {
    id: '2-6',
    cellStyle: { background: 'green' },
  },
  {
    id: '2-7',
    cellStyle: { background: 'purple' },
  },
  {
    id: '2-8',
    cellStyle: { background: 'green' },
  },

];

export function Treasures() {
  const rows = 2;
  const cols = Math.ceil(treasures.length / 2);
  return (
    <View className={styles['treasure-container']}>
      <Grid
        colGap={2}
        rowGap={2}
        cols={cols}
        rows={rows}
        style={{ background: '#f0f0f0' }}
        renderItem={(rowIndex, colIndex) => {
          const treasure = treasures[colIndex + rowIndex * cols];
          return (
            <Cell key={treasure.id} verAlign="middle" className={styles['custom-cell']} style={treasure.cellStyle}>
              {/* <Icon size="large" type={treasure.icon} style={{ color: '#333' }} /> */}
              <View style={{ background: 'pink', width: '80rpx', height: '80rpx' }}>{treasure.id}</View>
              <Space size="small" />
            </Cell>
          );
        }}
      />
    </View>
  );
}

export default Treasures;
