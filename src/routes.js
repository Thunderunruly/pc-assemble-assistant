import { createMemoryHistory, createRouter } from "vue-router";
import HelloWorld from "./components/HelloWorld.vue";

const routes = [
    {
        path: "",
        components: {
            default: HelloWorld,
            sider: HelloWorld,
            header: HelloWorld,
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