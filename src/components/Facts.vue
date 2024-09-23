<script lang="ts" setup>
import { ref, reactive } from "vue";
const activeNames = ref(["1","2","3","4"]); //默认展开第几列
interface cabinetType {
  name: string;
  value: string;
}
const cabinet = reactive<cabinetType[]>([
  {
    name: "柜体编号",
    value: "11-1MP04"
  },
  {
    name: "柜体型号",
    value: "KYN28A-12"
  }
]);
const handleChange = (val: string[]) => {
  console.log(val);
};
</script>
<template>
  <div class="demo-collapse">
    <el-collapse v-model="activeNames" @change="handleChange">
      <el-collapse-item title="--柜体" name="1" :icon="ArrowRightBold">
        <div class="contEne">
          <div class="one-item" v-for="(item,index) in cabinet" :key="index">
            <div class="EneItem" style="fontWeight: 400">{{ item.name }}</div>
            <div class="EneItem">{{ item.value }}</div>
          </div>
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
  padding: 15px;
  box-sizing: border-box;
  display: flex;
  flex-wrap: wrap;
}
.one-item {
  width: 450px;
  display: flex;
  justify-content: space-between;
  margin-left: 10px;
  margin-bottom: 10px;
}
.EneItem {
  width: 220px;
  height: 80px;
  line-height: 80px;
  background: #151515;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  font-weight: bold;
  font-size: 1.6em;
}
</style>