/*
 * @Author: loveyy520 201357337@qq.com
 * @Date: 2022-12-27 01:03:45
 * @LastEditors: loveyy520 201357337@qq.com
 * @LastEditTime: 2022-12-30 23:17:18
 * @FilePath: \rax-example\src\pages\Home\index.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { createElement } from 'rax';
import navigate from '@uni/navigate';
import { getCurrentPages } from '@uni/application';
import View from 'rax-view';
import { Button } from '@alifd/meet';
import styles from './index.module.css';
import Logo from '../../components/Logo';

export default function Home() {
  type ButtonType = 'normal' | 'primary' | 'warning' | 'inverse'
  const buttons = [
    {
      title: '开始游戏',
      type: 'normal' as ButtonType,
      onclick: async () => {
        await navigate.replace({
          url: '/pages/Tower/index'
        })
      }
    },
    {
      title: '继续游戏',
      type: 'normal' as ButtonType,
      onclick: async () => {
        await navigate.push({
          url: '/pages/tower'
        })
      }
    },
    {
      title: '退出游戏',
      type: 'warning' as ButtonType,
      onclick: () => null
    },
  ]
  return (
    <View className={styles.homeContainer}>
      <Logo uri="//gw.alicdn.com/tfs/TB1MRC_cvb2gK0jSZK9XXaEgFXa-1701-1535.png" />
      {buttons.map(button => <Button key={button.title} type={button.type} size="large" fullWidth onClick={button.onclick}>{button.title}</Button>)}
    </View>
  );
}
