import { createRouter, createWebHistory, useRouter } from 'vue-router'

const router = createRouter({
    history: createWebHistory(null),
    routes: [
        {
            path: '/',
            name: 'home',
            component: () => import('../components/HelloWorld.vue'),
        },
        {
            path: '/login',
            name: 'login',
            component: () => import('../components/Login.vue'),
        },
        {
            path: '/register',
            name: 'register',
            component: () => import('../components/Register.vue'),
        },

    ]
})

export default router