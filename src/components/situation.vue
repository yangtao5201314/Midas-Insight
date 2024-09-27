<script lang="ts" setup>
import { ref, reactive, onMounted } from "vue";
import type { TableColumnCtx } from 'element-plus'
import { ArrowRightBold } from '@element-plus/icons-vue'
import * as echarts from "echarts";
const activeNames = ref(["1", "2", "3", "4", "5", "6"]); //默认展开第几列
import { dainLiuData } from "@/utils/echars1.ts"
import { currentFun, healthEchat } from "@/utils/utils.ts"

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

onMounted(async () => {
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
</style>