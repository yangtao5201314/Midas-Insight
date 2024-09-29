<!--
 * @Author: 杨涛 2749552387@qq.com
 * @Date: 2024-09-24 11:31:46
 * @LastEditors: 杨涛 2749552387@qq.com
 * @LastEditTime: 2024-09-29 16:17:00
 * @FilePath: \Midas-Insight\src\components\Trend.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<script lang="ts" setup>
import { ref, reactive, onMounted, nextTick } from "vue";
import { ArrowRightBold } from '@element-plus/icons-vue'    
import { dainLiuData } from "@/utils/echars1.ts"
import { currentFun ,getLastWeekTime ,getCurrentTime } from "@/utils/utils.ts"
const activeNames = ref(["1", "2", "3", "4", "5", "6"]); //默认展开第几列
// 折叠面板按钮事件
const handleChange = (val: string[]) => {
  console.log(val);
};


// 日期范围选择
const valueStart = ref(getLastWeekTime())   //开始时间
const valueEnd = ref(getCurrentTime()) //结束时间
// 开始时间选定时间事件
const dataChangeStart = (data: any) => {
  console.log("开始时间", data)
}
// 结束时间选定时间事件
const dataChangeEnd = (data: any) => {
  console.log("结束时间", data)
}
// 电流数据
const chartDom = ref(null);
const chartBom = reactive({
  name: "电流",
  unit: 'A'
});
// 电压数据
const dianyaDom = ref(null);
const dianyachart = reactive({
  name: "电压",
  unit: 'KV'
});
// 有功功率
const youGongDom = ref(null);
const youGongchart = reactive({
  name: "有功功率",
  unit: 'KW'
});
// 无功功率
const wuGongDom = ref(null);
const wuGongchart = reactive({
  name: "无功功率",
  unit: 'kvar'
});
// 视在功率
const shiZaiDom = ref(null);
const shiZaichart = reactive({
  name: "视在功率",
  unit: 'kVA'
});

// 温度趋势
// 环境温度
// 日期范围选择
const hvalueStart = ref(getLastWeekTime())   //开始时间
const hvalueEnd = ref(getCurrentTime()) //结束时间
// 开始时间选定时间事件
const hdataChangeStart = (data: any) => {
  console.log("开始时间", data)
}
// 结束时间选定时间事件
const hdataChangeEnd = (data: any) => {
  console.log("结束时间", data)
}
// 环境温度数据
const huanJinDom = ref(null);
const huanJinBom = reactive({
  name: "环境温度",
  unit: '℃'
});
// A相进线数据
const AxjDom = ref(null);
const AxjBom = reactive({
  name: "A相进线",
  unit: '℃'
});
// B相进线数据
const BxjDom = ref(null);
const BxjBom = reactive({
  name: "B相进线",
  unit: '℃'
});
// C相进线数据
const CxjDom = ref(null);
const CxjBom = reactive({
  name: "C相进线",
  unit: '℃'
});
// A相出线数据
const AxcDom = ref(null);
const AxcBom = reactive({
  name: "A相出线",
  unit: '℃'
});
// B相出线数据
const BxcDom = ref(null);
const BxcBom = reactive({
  name: "B相出线",
  unit: '℃'
});
// C相出线数据
const CxcDom = ref(null);
const CxcBom = reactive({
  name: "C相出线",
  unit: '℃'
});

