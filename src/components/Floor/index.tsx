/*
 * @Author: loveyy520 201357337@qq.com
 * @Date: 2022-12-30 21:59:57
 * @LastEditors: loveyy520 201357337@qq.com
 * @LastEditTime: 2023-01-01 14:14:25
 * @FilePath: \rax-example\src\components\Floor\index.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { createElement } from 'rax';
import View from 'rax-view';
import store from "@/store";
import { px2rpx } from '@uni/unit-tool';
import styles from './index.module.css'
import {
  Warrior, Wall,
  // WeakWall, Monster, Article, NPC 
} from '@/components'
import { handleMove } from '@/utils'

import { WallType, WeakWallType, MonsterType, ArticleType, NpcType, Position, SinglePosition } from '@/types'

interface Props {
  warriorPosition: Position,
  walls: WallType[],
  weakWalls: WeakWallType[],
  monsters: MonsterType[],
  articles: ArticleType[],
  npc: NpcType[],
  unitSize: number
}

function Floor({ warriorPosition, walls, weakWalls, monsters, articles, npc, unitSize }: Props) {
  const [{ position, floor }, { update: updateWarrior }] = store.useModel('warrior')
  const [floors, { update: updateFloors }] = store.useModel('floors')
  const currentFloor = floors[floor]
  const handleFloorClick = (e: TouchEvent) => {
    const [x, y] = position as SinglePosition
    let { clientX, clientY } = e.touches[0]
    // 外边框 34rpx ， 一个单元格 62rpx
    clientX = Math.ceil((px2rpx(clientX) - 34) / 62)
    clientY = Math.ceil((716 - px2rpx(clientY)) / 62)
    const movingHorizontally = Math.abs(clientX - x) >= Math.abs(clientY - y)
    let newPosition: SinglePosition
    if (movingHorizontally) {
      newPosition = clientX > x ? [x + 1, y] : clientX === x ? [x, y] : [x - 1, y]
    } else {
      newPosition = clientY > y ? [x, y + 1] : clientY === y ? [x, y] : [x, y - 1]
    }

    handleMove(newPosition, currentFloor, updateWarrior)
  }

  return (
    <View
      className={styles.floor}
      style={{ backgroundSize: `${unitSize}rpx` }}
      onClick={handleFloorClick}>
      <Warrior position={warriorPosition} unitSize={unitSize}></Warrior>
      {walls.map(wall => (
        <Wall position={wall.position} key={wall.id} id={wall.id} unitSize={unitSize} />
      ))}
      {/* {weakWalls.map(weakWall => (
        <WeakWall position={weakWall.position} key={weakWall.id} unitSize={unitSize}/>
      ))}
      {monsters.map(monster => (
        <Monster position={monster.position} key={monster.id} unitSize={unitSize}/>
      ))}
      {articles.map(article => (
        <Article position={article.position} key={article.id} unitSize={unitSize}/>
      ))}
      {npc.map(item => (
        <NPC position={item.position} key={item.id} unitSize={unitSize}/>
      ))} */}
    </View>
  );
}

export default Floor;
