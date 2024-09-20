<!--
 * @Author: 杨涛 2749552387@qq.com
 * @Date: 2024-09-11 09:37:28
 * @LastEditors: 杨涛 2749552387@qq.com
 * @LastEditTime: 2024-09-19 18:31:15
 * @FilePath: \vite3\src\view\home\index.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<script setup lang="ts">
import { ref, onMounted ,onBeforeUnmount,reactive } from "vue";
import { useRouter } from "vue-router";
import { ElContainer, ElHeader, ElMain, ElFooter } from "element-plus";
import shiKaung from '@/assets/home/real.svg'; // 导入图像
import quShi from '@/assets/home/trend.svg'; // 导入图像
import tongJi from '@/assets/home/static.svg'; // 导入图像   
import aiZhengduan from '@/assets/home/settingsMenuIcon.svg'; // 导入图像
import sheBeiXinXi from '@/assets/home/cabinet.svg'; // 导入图像
import sheBeiZiTai from '@/assets/home/switch.svg'; // 导入图像
import shiJian from '@/assets/home/event.svg'; // 导入图像
import xunJian from '@/assets/home/icon.svg'; // 导入图像  

const router = useRouter();

// 用户icon的颜色
const userColor = ref("#ffffff");
const currentTime = ref<string>("");
// 实时时间
const updateTime = () => {
  const now = new Date();
  currentTime.value = now
    .toISOString()
    .slice(0, 19)
    .replace("T", " "); // 格式化为 YYYY-MM-DD HH:mm:ss
};

// 定义类型
interface ListItem {
  icon: string;
  title: string;
}
type arrListType = ListItem[]
const arrList = reactive<arrListType>([
  {
    icon: shiKaung,
    title:'实况'
  },
  {
    icon:quShi,
    title:'趋势'
  },
  {
    icon:tongJi,
    title:'统计'
  },
  {
    icon:aiZhengduan,
    title:'Ai诊断'
  },
  {
    icon:sheBeiXinXi,
    title:'设备信息'
  },
  {
    icon:sheBeiZiTai,
    title:'设备态势'
  },
  {
    icon:shiJian,
    title:'事件'
  },   
  {
    icon:xunJian,
    title:'巡检'
  }
])
  

const opMenu = (e)=>{
  router.push({
    path: "/meipower"
  });
}

onMounted(async () => {
   updateTime(); // 初始化时间
      const interval = setInterval(updateTime, 1000); // 每秒更新
      onBeforeUnmount(() => clearInterval(interval)); // 清理定时器
});

</script>

<template>
  <div class="main">
    <div class="common-layout">
      <el-container>
        <el-header class="header">
          <div class="logo"></div>
          <div class="title">态势感知系统</div>
          <div class="nameMin">Midas Insight</div>
        </el-header>
        <el-main class="elMainCon">
          <div class="elMainCon-left">
            <div class="left-icon"></div>
            <div class="text-left">Digital Pedestal</div>
            <div class="side-menu-text">数字底座</div>
          </div>
          <div class="elMainCon-midder">
            <div class="midder-left">
              <div class="minitem" v-for="(item, index) in arrList.slice(0, 4)" :key="index" @click="opMenu(item)">
                <div class="main-menu-item-icon" :style="{ backgroundImage: `url(${item.icon})` }"> </div>
                <div class="main-menu-item-title">{{ item.title }} </div>
              </div>
            </div>
            <div class="midder-midd">
              <div class="midder-top">
                <div class="top-item">
                  <div class="item1"></div>
                  <div class="item2">监视</div>
                  <div class="item3">Monitoring</div>
                </div>
                <div class="top-item">
                  <div class="item1"></div>
                  <div class="item2">监视</div>
                  <div class="item3">Monitoring</div>
                </div>
              </div>
              <div class="midder-md">
                <div class="gauge">
                  <div class="ring"></div>
                  <div class="ticks"></div>
                  <div class="health" id="totalHealthScore">96</div>

                </div>
              </div>
              <div class="midder-top">
                <div class="top-item">
                  <div class="item1"></div>
                  <div class="item2">监视</div>
                  <div class="item3">Monitoring</div>
                </div>
                <div class="top-item">
                  <div class="item1"></div>
                  <div class="item2">监视</div>
                  <div class="item3">Monitoring</div>
                </div>
              </div>
            </div>
            <div class="midder-right">
               <div class="minitem" v-for="(item, index) in arrList.slice(4, 8)" :key="index" @click="opMenu(item)">
                <div class="main-menu-item-icon" :style="{ backgroundImage: `url(${item.icon})` }"> </div>
                <div class="main-menu-item-title">{{ item.title }} </div>
              </div>
            </div>
          </div>
          <div class="elMainCon-right">
              <div class="left-icon"></div>
              <div class="text-left">Digital Prism</div>
              <div class="side-menu-text">数字棱镜</div>
          </div>
        </el-main>
        <el-footer class="fortername">
          <div class="fot-left">
            <el-icon :size="40" :color="userColor">
              <User />
            </el-icon>
            <el-text class="mx-1">Admin</el-text>   
          </div>
          <div class="time">{{ currentTime }}</div>
        </el-footer>
      </el-container>
    </div>
  </div>
</template>

<style lang='scss' scoped>
@import "index.scss";
</style>
