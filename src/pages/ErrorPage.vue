<script setup>
import { NA, NH1 } from 'naive-ui';
import { ref, watch } from 'vue';
import { useI18n } from 'vue-i18n';
import { useRoute } from 'vue-router';

const route = useRoute();
const { t } = useI18n();
const errorCode = ref(route.params.errorCode || '404');
watch(() => route.params.errorCode, (newCode) => {
    errorCode.value = newCode;
});
</script>

<template>
    <div class="error-content">
    <svg class="error-svg" viewBox="0 0 960 300">
        <symbol id="s-text">
            <text text-anchor="middle" x="50%" y="50%">{{ errorCode }}</text>
        </symbol>

        <g class = "g-ants">
            <use xlink:href="#s-text" class="error-text"></use>
            <use xlink:href="#s-text" class="error-text"></use>
            <use xlink:href="#s-text" class="error-text"></use>
            <use xlink:href="#s-text" class="error-text"></use>
            <use xlink:href="#s-text" class="error-text"></use>
        </g>
    </svg>
     
    <n-h1>{{ t("error." + errorCode) }}</n-h1>
    <n-a href="/">{{ t("back.home") }}</n-a>
    </div>

</template>

<style>
.error-svg {
    font: 10.5em 'Monoton';
}

.error-content{
  text-align: center;
}

.error-text {
    fill: none;
    stroke-dasharray: 8% 29%;
    stroke-width: 5px;
    stroke-dashoffset: 1%;
    animation: stroke-offset 5.5s infinite linear;
}

.error-text:nth-child(1){
	stroke: #1c234d;
	animation-delay: -1;
}

.error-text:nth-child(2){
	stroke: #315b2c;
	animation-delay: -2s;
}

.error-text:nth-child(3){
	stroke: #2f8f7f;
	animation-delay: -3s;
}

.error-text:nth-child(4){
	stroke: #2f8f7f;
	animation-delay: -4s;
}

.error-text:nth-child(5){
	stroke: #da2717;
	animation-delay: -5s;
}

@keyframes stroke-offset{
	100% {
    stroke-dashoffset: -35%;
  }
}
</style>
