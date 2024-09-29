<!--
 * @Author: 杨涛 2749552387@qq.com
 * @Date: 2024-09-20 16:54:36
 * @LastEditors: 杨涛 2749552387@qq.com
 * @LastEditTime: 2024-09-29 11:06:28
 * @FilePath: \Midas-Insight\src\view\page2\index.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div>
    当前数字：
    <div>页面二 {{ contNumNm }}</div>
    <el-button type="danger" @click="ClearBtn">清除</el-button>
  </div>
</template>
<script setup lang="ts">
import { ref } from "vue";

const contNumNm = ref(0);   
const wsPage2 = new WebSocket("ws://localhost:1004");
const ClearBtn = () => {
  wsPage2.send("xiaozi");
};
// onMounted(async ()=>{
//     await nextTick()
// })
wsPage2.addEventListener("message", msg => {
  contNumNm.value = Number(String(msg.data));
  //   console.log("------>", contNumNm.value);
});
</script>

<style scoped>
</style>
