<script lang="ts" setup>
import { ref, reactive, onMounted } from "vue";
import { ElMessage } from 'element-plus'
import { ArrowRightBold } from '@element-plus/icons-vue'
import * as echarts from "echarts";
const activeNames = ref(["1", "2", "3", "4", "5", "6"]); //默认展开第几列

// 折叠面板按钮事件
const handleChange = (val: string[]) => {
  console.log(val);
};
// 健康度
const chartDom = ref(null);
let chartInstance = null;
const healthEchat = () => {
  chartInstance = echarts.init(chartDom.value);
  const option = {
    backgroundColor: "rgba(0,0,0,0)",
    series: [
      {
        name: "刻度",
        type: "gauge",
        radius: "53%",
        min: 0, //最小刻度
        max: 100, //最大刻度
        splitNumber: 10, //刻度数量
        startAngle: 225,
        endAngle: -45,
        axisLine: {
          show: true,
          lineStyle: {
            width: 1,
            color: [[1, "rgba(0,0,0,0)"]]
          }
        }, //仪表盘轴线
        axisLabel: {
          show: true,
          color: "#ffffff",
          distance: 20,
          formatter: function (v) {
            switch (v + "") {
              case "0":
                return "0";
              case "10":
                return "10";
              case "20":
                return "20";
              case "30":
                return "30";
              case "40":
                return "40";
              case "50":
                return "50";
              case "60":
                return "60";
              case "70":
                return "70";
              case "80":
                return "80";
              case "90":
                return "90";
              case "100":
                return "100";
            }
          }
        }, //刻度标签。
        axisTick: {
          show: true,
          splitNumber: 9,
          lineStyle: {
            color: "#fff",
            width: 0.3
          },
          length: -15
        }, //刻度样式
        splitLine: {
          show: true,
          length: -25,
          lineStyle: {
            color: "#fff",
            width: 0.5,
            height: 0.5
          }
        }, //分隔线样式
        detail: {
          show: false
        },
        pointer: {
          show: false
        }
      },
      {
        type: "gauge",
        radius: "40%",
        center: ["50%", "50%"],

        splitNumber: 0, //刻度数量
        startAngle: 225,
        endAngle: -45,
        axisLine: {
          show: true,
          lineStyle: {
            width: 25,
            color: [
              [
                0.96,
                new echarts.graphic.LinearGradient(0, 0, 1, 0, [
                  {
                    offset: 0,
                    color: "#ffb498"
                    // color: "#5c53de"
                  },
                  {
                    offset: 1,
                    color: "#ffb498"
                    // color: "#18c8ff"
                  }
                ])
              ],
              [1, "#413e54"]
            ]
          }
        },
        //分隔线样式。
        splitLine: {
          show: false
        },
        axisLabel: {
          show: false
        },
        axisTick: {
          show: false
        },
        pointer: {
          show: false
        },
        title: {
          show: true,
          offsetCenter: [0, "-26%"], // x, y，单位px
          textStyle: {
            color: "#fff",
            fontSize: 16
          }
        },
        //仪表盘详情，用于显示数据。
        detail: {
          show: true,
          offsetCenter: [0, "16%"],
          color: "#ffffff",
          formatter: function (params) {
            return params;
          },
          textStyle: {
            fontSize: 30,
            color: "#ffab91",
          }
        },
        data: [
          {
            name: "总体健康度",
            value: 96
          }
        ]
      }
    ]
  };

  chartInstance.setOption(option);
};

// 下拉菜单
interface droType {
  label:string
}
const drowData = reactive<droType[]>([{
  label: "11-1MP04"
},{
  label: "VS1"
}])
const shebeiValue = ref<string | number | object>("11-1MP04")
const handleCommand = (command: string | number | object) => {
  console.log(`click on item ${command}`)
  shebeiValue.value = command
}
// 查看文档
const seeWend = ()=>{
  
}

onMounted(async () => {
  healthEchat();
});
</script>
<template>
  <div class="demo-collapse">
    <el-collapse v-model="activeNames" @change="handleChange">
      <el-collapse-item title="--设备信息" name="1" :icon="ArrowRightBold">
        <div class="p-15px box-border flex">
          <div class="w-[405px] h-[240px] bg-#151515 ml-10px pos-relative">
            <div ref="chartDom" style="width: 465px; height: 410px;" class="chartDomcL"></div>
          </div>
          <div class="w-[405px] h-[240px] ml-[15px] flex flex-col justify-between">
            <div class="w-100% h-48% bg-#151515 flex flex-col justify-center items-center">
              <div class="c-#c2c2c2 font-size-20px">选择设备</div>
              <el-dropdown placement="bottom"  @command="handleCommand">
                <div class="flex w-150px h-30px items-center justify-center">  
                  <div class="mr-10px c-#c6c6c6">{{ shebeiValue }}</div>  
                  <el-icon :size="20" color="#636363">
                    <CaretBottom />
                  </el-icon></div>
                <template #dropdown>
                  <el-dropdown-menu>
                    <el-dropdown-item :command="item.label" v-for="(item,index) in drowData" :key="index">{{ item.label }}</el-dropdown-item>
                  </el-dropdown-menu>
                </template>
              </el-dropdown>
            </div>
            <div class="w-100% h-48% bg-#151515 flex items-center justify-center font-size-16px cursor-pointer" @click="seeWend">查看文档</div>
          </div>
        </div>
      </el-collapse-item>

    </el-collapse>
  </div>
</template>

<style scoped>
.demo-collapse {
  padding-right: 20px;
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
}

.twoleft {
  width: 405px;
  height: 240px;
  background: #151515;
  margin-left: 10px;
  position: relative;
}

.chartDomcL {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -45%);
}
</style>