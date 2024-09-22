<script setup>
import { ref, watch } from 'vue';
import { useI18n } from 'vue-i18n';
import { useRouter } from 'vue-router';

const { locale, t, availableLocales } = useI18n();
const router = useRouter();
const currentLanguage = ref(locale.value);

const options = availableLocales.map(language => ({
    label: t("languages." + language),
    value: language
}))

const changeLanguage = () => {
  locale.value = currentLanguage.value;
};

watch(locale, () => {
  const titleKey = "title." + (router.currentRoute.value.meta.title || "default");
  document.title = t(titleKey);
});
</script>

<template>
    <n-select v-model:value="locale" :options="options"/>
  </template>
  