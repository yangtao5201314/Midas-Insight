<!--
 * @Author: 杨涛 2749552387@qq.com
 * @Date: 2024-09-25 10:55:50
 * @LastEditors: 杨涛 2749552387@qq.com
 * @LastEditTime: 2024-09-25 11:15:05
 * @FilePath: \Midas-Insight\src\components\readXLSX.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
    <div>
        <input type="file" @change="handleFileUpload" accept=".xlsx, .xls" />
        <table v-if="data.length">
            <thead>
                <tr>  
                    <th v-for="(header, index) in headers" :key="index">{{ header }}</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(row, rowIndex) in data" :key="rowIndex">
                    <td v-for="(cell, cellIndex) in row" :key="cellIndex">{{ cell }}</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import * as XLSX from 'xlsx';

const data = ref([]);
const headers = ref([]);

const handleFileUpload = (event) => {
    const file = event.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (e) => {
        const binaryStr = e.target.result;
        const workbook = XLSX.read(binaryStr, { type: 'binary' });
        const firstSheetName = workbook.SheetNames[0]; // 读取第一个表
        const worksheet = workbook.Sheets[firstSheetName];

        // 将数据转换为 JSON 格式
        const jsonData = XLSX.utils.sheet_to_json(worksheet, { header: 1 }); // header: 1 表示第一行作为头部
        headers.value = jsonData[0]; // 第一行作为表头
        data.value = jsonData.slice(1); // 后面的数据
        console.log(jsonData); // 打印 JSON 格式的数据
    };

    reader.readAsBinaryString(file);
};
</script>

<style>
table {
    border-collapse: collapse;
    width: 100%;
}

th,
td {
    border: 1px solid #ddd;
    padding: 8px;
}

th {
    background-color: #f2f2f2;
}
</style>