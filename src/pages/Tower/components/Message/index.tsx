/*
 * @Author: loveyy520 201357337@qq.com
 * @Date: 2023-01-01 18:43:11
 * @LastEditors: loveyy520 201357337@qq.com
 * @LastEditTime: 2023-01-01 20:52:50
 * @FilePath: \magic-tower\src\components\Message\index.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { createElement } from 'rax';
import View from 'rax-view';

import styles from './index.module.css'

interface MessageProps {
  msg: string
}

export function Message({ msg }: MessageProps) {
  return (
    <View className={styles.msg}>
      {msg}
    </View>
  );
}

export default Message;
