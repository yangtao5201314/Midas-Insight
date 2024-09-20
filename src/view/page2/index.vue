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
