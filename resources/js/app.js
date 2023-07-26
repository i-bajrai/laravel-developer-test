import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';
import '../css/app.css';
import App from './App.vue';
import CreateCompany from './components/Company/Create.vue';
import Companies from './components/Company/Index.vue';
import Dashboard from './components/Dashboard.vue';
import CreateEmployee from './components/Employee/Create.vue';
import Employees from './components/Employee/Index.vue';
import Login from './components/Login.vue';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', redirect: '/login' },
        { path: '/login', component: Login },
        { path: '/companies', component: Companies },
        { path: '/employees', component: Employees },
        { path: '/dashboard', component: Dashboard },
        { path: '/companies/create', component: CreateCompany },
        { path: '/employees/create', component: CreateEmployee },
    ],
});

createApp(App).use(router).mount('#app');
