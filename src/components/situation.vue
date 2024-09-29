<script lang="ts" setup>
import { ref, reactive, onMounted, nextTick } from "vue";
import type { TableColumnCtx } from 'element-plus'
import { ArrowRightBold } from '@element-plus/icons-vue'
const activeNames = ref(["1", "2", "3", "4", "5", "6", "7","8"]); //默认展开第几列
import { dainLiuData } from "@/utils/echars1.ts"
import { currentFun, healthEchat, barEchat, getLastWeekTime, getCurrentTime } from "@/utils/utils.ts"

// 折叠面板按钮事件
const handleChange = (val: string[]) => {
    console.log(val);
};

// 电流
// 下拉菜单
interface droType {
    label: string
}
// 分闸线圈
const drowData = reactive<droType[]>([{
    label: "分闸线圈"
}])
const shebeiValue = ref<string | number | object>("分闸线圈")
const handleCommand = (command: string | number | object) => {
    shebeiValue.value = command
}
// 时间线
const timeData = reactive<droType[]>([{
    label: "2024-08-13 08：34：33.880"
}, {
    label: "2024-08-13 08：34：33.906"
}])
const timeValue = ref<string | number | object>("2024-08-13 08：34：33.880")
const timeCommand = (command: string | number | object) => {
    timeValue.value = command
}
// 健康度图表
const chartDomHeath = ref(null);
const chartBomHeath = reactive({
    name: "总体健康度",
    num: 96
});
// 电流数据图表
const chartDom = ref(null);
const chartBom = reactive({
    name: "电流",
    unit: 'A'
});

