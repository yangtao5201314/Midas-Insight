<script setup lang="ts">
import { ref, reactive, nextTick, onMounted, onUnmounted } from "vue";
import { VxeTableInstance, VxeGridProps } from "vxe-table";
const show = ref(true);

const count = ref(0);
const strAb = ref("AABB")

interface RowVO {
  id: number;
  name: string;
  role: string;
  sex: string;
}
// js是浏览器的脚本语言只在web端运行

const gridOptions = reactive<VxeGridProps<RowVO>>({
  border: true,
  showOverflow: true,
  height: 600,
  loading: false,
  emptyRender: {
    name: "MyTableEmptyImg"
  },
  scrollY: {
    enabled: true,
    gt: 0
  },
  columns: [
    { type: "seq", width: 70 },
    { field: "name", title: "Name" },
    { field: "role", title: "Role" },
    { field: "sex", title: "Sex" }
  ],
  data: []
});

// 模拟行数据
const loadList = (size = 200) => {
  const dataList: RowVO[] = [];
  for (let i = 0; i < size; i++) {
    dataList.push({
      id: 10000 + i,
      name: "Test" + i,
      role: "Developer",
      sex: "男"
    });
  }
  gridOptions.data = dataList;
};

loadList(500);
gridOptions.loading = true;
setTimeout(() => {
  gridOptions.loading = false;
}, 1000);

import * as echarts from "echarts";

// 创建一个响应式引用来保存DOM元素
const chartDom = ref(null);
const chartDom1 = ref(null);
let chartInstance = null;
let chartInstance1 = null;
const ws = new WebSocket("ws://localhost:9998");
// 初始化ECharts实例并设置配置项（这里以折线图为例，但可灵活替换）
onMounted(async () => {
  await nextTick(); // 确保DOM已经渲染完成
  // 引入ws，路径是后端配置好给前端的

  chartInstance = echarts.init(chartDom.value);
  const option = {
    // 这里是ECharts的配置项，可以根据需要绘制不同类型的图表
    title: {
      text: "ECharts 示例图表"
    },
    tooltip: {},
    xAxis: {
      data: ["类别1", "类别2", "类别3", "类别4", "类别5"]
    },
    yAxis: {},
    series: [
      {
        name: "数据系列",
        type: "line", // 这里可以是'line'、'bar'、'pie'等，根据图表类型选择
        data: [120, 200, 150, 80, 70]
      }
    ]
  };
  chartInstance.setOption(option);
  chartInstance1 = echarts.init(chartDom1.value);
  var data = [];
  for (let i = 0; i < 5; ++i) {
    data.push(Math.round(Math.random() * 200));
  }
  const option1 = {
    // 这里是ECharts的配置项，可以根据需要绘制不同类型的图表
    xAxis: {
      max: "dataMax"
    },
    yAxis: {
      type: "category",
      data: ["A", "B", "C", "D", "E"],
      inverse: true,
      animationDuration: 300,
      animationDurationUpdate: 300,
      max: 2 // only the largest 3 bars will be displayed
    },
    series: [
      {
        realtimeSort: true,
        name: "X",
        type: "bar",
        data: data,
        label: {
          show: true,
          position: "right",
          valueAnimation: true
        }
      }
    ],
    legend: {
      show: true
    },
    animationDuration: 3000,
    animationDurationUpdate: 3000,
    animationEasing: "linear",
    animationEasingUpdate: "linear"
  };
  function update() {
    var data = option.series[0].data;
    for (var i = 0; i < data.length; ++i) {
      if (Math.random() > 0.9) {
        data[i] += Math.round(Math.random() * 2000);
      } else {
        data[i] += Math.round(Math.random() * 200);
      }
    }
  }

  setInterval(function() {
    update();
  }, 3000);
  chartInstance1.setOption(option1);

  ws.onopen = () => {
    console.log("连接服务器端成功");
    ws.send("Hello用途 websocket");
  };
  ws.onerror = () => {
    console.log("连接服务器失败");
  };
  ws.onmessage = msg => {
    // console.log("接收到服务端发送的数据");
    // console.log("msg", msg.data);
    // console.log(JSON.parse(msg.data));
    // option.series[0].data = JSON.parse(msg.data);
    strAb.value = msg.data
    chartInstance.setOption(option);
    // ws.send('Hello websocket to message')
  };
});
const Primary = () => {
  ws.send(`链接状态码：${ws.readyState}`);
  // CONNECTING：值为0，表示正在连接。
  // OPEN：值为1，表示连接成功，可以通信了。
  // CLOSING：值为2，表示连接正在关闭。
  // CLOSED：值为3，表示连接已经关闭，或者打开连接失败。
};
// 销毁ECharts实例
onUnmounted(() => {
  if (chartInstance != null && chartInstance.dispose) {
    chartInstance.dispose();
  }
  // if (chartInstance1 != null && chartInstance1.dispose) {
  //   chartInstance1.dispose();
  // }
});
</script>

<template>
<FitScreen :width="1920" :height="1080" mode="fit">
  <div class="fixbox">
    变量{{ strAb }}
    <el-button type="primary" @click="Primary">Primary</el-button>
    <div ref="chartDom1" style="width: 600px; height: 400px;"></div>
    <div ref="chartDom" style="width: 600px; height: 400px;"></div>
    <vxe-grid v-bind="gridOptions"></vxe-grid>
  </div>
</FitScreen>
</template>

<style scoped>
.fixbox{
  background:#000000;
  width:500px;
  height:600px;
  border:1px solid #000000;
}
/* 
  通过嵌入式Web服务器或者Web框架，将嵌入式系统的数据和逻辑与Web前端进行交互。Web前端可以使用浏览器或者移动设备来访问和控制嵌入式系统。

  怎么能让前端请求接口不需要一个执行完在执行，可以同时执行多个
*/
/* .transition-box {
  margin-bottom: 10px;
  width: 200px;
  height: 100px;
  border-radius: 4px;
  background-color: #409eff;
  text-align: center;
  color: #fff;
  padding: 40px 20px;
  box-sizing: border-box;
  margin-right: 20px;
} */
</style>
