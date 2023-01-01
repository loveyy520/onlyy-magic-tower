/*
 * @Author: loveyy520 201357337@qq.com
 * @Date: 2022-12-31 10:25:54
 * @LastEditors: loveyy520 201357337@qq.com
 * @LastEditTime: 2023-01-01 17:03:50
 * @FilePath: \magic-tower\src\components\Article\index.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { createElement } from 'rax';
import View from 'rax-view';
import { Position } from "@/types";

import styles from './index.module.css'

interface ArticleProps {
  id: string,
  positions: Position[],
  name: string,
  unitSize: number
}

export function Article({ id, name, positions, unitSize }: ArticleProps) {
  return (
    <>
      {positions.map(([x, y], i) => (
        <View
          className={['base-item', styles[name]]}
          key={`${id}-${i}`}
          style={{
            left: `${(x - 1) * unitSize}rpx;`,
            bottom: `${(y - 1) * unitSize}rpx;`
          }}>
        </View>
      ))}
    </>
  );
}

export default Article;