// 温场温度
// 日期范围选择
const svalueStart = ref(getLastWeekTime())   //开始时间
const svalueEnd = ref(getCurrentTime()) //结束时间
// 开始时间选定时间事件
const sdataChangeStart = (data: any) => {
  console.log("开始时间", data)
}
// 结束时间选定时间事件
const sdataChangeEnd = (data: any) => {
  console.log("结束时间", data)
}
// 温场1-A相进线数据
const shichangDom = ref(null);
const shichangBom = reactive({
  name: "温场1-A相进线",
  unit: '℃'
});
// 温场1-B相进线数据
const sc1Dom = ref(null);
const sc1Bom = reactive({
  name: "温场1-B相进线",
  unit: '℃'
});
// 温场1-C相进线数据
const sccDom = ref(null);
const sccBom = reactive({
  name: "温场1-C相进线",
  unit: '℃'
});
// 温场2-A相进线数据
const sc2aDom = ref(null);
const sc2aBom = reactive({
  name: "温场2-A相进线",
  unit: '℃'
});
// 温场2-B相进线数据
const sc2bDom = ref(null);
const sc2bBom = reactive({
  name: "温场2-B相进线",
  unit: '℃'
});
// 温场2-C相进线数据
const sc2cDom = ref(null);
const sc2cBom = reactive({
  name: "温场2-C相进线",
  unit: '℃'
});
// 温场3-A相进线数据
const sc3aDom = ref(null);
const sc3aBom = reactive({
  name: "温场3-A相进线",
  unit: '℃'
});
// 温场3-B相进线数据
const sc3bDom = ref(null);
const sc3bBom = reactive({
  name: "温场3-B相进线",
  unit: '℃'
});
// 温场2-C相进线数据
const sc3cDom = ref(null);
const sc3cBom = reactive({
  name: "温场3-C相进线",
  unit: '℃'
});

