<script lang="ts" setup>
import { ref, reactive, onMounted } from "vue";
import * as echarts from "echarts";
const activeNames = ref(["1", "2", "3", "4"]); //默认展开第几列
// 柜体数据
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
          formatter: function(v) {
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
            color: '#fff',
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
            height:0.5
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
            width: 10,
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
            fontSize: 14
          }
        },
        //仪表盘详情，用于显示数据。
        detail: {
          show: true,
          offsetCenter: [0, "16%"],
          color: "#ffffff",
          formatter: function(params) {
            return params;
          },
          textStyle: {
            fontSize: 20
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
interface healthType {
    name:string,
    value:number
}
const healthData = reactive<healthType[]>([{
    name:"温度健康度",
    value:100
},{
    name:"温度健康度",
    value:100
},{
    name:"储能电机健康度",
    value:90
},{
    name:"分闸线圈健康度",
    value:97
},{
    name:"合闸线圈健康度",
    value:98
}])
onMounted(async () => {
  healthEchat();
});
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
      <el-collapse-item title="--健康度" name="2" :icon="ArrowRightBold">
        <div class="contEne">
          <div class="twoleft">   
            <div ref="chartDom" style="width: 350px; height: 310px;" class="chartDomcL"></div>   
          </div>
          <div class="tworight">
              <div class="tworight-item" v-for="(item,index) in healthData" :key="index">
                  <div>{{ item.name }}</div>
                  <div>{{ item.value }}</div>
              </div>
          </div>
        </div>
      </el-collapse-item>
      <el-collapse-item title="--电气数据" name="3" :icon="ArrowRightBold">
        <div class="contEne">
            <div class="threeleft"></div>
            <div class="threeright"></div>
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
  width: 500px;
  display: flex;
  justify-content: space-between;
  margin-left: 10px;
  margin-bottom: 10px;
}
.EneItem {
  width: 245px;
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
.twoleft {
  width: 245px;
  height: 200px;
  background: #151515;
  margin-left: 10px;
  position: relative;
}
.tworight {
    margin-left: 10px;
    display: flex;
    flex-wrap: wrap;
}
.tworight-item{
    width: 122px;
    height: 98px;
    background: #151515;
    margin-right: 10px;
}
.tworight-item > div{
    text-align: center;
}
.tworight-item > div:nth-child(1){
    font-size: 16px;
}
.tworight-item > div:nth-child(2){
    font-size: 28px;
    color: #888888;
    font-weight: bold;
}
.chartDomcL{
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-45%)

}
</style>