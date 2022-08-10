import {createRouter, createWebHashHistory} from "vue-router";
import Show from '../views/Show.vue'

const router = createRouter({
    history: createWebHashHistory(),
    routes: [
        {
            path: '/',
            name: 'Show',
            component: Show
        },
        {
            path: '/analysis',
            name: 'Analysis',
            component: () => import('../views/Analysis.vue')
        },
        {
            path: '/count',
            name: 'Count',
            component: () => import('../views/Count.vue')
        },
        {
            path: '/test',
            name: 'Test',
            component: () => import('../views/Test.vue')
        }
    ]
})

export default router
