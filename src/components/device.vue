<script lang="ts" setup>
import { ref, reactive, onMounted } from "vue";
import type { TableColumnCtx } from 'element-plus'
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
          formatter: function (v: string) {
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
          formatter: function (params: any) {
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
  label: string
}
interface sheType {
  mName: string
  mValue: string
}
interface dro {
  name: string
  value: string
  sheData: sheType[]
}
const drowData = reactive<droType[]>([{
  label: "11-1MP04"
}, {
  label: "VS1"
}])
let zuiData = ref<sheType[]>([])
const shebeiValue = ref<string | number | object>("11-1MP04")
const handleCommand = (command: string | number | object) => {
  shebeiValue.value = command
  const newdata = maxData.find(item => item.name == command)
  zuiData.value = newdata?.sheData
  console.log(zuiData.value)
}

// 11-1MP04的数据
const maxData = reactive<dro[]>([{
  name: "11-1MP04",
  value: "96",
  sheData: [{
    mName: "柜体额定电流",
    mValue: "630A"
  }, {
    mName: "柜体额定电压",
    mValue: "12kV"
  }, {
    mName: "CT比",
    mValue: "100/5"
  }, {
    mName: "继电保护型号",
    mValue: "EMP600N"
  }, {
    mName: "继电保护品牌",
    mValue: "上海耐泽电气"
  }, {
    mName: "工频耐受电压(1min) Ud",
    mValue: "42kV"
  }, {
    mName: "雷电冲击耐受电压 Up",
    mValue: "75kV"
  }, {
    mName: "额定频率Fr",
    mValue: "50Hz"
  }, {
    mName: "柜体IP等级",
    mValue: "IP4X"
  }, {
    mName: "额定短路开断电流 Isc",
    mValue: "40kA"
  }, {
    mName: "额定短时耐受电流 Ik",
    mValue: "40kA"
  }, {
    mName: "柜体编号",
    mValue: "11-1MP04"
  }, {
    mName: "柜体型号",
    mValue: "KYN28A-12"
  }, {
    mName: "柜体类型",
    mValue: "出线柜"
  }, {
    mName: "柜体序列号",
    mValue: "-"
  }, {
    mName: "柜体生产日期",
    mValue: "2024-03"
  }, {
    mName: "柜体投运日期",
    mValue: "2024-04"
  }, {
    mName: "柜体生产厂",
    mValue: "上海快速智能电气有限公司"
  }, {
    mName: "柜体品牌",
    mValue: "上海快速智能电气"
  }, {
    mName: "柜体样本",
    mValue: "无"
  }, {
    mName: "继电保护样本",
    mValue: "EMP600N通用型保护测控装置产品使用手册"
  }, {
    mName: "额定短路接地电流 Isc",
    mValue: "100kA"
  }, {
    mName: "额定短时接地耐受电流 Ik",
    mValue: "无"
  }, {
    mName: "柜体生产厂销售联系人",
    mValue: "-"
  }, {
    mName: "柜体生产厂销售联系电话",
    mValue: "-"
  }, {
    mName: "柜体生产厂技术联系人",
    mValue: "-"
  }, {
    mName: "柜体生产厂技术联系电话",
    mValue: "-"
  }, {
    mName: "柜体生产厂售后服务联系人",
    mValue: "-"
  }, {
    mName: "柜体生产厂售后服务联系电话",
    mValue: "-"
  }, {
    mName: "CT/PT样本",
    mValue: "无"
  }, {
    mName: "柜体图纸",
    mValue: "KS-20B6"
  }
  ]
}, {
  name: "VS1",
  value: "95",
  sheData: [{
    mName: "额定电压",
    mValue: "12kV"
  }, {
    mName: "控制电压",
    mValue: "110VDC"
  }, {
    mName: "工频耐受电压(1min) Ud",
    mValue: "42kV"
  }, {
    mName: "雷电冲击耐受电压 Up",
    mValue: "75kV"
  }, {
    mName: "额定频率Fr",
    mValue: "50Hz"
  }, {
    mName: "额定短路开断电流 Isc",
    mValue: "25kA"
  }, {
    mName: "额定短时耐受电流 Ik",
    mValue: "25kA/4s"
  }, {
    mName: "额定峰值耐受电流 Ip",
    mValue: "63kA"
  }, {
    mName: "操作顺序",
    mValue: "O-0.3S-CO-180s-CO"
  }, {
    mName: "分闸时间",
    mValue: "20~50ms"
  },
  {
    mName: "燃弧时间",
    mValue: ""
  },
  {
    mName: "VCB品牌",
    mValue: "常州森源"
  },
  {
    mName: "型号",
    mValue: "VS1（ZN63A）"
  },
  {
    mName: "类型",
    mValue: "真空断路器（VCB）"
  },
  {
    mName: "序列号",
    mValue: "-"
  },
  {
    mName: "生产日期",
    mValue: "2024-03"
  },
  {
    mName: "投运日期",
    mValue: "2024-04"
  },
  {
    mName: "生产厂信息",
    mValue: "常州森源江南电器有限公司"
  },
  {
    mName: "额定电流",
    mValue: "630A"
  },
  {
    mName: "用户使用手册",
    mValue: "常州森源VS1开关说明书"
  },
  {
    mName: "安装手册",
    mValue: "常州森源VS1开关说明书"
  },
  {
    mName: "合闸时间",
    mValue: "35~70ms"
  },
  {
    mName: "生产厂销售联系人",
    mValue: "-"
  },
  {
    mName: "生产厂销售联系电话",
    mValue: "0519-8810515"
  },
  {
    mName: "生产厂技术联系人",
    mValue: "-"
  },
  {
    mName: "生产厂技术联系电话",
    mValue: "-"
  },
  {
    mName: "生产厂售后服务联系人",
    mValue: "-"
  },
  {
    mName: "生产厂售后服务联系电话",
    mValue: "0519-8852519-861"
  },
  {
    mName: "样本",
    mValue: ""
  },
  {
    mName: "图纸",
    mValue: "常州森源VS1开关说明书"
  },
  {
    mName: "柜体图纸",
    mValue: "--"
  }
  ]
}])
// 查看文档
const dialogTableVisible = ref(true)
const seeWend = () => {
  dialogTableVisible.value = true
}
const handleClick = () => {
  console.log('click')
}

interface RowVO {
  id: number
  name: string
  role: string
  sex: string
}

const tableData = ref<RowVO[]>([
  { id: 10001, name: 'EMP600N通用型保护测控装置产品使用手册1.pdfEMP600N通用型保护测控装置产品使用手册1.pdf', role: 'Develop', sex: 'Man' },
  { id: 10002, name: 'EMP600N通用型保护测控装置产品使用手册2.pdf', role: 'Test', sex: 'Women' },
  { id: 10003, name: 'EMP600N通用型保护测控装置产品使用手册3.pdf', role: 'PM', sex: 'Man' },
  { id: 10004, name: 'EMP600N通用型保护测控装置产品使用手册4.pdf', role: 'Designer', sex: 'Women' }
])
// 产看按钮
const viewEvent = (item:any)=>{

}
// 删除按钮
const delEvent = ()=>{
  
}
onMounted(async () => {
  healthEchat();
  handleCommand(shebeiValue.value)
});
</script>
<template>
  <div class="demo-collapse">
    <el-collapse v-model="activeNames" @change="handleChange">
      <el-collapse-item title="--设备信息" name="1" :icon="ArrowRightBold">
        <div class="flex">
          <div class="w-750px">
            <div class="p-15px box-border flex">
              <div class="w-[420px] h-[240px] bg-#151515 pos-relative">
                <div ref="chartDom" style="width: 465px; height: 410px;" class="chartDomcL"></div>
              </div>
              <div class="w-[420px] h-[240px] ml-[10px] flex flex-col justify-between">
                <div class="w-100% h-48% bg-#151515 flex flex-col justify-center items-center">
                  <div class="c-#c2c2c2 font-size-20px">选择设备</div>
                  <el-dropdown placement="bottom" @command="handleCommand">
                    <div class="flex w-150px h-30px items-center justify-center">
                      <div class="mr-10px c-#c6c6c6">{{ shebeiValue }}</div>
                      <el-icon :size="20" color="#636363">
                        <CaretBottom />
                      </el-icon>
                    </div>
                    <template #dropdown>
                      <el-dropdown-menu>
                        <el-dropdown-item :command="item.label" v-for="(item, index) in drowData" :key="index">{{
                          item.label }}</el-dropdown-item>
                      </el-dropdown-menu>
                    </template>
                  </el-dropdown>
                </div>
                <div class="w-100% h-48% bg-#151515 flex items-center justify-center font-size-16px cursor-pointer"
                  @click="seeWend">
                  查看文档</div>
              </div>
            </div>
            <div class="w-720px  ml-15px">
              <div class="w-100% flex justify-between mb-5px" v-for="(item, index) in zuiData.slice(0, 11)"
                :key="index">
                <div class="w-355px h-30px bg-#151515 flex items-center justify-center font-size-14px">{{ item.mName }}
                </div>
                <div class="w-355px h-30px bg-#151515 flex items-center justify-center font-size-14px">{{ item.mValue }}
                </div>
              </div>
            </div>
          </div>
          <!-- 右侧信息 -->
          <div class="w-720px  mt-16px">
            <div class="w-100% flex justify-between mb-5px" v-for="(item, index) in zuiData.slice(11)" :key="index">
              <div class="w-355px h-27px bg-#151515 flex items-center justify-center font-size-14px">{{ item.mName }}
              </div>
              <div class="w-355px h-27px bg-#151515 flex items-center justify-center font-size-14px">{{ item.mValue }}
              </div>
            </div>
          </div>

        </div>

      </el-collapse-item>
    </el-collapse>
  </div>
  <!-- 文档弹出框 -->
  <el-dialog v-model="dialogTableVisible" :close-on-click-modal="false" width="90%" :align-center="true"
    style="background: #606060;">
    <div class="w-98% h-50vh m-20px flex">
      <div class="w-34% bg-#151515 h-100%">
        <vxe-table :data="tableData" border header-align="center" footer-align="center" show-overflow=".tooltip">
          <vxe-column type="seq" width="70"></vxe-column>
          <vxe-column field="name" title="Name"></vxe-column>
          <vxe-column title="操作" width="160">
            <template #default="{ row }">
              <vxe-button style="background-color: #4caf50; color: #FFFFFF;" @click="viewEvent(row)">查看</vxe-button>
              <vxe-button style="background-color: #f44336; color: #FFFFFF;" type="danger" @click="delEvent(row)">删除</vxe-button>
            </template>
          </vxe-column>
        </vxe-table>
      </div>
      <div class="w-34% bg-#151515 h-100% ml-20px"></div>
    </div>
  </el-dialog>
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