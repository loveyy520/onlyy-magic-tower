/*
 * @Author: loveyy520 201357337@qq.com
 * @Date: 2022-12-31 09:37:00
 * @LastEditors: loveyy520 201357337@qq.com
 * @LastEditTime: 2022-12-31 18:46:43
 * @FilePath: \magic-tower\src\components\Warrior\index.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { createElement } from 'rax';
import View from 'rax-view';
import styles from './index.module.css'
import { Position } from "@/types";
interface WarriorProps {
  position: Position,
  unitSize: number
}
export function Warrior({ position: [x, y], unitSize }: WarriorProps) {
  return (
    <View
      className={['base-item', styles.warrior]}
      style={{
        left: `${(x - 1) * unitSize}rpx`,
        bottom: `${((y as number) - 1) * unitSize}rpx`,
        backgroundPosition: `0rpx 0px`
      }}>
    </View>
  );
}

export default Warrior;
