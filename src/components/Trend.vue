<!--
 * @Author: 杨涛 2749552387@qq.com
 * @Date: 2024-09-24 11:31:46
 * @LastEditors: 杨涛 2749552387@qq.com
 * @LastEditTime: 2024-09-25 10:49:30
 * @FilePath: \Midas-Insight\src\components\Trend.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<script lang="ts" setup>
import { ref, reactive, onMounted } from "vue";
import { ArrowRightBold } from '@element-plus/icons-vue'
import { dainLiuData,dainLiuDataArrayData } from "@/utils/echars1.ts"
import { formatTimestampWithMicroseconds } from "@/utils/utils.ts"

import * as echarts from "echarts";
const activeNames = ref(["1", "2", "3", "4", "5", "6"]); //默认展开第几列
// 折叠面板按钮事件
const handleChange = (val: string[]) => {
  console.log(val);
};
// 获取当前时间 格式为 YYYY-MM-DD 
const getCurrentTime = () => {
  const now = new Date();
  const year = now.getFullYear();
  const month = now.getMonth() + 1; // 月份从0开始
  const day = now.getDate();

  return `${year}-${month}-${day}`;
};
// 获取当前时间前一周的时间 格式为 YYYY-MM-DD 
const getLastWeekTime = () => {
  const now = new Date();
  now.setDate(now.getDate() - 7); // 获取当前时间的前一周

  const year = now.getFullYear();
  const month = now.getMonth() + 1; // 月份从0开始
  const day = now.getDate();

  return `${year}-${month}-${day}`;
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
let chartInstance = null;
const currentFun = (echData: any, jdata: undefined[][]) => {
  chartInstance = echarts.init(chartDom.value);
  console.log("====", jdata);

  var charts = {
    unit: "A",
    names:
      jdata[1][0] == undefined ? ["储能数据"] : ["储能数据", "储能数据2"],
    lineX: echData,
    value: jdata,
  };
  // 折线的颜色
  var color = ["rgba(23, 255, 243", "rgba(255,100,97"];
  var lineY = [];

  for (var i = 0; i < charts.names.length; i++) {
    var x = i;
    if (x > color.length - 1) {
      x = color.length - 1;
    }
    var data = {
      name: charts.names[i],
      type: "line",
      color: color[x] + ")",
      smooth: true,
      areaStyle: {
        normal: {
          color: new echarts.graphic.LinearGradient(
            0,
            0,
            0,
            1,
            [
              {
                offset: 0,
                color: color[x] + ", 0.3)",
              },
              {
                offset: 0.8,
                color: color[x] + ", 0)",
              },
            ],
            false
          ),
          shadowColor: "rgba(0, 0, 0, 0.1)",
          shadowBlur: 10,
        },
      },
      symbol: "circle",
      symbolSize: 5,
      data: charts.value[i],
    };
    lineY.push(data);
  }

  lineY[0].markLine = {
    silent: true,
    data: [
      {
        yAxis: -1,
      },
      {
        yAxis: 2,
      },
      {
        yAxis: 3,
      },
      {
        yAxis: 4,
      },
      {
        yAxis: 5,
      },
    ],
  };
  const option = {
    backgroundColor: "rgba(0,0,0,1)", //背景色
    tooltip: {
      trigger: "axis",
    },
    dataZoom: [
      {
        type: "slider", // 滑块型缩放
        start: 0, // 起始百分比
        end: 100, // 结束百分比
      },
      {
        type: "inside", // 内置型缩放
        start: 0,
        end: 100,
      },
    ],
    toolbox: {
      show: true,
      feature: {
        dataZoom: {
          // 缩放工具
          show: true,
        },
        restore: {
          // 恢复默认视图
          show: true,
        },
      },
    },
    legend: {
      data: charts.names,
      textStyle: {
        fontSize: 12,
        color: "rgb(0,253,255,0.6)", //legend 的颜色
      },
      right: "4%",
    },
    grid: {
      top: "14%",
      left: "4%",
      right: "4%",
      bottom: "12%",
      containLabel: true,
    },
    xAxis: {
      type: "category",
      boundaryGap: false,
      data: charts.lineX,
      axisLabel: {
        // x轴的数字颜色
        textStyle: {
          color: "rgb(0,253,255,0.6)",
        },
        formatter: function (params) {
          return params.split(" ")[0] + "\n" + params.split(" ")[1];
        },
      },
    },
    yAxis: {
      name: charts.unit,
      type: "value",
      axisLabel: {
        formatter: "{value}",
        //   数字颜色
        textStyle: {
          color: "rgb(0,253,255,0.6)",
        },
      },
      // 标线的颜色
      splitLine: {
        lineStyle: {
          color: "rgb(23,255,243,0.3)",
        },
      },
      // 单位的颜色
      axisLine: {
        lineStyle: {
          color: "rgb(0,253,255,0.6)",
        },
      },
    },
    series: lineY,  
  };

  chartInstance.setOption(option);
};

onMounted(async () => {
  const newData = dainLiuData.map((item: any[])=> formatTimestampWithMicroseconds(item[0]))
  currentFun(newData,dainLiuDataArrayData)
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
        <div class="pa-[15px] box-border">
          <div ref="chartDom" class="w-[1500px] h-[420px]"></div>
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