onMounted(async () => {
  await nextTick()
  await currentFun(chartDom, chartBom, dainLiuData)  //电流数据
  await currentFun(dianyaDom,dianyachart,dainLiuData)  //电压数据
  await currentFun(youGongDom,youGongchart,dainLiuData)  //有功率数据
  await currentFun(wuGongDom,wuGongchart,dainLiuData)  //无功率数据
  await currentFun(shiZaiDom,shiZaichart,dainLiuData)  //视在功率
  await currentFun(huanJinDom,huanJinBom,dainLiuData)  //环境温度数据
  await currentFun(AxjDom,AxjBom,dainLiuData)  //A相进线数据
  await currentFun(BxjDom,BxjBom,dainLiuData)  //B相进线数据
  await currentFun(CxjDom,CxjBom,dainLiuData)  //C相进线数据
  await currentFun(AxcDom,AxcBom,dainLiuData)  //A相出线数据
  await currentFun(BxcDom,BxcBom,dainLiuData)  //B相出线数据
  await currentFun(CxcDom,CxcBom,dainLiuData)  //C相出线数据
  await currentFun(shichangDom,shichangBom,dainLiuData)  //温场1-A相进线数据
  await currentFun(sc1Dom,sc1Bom,dainLiuData)  //温场1-B相进线数据
  await currentFun(sccDom,sccBom,dainLiuData)  //温场1-C相进线数据
  await currentFun(sc2aDom,sc2aBom,dainLiuData)  //温场2-A相进线数据
  await currentFun(sc2bDom,sc2bBom,dainLiuData)  //温场2-B相进线数据
  await currentFun(sc2cDom,sc2cBom,dainLiuData)  //温场2-C相进线数据
  await currentFun(sc3aDom,sc3aBom,dainLiuData)  //温场3-A相进线数据
  await currentFun(sc3bDom,sc3bBom,dainLiuData)  //温场3-B相进线数据
  await currentFun(sc3cDom,sc3cBom,dainLiuData)  //温场3-C相进线数据
});
</script>
<template>
  <div class="demo-collapse">
    <el-collapse v-model="activeNames" @change="handleChange">
      <el-collapse-item title="--电气参数" name="1" :icon="ArrowRightBold">
        <div class="pa-[15px] box-border flex">
          <div class="bg-#151515 w-[750px] h-[120px] items-center">
            <div
              class="w-[100%] font-size-[1rem] text-align-center p-t-[12px] flex flex-col items-center justify-center m-b-[20px]">
              开始时间</div>
            <div>
              <div class="demo-date-picker">
                <div class="block">
                  <el-date-picker v-model="valueStart" type="date" placeholder="请选择开始时间" :default-value="new Date()"
                    @change="dataChangeStart" />
                </div>
              </div>
            </div>
          </div>
          <div class="ml-[20px] bg-#151515 w-[750px] h-[120px]">
            <div
              class="w-[100%] font-size-[1rem] text-align-center p-t-[12px] flex flex-col items-center justify-center m-b-[20px]">
              结束时间</div>
            <div>
              <div class="demo-date-picker">
                <div class="block">
                  <el-date-picker v-model="valueEnd" type="date" placeholder="请选择开始时间" :default-value="new Date()"
                    @change="dataChangeEnd" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- 电流 -->
        <div class="pa-[15px] box-border">
          <div ref="chartDom" class="w-[1520px] h-[420px]"></div>
        </div>
        <!-- 电压 -->
        <div class="pa-[15px] box-border">
          <div ref="dianyaDom" class="w-[1520px] h-[420px]"></div>
        </div>
        <!-- 有功功率 -->
        <div class="pa-[15px] box-border">
          <div ref="youGongDom" class="w-[1520px] h-[420px]"></div>
        </div>
        <!-- 无功功率 -->
        <div class="pa-[15px] box-border">
          <div ref="wuGongDom" class="w-[1520px] h-[420px]"></div>
        </div>
        <!-- 视在功率 -->
        <div class="pa-[15px] box-border">
          <div ref="shiZaiDom" class="w-[1520px] h-[420px]"></div>
        </div>
      </el-collapse-item>
      <el-collapse-item title="--环境温度" name="2" :icon="ArrowRightBold">
        <div class="pa-[15px] box-border flex">
          <div class="bg-#151515 w-[750px] h-[120px] items-center">
            <div
              class="w-[100%] font-size-[1rem] text-align-center p-t-[12px] flex flex-col items-center justify-center m-b-[20px]">
              开始时间</div>
            <div>
              <div class="demo-date-picker">
                <div class="block">
                  <el-date-picker v-model="hvalueStart" type="date" placeholder="请选择开始时间" :default-value="new Date()"
                    @change="hdataChangeStart" />
                </div>
              </div>
            </div>
          </div>
          <div class="ml-[20px] bg-#151515 w-[750px] h-[120px]">
            <div
              class="w-[100%] font-size-[1rem] text-align-center p-t-[12px] flex flex-col items-center justify-center m-b-[20px]">
              结束时间</div>
            <div>
              <div class="demo-date-picker">
                <div class="block">
                  <el-date-picker v-model="hvalueEnd" type="date" placeholder="请选择开始时间" :default-value="new Date()"
                    @change="hdataChangeEnd" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- 环境温度 -->
        <div class="pa-[15px] box-border">
          <div ref="huanJinDom" class="w-[1520px] h-[420px]"></div>
        </div>
        <!-- A相进线 -->
        <div class="pa-[15px] box-border">
          <div ref="AxjDom" class="w-[1520px] h-[420px]"></div>
        </div>
        <!-- B相进线 -->
        <div class="pa-[15px] box-border">
          <div ref="BxjDom" class="w-[1520px] h-[420px]"></div>
        </div>
        <!-- C相进线 -->
        <div class="pa-[15px] box-border">
          <div ref="CxjDom" class="w-[1520px] h-[420px]"></div>
        </div>
        <!-- A相出线 -->
        <div class="pa-[15px] box-border">
          <div ref="AxcDom" class="w-[1520px] h-[420px]"></div>
        </div>
        <!-- B相出线 -->
        <div class="pa-[15px] box-border">
          <div ref="BxcDom" class="w-[1520px] h-[420px]"></div>
        </div>
        <!-- C相出线 -->
        <div class="pa-[15px] box-border">
          <div ref="CxcDom" class="w-[1520px] h-[420px]"></div>
        </div>
      </el-collapse-item>
      <el-collapse-item title="--温场温度" name="3" :icon="ArrowRightBold">
        <div class="pa-[15px] box-border flex">
          <div class="bg-#151515 w-[750px] h-[120px] items-center">
            <div
              class="w-[100%] font-size-[1rem] text-align-center p-t-[12px] flex flex-col items-center justify-center m-b-[20px]">
              开始时间</div>
            <div>
              <div class="demo-date-picker">
                <div class="block">
                  <el-date-picker v-model="svalueStart" type="date" placeholder="请选择开始时间" :default-value="new Date()"
                    @change="sdataChangeStart" />
                </div>
              </div>
            </div>
          </div>
          <div class="ml-[20px] bg-#151515 w-[750px] h-[120px]">
            <div
              class="w-[100%] font-size-[1rem] text-align-center p-t-[12px] flex flex-col items-center justify-center m-b-[20px]">
              结束时间</div>
            <div>
              <div class="demo-date-picker">
                <div class="block">
                  <el-date-picker v-model="svalueEnd" type="date" placeholder="请选择开始时间" :default-value="new Date()"
                    @change="sdataChangeEnd" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- 温场1-A相进线 -->
        <div class="pa-[15px] box-border">
          <div ref="shichangDom" class="w-[1520px] h-[420px]"></div>
        </div>
        <!-- 温场1-B相进线-->
        <div class="pa-[15px] box-border">
          <div ref="sc1Dom" class="w-[1520px] h-[420px]"></div>
        </div>
        <!-- 温场1-C相进线 -->
        <div class="pa-[15px] box-border">
          <div ref="sccDom" class="w-[1520px] h-[420px]"></div>
        </div>
        <!-- 温场2-A相进线 -->
        <div class="pa-[15px] box-border">
          <div ref="sc2aDom" class="w-[1520px] h-[420px]"></div>
        </div>
        <!-- 温场2-B相进线 -->
        <div class="pa-[15px] box-border">
          <div ref="sc2bDom" class="w-[1520px] h-[420px]"></div>
        </div>
        <!-- 温场2-C相进线 -->
        <div class="pa-[15px] box-border">
          <div ref="sc2cDom" class="w-[1520px] h-[420px]"></div>
        </div>
        <!-- 温场3-A相进线 -->
        <div class="pa-[15px] box-border">
          <div ref="sc3aDom" class="w-[1520px] h-[420px]"></div>
        </div>
        <!-- 温场3-B相进线 -->
        <div class="pa-[15px] box-border">
          <div ref="sc3bDom" class="w-[1520px] h-[420px]"></div>
        </div>
        <!-- 温场3-C相进线 -->
        <div class="pa-[15px] box-border">
          <div ref="sc3cDom" class="w-[1520px] h-[420px]"></div>
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
  /* padding: 30px 0; */
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

