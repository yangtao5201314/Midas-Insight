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
interface DroType {
    label: string;
}

class DeviceData {
    // 分闸线圈相关
    drowData = reactive<DroType[]>([{
        label: "分闸线圈"
    }]);
    // 健康度图表
    chartDomHeath = ref(null);
    chartBomHeath = reactive({
        name: "总体健康度",
        num: 96
    });
    // 电流数据图表

    shebeiValue = ref<string | number | object>("分闸线圈");

    handleCommand = (command: string | number | object) => {
        this.shebeiValue.value = command;
    }

    // 时间线相关
    timeData = reactive<DroType[]>([{
        label: "2024-08-13 08：34：33.880"
    }, {
        label: "2024-08-13 08：34：33.906"
    }]);
    timeValue = ref<string | number | object>("2024-08-13 08：34：33.880");

    timeCommand = (command: string | number | object)=> {
        this.timeValue.value = command;
    }

    // 健康度图表
    chartDomHealth = ref(null);
    chartBomHealth = reactive({
        name: "总体健康度",
        num: 96
    });

    // 电流数据图表
    chartDom = ref(null);
    chartBom = reactive({
        name: "电流",
        unit: 'A'
    });
}

// 使用示例
const deviceData = new DeviceData();
onMounted(async () => {
    await healthEchat(deviceData.chartDomHeath, deviceData.chartBomHeath)  //电流总体健康度
    // await currentFun(chartDom, chartBom, dainLiuData)  //电流数据
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
                                    <el-dropdown placement="bottom" @command="deviceData.handleCommand">
                                        <div class="flex w-150px h-30px items-center justify-center">
                                            <div class="mr-10px c-#c6c6c6">{{ deviceData.shebeiValue }}</div>
                                            <el-icon :size="20" color="#636363">
                                                <CaretBottom />
                                            </el-icon>
                                        </div>
                                        <template #dropdown>
                                            <el-dropdown-menu>
                                                <el-dropdown-item :command="item.label"
                                                    v-for="(item, index) in deviceData.drowData" :key="index">{{
                                                        item.label }}</el-dropdown-item>
                                            </el-dropdown-menu>
                                        </template>
                                    </el-dropdown>
                                </div>
                                <!-- 时间框 -->
                                <div class="w-100% h-17% bg-#151515 flex flex-col justify-center items-center">
                                    <el-dropdown placement="bottom" @command="deviceData.timeCommand">
                                        <div class="flex w-250px h-30px items-center justify-center">
                                            <div class="mr-10px c-#c6c6c6">{{ deviceData.timeValue }}</div>
                                            <el-icon :size="20" color="#636363">
                                                <CaretBottom />
                                            </el-icon>
                                        </div>
                                        <template #dropdown>
                                            <el-dropdown-menu>
                                                <el-dropdown-item :command="item.label"
                                                    v-for="(item, index) in deviceData.timeData" :key="index">{{
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