// ----------------------------------------------------------------------------------合闸线圈
// 合闸线圈
// 下拉菜单
interface hedroType {
    label: string
}
// 合闸线圈
const hedrowData = reactive<hedroType[]>([{
    label: "合闸线圈"
}])
const heshebeiValue = ref<string | number | object>("合闸线圈")
const hehandleCommand = (command: string | number | object) => {
    shebeiValue.value = command
}
// 时间线
const hetimeData = reactive<droType[]>([{
    label: "2024-08-13 08：34：33.880"
}, {
    label: "2024-08-13 08：34：33.906"
}])
const hetimeValue = ref<string | number | object>("2024-08-13 08：34：33.880")
const hetimeCommand = (command: string | number | object) => {
    hetimeValue.value = command
}
// 健康度图表
const hechartDomHeath = ref(null);
const hechartBomHeath = reactive({
    name: "总体健康度",
    num: 96
});
// 电流数据图表
const hechartDom = ref(null);
const hechartBom = reactive({
    name: "电流",
    unit: 'A'
});
// ----------------------------------------------------------------------------------储能电机
// 储能电机
// 下拉菜单
interface chudroType {
    label: string
}
// 储能电机
const chudrowData = reactive<chudroType[]>([{
    label: "储能电机"
}])
const chushebeiValue = ref<string | number | object>("储能电机")
const chuhandleCommand = (command: string | number | object) => {
    chushebeiValue.value = command
}
// 时间线
const chutimeData = reactive<droType[]>([{
    label: "2024-08-13 08：34：33.880"
}, {
    label: "2024-08-13 08：34：33.906"
}])
const chutimeValue = ref<string | number | object>("2024-08-13 08：34：33.880")
const chutimeCommand = (command: string | number | object) => {
    chutimeValue.value = command
}
// 健康度图表
const chuchartDomHeath = ref(null);
const chuchartBomHeath = reactive({
    name: "总体健康度",
    num: 96
});
// 电流数据图表
const chuchartDom = ref(null);
const chuchartBom = reactive({
    name: "电流",
    unit: 'A'
});
// ----------------------------------------------------------------------------------线圈-分闸线圈（AC）
// 线圈-分闸线圈（AC）
// 下拉菜单
interface xianfdroType {
    label: string
}
// 储能电机
const xianfdrowData = reactive<xianfdroType[]>([{
    label: "线圈-分闸线圈（AC）"
}])
const xianfshebeiValue = ref<string | number | object>("线圈-分闸线圈（AC）")
const xianfhandleCommand = (command: string | number | object) => {
    xianfshebeiValue.value = command
}
// 时间线
const xianftimeData = reactive<droType[]>([{
    label: "2024-08-13 08：34：33.880"
}, {
    label: "2024-08-13 08：34：33.906"
}])
const xianftimeValue = ref<string | number | object>("2024-08-13 08：34：33.880")
const xianftimeCommand = (command: string | number | object) => {
    xianftimeValue.value = command
}
// 健康度图表
const xianfchartDomHeath = ref(null);
const xianfchartBomHeath = reactive({
    name: "总体健康度",
    num: 96
});
// 电流数据图表
const xianfchartDom = ref(null);
const xianfchartBom = reactive({
    name: "电流",
    unit: 'A'
});
// ----------------------------------------------------------------------------------线圈-合闸线圈（AC）
// 线圈-合闸线圈（AC）
// 下拉菜单
interface xianhdroType {
    label: string
}
// 储能电机
const xianhdrowData = reactive<xianhdroType[]>([{
    label: "线圈-合闸线圈（AC）"
}])
const xianhshebeiValue = ref<string | number | object>("线圈-合闸线圈（AC）")
const xianhhandleCommand = (command: string | number | object) => {
    xianfshebeiValue.value = command
}
// 时间线
const xianhtimeData = reactive<droType[]>([{
    label: "2024-08-13 08：34：33.880"
}, {
    label: "2024-08-13 08：34：33.906"
}])
const xianhtimeValue = ref<string | number | object>("2024-08-13 08：34：33.880")
const xianhtimeCommand = (command: string | number | object) => {
    xianhtimeValue.value = command
}
// 健康度图表
const xianhchartDomHeath = ref(null);
const xianhchartBomHeath = reactive({
    name: "总体健康度",
    num: 96
});
// 电流数据图表
const xianhchartDom = ref(null);
const xianhchartBom = reactive({
    name: "电流",
    unit: 'A'
});
// ----------------------------------------------------------------------------------储能电机（AC）
// 储能电机（AC）
// 下拉菜单
interface chuadroType {
    label: string
}
// 储能电机
const chuadrowData = reactive<chuadroType[]>([{
    label: "储能电机（AC）"
}])
const chuashebeiValue = ref<string | number | object>("储能电机（AC）")
const chuahandleCommand = (command: string | number | object) => {
    xianfshebeiValue.value = command
}
// 时间线
const chuatimeData = reactive<droType[]>([{
    label: "2024-08-13 08：34：33.880"
}, {
    label: "2024-08-13 08：34：33.906"
}])
const chuatimeValue = ref<string | number | object>("2024-08-13 08：34：33.880")
const chuatimeCommand = (command: string | number | object) => {
    chuatimeValue.value = command
}
// 健康度图表
const chuachartDomHeath = ref(null);
const chuachartBomHeath = reactive({
    name: "总体健康度",
    num: 96
});
// 电流数据图表
const chuachartDom = ref(null);
const chuachartBom = reactive({
    name: "电流",
    unit: 'A'
});
// ----------------------------------------------------------------------------------温升
// interface chuadroType {
//     label: string
// }

// const barEchar1 = ref(null);
// const barEchar2 = ref(null);
const barEchar1 = ref(null);
const barEchar2 = ref(null);
const barEchar3 = ref(null);
// const riskSpreadRefList = ref<HTMLElement[]>([]);
// const getRiskSpreadRef = (el, index) => {
//   if (el) {
//     riskSpreadRefList.value[index] = el; 
//   }
// };
// 将所有 ref 放入一个数组中
// const chartRefs = [barEchar0, barEchar1, barEchar2];
const barEchar1Obj = reactive({
    name: "VCB-IN-A温度",
    unit: '℃',
    number: 32.3
});
// const chartRefs = ref([]); // 存储每个图表的 DOM 引用
// const riseArr = reactive([
//     {
//         name: "VCB-IN-A温度",
//         unit: '℃',
//         number: 0
//     }, {    
//         name: "VCB-IN-B温度",
//         unit: '℃',
//         number: 31.9

//     }, {
//         name: "VCB-IN-C温度",
//         unit: '℃',
//         number: 21.9
//     }
// ])  

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

