/*
 * @Author: loveyy520 201357337@qq.com
 * @Date: 2022-12-30 21:59:57
 * @LastEditors: loveyy520 201357337@qq.com
 * @LastEditTime: 2023-01-02 01:02:13
 * @FilePath: \rax-example\src\components\Floor\index.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { createElement, useState } from 'rax';
import View from 'rax-view';
import store, { IRootDispatch, IRootState } from '@/store';
import { px2rpx } from '@uni/unit-tool';
import styles from './index.module.css';
import {
  Warrior,
  Article,
  Dialog,
  MagicStore,
} from '..';
import { handleMove } from '@/pages/Tower/utils';

import {
  ArticleType,
  Position,
  DialogContent,
  NpcType,
} from '@/pages/Tower/types';

interface Props {
  warriorState: IRootState['warrior'];
  updateWarrior: IRootDispatch['warrior']['update'];
  unitSize: number;
}

export function Floor({ warriorState, unitSize, updateWarrior }: Props) {
  const [dialogVisible, toggleDialog] = useState(false);
  const initNpc = (): NpcType | undefined => undefined;
  const [currentNpc, setNpcState] = useState(initNpc);
  const [onFinishTalking, setFinishTalking] = useState<Function>(() => () => null);
  const setNpc = (NPC: NpcType, onFinishTalking?: Function): void => {
    setNpcState(NPC);
    setFinishTalking(onFinishTalking!);
    !dialogVisible && toggleDialog(true);
  };
  // const [floor, setFloor] = useState(1);
  const [floorState, { update: updateFloorState }] = store.useModel(`floor${warriorState.floor}`);
  const { walls, weakWalls, monsters, doors, stairs, articles, npcs, magicStore } = floorState;
  const allArticles: ArticleType[] = [
    ...walls,
    ...weakWalls,
    ...articles,
    ...doors,
    ...stairs,
    ...monsters,
    ...npcs,
  ];
  const [isDark, setDark] = useState(false);
  const [isDark2Light, setDark2Light] = useState(false);
  const calcPosition = (startPosition: Position, e: TouchEvent): Position => {
    const [x, y] = startPosition;
    let { clientX, clientY } = e.touches[0];
    // 外边框 34rpx ， 一个单元格 62rpx
    clientX = Math.ceil((px2rpx(clientX) - 34) / 62);
    clientY = Math.ceil((716 - px2rpx(clientY)) / 62);
    const movingHorizontally = Math.abs(clientX - x) >= Math.abs(clientY - y);
    let newPosition: Position;
    if (movingHorizontally) {
      if (clientX > x) {
        newPosition = [x + 1, y];
      } else {
        newPosition = clientX === x ? [x, y] : [x - 1, y];
      }
    } else if (clientY > y) {
      newPosition = [x, y + 1];
    } else {
      newPosition = clientY === y ? [x, y] : [x, y - 1];
    }
    return newPosition;
  };
  const handleFloorClick = (e: TouchEvent) => {
    if (dialogVisible) return;
    const newPosition = calcPosition(warriorState.position, e);
    handleMove(newPosition, floorState, warriorState, updateFloorState, updateWarrior, setNpc, setDark, setDark2Light);
  };
  return (<>
    <View
      className={styles.floor}
      onClick={handleFloorClick}
    >
      <Warrior
        position={warriorState.position}
        unitSize={unitSize}
      />
      <>
        {
          allArticles.map((article) => (
            <Article
              id={article.id}
              name={article.name}
              positions={article.positions}
              key={article.id}
              unitSize={unitSize}
            />
          ))
        }
      </>
      {
        dialogVisible &&
        <Dialog onContinue={toggleDialog} NPC={currentNpc} onFinished={onFinishTalking} />
      }
      {
        magicStore &&
        <MagicStore
          unitSize={unitSize}
          positions={magicStore.positions}
        />
      }
    </View>
    <View
      className={
        [
          isDark ? styles.dark : styles.light,
          isDark2Light ? styles.dark2light : '',
        ]
      }
    />
  </>);
}

export default Floor;
