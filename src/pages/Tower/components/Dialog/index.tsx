import { createElement, useEffect, useState, useCallback } from 'rax';
import View from 'rax-view';
import Text from 'rax-text';
import { Button } from '@alifd/meet';

import store from '@/store';
import { setMessage, removeArticle, gainArticle } from '@/pages/Tower/utils';

import styles from './index.module.css';

import { DialogContent, Goods, NpcOwn, NpcType, Removal, WarriorState } from '@/pages/Tower/types';

interface DialogProps {
  onContinue: Function;
  NPC?: NpcType;
  onFinished: Function;
}

export function Dialog({ onContinue, NPC, onFinished }: DialogProps) {
  const initDialogContent = (): DialogContent => ({
    conversations: ['亲爱的勇士，欢迎进入魔塔！'],
    selections: [
      {
        name: 'attack',
        displayName: '攻击力',
        type: 'properties',
        subType: 'attack',
        count: 2,
        cost: 10,
        bgColor: '#093b4e',
      },
      {
        name: 'defense',
        displayName: '防御力',
        type: 'properties',
        subType: 'defense',
        count: 4,
        cost: 10,
      },
    ],
  });
  const { dialogContent = initDialogContent(), npcOwns: owns, articleType } = NPC || {};
  const { conversations = [''], selections } = dialogContent!;
  const [contentIndex, setIndex] = useState(0);
  const [talkingContent, setContent] = useState(conversations[contentIndex] || '');
  const { length } = conversations;
  const keepTalking = useCallback((extra = 0) =>
    length > contentIndex + (extra as number), [contentIndex, length]);
  useEffect(() => {
    keepTalking() && setContent(conversations[contentIndex]);
  }, [contentIndex, conversations, keepTalking]);
  const hasSelections = selections && !!selections.length;
  const defaultBgColor = '#093b4e';
  const handleDialogContinue = () => {
    if (keepTalking(1)) return setIndex(contentIndex + 1);
    onContinue(false);
    onFinished && onFinished()
    articleType === 'consumable' && removeArticle(NPC!, floorState);
    owns && handleOwns();
  };
  const [warrior, { update: updateWarrior }] = store.useModel('warrior');
  const [floorState, { update: updateFloor }] = store.useModel(`floor${warrior.floor}`);
  const handleSelection = (selection: Goods) => {
    const { properties: { gold } } = warrior;
    const { displayName, type, subType, count, cost } = selection;
    if (cost && gold < cost) return setMessage('你太穷了，买不起这个！', updateWarrior);
    const originalValue: number = warrior[type][subType];
    const costMsg = cost ? `，花费了${cost}金币` : '';
    const param: Partial<WarriorState> = {
      [type]: {
        ...warrior[type],
        [subType]: originalValue + count,
      },
      msg: `你获得了${displayName} x ${count}${costMsg}.`,
    };
    type === 'properties' && cost && (param[type]!.gold = gold - cost);
    updateWarrior(param);

    onContinue(false);
    onFinished && onFinished()
  };
  const handleOwns = () => {
    owns?.forEach((own) => {
      ownHandlers[own.type](own.articles);
    });
  };
  const ownHandlers = {
    removal: (articles: Removal[]) => {
      articles.forEach((article) => {
        const { type, positions } = article;
        const originalArticles = floorState[`${type}s`][0]; // 游戏里只有walls
        const { positions: originalPositions } = originalArticles;

        const leftPositions = originalPositions.filter(([x, y]) =>
          !positions.some(([pX, pY]) => x === pX && y === pY));
        const leftArticles = {
          ...originalArticles,
          positions: leftPositions,
        };
        updateFloor({
          [`${type}s`]: [
            leftArticles,
          ],
        });
      });
    },
  };
  const buttonTypeHandlers = {
    selection: handleSelection,
    exit: () => onContinue(false),
    continue: handleDialogContinue,
  };
  const handleButtonClick = ({ target }: MouseEvent) => {
    const { dataset, parentNode } = target as HTMLElement;
    const type = dataset.type || (parentNode! as HTMLElement).dataset.type;
    const data = dataset.data || (parentNode! as HTMLElement).dataset.data;
    let param;
    switch (type) {
      case 'selection':
        param = selections![data!];
        break;
      case 'exit':
        param = false;
        break;
      default:
        param = undefined;
    }
    buttonTypeHandlers[type!](param);
  };
  return (
    <View className={[styles.dialog, hasSelections ? '' : styles['pb-130']]}>
      <View className={['base-item', styles.avator, NPC ? styles[NPC.name] : styles['default-icon']]} />
      {
        <Text className={styles.text}>
          {talkingContent}
        </Text>
      }
      <View
        className={styles['button-container']}
        onClick={handleButtonClick}
      >
        {
          hasSelections && selections.map((selection, i) => (
            <Button
              className={styles.selection}
              style={{ background: selection.bgColor || defaultBgColor }}
              data-type="selection"
              data-data={i}
              size="medium"
              type="primary"
              fullWidth
              key={`${selection.name}+${selection.count}`}
            >
              {`${selection.displayName} +${selection.count}（花费${selection.cost}金币）`}
            </Button>
          ))
        }
        {
          hasSelections &&
          <Button
            className={[styles.selection, styles['exit-button']]}
            data-type="exit"
            size="medium"
            type="primary"
            fullWidth
          >
            我不需要！
          </Button>
        }
        {
          !hasSelections &&
          <Button
            className={styles.button}
            data-type="continue"
            size="large"
            type="normal"
          >
            继续
          </Button>
        }
      </View>
    </View>
  );
}

export default Dialog;
