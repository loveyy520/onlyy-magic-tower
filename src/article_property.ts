/*
 * @Author: loveyy520 201357337@qq.com
 * @Date: 2023-01-02 12:06:32
 * @LastEditors: loveyy520 201357337@qq.com
 * @LastEditTime: 2023-01-02 20:00:39
 * @FilePath: \magic-tower\src\article_property.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { ArticleProperty, Treasure } from '@/types';

const articleData: ArticleProperty = {
  'red-potion': [
    {
      life: 50,
      atk: 0,
      def: 0,
      gold: 1,
      displayName: '红药水',
    },
    {
      life: 50,
      atk: 0,
      def: 0,
      gold: 1,
      displayName: '红药水',
    },
    {
      life: 50,
      atk: 0,
      def: 0,
      gold: 1,
      displayName: '红药水',
    },
    {
      life: 50,
      atk: 0,
      def: 0,
      gold: 1,
      displayName: '红药水',
    },
    {
      life: 50,
      atk: 0,
      def: 0,
      gold: 1,
      displayName: '红药水',
    },
  ],
  'blue-potion': [
    {
      life: 200,
      atk: 0,
      def: 0,
      gold: 1,
      displayName: '蓝药水',
    },
    {
      life: 200,
      atk: 0,
      def: 0,
      gold: 1,
      displayName: '蓝药水',
    },
    {
      life: 200,
      atk: 0,
      def: 0,
      gold: 1,
      displayName: '蓝药水',
    },
    {
      life: 200,
      atk: 0,
      def: 0,
      gold: 1,
      displayName: '蓝药水',
    },
  ],
  ruby: [
    {
      life: 0,
      atk: 1,
      def: 0,
      gold: 0,
      displayName: '红宝石',
    },
    {
      life: 0,
      atk: 1,
      def: 0,
      gold: 0,
      displayName: '红宝石',
    },
    {
      life: 0,
      atk: 1,
      def: 0,
      gold: 0,
      displayName: '红宝石',
    },
    {
      life: 0,
      atk: 1,
      def: 0,
      gold: 0,
      displayName: '红宝石',
    },
    {
      life: 0,
      atk: 1,
      def: 0,
      gold: 0,
      displayName: '红宝石',
    },
  ],
  sapphire: [
    {
      life: 0,
      atk: 0,
      def: 1,
      gold: 0,
      displayName: '蓝宝石',
    },
    {
      life: 0,
      atk: 0,
      def: 1,
      gold: 0,
      displayName: '蓝宝石',
    },
    {
      life: 0,
      atk: 0,
      def: 1,
      gold: 0,
      displayName: '蓝宝石',
    },
    {
      life: 0,
      atk: 0,
      def: 1,
      gold: 0,
      displayName: '蓝宝石',
    },
    {
      life: 0,
      atk: 0,
      def: 1,
      gold: 0,
      displayName: '蓝宝石',
    },
  ],
  'iron-sword': {
    life: 0,
    atk: 10,
    def: 0,
    gold: 0,
    displayName: '铁剑',
  },
  'iron-shield': {
    life: 0,
    atk: 0,
    def: 10,
    gold: 0,
    displayName: '铁盾',
  },
  'green-slim': {
    life: 35,
    atk: 18,
    def: 1,
    gold: 1,
    displayName: '绿史莱姆',
  },
  'red-slim': {
    life: 45,
    atk: 20,
    def: 2,
    gold: 2,
    displayName: '红史莱姆',
  },
  'little-bat': {
    life: 35,
    atk: 38,
    def: 3,
    gold: 3,
    displayName: '小蝙蝠',
  },
  'junior-wizard': {
    life: 60,
    atk: 32,
    def: 8,
    gold: 5,
    displayName: '初级巫师',
  },
  'skeleton-man': {
    life: 50,
    atk: 42,
    def: 6,
    gold: 6,
    displayName: '骷髅人',
  },
  'skeleton-soldier': {
    life: 55,
    atk: 52,
    def: 12,
    gold: 8,
    displayName: '骷髅士兵',
  },
  'junior-guard': {
    life: 50,
    atk: 48,
    def: 22,
    gold: 12,
    displayName: '初级守卫',
  },
  'intermediate-guard': {
    life: 100,
    atk: 180,
    def: 110,
    gold: 50,
    displayName: '中级守卫',
  },
  'skeleton-captain': {
    life: 100,
    atk: 65,
    def: 15,
    gold: 30,
    displayName: '骷髅队长',
  },
};
interface TreasureData {
  [key: string]: Treasure;
}
export const treasureData: TreasureData = {
  'monster-manual': {
    displayName: '怪物手册',
    count: 0,
    consumable: false,
  },
  'flying-cane': {
    displayName: '飞行手杖',
    count: 0,
    consumable: false,
  },
  notebook: {
    displayName: '记事本',
    count: 0,
    consumable: false,
  },
};

export default articleData;
