import * as echarts from "echarts";

// 封装毫秒时间转换方法
export const formatTimestampWithMicroseconds = (timestamp: number) => {
  // 提取秒和微秒部分
  const seconds = Math.floor(timestamp);
  const microseconds = Math.round((timestamp - seconds) * 1000);
  const date = new Date(seconds * 1000);
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");
  const secondsFormatted = String(date.getSeconds()).padStart(2, "0");
  return `${year}-${month}-${day} ${hours}:${minutes}:${secondsFormatted}.${String(
    microseconds
  ).padStart(3, "0")}`;
};

// 转换数组
const transformData = (data: any[][]): any[][] => {
  // 创建一个与输入数据长度相对应的结果数组
  const result = Array.from({ length: data[0].length - 1 }, () => []);
  // 遍历每个子数组
  for (const item of data) {
    for (let i = 1; i < item.length; i++) {
      result[i - 1].push(item[i]);
    }
  }

  return result;
}

interface chartBomType {
  name: string;
  unit: string;
}

// echars折线图封装
export const currentFun = (
  chartDom: { value: HTMLElement | null | undefined },
  chartObj: chartBomType,
  echData: any
) => {
  const chatHead = echData[0]
  const xAxisData = echData.slice(1)
  const chatCon = echData.slice(1).map((item: any[]) => formatTimestampWithMicroseconds(item[0]))

  const chartInstance = echarts.init(chartDom.value);
  var charts = {
    unit: chartObj.unit,
    names: chatHead,
    lineX: chatCon,
    value: transformData(xAxisData),
  };
  // 折线的颜色   
  var color = ["rgba(67, 99, 216", "rgba(60, 180, 75", "rgba(255, 225, 25", "rgba(230, 25, 75"];
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
  // 箭头设置
  lineY[0].markLine = {
    silent: true,
    data: [],
  };
  const option = {
    backgroundColor: "#151515", //背景色
    title: {
      // text: '你的图表标题',
      subtext: chartObj.name,
      left: "center", // 可以设置为 'left', 'right' 或 'center'
      top: "top", // 也可以设置为 'bottom'
      subtextStyle: {
        color: "#ffffff", // 设置副标题颜色
        fontSize: 14, // 可选：设置字体大小
      },
    },
    tooltip: {
      trigger: "axis",
    },
    dataZoom: [
      {
        type: "slider", // 滑块型缩放
        start: 0, // 起始百分比
        end: 100, // 结束百分比
        show: false, // 也可以隐藏滑动条
      },
      {
        type: "inside", // 内置型缩放
        start: 0,
        end: 100,
        show: false, // 也可以隐藏滑动条
      },
    ],
    toolbox: {
      show: true,
      right: "2%",
      top: "2%",
      feature: {
        myFullScreen: {
          show: true,
          title: "全屏",
          icon: "path://M8 0h8v8H8V0zm0 16h8v-8H8v8zM0 8h8v8H0V8zm16 0h8v8h-8V8z",
          onclick: function () {
            const chartDom1 = chartInstance.getDom();
            if (!document.fullscreenElement) {
              chartDom1.requestFullscreen();
              chartInstance.resize(); // 进入全屏时调整大小
            } else {
              document.exitFullscreen();
            }
          },
        },
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
        color: "#ffffff", //legend 的颜色
      },
      bottom: 10,
      right: "50%",
    },
    grid: {
      top: "14%",
      left: "3%",
      right: "1%",
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
          fontSize: 12,
          color: "#ffffff",
        },
        formatter: function (params: string) {
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
          color: "#ffffff",
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
          color: "#ffffff",
        },
      },
    },
    series: lineY,
  };
  document.addEventListener("fullscreenchange", () => {
    chartInstance.resize(); // 监听全屏变化
  });
  chartInstance.setOption(option);
};

