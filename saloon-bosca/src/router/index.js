import { createWebHistory, createRouter } from "vue-router";

import homeView from '../views/home/homeView.vue';
import employeeView from '../views/employee/employeeView.vue';
import schedulingView from "@/views/scheduling/schedulingView.vue";

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
    {
        path: '/scheduling',
        name: "Scheduling",
        component: schedulingView
    },
];

const router = createRouter ({
    history: createWebHistory(),
    routes,
});

export default router