// 温升数据图表
const vcbaDom = ref(null);
const vcbaDomBom = reactive({
    name: "VCB-IN-A",
    unit: ''
});
const vcbbDom = ref(null);
const vcbbDomBom = reactive({
    name: "VCB-IN-B",
    unit: ''
});
const vcbcDom = ref(null);
const vcbcDomBom = reactive({
    name: "VCB-IN-B",
    unit: ''
});





onMounted(async () => {
    await nextTick();
    // ------------------------------------分闸
    await handleCommand(shebeiValue.value)   //电流
    await healthEchat(chartDomHeath, chartBomHeath)  //电流总体健康度
    await currentFun(chartDom, chartBom, dainLiuData)  //电流数据
    // ------------------------------------ 合闸
    await hehandleCommand(heshebeiValue.value)   //电流
    await healthEchat(hechartDomHeath, hechartBomHeath)  //电流总体健康度
    await currentFun(hechartDom, hechartBom, dainLiuData)  //电流数据
    // ------------------------------------ 储能电机
    await chuhandleCommand(chushebeiValue.value)   //电流
    await healthEchat(chuchartDomHeath, chuchartBomHeath)  //电流总体健康度
    await currentFun(chuchartDom, chuchartBom, dainLiuData)  //电流数据
    // ------------------------------------ 线圈-分闸线圈（AC）
    await xianfhandleCommand(xianfshebeiValue.value)   //电流
    await healthEchat(xianfchartDomHeath, xianfchartBomHeath)  //电流总体健康度
    await currentFun(xianfchartDom, xianfchartBom, dainLiuData)  //电流数据
    // ------------------------------------ 线圈-合闸线圈（AC）
    await xianhhandleCommand(xianhshebeiValue.value)   //电流
    await healthEchat(xianhchartDomHeath, xianhchartBomHeath)  //电流总体健康度
    await currentFun(xianhchartDom, xianhchartBom, dainLiuData)  //电流数据
    // ------------------------------------ 储能电机（AC）
    await chuahandleCommand(chuashebeiValue.value)   //电流 
    await healthEchat(chuachartDomHeath, chuachartBomHeath)  //电流总体健康度
    await currentFun(chuachartDom, chuachartBom, dainLiuData)  //电流数据
    // ------------------------------------ 温升
    await barEchat(barEchar1, barEchar1Obj)
    await barEchat(barEchar2, barEchar1Obj)
    await barEchat(barEchar3, barEchar1Obj)
 
    await currentFun(vcbaDom, vcbaDomBom, dainLiuData)  //温升VCB-IN-A
    await currentFun(vcbbDom, vcbbDomBom, dainLiuData)  //温升VCB-IN-B
    await currentFun(vcbcDom, vcbcDomBom, dainLiuData)  //温升VCB-IN-C
    // riseArr.forEach(async (item,index)=>{
    //     // console.log("===index9999====> " +JSON.stringify(chartRefs))
    //     console.log("11111111111111111111",item)
    //     // await barEchat(chartRefs[index],item)
    //     await barEchat(item.dom,item)
    // })
    // for (let i = 0; i < riseArr.length; i++) {
    //     console.log("============888====================" + chartRefs.value[i])

    //     await barEchat(chartRefs.value[i], riseArr[i]);
    // }
    // riseArr.forEach(async (it,idx)=>{
    //     await barEchat(riskSpreadRefList.value[idx],it)

    // })
    // riskSpreadRefList.value?.forEach((item: any) => {

    //     console.log("ppppppppppppppppppppppppppp-----",item)
    // });

});
</script>
<template>
    <div class="demo-collapse">
        <el-collapse v-model="activeNames" @change="handleChange">
            <el-collapse-item title="--设备信息" name="1" :icon="ArrowRightBold">
                <div class="flex">
                    <div class="w-1450px">
                        <div class="p-15px box-border flex justify-between">
                            <!-- 左侧栏 -->
                            <div class="w-[420px] h-[540px] ml-[10px] flex flex-col justify-between">
                                <!-- 分闸线 -->
                                <div class="w-100% h-17% bg-#151515 flex flex-col justify-center items-center">
                                    <el-dropdown placement="bottom" @command="handleCommand">
                                        <div class="flex w-150px h-30px items-center justify-center">
                                            <div class="mr-10px c-#c6c6c6">{{ shebeiValue }}</div>
                                            <el-icon :size="20" color="#636363">
                                                <CaretBottom />
                                            </el-icon>
                                        </div>
                                        <template #dropdown>
                                            <el-dropdown-menu>
                                                <el-dropdown-item :command="item.label"
                                                    v-for="(item, index) in drowData" :key="index">{{
                                                        item.label }}</el-dropdown-item>
                                            </el-dropdown-menu>
                                        </template>
                                    </el-dropdown>
                                </div>
                                <!-- 时间框 -->
                                <div class="w-100% h-17% bg-#151515 flex flex-col justify-center items-center">
                                    <el-dropdown placement="bottom" @command="timeCommand">
                                        <div class="flex w-250px h-30px items-center justify-center">
                                            <div class="mr-10px c-#c6c6c6">{{ timeValue }}</div>
                                            <el-icon :size="20" color="#636363">
                                                <CaretBottom />
                                            </el-icon>
                                        </div>
                                        <template #dropdown>
                                            <el-dropdown-menu>
                                                <el-dropdown-item :command="item.label"
                                                    v-for="(item, index) in timeData" :key="index">{{
                                                        item.label }}</el-dropdown-item>
                                            </el-dropdown-menu>
                                        </template>
                                    </el-dropdown>
                                </div>
                                <!-- 健康度 -->
                                <div
                                    class="w-100% h-63% bg-#151515 flex items-center justify-center font-size-16px cursor-pointer">
                                    <div class="w-[420px] h-[240px] bg-#151515 pos-relative">
                                        <div class="w-100% text-center mt--30px">健康度</div>
                                        <div ref="chartDomHeath" style="width: 465px; height: 410px;"
                                            class="chartDomcL"></div>
                                    </div>
                                </div>
                            </div>
                            <!-- 右侧栏 -->
                            <div class="w-[978px] flex justify-between">
                                <div class="w-32.8% bg-#151515 h-100%"></div>
                                <div class="w-32.8% bg-#151515 h-100%"></div>
                                <div class="w-32.8% bg-#151515 h-100%"></div>
                            </div>
                        </div>
                        <div class="ml-25px bg-#151515 p-15px box-border w-97.2% h-350px">
                            <!-- 电流 -->
                            <div class="pa-[15px] box-border">
                                <div ref="chartDom" class="w-[1350px] h-[300px]"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </el-collapse-item>
            <el-collapse-item title="--线圈-合闸线圈（DC）" name="2" :icon="ArrowRightBold">
                <div class="flex">
                    <div class="w-1450px">
                        <div class="p-15px box-border flex justify-between">
                            <!-- 左侧栏 -->
                            <div class="w-[420px] h-[540px] ml-[10px] flex flex-col justify-between">
                                <!-- 分闸线 -->
                                <div class="w-100% h-17% bg-#151515 flex flex-col justify-center items-center">
                                    <el-dropdown placement="bottom" @command="hehandleCommand">
                                        <div class="flex w-150px h-30px items-center justify-center">
                                            <div class="mr-10px c-#c6c6c6">{{ heshebeiValue }}</div>
                                            <el-icon :size="20" color="#636363">
                                                <CaretBottom />
                                            </el-icon>
                                        </div>
                                        <template #dropdown>
                                            <el-dropdown-menu>
                                                <el-dropdown-item :command="item.label"
                                                    v-for="(item, index) in hedrowData" :key="index">{{
                                                        item.label }}</el-dropdown-item>
                                            </el-dropdown-menu>
                                        </template>
                                    </el-dropdown>
                                </div>
                                <!-- 时间框 -->
                                <div class="w-100% h-17% bg-#151515 flex flex-col justify-center items-center">
                                    <el-dropdown placement="bottom" @command="hetimeCommand">
                                        <div class="flex w-250px h-30px items-center justify-center">
                                            <div class="mr-10px c-#c6c6c6">{{ hetimeValue }}</div>
                                            <el-icon :size="20" color="#636363">
                                                <CaretBottom />
                                            </el-icon>
                                        </div>
                                        <template #dropdown>
                                            <el-dropdown-menu>
                                                <el-dropdown-item :command="item.label"
                                                    v-for="(item, index) in hetimeData" :key="index">{{
                                                        item.label }}</el-dropdown-item>
                                            </el-dropdown-menu>
                                        </template>
                                    </el-dropdown>
                                </div>
                                <!-- 健康度 -->
                                <div
                                    class="w-100% h-63% bg-#151515 flex items-center justify-center font-size-16px cursor-pointer">
                                    <div class="w-[420px] h-[240px] bg-#151515 pos-relative">
                                        <div class="w-100% text-center mt--30px">健康度</div>
                                        <div ref="hechartDomHeath" style="width: 465px; height: 410px;"
                                            class="chartDomcL"></div>
                                    </div>
                                </div>
                            </div>
                            <!-- 右侧栏 -->
                            <div class="w-[978px] flex justify-between">
                                <div class="w-32.8% bg-#151515 h-100%"></div>
                                <div class="w-32.8% bg-#151515 h-100%"></div>
                                <div class="w-32.8% bg-#151515 h-100%"></div>
                            </div>
                        </div>
                        <div class="ml-25px bg-#151515 p-15px box-border w-97.2% h-350px">
                            <!-- 电流 -->
                            <div class="pa-[15px] box-border">
                                <div ref="hechartDom" class="w-[1350px] h-[300px]"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </el-collapse-item>
            <el-collapse-item title="--储能电机（DC）" name="3" :icon="ArrowRightBold">
                <div class="flex">
                    <div class="w-1450px">
                        <div class="p-15px box-border flex justify-between">
                            <!-- 左侧栏 -->
                            <div class="w-[420px] h-[540px] ml-[10px] flex flex-col justify-between">
                                <!-- 分闸线 -->
                                <div class="w-100% h-17% bg-#151515 flex flex-col justify-center items-center">
                                    <el-dropdown placement="bottom" @command="chuhandleCommand">
                                        <div class="flex w-150px h-30px items-center justify-center">
                                            <div class="mr-10px c-#c6c6c6">{{ chushebeiValue }}</div>
                                            <el-icon :size="20" color="#636363">
                                                <CaretBottom />
                                            </el-icon>
                                        </div>
                                        <template #dropdown>
                                            <el-dropdown-menu>
                                                <el-dropdown-item :command="item.label"
                                                    v-for="(item, index) in chudrowData" :key="index">{{
                                                        item.label }}</el-dropdown-item>
                                            </el-dropdown-menu>
                                        </template>
                                    </el-dropdown>
                                </div>
                                <!-- 时间框 -->
                                <div class="w-100% h-17% bg-#151515 flex flex-col justify-center items-center">
                                    <el-dropdown placement="bottom" @command="chutimeCommand">
                                        <div class="flex w-250px h-30px items-center justify-center">
                                            <div class="mr-10px c-#c6c6c6">{{ chutimeValue }}</div>
                                            <el-icon :size="20" color="#636363">
                                                <CaretBottom />
                                            </el-icon>
                                        </div>
                                        <template #dropdown>
                                            <el-dropdown-menu>
                                                <el-dropdown-item :command="item.label"
                                                    v-for="(item, index) in chutimeData" :key="index">{{
                                                        item.label }}</el-dropdown-item>
                                            </el-dropdown-menu>
                                        </template>
                                    </el-dropdown>
                                </div>
                                <!-- 健康度 -->
                                <div
                                    class="w-100% h-63% bg-#151515 flex items-center justify-center font-size-16px cursor-pointer">
                                    <div class="w-[420px] h-[240px] bg-#151515 pos-relative">
                                        <div class="w-100% text-center mt--30px">健康度</div>
                                        <div ref="chuchartDomHeath" style="width: 465px; height: 410px;"
                                            class="chartDomcL"></div>
                                    </div>
                                </div>
                            </div>
                            <!-- 右侧栏 -->
                            <div class="w-[978px] flex justify-between">
                                <div class="w-32.8% bg-#151515 h-100%"></div>
                                <div class="w-32.8% bg-#151515 h-100%"></div>
                                <div class="w-32.8% bg-#151515 h-100%"></div>
                            </div>
                        </div>
                        <div class="ml-25px bg-#151515 p-15px box-border w-97.2% h-350px">
                            <!-- 电流 -->
                            <div class="pa-[15px] box-border">
                                <div ref="chuchartDom" class="w-[1350px] h-[300px]"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </el-collapse-item>
            <el-collapse-item title="--线圈-分闸线圈（AC）" name="4" :icon="ArrowRightBold">
                <div class="flex">
                    <div class="w-1450px">
                        <div class="p-15px box-border flex justify-between">
                            <!-- 左侧栏 -->
                            <div class="w-[420px] h-[540px] ml-[10px] flex flex-col justify-between">
                                <!-- 分闸线 -->
                                <div class="w-100% h-17% bg-#151515 flex flex-col justify-center items-center">
                                    <el-dropdown placement="bottom" @command="xianfhandleCommand">
                                        <div class="flex w-150px h-30px items-center justify-center">
                                            <div class="mr-10px c-#c6c6c6">{{ xianfshebeiValue }}</div>
                                            <el-icon :size="20" color="#636363">
                                                <CaretBottom />
                                            </el-icon>
                                        </div>
                                        <template #dropdown>
                                            <el-dropdown-menu>
                                                <el-dropdown-item :command="item.label"
                                                    v-for="(item, index) in xianfdrowData" :key="index">{{
                                                        item.label }}</el-dropdown-item>
                                            </el-dropdown-menu>
                                        </template>
                                    </el-dropdown>
                                </div>
                                <!-- 时间框 -->
                                <div class="w-100% h-17% bg-#151515 flex flex-col justify-center items-center">
                                    <el-dropdown placement="bottom" @command="xianftimeCommand">
                                        <div class="flex w-250px h-30px items-center justify-center">
                                            <div class="mr-10px c-#c6c6c6">{{ xianftimeValue }}</div>
                                            <el-icon :size="20" color="#636363">
                                                <CaretBottom />
                                            </el-icon>
                                        </div>
                                        <template #dropdown>
                                            <el-dropdown-menu>
                                                <el-dropdown-item :command="item.label"
                                                    v-for="(item, index) in xianftimeData" :key="index">{{
                                                        item.label }}</el-dropdown-item>
                                            </el-dropdown-menu>
                                        </template>
                                    </el-dropdown>
                                </div>
                                <!-- 健康度 -->
                                <div
                                    class="w-100% h-63% bg-#151515 flex items-center justify-center font-size-16px cursor-pointer">
                                    <div class="w-[420px] h-[240px] bg-#151515 pos-relative">
                                        <div class="w-100% text-center mt--30px">健康度</div>
                                        <div ref="xianfchartDomHeath" style="width: 465px; height: 410px;"
                                            class="chartDomcL"></div>
                                    </div>
                                </div>
                            </div>
                            <!-- 右侧栏 -->
                            <div class="w-[978px] flex justify-between">
                                <div class="w-32.8% bg-#151515 h-100%"></div>
                                <div class="w-32.8% bg-#151515 h-100%"></div>
                                <div class="w-32.8% bg-#151515 h-100%"></div>
                            </div>
                        </div>
                        <div class="ml-25px bg-#151515 p-15px box-border w-97.2% h-350px">
                            <!-- 电流 -->
                            <div class="pa-[15px] box-border">
                                <div ref="xianfchartDom" class="w-[1350px] h-[300px]"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </el-collapse-item>
            <el-collapse-item title="--线圈-合闸线圈（AC）" name="5" :icon="ArrowRightBold">
                <div class="flex">
                    <div class="w-1450px">
                        <div class="p-15px box-border flex justify-between">
                            <!-- 左侧栏 -->
                            <div class="w-[420px] h-[540px] ml-[10px] flex flex-col justify-between">
                                <!-- 分闸线 -->
                                <div class="w-100% h-17% bg-#151515 flex flex-col justify-center items-center">
                                    <el-dropdown placement="bottom" @command="xianhhandleCommand">
                                        <div class="flex w-150px h-30px items-center justify-center">
                                            <div class="mr-10px c-#c6c6c6">{{ xianhshebeiValue }}</div>
                                            <el-icon :size="20" color="#636363">
                                                <CaretBottom />
                                            </el-icon>
                                        </div>
                                        <template #dropdown>
                                            <el-dropdown-menu>
                                                <el-dropdown-item :command="item.label"
                                                    v-for="(item, index) in xianhdrowData" :key="index">{{
                                                        item.label }}</el-dropdown-item>
                                            </el-dropdown-menu>
                                        </template>
                                    </el-dropdown>
                                </div>
                                <!-- 时间框 -->
                                <div class="w-100% h-17% bg-#151515 flex flex-col justify-center items-center">
                                    <el-dropdown placement="bottom" @command="xianhtimeCommand">
                                        <div class="flex w-250px h-30px items-center justify-center">
                                            <div class="mr-10px c-#c6c6c6">{{ xianhtimeValue }}</div>
                                            <el-icon :size="20" color="#636363">
                                                <CaretBottom />
                                            </el-icon>
                                        </div>
                                        <template #dropdown>
                                            <el-dropdown-menu>
                                                <el-dropdown-item :command="item.label"
                                                    v-for="(item, index) in xianhtimeData" :key="index">{{
                                                        item.label }}</el-dropdown-item>
                                            </el-dropdown-menu>
                                        </template>
                                    </el-dropdown>
                                </div>
                                <!-- 健康度 -->
                                <div
                                    class="w-100% h-63% bg-#151515 flex items-center justify-center font-size-16px cursor-pointer">
                                    <div class="w-[420px] h-[240px] bg-#151515 pos-relative">
                                        <div class="w-100% text-center mt--30px">健康度</div>
                                        <div ref="xianhchartDomHeath" style="width: 465px; height: 410px;"
                                            class="chartDomcL"></div>
                                    </div>
                                </div>
                            </div>
                            <!-- 右侧栏 -->
                            <div class="w-[978px] flex justify-between">
                                <div class="w-32.8% bg-#151515 h-100%"></div>
                                <div class="w-32.8% bg-#151515 h-100%"></div>
                                <div class="w-32.8% bg-#151515 h-100%"></div>
                            </div>
                        </div>
                        <div class="ml-25px bg-#151515 p-15px box-border w-97.2% h-350px">
                            <!-- 电流 -->
                            <div class="pa-[15px] box-border">
                                <div ref="xianhchartDom" class="w-[1350px] h-[300px]"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </el-collapse-item>
            <el-collapse-item title="--储能电机（AC）" name="6" :icon="ArrowRightBold">
                <div class="flex">
                    <div class="w-1450px">
                        <div class="p-15px box-border flex justify-between">
                            <!-- 左侧栏 -->
                            <div class="w-[420px] h-[540px] ml-[10px] flex flex-col justify-between">
                                <!-- 分闸线 -->
                                <div class="w-100% h-17% bg-#151515 flex flex-col justify-center items-center">
                                    <el-dropdown placement="bottom" @command="chuahandleCommand">
                                        <div class="flex w-150px h-30px items-center justify-center">
                                            <div class="mr-10px c-#c6c6c6">{{ chuashebeiValue }}</div>
                                            <el-icon :size="20" color="#636363">
                                                <CaretBottom />
                                            </el-icon>
                                        </div>
                                        <template #dropdown>
                                            <el-dropdown-menu>
                                                <el-dropdown-item :command="item.label"
                                                    v-for="(item, index) in chuadrowData" :key="index">{{
                                                        item.label }}</el-dropdown-item>
                                            </el-dropdown-menu>
                                        </template>
                                    </el-dropdown>
                                </div>
                                <!-- 时间框 -->
                                <div class="w-100% h-17% bg-#151515 flex flex-col justify-center items-center">
                                    <el-dropdown placement="bottom" @command="chuatimeCommand">
                                        <div class="flex w-250px h-30px items-center justify-center">
                                            <div class="mr-10px c-#c6c6c6">{{ chuatimeValue }}</div>
                                            <el-icon :size="20" color="#636363">
                                                <CaretBottom />
                                            </el-icon>
                                        </div>
                                        <template #dropdown>
                                            <el-dropdown-menu>
                                                <el-dropdown-item :command="item.label"
                                                    v-for="(item, index) in chuatimeData" :key="index">{{
                                                        item.label }}</el-dropdown-item>
                                            </el-dropdown-menu>
                                        </template>
                                    </el-dropdown>
                                </div>
                                <!-- 健康度 -->
                                <div
                                    class="w-100% h-63% bg-#151515 flex items-center justify-center font-size-16px cursor-pointer">
                                    <div class="w-[420px] h-[240px] bg-#151515 pos-relative">
                                        <div class="w-100% text-center mt--30px">健康度</div>
                                        <div ref="chuachartDomHeath" style="width: 465px; height: 410px;"
                                            class="chartDomcL"></div>
                                    </div>
                                </div>
                            </div>
                            <!-- 右侧栏 -->
                            <div class="w-[978px] flex justify-between">
                                <div class="w-32.8% bg-#151515 h-100%"></div>
                                <div class="w-32.8% bg-#151515 h-100%"></div>
                                <div class="w-32.8% bg-#151515 h-100%"></div>
                            </div>
                        </div>
                        <div class="ml-25px bg-#151515 p-15px box-border w-97.2% h-350px">
                            <!-- 电流 -->
                            <div class="pa-[15px] box-border">
                                <div ref="chuachartDom" class="w-[1350px] h-[300px]"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </el-collapse-item>
            <el-collapse-item title="--温升" name="7" :icon="ArrowRightBold">
                <div class="flex w-1450px h-500px pl-26px box-border flex">
                    <div class="bg-#151515 w-170px h-140px pos-relative">
                        <div ref="barEchar1" style="width: 200px; height: 180px;" class="chartDomcLbar"></div>
                    </div>
                    <div class="bg-#151515 w-170px h-140px pos-relative">
                        <div ref="barEchar2" style="width: 200px; height: 180px;" class="chartDomcLbar"></div>
                    </div>
                    <div class="bg-#151515 w-170px h-140px pos-relative">
                        <div ref="barEchar3" style="width: 200px; height: 180px;" class="chartDomcLbar"></div>
                    </div>
                </div>
                <div class="pa-[15px] box-border flex">
                    <div class="bg-#151515 w-[350px] h-[120px] items-center">
                        <div
                            class="w-[100%] font-size-[1rem] text-align-center p-t-[12px] flex flex-col items-center justify-center m-b-[20px]">
                            开始时间</div>
                        <div>
                            <div class="demo-date-picker">
                                <div class="block">
                                    <el-date-picker v-model="valueStart" type="date" placeholder="请选择开始时间"
                                        :default-value="new Date()" @change="dataChangeStart" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="ml-[20px] bg-#151515 w-[350px] h-[120px]">
                        <div
                            class="w-[100%] font-size-[1rem] text-align-center p-t-[12px] flex flex-col items-center justify-center m-b-[20px]">
                            结束时间</div>
                        <div>
                            <div class="demo-date-picker">
                                <div class="block">
                                    <el-date-picker v-model="valueEnd" type="date" placeholder="请选择开始时间"
                                        :default-value="new Date()" @change="dataChangeEnd" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div
                        class="ml-[20px] bg-#151515 w-[150px] h-[120px] flex items-center justify-center font-size-1.5em cursor-pointer">
                        查询
                    </div>
                </div>
                <div class="w-1450px flex flex-wrap">
                    <div class="ml-16px bg-#151515 p-15px box-border w-48.2% h-350px mb-15px">
                        <!-- VCB-IN-A -->
                        <div class="pa-[15px] box-border">
                            <div ref="vcbaDom" class="w-[650px] h-[300px]"></div>
                        </div>
                    </div>
                    <div class="ml-16px bg-#151515 p-15px box-border w-48.2% h-350px mb-15px">
                        <!-- VCB-IN-B -->
                        <div class="pa-[15px] box-border">
                            <div ref="vcbbDom" class="w-[650px] h-[300px]"></div>
                        </div>
                    </div>
                    <div class="ml-16px bg-#151515 p-15px box-border w-48.2% h-350px mb-15px">
                        <!-- VCB-IN-C -->
                        <div class="pa-[15px] box-border">
                            <div ref="vcbcDom" class="w-[650px] h-[300px]"></div>
                        </div>
                    </div>
                </div>
            </el-collapse-item>
            <el-collapse-item title="--柜内温度" name="8" :icon="ArrowRightBold">

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

.chartDomcL {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -45%);
}

.chartDomcLbar {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -45%);
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