/*
 * @Author: loveyy520 201357337@qq.com
 * @Date: 2022-12-30 21:59:57
 * @LastEditors: loveyy520 201357337@qq.com
 * @LastEditTime: 2023-01-01 19:57:51
 * @FilePath: \rax-example\src\components\Floor\index.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { createElement } from 'rax';
import View from 'rax-view';
import store, { IRootDispatch, IRootState } from "@/store";
import { px2rpx } from '@uni/unit-tool';
import styles from './index.module.css'
import {
  Warrior,
  Article
} from '@/components'
import { handleMove } from '@/utils'

import {
  ArticleType,
  Position,
} from '@/types'

interface Props {
  warriorState: IRootState['warrior'],
  updateWarrior: IRootDispatch['warrior']['update'],
  unitSize: number
}

function Floor({ warriorState, unitSize, updateWarrior }: Props) {
  const [floors, { update: updateFloors }] = store.useModel('floors')

  const { walls, weakWalls, monsters, doors, stairs, articles, npc } = floors[warriorState.floor]
  const currentFloor = floors[warriorState.floor]
  const handleFloorClick = (e: TouchEvent) => {
    const [x, y] = warriorState.position as Position
    let { clientX, clientY } = e.touches[0]
    // 外边框 34rpx ， 一个单元格 62rpx
    clientX = Math.ceil((px2rpx(clientX) - 34) / 62)
    clientY = Math.ceil((716 - px2rpx(clientY)) / 62)
    const movingHorizontally = Math.abs(clientX - x) >= Math.abs(clientY - y)
    let newPosition: Position
    if (movingHorizontally) {
      newPosition = clientX > x ? [x + 1, y] : clientX === x ? [x, y] : [x - 1, y]
    } else {
      newPosition = clientY > y ? [x, y + 1] : clientY === y ? [x, y] : [x, y - 1]
    }

    handleMove(newPosition, currentFloor, warriorState, updateFloors, updateWarrior)
  }
  const allArticles: ArticleType[] = [
    ...walls,
    ...weakWalls,
    ...articles,
    ...doors,
    ...stairs,
    ...monsters,
    ...npc
  ]

  return (
    <View
      className={styles.floor}
      style={{ backgroundSize: `${unitSize}rpx` }}
      onClick={handleFloorClick}>
      <Warrior
        position={warriorState.position}
        unitSize={unitSize}>
      </Warrior>
      <>
        {allArticles.map(article => (
          <Article
            id={article.id}
            name={article.name}
            positions={article.positions}
            key={article.id}
            unitSize={unitSize}
          />
        ))}
      </>
    </View>
  );
}

export default Floor;