interface numType {
  name: string;
  num: number;
}
// echars饼状图健康度封装
export const healthEchat = (dom: { value: HTMLElement | null | undefined }, chartObj: numType) => {
  const chartInstance = echarts.init(dom.value);
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
                chartObj.num / 100,
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
            name: chartObj.name,
            value: chartObj.num
          }
        ]
      }
    ]
  };

  chartInstance.setOption(option);
};
// echars半饼状图封装
export const barEchat = (dom: { value: HTMLElement | null | undefined }, chartObj: numType) => {
  const chartInstance = echarts.init(dom.value);
  var percent = 12.3; //百分数
  var color_percent0 = ""
  var color_percent100 = ""
  var dotArray: number[] = [];

  calculateDot(percent); //80%显示4个点，

  function calculateDot(data: number) {
    if (data <= 20) {
      dotArray.push(80);
      color_percent0 = "rgba(12,255,0,1)";
      color_percent100 = "rgba(12,255,0,.3)";
    } else if (data > 20 && data <= 40) {
      dotArray.push(...[80, 80]);
      color_percent0 = "rgba(12,255,0,1)";
      color_percent100 = "rgba(12,255,0,.3)";
    } else if (data > 40 && data <= 60) {
      dotArray.push(...[80, 80, 80]);
      color_percent0 = "rgba(255,123,0,1)";
      color_percent100 = "rgba(255,123,0,.3)";
    } else if (data > 60 && data <= 80) {
      dotArray.push(...[80, 80, 80, 80]);
      color_percent0 = "rgba(255,0,36,1)";
      color_percent100 = "rgba(255,0,36,.3)";
    } else if (data > 80 && data <= 100) {
      dotArray.push(...[80, 80, 80, 80, 80]);
      color_percent0 = "rgba(255,0,36,1)";
      color_percent100 = "rgba(255,0,36,.3)";
    }
  }
  const option = {
    backgroundColor: "rgba(0,0,0,0)",
    title: {
      x: "50%",
      y: "45%",
      textAlign: "center",
      top: "60%", //字体的位置
      text: "0℃VCB-IN-A温度",
      textStyle: {
        fontWeight: "normal",
        color: "#FFF",
        fontSize: 20,
      },
      subtextStyle: {
        //副标题的文字的样式
        fontWeight: "bold",
        fontSize: 18,
        color: "#3ea1ff",
      },
    },
    xAxis: {
      show: false, //是否展示x轴
      min: function (value: { min: number; }) {
        //调整x轴上面数据的位置
        return value.min - 7;
      },
      max: function (value: { max: number; }) {
        return value.max + 7;
      },
      splitLine: {
        lineStyle: {
          show: true,
          type: "dashed",
        },
      },
      axisLabel: {
        interval: 0,
        rotate: 40,
        textStyle: {
          fontSize: 12,
          color: "#000",
        },
      },
      data: ["1", "2", "3", "4", "5"],
    },
    yAxis: {
      show: false,
      name: "万元",
      max: 200,
      splitLine: {
        lineStyle: {
          type: "dashed",
        },
      },
    },
    series: [
      {
        name: "",
        type: "pie",
        radius: ["50%", "70%"],
        avoidLabelOverlap: false,
        startAngle: 225,
        color: [
          {
            type: "linear",
            x: 0,
            y: 0,
            x2: 0.4,
            y2: 1,
            colorStops: [
              {
                offset: 0,
                color: color_percent0, // 0% 处的颜色
              },
              {
                offset: 1,
                color: color_percent100, // 100% 处的颜色
              },
            ],
            globalCoord: false, // 缺省为 false
          },
          "none",
        ],
        hoverAnimation: false, //是否开启 hover 在扇区上的放大动画效果。
        legendHoverLink: false, //是否启用图例 hover 时的联动高亮。
        label: {
          normal: {
            show: false,
            position: "center",
          },
          emphasis: {
            show: true,
            textStyle: {
              fontSize: "30",
              fontWeight: "bold",
            },
          },
        },
        labelLine: {
          normal: {
            show: false,
          },
        },
        data: [
          {
            value: 75,
            name: "1",
          },
          {
            value: 25,
            name: "2",
          },
        ],
      },
      {
        name: " ",
        type: "pie",
        radius: ["48%", "47%"],
        avoidLabelOverlap: false, //是否启用防止标签重叠策略
        startAngle: 225,

        hoverAnimation: false,
        legendHoverLink: false,
        label: {
          normal: {
            show: false,
            position: "center",
          },
          emphasis: {
            show: true,
            textStyle: {
              fontSize: "30",
              fontWeight: "bold",
            },
          },
        },
        labelLine: {
          normal: {
            show: false,
          },
        },
        data: [
          {
            value: 75,
            name: "1",
          },
          {
            value: 25,
            name: "2",
          },
        ],
      },
      {
        name: "",
        type: "pie",
        radius: ["50%", "70%"],
        avoidLabelOverlap: false,
        startAngle: 315,
        color: ["rgba(34,34,34,.9)", "#ff7a00", "transparent"],
        hoverAnimation: false,
        legendHoverLink: false,
        clockwise: false, //饼图的扇区是否是顺时针排布。
        itemStyle: {
          normal: {
            borderColor: "transparent",
            borderWidth: "20",
          },
          emphasis: {
            borderColor: "transparent",
            borderWidth: "20",
          },
        },
        z: 10,
        label: {
          normal: {
            show: false,
            position: "center",
          },
        },
        labelLine: {
          normal: {
            show: false,
          },
        },
        data: [
          {
            value: ((100 - percent) * 270) / 360,

            label: {
              normal: {
                formatter: percent + "℃",
                position: "center",
                show: true,
                textStyle: {
                  fontSize: "60",
                  fontWeight: "normal",
                  color: "#fff",
                },
              },
            },
            name: "",
          },
          {
            value: 1,
            name: "",
          },
          {
            value: 100 - ((100 - percent) * 270) / 360,
            name: "",
          },
        ],
      },
      //总共有5个小球
      {
        name: "",
        symbolOffset: ["20", "0"], //就是把自己向上移动了一半的位置，在 symbol 图形是气泡的时候可以让图形下端的箭头对准数据点。
        type: "scatter",

        data: [80, 80, 80, 80, 80],
      },
      //根据数据判断小球的颜色
      {
        name: "",

        type: "scatter",
        symbolOffset: ["20", "0"], //移动小球的位置
        color: new echarts.graphic.RadialGradient(0.4, 0.3, 1, [
          {
            offset: 0,
            color: color_percent0,
          },
          {
            offset: 1,
            color: color_percent100,
          },
        ]),
        data: dotArray,
      },
      {
        //第一个线
        name: "",

        type: "line",
        color: new echarts.graphic.RadialGradient(0.4, 0.3, 1, [
          {
            offset: 0,
            color: color_percent0,
          },
          {
            offset: 1,
            color: color_percent100,
          },
        ]),
        symbol: "none",
        data: [85, 85, 85, 85, 85, 85],
      },
      {
        //第二根线
        name: "",

        type: "line",
        symbol: "none", //去掉横线上的小点
        color: new echarts.graphic.RadialGradient(0.4, 0.3, 1, [
          {
            offset: 0,
            color: color_percent0,
          },
          {
            offset: 1,
            color: color_percent100,
          },
        ]),
        data: [75, 75, 75, 75, 75, 75],
      },
    ],

  };

  chartInstance.setOption(option);
};