<!--
 * @Author: 杨涛 2749552387@qq.com
 * @Date: 2024-09-24 11:31:46
 * @LastEditors: 杨涛 2749552387@qq.com
 * @LastEditTime: 2024-09-25 09:20:40
 * @FilePath: \Midas-Insight\src\components\Trend.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<script lang="ts" setup>
import { ref, reactive, onMounted } from "vue";
import { ArrowRightBold } from '@element-plus/icons-vue'

import * as echarts from "echarts";
const activeNames = ref(["1", "2", "3", "4", "5", "6"]); //默认展开第几列
// 折叠面板按钮事件
const handleChange = (val: string[]) => {
  console.log(val);
};
// 日期范围选择
const value1 = ref('2024-1-1')
const dataChaange = () => {

}

onMounted(async () => {
});
</script>
<template>
  <div class="demo-collapse">
    <el-collapse v-model="activeNames" @change="handleChange">
      <el-collapse-item title="--电气参数" name="1" :icon="ArrowRightBold">
        <div class="pa-[15px] box-border flex">
          <div class="bg-#151515 w-[750px] h-[120px]">
            <div class="w-[100%] font-size-[1rem] text-align-center p-t-[12px]">开始</div>
            <div>
              <div class="demo-date-picker">
                <div class="block">
                  <el-date-picker v-model="value1" type="date" placeholder="请选择开始时间"
                    :default-value="new Date()" />
                </div>
              </div>
            </div>
          </div>
          <div class="ml-[20px] bg-#151515 w-[750px] h-[120px]">
            <div>结束事件</div>
            <div></div>
          </div>
          <div></div>
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

:deep(.el-collapse) {
  border-top: 1px solid #000000;
  background-color: rgba(0, 0, 0, 0) !important;
}

:deep(.el-collapse) .el-collapse-item__wrap {
  border: none;
  background-color: rgba(0, 0, 0, 0) !important;

}

:deep(.el-collapse-item__wrap) {
  border-bottom: 1px solid #000000 !important;
}

:deep(.el-collapse-item__header) {
  color: #fff;
  font-weight: bold;
  font-size: 1em;
  border-bottom: 1px solid #000000;
  background-color: rgba(0, 0, 0, 0) !important;
}

:deep(.el-collapse-item__content) {
  color: #fff;
  background-color: rgba(0, 0, 0, 1) !important;
}

:deep(button:focus),
button:focus-visible {
  outline: none !important;
  /* 移除默认的边框 */
  box-shadow: none !important;
  /* 移除阴影效果（如果有的话） */
  border-bottom: 1px solid #000000;
}

/* 日期范围样式 */
.demo-date-picker {
  display: flex;
  width: 100%;
  padding: 0;
  flex-wrap: wrap;
}

.demo-date-picker .block {
  padding: 30px 0;
  text-align: center;
  border-right: solid 1px var(--el-border-color);
  flex: 1;
}

.demo-date-picker .block:last-child {
  border-right: none;
}

.demo-date-picker .demonstration {
  display: block;
  color: var(--el-text-color-secondary);
  font-size: 14px;
  margin-bottom: 20px;
}

/* 日期选择框的样式 */

:deep(.el-date-picker).has-sidebar.has-time {
    background: #04308D;
    color: #fff;
    border: 1px solid #326AFF
}
:deep(.el-date-picker__header-label) {
    color: #ffffff;
}
:deep(.el-date-table) th {
    color: #fff;
}
:deep(.el-icon-d-arrow-left:before) {
    color: #fff;
}
.el-icon-arrow-left:before {
    color: #fff;
}
.el-icon-arrow-right:before {
    color: #fff;
}
.el-icon-d-arrow-right:before {
    color: #fff;
}
:deep(.el-picker-panel__footer){
    background-color: #04308D;
    border: 1px solid #326AFF
}
:deep(.el-picker-panel [slot=sidebar]), .el-picker-panel__sidebar {
    background-color: #04308D  !important;
    border-right: 1px solid #326AFF;   
}
:deep(.el-picker-panel__shortcut) {
    color: #fff;
}
:deep(.el-date-picker__time-header) {
    border-bottom: 1px solid #326AFF;
}
.el-popper[x-placement^=bottom] .popper__arrow::after {
    top: 1px;
    margin-left: -6px;
    border-top-width: 0;
    border-bottom-color: #04308D;
}
.el-popper[x-placement^=top] .popper__arrow::after {
    bottom: 1px;
    margin-left: -6px;
    border-top-color: #326AFF  !important;
    border-bottom-width: 0;
}
:deep(.el-picker-panel) {
    background: #04308D !important;
    color: #fff;
}
:deep(.el-date-table td.in-range div, .el-date-table td.in-range div:hover, .el-date-table.is-week-mode .el-date-table__row.current div, .el-date-table.is-week-mode .el-date-table__row:hover div) {
    background-color: #326AFFc9 !important;
}
.el-date-range-picker__time-header{
    border-bottom: 1px solid #326AFF;
}
.el-date-range-picker__content.is-left{
    border-right: 1px solid #326AFF;
}
:deep(.el-popper).is-light .el-popper__arrow::before {
    border: 1px solid #326AFF;
    background: #04308D;
    right: 0;
}
.el-popper.is-pure {
    border:  1px solid #326AFF;
}
:deep(.el-input__wrapper ){
    border: 1px solid #ffffff !important;
    box-shadow: 0 0 0 0px #151515 inset;
    background: #151515 !important;
}
:deep(.el-input__wrapper) .el-input__inner {
    background: #151515 !important;
    font-size: 14px;
    font-weight: 400;
    color: #FFFFFF;
}
:deep(.el-picker-panel__footer) .el-button.is-text {
    color: #fff;
    border: 0 solid transparent;
    background-color: transparent;
}
:deep(.el-picker-panel__footer) .el-button{
    background-color: #326aff;
    border: 1px solid #326AFF;
    color: #fff;
}
:deep(.el-button).is-text:not(.is-disabled):hover {
    background-color: #326aff;
}
.in-range{
    color: #326aff;
}
</style>