<script lang="ts" setup>
import { ref, reactive, onMounted } from "vue";
import { ArrowRightBold } from '@element-plus/icons-vue'
const activeNames = ref(["1", "2", "3", "4", "5", "6"]); //默认展开第几列
// 折叠面板按钮事件
const handleChange = (val: string[]) => {
  console.log(val);
};
interface fenZhaType {
  name: string;
  value: number;
}
// 分闸线圈
const fenZhaData = reactive<fenZhaType[]>([
  {
    name: "动作次数",
    value: 2
  },
  {
    name: "动作最大电流（A）",
    value: 1.7
  },
  {
    name: "动作最小电流（A）",
    value: 1.7
  },
  {
    name: "电流参考值（A,可设置）",
    value: 0.0
  }
]);
// 合闸线圈
const heZhaData = reactive<fenZhaType[]>([
  {
    name: "动作次数",
    value: 4
  },
  {
    name: "动作最大电流（A）",
    value: 1.8
  },
  {
    name: "动作最小电流（A）",
    value: 1.8
  },
  {
    name: "电流参考值（A,可设置）",
    value: 0.0
  }
]);
// 储能电机
const chuNengData = reactive<fenZhaType[]>([
  {
    name: "动作次数",
    value: 4
  },
  {
    name: "最大电流（A）",
    value: 5.4
  },
  {
    name: "电流参考值（A，可设置）",
    value: 0.0
  },
  {
    name: "最大储能时间（s）",
    value: 4.0
  },
  {
    name: "最小储能时间（s）",
    value: 4.0
  },    
  {
    name: "储能时间参考值（s，可设置）",
    value: 0.0
  }
]);

onMounted(async () => {
});
</script>
<template>
  <div class="demo-collapse">
    <el-collapse v-model="activeNames" @change="handleChange">
      <el-collapse-item title="--开关核心部件" name="1" :icon="ArrowRightBold">
        <div class="pa-[15px] box-border flex">
          <div class="w-[750px]">
            <div class="bg-#151515 w-[100%] h-[70px] items-center flex justify-center">
              <div class="c-#565656 font-size-[20px]">分闸线圈</div>
              <div class="mt-[6px] ml-[6px]">
                <el-icon :size="20" color="#636363">
                  <CaretBottom />
                </el-icon>
              </div>
            </div>
            <div class="w-[100%] flex justify-between" v-for="(item, index) in fenZhaData" :key="index">
              <div class="w-[49.4%] h-[60px] bg-#151515 mt-[10px] c-#808080 font-size-[20px] text-center lh-[60px]">{{
                item.name }}</div>
              <div
                class="w-[49.4%] h-[60px] bg-#151515 mt-[10px] c-#888888 font-size-[25px] text-center lh-[60px] fw-bold">
                {{ item.value }}</div>
            </div>
            <div class="bg-#151515 w-[100%] h-[70px] items-center flex justify-center mt-[10px]">
              <div class="c-#565656 font-size-[20px]">合闸线圈</div>
              <div class="mt-[6px] ml-[6px]">
                <el-icon :size="20" color="#636363">
                  <CaretBottom />
                </el-icon>
              </div>
            </div>
            <div class="w-[100%] flex justify-between" v-for="(item, index) in heZhaData" :key="index">
              <div class="w-[49.4%] h-[60px] bg-#151515 mt-[10px] c-#808080 font-size-[20px] text-center lh-[60px]">{{
                item.name }}</div>
              <div
                class="w-[49.4%] h-[60px] bg-#151515 mt-[10px] c-#888888 font-size-[25px] text-center lh-[60px] fw-bold">
                {{ item.value }}</div>
            </div>
          </div>

          <div class="w-[750px]">
            <div class="ml-[20px] bg-#151515 w-[100%] h-[70px] items-center flex justify-center">
              <div class="c-#565656 font-size-[20px]">储能电机</div>
              <div class="mt-[6px] ml-[6px]">
                <el-icon :size="20" color="#636363">
                  <CaretBottom />
                </el-icon>
              </div>
            </div>  
          
            <div class="ml-[20px] w-[100%] flex justify-between" v-for="(item, index) in chuNengData" :key="index">
              <div class="w-[49.4%] h-[97px] bg-#151515 mt-[10px] c-#808080 font-size-[20px] text-center flex items-center justify-center">{{
                item.name }}</div>
              <div
                class="w-[49.4%] h-[97px] bg-#151515 mt-[10px] c-#888888 font-size-[25px] text-center fw-bold  flex items-center justify-center">
                {{ item.value }}</div>
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
}

.contEne {
  /* color: #ffffff; */
  padding: 15px;
  box-sizing: border-box;
  display: flex;
  /* flex-wrap: wrap; */
}

.one-item {
  width: 740px;
  display: flex;
  justify-content: space-between;
  margin-left: 10px;
  margin-bottom: 10px;
  /* border: 1px solid #ffffff; */
}

.EneItem {
  width: 365px;
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
  width: 365px;
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

.tworight-item {
  width: 216px;
  height: 98px;
  background: #151515;
  margin-right: 10px;
  padding-top: 15px;
  margin-bottom: 4px;
}

.tworight-item>div {
  text-align: center;
}

.tworight-item>div:nth-child(1) {
  font-size: 16px;
}

.tworight-item>div:nth-child(2) {
  font-size: 28px;
  color: #888888;
  font-weight: bold;
}

.chartDomcL {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -45%);
}
</style>