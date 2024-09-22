<script setup>
import { provide, ref, watch } from 'vue';
import { darkTheme, lightTheme, NLayout, useOsTheme, NLayoutContent, NGlobalStyle, NConfigProvider, NLayoutSider, NSpace, NLayoutHeader, NLayoutFooter } from "naive-ui";
import { useRoute } from 'vue-router';

const osTheme = useOsTheme();
const currentTheme = ref('system');
const theme = ref(lightTheme);
const collapsed = ref(true);
const route = useRoute();

const themeOptions = [
  { label: 'System', value: 'system' },
  { label: 'Dark', value: 'dark' },
  { label: 'Light', value: 'light' },
];

const updateTheme = (value) => {
  if (value === 'system') {
    theme.value = osTheme.value === 'dark' ? darkTheme : lightTheme;
  } else {
    theme.value = value === 'dark' ? darkTheme : lightTheme;
  }
};

watch(currentTheme, (newValue) => {
  updateTheme(newValue);
});

watch(osTheme, () => {
  if (currentTheme.value === 'system') {
    updateTheme('system');
  }
});

updateTheme(currentTheme.value);
provide("theme", {
  options: themeOptions,
  update: updateTheme
})
</script>

<template>
  <n-config-provider :theme="theme">
    <n-global-style />
    <div style="height: 100vh; position: relative; width: 100vw;">
      <n-layout-header
        style="top: 0; min-height: 64px; padding: 0 24px;"
        position="absolute"
        bordered
        v-if="route.meta.showHeader"
        class="layout"
      >
        <router-view name="header" />
      </n-layout-header>
      <n-layout has-sider style="">
        <n-layout-sider
          bordered
          collapse-mode="width"
          :native-scrollbar="false"
          show-trigger="bar"
          :collapsed="collapsed"
          @collapse="collapsed = true"
          @expand="collapsed = false"
          v-if="route.meta.showSider"
        >
          <router-view name="sider" />
          <n-layout-footer bordered >
            <router-view name="footer" />
          </n-layout-footer>
        </n-layout-sider>
        <n-layout-content :native-scrollbar="false" >
          <router-view />
        </n-layout-content>
      </n-layout>
    </div>
  </n-config-provider>
</template>

<style>
</style>