import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from "@/views/Home";
import About from "@/views/About";
import Login from "@/views/Login";
import Product from "@/views/Product";
import Profile from "@/views/Profile";

Vue.use(VueRouter);

const routes = [
    { path: '/', component: Home },
    { path: '/about', component: About },
    { path: '/login', component: Login },
    { path: '/product', component: Product },
    { path: '/profile', component: Profile },
];

const router = new VueRouter({
    mode: 'history',
    routes,
});

export default router;