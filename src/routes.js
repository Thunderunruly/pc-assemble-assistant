import { createMemoryHistory, createRouter } from "vue-router";
import HelloWorld from "./components/HelloWorld.vue";

const routes = [
    {
        path: "",
        components: {
            default: HelloWorld,
            left: HelloWorld,
        },
        name: "Home",
        meta: {
            title: "home"
        }
    }
];

const router = createRouter({
    history: createMemoryHistory(),
    routes,
});

export default router;