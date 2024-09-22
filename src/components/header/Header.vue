<script setup>
import { NFlex, NAvatar, NInputGroup, NButton, NInput, NIcon } from 'naive-ui';
import { inject } from 'vue';
import LanguageSwitcher from '../LanguageSwitcher.vue';
import SearchIcon from '../../assets/SearchIcon.vue';
const collapsed = inject("collapsed");
</script>
<template>
    <n-flex justify="space-between" align="center" class="pc-header">
        <div>logo</div>
        <n-input-group :style="{ width: '30%' }">
            <n-input round/>
            <n-button ghost round>
                <n-icon :size="24">
                    <SearchIcon/>
                </n-icon>
            </n-button>
        </n-input-group>
        <!-- <n-avatar round lazy>user</n-avatar> -->
        <n-flex>
            <LanguageSwitcher class="language-list"/>
        </n-flex>
    </n-flex>
</template>
<style>
.pc-header {
    height: 100%;
    padding: 0 24px;
}

.language-list {
    width: auto;
}
</style>