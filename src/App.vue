<script setup>
import { provide, ref, watch } from 'vue';
import { darkTheme, lightTheme, NLayout, useOsTheme, NGlobalStyle, NConfigProvider, NLayoutSider, NLayoutHeader, NLayoutFooter } from "naive-ui";
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
    <n-layout style="height: 100vh">
    <n-layout-header style="height: 64px; padding: 24px" bordered v-if="route.meta.showHeader">
      <router-view name="header" />
    </n-layout-header>
    <n-layout position="absolute" style="top: 64px; bottom: 64px" has-sider>
      <n-layout-sider
        content-style="padding: 24px;"
        :native-scrollbar="false"
        collapse-mode="width"
        show-trigger="bar"
        :collapsed="collapsed"
        @collapse="collapsed = true"
        @expand="collapsed = false"
        bordered
        v-if="route.meta.showSider"
      >
        <router-view name="sider" />
      </n-layout-sider>
      <n-layout content-style="padding: 24px;" :native-scrollbar="false">
        <router-view />
      </n-layout>
    </n-layout>
    <n-layout-footer
      position="absolute"
      style="height: 64px; padding: 24px"
      bordered
      v-if="route.meta.showFooter"
    >
      <router-view name="footer" />
    </n-layout-footer>
  </n-layout>
  </n-config-provider>
</template>

<style>
</style>