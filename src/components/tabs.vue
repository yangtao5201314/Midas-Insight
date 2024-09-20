<template>
  <div class="tabs-container">
    <button v-if="showLeftArrow" @click="prevTab" class="arrow left-arrow">←</button>
    <div ref="tabsContainer" class="tabs-wrapper">
      <div ref="tabs" class="tabs">
        <div
          v-for="(tab, index) in tabs"
          :key="index"
          :class="['tab', { active: activeTab === index }]"
          @click="activateTab(index)"
        >
          {{ tab.label }}
        </div>
      </div>
    </div>
    <button v-if="showRightArrow" @click="nextTab" class="arrow right-arrow">→</button>
  </div>
</template>

<script lang="ts">
import { ref, onMounted, watch, nextTick } from 'vue';

export default {
  setup() {
    const tabs = ref([{ label: 'Tab 1' }, { label: 'Tab 2' }, { label: 'Tab 3' }, { label: 'Tab 4' }]);
    const activeTab = ref(0);
    const tabsContainer = ref<HTMLElement | null>(null);
    const tabsElement = ref<HTMLElement | null>(null);
    const showLeftArrow = ref(false);
    const showRightArrow = ref(false);

    const updateArrowsVisibility = () => {
      if (tabsContainer.value && tabsElement.value) {
        const containerWidth = tabsContainer.value.clientWidth;
        const tabsWidth = tabsElement.value.scrollWidth;
        showLeftArrow.value = activeTab.value > 0;
        showRightArrow.value = activeTab.value < tabs.value.length - 1 && tabsWidth > containerWidth;
      }
    };

    const activateTab = (index: number) => {
      activeTab.value = index;
      updateArrowsVisibility();
      nextTick(() => {
        if (tabsElement.value) {
          const tabWidth = tabsElement.value.children[index].clientWidth;
          const offset = Array.from(tabsElement.value.children).slice(0, index).reduce((acc, tab) => acc + tab.clientWidth, 0);
          tabsElement.value.scrollTo({ left: offset, behavior: 'smooth' });
        }
      });
    };

    const prevTab = () => {
      if (activeTab.value > 0) {
        activeTab.value--;
        updateArrowsVisibility();
        nextTick(() => activateTab(activeTab.value));
      }
    };

    const nextTab = () => {
      if (activeTab.value < tabs.value.length - 1) {
        activeTab.value++;
        updateArrowsVisibility();
        nextTick(() => activateTab(activeTab.value));
      }
    };

    onMounted(() => {
      updateArrowsVisibility();
      window.addEventListener('resize', updateArrowsVisibility);
    });

    watch(tabs, updateArrowsVisibility);

    return {
      tabs,
      activeTab,
      tabsContainer,
      tabsElement,
      showLeftArrow,
      showRightArrow,
      activateTab,
      prevTab,
      nextTab,
    };
  },
};
</script>

<style scoped>
.tabs-container {
  display: flex;
  align-items: center;
}
.tabs-wrapper {
  overflow-x: auto;
  white-space: nowrap;
  flex: 1;
  max-width: 300px; /* 设定最大宽度为 300px */
}
.tabs {
  display: inline-flex;
}
.tab {
  padding: 10px 20px;
  cursor: pointer;
  user-select: none;
}
.tab.active {
  font-weight: bold;
}
.arrow {
  background: none;
  border: none;
  cursor: pointer;
  font-size: 20px;
}
</style>
