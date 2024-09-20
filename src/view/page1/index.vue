<script setup lang="ts">
import { ref,  onMounted, onUnmounted } from "vue";
// import { VxeTableInstance, VxeGridProps } from "vxe-table";
import HelloWorld from "@/components/HelloWorld.vue";
const contNum = ref(0);
const wsPage1 = new WebSocket("ws://localhost:1003");
const Primary = () => {
  contNum.value++;
  wsPage1.send(contNum.value);
};
wsPage1.addEventListener("message", msg => {
  contNum.value = msg.data;
});
// 初始化ECharts实例并设置配置项（这里以折线图为例，但可灵活替换）
onMounted(async () => {});

// 销毁ECharts实例
onUnmounted(() => {});
</script>

<template>
  <div>
    页面1
    变量{{ contNum }}
    <el-button type="primary" @click="Primary">点击更新数据</el-button>
    <HelloWorld />
  </div>
</template>

<style scoped>
</style>
