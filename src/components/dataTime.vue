<script setup>
import { nextTick, onMounted, reactive, ref } from "vue";
/**
 * 时间选择器默认选中,最近多少天
 */
const getDatePiker = (dates,dateType='yyyy-MM-dd') => {
    let valueTwoTimer = []
    let newData = new Date();
    let nowMonth = frontOneHour(newData, dateType);
    const front12Hour = new Date(newData - 1000 * 60 * 60 * 24 * (dates-1));;
    let beforeMonth = frontOneHour(front12Hour, dateType);
    valueTwoTimer.push(beforeMonth);
    valueTwoTimer.push(nowMonth);
    return valueTwoTimer
};
const timeRange = 1 * 24 * 60 * 60 * 1000; // 1天时间戳
const timeToTimestamp = (time) => {
    let timestamp = Date.parse(new Date(time).toString());
    return timestamp;
};
export const timeLimits = (times, message, intervalTime = 7) => {
    const minTime = timeToTimestamp(times[0]);
    const maxTime = timeToTimestamp(times[1]);
    const isOver7 = maxTime - minTime > timeRange * intervalTime;
    if (isOver7) {
        ElMessage({
            type: "warning",
            message: message === undefined ? `历史记录查询时间不能超过7天` : message,
        });
        return false;
    } else {
        return true;
    }
}
const timeTypeList = reactive([
    {
        name: "年",
        dateType: "2",
        type: "year",
        valueFormat: "YYYY",
        getDatePikerformat: "yyyy",
        range: false,
    },
    {
        name: "月",
        dateType: "1",
        type: "month",
        valueFormat: "YYYY-MM",
        getDatePikerformat: "yyyy-MM",
        range: false,
    },
    {
        name: "自定义",
        dateType: "3",
        type: "daterange",
        valueFormat: "YYYY-MM-DD",
        range: true,
    },
]);

const Selected = ref(2);
const data = reactive({
    time: null,
});

const changeSelected = (_index) => {
    Selected.value = _index;
    if (timeTypeList[_index].range) {
        nextTick(() => {
            data.time = getDatePiker(30);
        });
    } else {
        data.time = getDatePiker(30, timeTypeList[_index].getDatePikerformat)[1];
        // console.log(timeTypeList[_index].valueFormat);
    }
};

onMounted(() => {
    data.time = getDatePiker(30);
});

const getTimeParams = () => {
    if (!timeTypeList[Selected.value].range) {
        return {
            dateType: timeTypeList[Selected.value].dateType,
            dateTime: data.time,
        };
    } else {
        if (timeLimits(data.time, '历史记录查询或者导出不能超过30天', 30)) {
            return false
        } else {
            return {
                dateType: timeTypeList[Selected.value].dateType,
                startTime: data.time[0],
                endTime: data.time[1],
            };
        }
    }
};

defineExpose({
    getTimeParams,
});
</script>

<template>
    <div class="time_change">
        <div class="time_type" v-for="(item, index) in timeTypeList" :key="index"
            :class="Selected === index ? 'time_type_selected' : ''" @click="changeSelected(index)">
            {{ item.name }}
        </div>
        <el-form :model="data" class="search-box2">
            <el-form-item label="时间范围" class="search-input search-input4" prop="time">
                <el-date-picker v-model="data.time" :type="timeTypeList[Selected].type"
                    :value-format="timeTypeList[Selected].valueFormat" range-separator="至" start-placeholder="开始时间"
                    end-placeholder="结束时间" :unlink-panels="true" :clearable="false" />
            </el-form-item>
        </el-form>
    </div>
</template>

<style lang="less" scoped>
.time_change {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;

    .time_type {
        height: 36px;
        line-height: 36px;
        padding: 0 10px;
        background: #ebf0f5;
        border-radius: 4px 4px 4px 4px;
        border: 1px solid #ffffff;
        color: #4279ca;
        cursor: pointer;
    }

    .time_type_selected {
        background: #4279ca;
        color: #ffffff;
    }

    .search-box2 {
        width: 423px;
        height: 36px;
        line-height: 36px;

        :deep(.el-form-item) {
            .el-form-item__label {
                padding-left: 0.57292vw;
                background-color: #dae5f2 !important;
                color: #4279ca;
                font-size: calc(100vw * 16 / 1920);
                height: 2.1875vw;
                text-align: center;
                line-height: 2.1875vw;
                justify-content: flex-start;
            }

            .el-date-editor .el-range-input {
                font-size: calc(100vw * 18 / 1920);
            }

            .el-input__inner {
                font-size: calc(100vw * 18 / 1920);
            }
        }

        .el-form-item {
            width: 100%;
            height: 100%;
            box-sizing: border-box;
            margin: 0;
            border: none;
            line-height: inherit;
            background: #f0f5fa;
            border-radius: 4px 4px 4px 4px;
            border: 1px solid #ffffff;

            :deep(.el-form-item__label) {
                height: 100%;
                border-radius: 4px;
                line-height: inherit;
            }

            :deep(.el-form-item__content) {
                flex: 1;

                .el-input {
                    height: 100%;

                }

                .el-input__wrapper {
                    box-shadow: none;
                    background: none;
                    height: 100%;
                }
            }
        }
    }
}
</style>