import { createMemoryHistory, createRouter } from "vue-router";
import HelloWorld from "./components/HelloWorld.vue";
import Header from "./components/header/Header.vue";
import Sider from "./components/sider/Sider.vue";

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
    }
];

const router = createRouter({
    history: createMemoryHistory(),
    routes,
});

export default router;