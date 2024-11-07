import { createWebHistory, createRouter } from "vue-router";

import homeView from '../views/home/homeView.vue';
import employeeView from '../views/employee/employeeView.vue';

const routes = [
    {
        path: '/',
        name: "Home",
        component: homeView
    },
    {
        path: '/employees',
        name: "Employee",
        component: employeeView
    },
];

const router = createRouter ({
    history: createWebHistory(),
    routes,
});

export default router