/*
 * @Author: loveyy520 201357337@qq.com
 * @Date: 2022-12-27 01:03:45
 * @LastEditors: loveyy520 201357337@qq.com
 * @LastEditTime: 2022-12-30 21:41:58
 * @FilePath: \rax-example\src\components\Logo\index.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { createElement } from 'rax';
import Image from 'rax-image';
import Text from 'rax-text';
import styles from './index.module.css';

interface LogoProps {
  uri: string;
}

export default (props: LogoProps) => {
  const { uri } = props;
  const source = { uri };
  return <>
    <Image className={styles.logo} source={source} />
    <Text className={styles.name}>魔塔</Text>
  </>;
};
