import { createRouter, createWebHistory } from 'vue-router'

const routes = [
    {
        path: '/',
        name: 'web.index',
        component: () => import("../views/web/index.vue")
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;