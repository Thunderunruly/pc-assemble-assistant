<script setup>
import { NIcon, NMenu } from 'naive-ui';
import { inject, h } from 'vue';
import { useI18n } from 'vue-i18n';
import HomeIcon from '../../assets/HomeIcon.vue';
import { RouterLink, useRoute } from 'vue-router';
import AboutIcon from '../../assets/AboutIcon.vue';

const collapsed = inject("collapsed");
const { t } = useI18n();
const route = useRoute();

const renderIcon = (icon) => {
    return () => h(NIcon, null, { default: () => h(icon) });
};

const menuOptions = ["home", "about"]

const menuIcon = {
    home: HomeIcon,
    about: AboutIcon
}

const options = menuOptions.map(key => ({
    key,
    label: () =>
      h(
        RouterLink,
        {
          to: {
            name: key
          }
        },
        { default: () => t("title." + key) }
      ),
    icon: renderIcon(menuIcon[key])
}));
</script>
<template>
    <n-menu
        :accordion="true"
        :collapsed="collapsed"
        :collapsed-width="64"
        :collapsed-icon-size="22"
        :options="options"
        :value="route.name"
    />
</template>