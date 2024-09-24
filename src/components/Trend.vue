<script lang="ts" setup>
import { ref, reactive, onMounted } from "vue";
import { ArrowRightBold } from '@element-plus/icons-vue'
import * as echarts from "echarts";
const activeNames = ref(["1", "2", "3", "4", "5", "6"]); //默认展开第几列


onMounted(async () => {
});
</script>
<template>
  <div class="demo-collapse">
    <el-collapse v-model="activeNames" @change="handleChange">
      <el-collapse-item title="--柜体" name="1" :icon="ArrowRightBold">
        <div class="contEne">
          
        </div>
      </el-collapse-item>
      
    </el-collapse>
  </div>
</template>

<style scoped>
.demo-collapse {
  padding-right: 20px;
}
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
  /* flex-wrap: wrap; */
}
</style>