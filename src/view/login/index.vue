<!--
 * @Author: 杨涛 2749552387@qq.com
 * @Date: 2024-09-19 09:48:21
 * @LastEditors: 杨涛 2749552387@qq.com
 * @LastEditTime: 2024-09-20 11:49:06
 * @FilePath: \vite3\src\view\login\index.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<script setup lang="ts">
import { ref,reactive, onMounted, onUnmounted } from "vue";
import { ElMessage } from 'element-plus'
import { useRouter } from "vue-router";
const router = useRouter();

interface UserInfo {
  username: string;
  password: string;
}

const userInfo = reactive<UserInfo>({
    username:'',
    password:'',
})
const login = ()=>{
    if(!userInfo.username) return ElMessage.error('请输入用户名')
    if(!userInfo.password) return ElMessage.error('请输入用户密码')
    ElMessage.success('登录成功')
    router.push({
        path: "/home",
    });
}

// 初始化ECharts实例并设置配置项（这里以折线图为例，但可灵活替换）
onMounted(async () => {});

// 销毁ECharts实例
onUnmounted(() => {});
</script>

<template>
  <div class="container">
      <div class="logo"></div>
      <div class="title">Midas-Insight</div>
      <div class="inputs">
        <label>UserName</label>
        <input type="text" name="email" placeholder="admin" v-model="userInfo.username" />
        <label>password</label>
        <input type="password" name="password" placeholder="admin123"  v-model="userInfo.password"/>
        <button type="submit"  @click="login">登录</button>
      </div>
    </div>
</template>

<style lang='scss' scoped>
@import 'index.scss'
</style>
