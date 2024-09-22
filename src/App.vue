<script setup>
import { provide, ref, watch } from 'vue';
import { darkTheme, lightTheme, useOsTheme } from "naive-ui";
import LanguageSwitcher from './components/LanguageSwitcher.vue';

const osTheme = useOsTheme();
const currentTheme = ref('system');
const theme = ref(lightTheme);

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
    <LanguageSwitcher/>
    <router-view name="left"/>
    <router-view/>
  </n-config-provider>
</template>