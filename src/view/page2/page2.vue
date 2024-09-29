

<template>
    <div class="bg-#151515 w-170px h-140px pos-relative">
        <div ref="barEchar1" style="width: 200px; height: 180px;" class="chartDomcLbar"></div>
    </div>
    <div class="bg-#151515 w-170px h-140px pos-relative">
        <div ref="barEchar2" style="width: 200px; height: 180px;" class="chartDomcLbar"></div>
    </div>
</template>
<script setup lang="ts">
import { ref,reactive, onMounted } from "vue";
import { barEchat } from "@/utils/utils.ts"

const barEchar1 = ref(null);
const barEchar2 = ref(null);
const barEchar1Obj = reactive({
    name: "VCB-IN-A温度",
    unit: '℃',
    number: 32.3  
});
onMounted(async () => {
    await barEchat(barEchar1, barEchar1Obj)
    await barEchat(barEchar2, barEchar1Obj)
})
</script>

<style scoped></style>