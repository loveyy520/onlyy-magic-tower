import { NpcType } from './../types/articles';
import { MagicStore } from './../types/floors';
import {
  Properties,
  HandleMove,
  MoveTo,
  Obstacle,
  ObstacleMap,
  GetObstacleMap,
  GetObstacleHandlers,
  HandleArticle,
  HasObstacle,
  ValidatePosition,
  SetMessage,
  Fight,
  RemoveArticle,
  EnhanceAbility,
  GainArticle,
  ArticleType,
  Property,
  UpdateFloors,
  WarriorState,
  DialogContent,
  Position,
  RaxSetState,
  UpdateWarrior,
} from '@/types';
/* @Author: loveyy520 201357337@qq.com
 * @Date: 2023-01-01 11:27:30
 * @LastEditors: loveyy520 201357337@qq.com
 * @LastEditTime: 2023-01-02 01:49:55
 * @FilePath: \magic-tower\src\utils\controller.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import propertyData from '@/article_property';

let updateFloorState: UpdateFloors<number>;
let updateWarriorState: UpdateWarrior;
let setNpc: RaxSetState<ArticleType | undefined>;
let targetPosition: Position;

export const handleMove: HandleMove = (
  position,
  floorState,
  warriorState,
  updateFloors,
  updateWarrior,
  setDialogContent,
) => {
  targetPosition = [...position];
  const obstacleMap = getObstacleMap(floorState);
  const [isValid, obstacle, obstacleType] = validatePosition(position, obstacleMap);
  updateWarriorState !== updateWarrior && (updateWarriorState = updateWarrior); // moveTo需要用到，因此先行赋值
  updateFloorState !== updateFloors && (updateFloorState = updateFloors);
  setNpc !== setDialogContent && (setNpc = setDialogContent);
  if (isValid) return moveTo(position);
  const obstacleHandlers = getObstacleHandlers();
  Object.keys(obstacleHandlers).includes(obstacleType!) &&
    obstacleHandlers[obstacleType!](obstacle, floorState, warriorState);
};

const getObstacleMap: GetObstacleMap = (floorState) => {
  const { walls, weakWalls, doors, stairs, monsters, npcs, articles, magicStore } = floorState;
  const obstacleMap: ObstacleMap = {
    wall: walls,
    weakWall: weakWalls,
    door: doors,
    stair: stairs,
    monster: monsters,
    NPC: npcs,
    article: articles,
    magicStore,
  };
  return obstacleMap;
};

const validatePosition: ValidatePosition = (position, obstacleMap) => {
  const [x, y] = position;
  if (!x || !y || x === 12 || y === 12) return [false];
  for (const key in obstacleMap) {
    const [isObstacle, obstacle] = hasObstacle(position, obstacleMap[key]);
    if (isObstacle) return [false, obstacle, key];
  }
  return [true];
};

const moveTo: MoveTo = (position) => {
  updateWarriorState({ position, msg: '' });
};

const getObstacleHandlers: GetObstacleHandlers = () => ({
  wall: handleWall,
  weakWall: handleWeakWall,
  door: handleDoor,
  stair: handleStair,
  monster: handleMonster,
  NPC: handleNPC,
  article: handleArticle,
  magicStore: handleMagicStore,
});

const hasObstacle: HasObstacle = ([targetX, targetY], obstacles) => {
  if (!obstacles) return [false];
  if (obstacles.id === 'magic-store') return hasMagicStore([targetX, targetY], obstacles);
  const allObstacles = (obstacles as Obstacle[]).reduce<Obstacle[]>((pre, cur) => {
    const { positions } = cur;
    pre.push(
      ...positions.map((position) => ({
        ...cur,
        positions: [position],
      })),
    );
    return pre;
  }, []);
  const item = allObstacles.find((obstacle: Obstacle) => {
    const [[x, y]] = obstacle.positions;
    return x === targetX && y === targetY;
  });
  return item ? [true, item] : [false];
};

const hasMagicStore: HasObstacle = ([targetX, targetY], obstacles: MagicStore) => {
  const { positions } = obstacles;
  return positions.some(([x, y]) => x === targetX && y === targetY) ? [true, obstacles] : [false];
};

// 当新位置处有各种障碍物
const handleWall: HandleArticle = (wall) => {
  setMessage('一堵墙挡在了你面前.');
};
const handleWeakWall: HandleArticle = (weakWall, floorState, warriorState) => {
  removeArticle(weakWall, floorState);
};
const handleDoor: HandleArticle = (door, floorState, warriorState) => {
  const msgMap = {
    yellow: ['你缺少1把黄钥匙.', '你消耗了1把黄钥匙打开了门.'],
    blue: ['你缺少1把蓝钥匙.', '你消耗了1把蓝钥匙打开了门.'],
    red: ['你缺少1把红钥匙.', '你消耗了1把红钥匙打开了门.'],
  };
  const withKeys: string[] = ['yellow', 'blue', 'red'];
  const { doorType } = door;
  if (!withKeys.includes(doorType!)) return setMessage('似乎目前无法打开这扇门.');
  const { keys } = warriorState;
  const keyCount = keys[doorType!];
  if (!keyCount) return setMessage(msgMap[doorType!][0]);
  removeArticle(door, floorState);
  updateWarriorState({
    keys: {
      ...keys,
      [doorType!]: keyCount - 1,
    },
    msg: msgMap[doorType!][1],
  });
};
const handleStair: HandleArticle = (stair, floorState, warriorState) => {
  updateWarriorState({
    position: stair.positions[0],
  });
  const { nextFloor, nextStairPosition } = stair;
  const updatedData: Partial<WarriorState> = {
    floor: nextFloor!,
    position: nextStairPosition!,
    msg: `你来到了第${nextFloor!}层.`,
  };
  nextFloor! > warriorState.highestFloor && (updatedData.highestFloor = nextFloor);
  setTimeout(() => {
    updateWarriorState(updatedData);
  }, 0);
};
const handleMonster: HandleArticle = async (monster, floorState, warriorState) => {
  const { atk, def, life, gold, displayName } = propertyData[monster.name] as Property;
  const { attack, defense, life: warriorLife } = warriorState.properties;
  const damage = attack - def;
  if (damage <= 0) return setMessage('你还不能打败它.');
  const round = Math.ceil(life / damage);
  const injury = atk - defense > 0 ? atk - defense : 0;
  const canBeat = warriorLife > injury * (round - 1);
  if (!canBeat) return setMessage('你还不能打败它.');
  moveTo(monster.positions[0]);
  const fightingParams = {
    round,
    injury,
    gold,
    enemyName: displayName!,
    warriorProperty: warriorState.properties,
  };
  await fight(fightingParams);
  removeArticle(monster, floorState);
};
const handleNPC: HandleArticle = (NPC, floorState, warriorState) => {
  NPC.dialogContent && setNpc(NPC);
};
const handleArticle: HandleArticle = (article, floorState, warriorState) => {
  if (['potion', 'gem'].includes(article.type)) {
    enhanceAbility(article.name, warriorState);
  } else {
    gainArticle(article, warriorState);
  }
  removeArticle(article, floorState);
};
const handleMagicStore: HandleArticle = (magicStore, floorState, warriorState) => {
  const {
    positions: [p1, [x, y]],
    selections,
  } = magicStore;
  if (x !== targetPosition[0] || y !== targetPosition[1]) return setMessage('似乎来到了商店附近.');
  const { shoppingCost } = warriorState;
  const shoppingSelections = selections.map((selection) => ({
    ...selection,
    cost: shoppingCost,
  }));
  const virtualNpc: NpcType = {
    id: 'magic-store',
    name: 'magic-store',
    type: 'npc',
    positions: [[x, y]],
    dialogContent: {
      conversations: ['欢迎！我尊贵的客人！您想来点什么？'],
      selections: shoppingSelections,
    },
    articleType: 'permanent',
  };
  setNpc(virtualNpc);
};

export const setMessage: SetMessage = (msg, updateMsg = updateWarriorState) => {
  updateMsg({
    msg,
  });
};

const fight: Fight = async ({ round, injury, gold, enemyName, warriorProperty }) => {
  if (round--) {
    let properties: Properties;
    await new Promise<void>((resolve) => {
      setTimeout(() => {
        properties = {
          ...warriorProperty,
          life: warriorProperty.life - injury,
        };
        warriorProperty = properties;
        updateWarriorState({
          properties,
        });
        resolve();
      }, 100);
    });
    await fight({ round, injury, gold, enemyName, warriorProperty: properties! });
  }
  updateWarriorState({
    properties: {
      ...warriorProperty,
      gold: warriorProperty.gold + gold,
    },
    msg: `你击败了${enemyName}，获得了${gold}个金币!`,
  });
};

export const removeArticle: RemoveArticle = (article, floorState) => {
  const { id, type, positions } = article;
  const keys = ['door', 'weakWall', 'wall', 'monster', 'npc'];
  const propType = keys.includes(type) ? `${type}s` : 'articles';
  const originalArticles: ArticleType[] = floorState[propType];
  const index = originalArticles.findIndex((originalArticle) => originalArticle.id === id);

  if (index < 0) return;
  const leftArticlePositions = originalArticles[index].positions.filter((position) => position !== positions[0]);
  const leftArticles = originalArticles.slice();
  leftArticles.splice(index, 1, { ...originalArticles[index], positions: leftArticlePositions });
  updateFloorState({
    [propType]: leftArticles,
  });
};

const enhanceAbility: EnhanceAbility = (articleName, warriorState) => {
  const level = Math.ceil(warriorState.floor / 10) - 1;
  const { life = 0, atk = 0, def = 0, gold = 0, displayName } = propertyData[articleName][level] as Property;
  const { life: warriorLife, attack, defense, gold: warriorGold } = warriorState.properties;
  let value: number;
  let propertyName: string;
  switch (true) {
    case !!life:
      value = life;
      propertyName = '生命值';
      break;
    case !!atk:
      value = atk;
      propertyName = '攻击力';
      break;
    case !!def:
      value = def;
      propertyName = '防御力';
      break;
    case !!gold:
      value = gold;
      propertyName = '金币';
      break;
    default:
      value = 0;
      propertyName = 'Nothing';
  }

  updateWarriorState({
    properties: {
      life: warriorLife + life,
      attack: attack + atk,
      defense: defense + def,
      gold: warriorGold + gold,
    },
    msg: `你获得了${displayName},增加了${value}点${propertyName}.`,
  });
};

export const gainArticle: GainArticle = (article, warriorState) => {
  let property: Property;
  let displayName: string;
  let value: number;
  let propName: '攻击力' | '防御力';
  let articleProp: 'atk' | 'def';
  let prop: string;
  switch (article.type) {
    case 'equipment':
      property = propertyData[article.name] as Property;
      displayName = property.displayName!;
      if (property.atk) {
        value = property.atk;
        propName = '攻击力';
        articleProp = 'atk';
        prop = 'attack';
      } else {
        value = property.def;
        propName = '防御力';
        articleProp = 'def';
        prop = 'defense';
      }
      updateWarriorState({
        properties: {
          ...warriorState.properties,
          [prop]: (property[articleProp] as number) + (warriorState.properties[prop] as number),
        },
        msg: `你获得了${displayName},增加了${value}点${propName}.`,
      });
      break;
    case 'key':
      prop = article.name.split('-')[0];
      updateWarriorState({
        keys: {
          ...warriorState.keys,
          [prop]: (warriorState.keys[prop] as number) + 1,
        },
        msg: `你获得了一把${article.displayName}.`,
      });
      break;
    case 'treasure':
      // const {name, displayName} = article;
      prop = article.name;
      displayName = article.displayName!;
      updateWarriorState({
        treasures: {
          ...warriorState.treasures,
          [prop]: warriorState.treasures[prop] + 1,
        },
        msg: `你获得了${displayName}.`,
      });
      break;
    default:
  }
};