:deep(.el-picker-panel__footer) {
  background-color: #04308D;
  border: 1px solid #326AFF
}

:deep(.el-picker-panel [slot=sidebar]),
.el-picker-panel__sidebar {
  background-color: #04308D !important;
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
  border-top-color: #326AFF !important;
  border-bottom-width: 0;
}

:deep(.el-picker-panel) {
  background: #04308D !important;
  color: #fff;
}

:deep(.el-date-table td.in-range div, .el-date-table td.in-range div:hover, .el-date-table.is-week-mode .el-date-table__row.current div, .el-date-table.is-week-mode .el-date-table__row:hover div) {
  background-color: #326AFFc9 !important;
}

.el-date-range-picker__time-header {
  border-bottom: 1px solid #326AFF;
}

.el-date-range-picker__content.is-left {
  border-right: 1px solid #326AFF;
}

:deep(.el-popper).is-light .el-popper__arrow::before {
  border: 1px solid #326AFF;
  background: #04308D;
  right: 0;
}

.el-popper.is-pure {
  border: 1px solid #326AFF;
}

:deep(.el-input__wrapper) {
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

:deep(.el-picker-panel__footer) .el-button {
  background-color: #326aff;
  border: 1px solid #326AFF;
  color: #fff;
}

:deep(.el-button).is-text:not(.is-disabled):hover {
  background-color: #326aff;
}

.in-range {
  color: #326aff;

}
</style>