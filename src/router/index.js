import { createRouter, createWebHashHistory } from 'vue-router';
import Main from '../components/Main';
import Preview from "@/components/Preview";

export default createRouter({
    history: createWebHashHistory(),
    routes: [
        {
            path: '/',
            name: 'main',
            component: Main,
        },
        {
            path: '/preview',
            name: 'preview',
            component: Preview,
        }
    ]
})