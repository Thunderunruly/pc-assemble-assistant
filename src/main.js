import { createApp } from 'vue'
import App from './App.vue'
import { create, NButton, NCard, NConfigProvider, NGlobalStyle, NSelect } from 'naive-ui'
import router from './routes';
import i18n from './i18n';

const naive = create({
    components: [NConfigProvider,NButton,NCard, NSelect, NGlobalStyle]
});


const app = createApp(App);
app.use(i18n);
app.use(router);
app.use(naive);

router.beforeEach( async ( to, from, next ) => {
    const titleKey = "title." + (to.meta.title || "default");
    document.title = i18n.global.t(titleKey);
    next();
});

app.mount('#app');
