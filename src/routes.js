import { createRouter, createWebHistory } from "vue-router";
import HelloWorld from "./components/HelloWorld.vue";
import Header from "./components/header/Header.vue";
import Sider from "./components/sider/Sider.vue";
import ErrorPage from "./pages/ErrorPage.vue";

const routes = [
    {
        path: "",
        components: {
            default: HelloWorld,
            sider: Sider,
            header: Header,
            footer: HelloWorld,
        },
        name: "home",
        meta: {
            title: "home",
            showSider: true,
            showHeader: true,
            showFooter: true,
        }
    },
    {
        path: "/about",
        components: {
            default: HelloWorld,
            sider: Sider,
            header: Header,
            footer: HelloWorld,
        },
        name: "about",
        meta: {
            title: "about",
            showSider: true,
            showHeader: true,
            showFooter: true,
        }
    },
    {
        path: "/error/:errorCode(\\d+)",
        name: "error",
        component: ErrorPage,
        props: true,
    },
    {
        path: "/:catchAll(.*)",
        redirect: { name: 'error', params: { errorCode: '404' } },
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;