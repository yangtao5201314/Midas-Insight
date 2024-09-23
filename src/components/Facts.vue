<template>
  <div class="demo-collapse">
    <el-collapse v-model="activeNames" @change="handleChange">
      <el-collapse-item title="--柜体" name="1" :icon="ArrowRightBold">
        <div class="contEne">
          <div class="EneItem">11-1MP04</div>
        </div>
      </el-collapse-item>
      <el-collapse-item title="--健康度" name="2">
        <template #icon="{ isActive }">
          <span class="icon-ele">{{ isActive ? 'Expanded' : 'Collapsed' }}</span>
        </template>
        <div>
          Operation feedback: enable the users to clearly perceive their
          operations by style updates and interactive effects;
        </div>
        <div>
          Visual feedback: reflect current state by updating or rearranging
          elements of the page.
        </div>
      </el-collapse-item>
    </el-collapse>
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";

const activeNames = ref(["1"]);
const handleChange = (val: string[]) => {
  console.log(val);
};
</script>

<style scoped>
.icon-ele {
  margin: 0 8px 0 auto;
  color: #409eff;
}
/deep/.el-collapse {
  background-color: rgba(0, 0, 0, 0) !important;
}
/deep/.el-collapse,
.el-collapse-item__wrap {
  border: none;
  background-color: rgba(0, 0, 0, 0) !important;
}
/deep/ .el-collapse-item__wrap {
  border-bottom: 1px solid #000000 !important;
}
/deep/ .el-collapse-item__header {
  color: #fff;
  font-weight: bold;
  font-size: 1em;
  border-bottom: 1px solid #000000;
  background-color: rgba(0, 0, 0, 0) !important;
}
/deep/ .el-collapse-item__content {
  color: #fff;
  background-color: rgba(0, 0, 0, 1) !important;
}
/deep/ button:focus,
button:focus-visible {
  outline: none !important; /* 移除默认的边框 */
  box-shadow: none !important; /* 移除阴影效果（如果有的话） */
}
.contEne {
  /* color: #ffffff; */
}
.EneItem {
    width: 200px;
    height: 60px;
  background: #151515;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  font-weight: bold;
  font-size: 1.6em;
}
</style>