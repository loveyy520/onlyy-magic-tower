/*
 * @Author: loveyy520 201357337@qq.com
 * @Date: 2022-12-30 21:59:22
 * @LastEditors: loveyy520 201357337@qq.com
 * @LastEditTime: 2022-12-30 23:10:53
 * @FilePath: \rax-example\src\pages\Tower\index.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { createElement } from 'rax';
import View from 'rax-view';
import FloorLayout from "@/components/FloorLayout";
import PropertyPanel from "@/components/PropertyPanel";
function Tower() {
  return (
    <View>
      <FloorLayout />
      <PropertyPanel />
    </View>
  );
}

export default Tower;
