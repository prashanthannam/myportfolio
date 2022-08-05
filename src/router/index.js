import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/home-page.vue';
import Profile from '../views/profile-page.vue';
import Resume from '../views/resume-page.vue';
import Me from '../views/me-page.vue'
Vue.use(VueRouter);

const routes = [{
        path: '/',
        name: 'Home',
        component: Home,
    },
    {
        path: '/profile',
        name: 'Profile',
        component: Profile,
    },
    {
        path: '/resume',
        name: 'Resume',
        component: Resume,
    },
    {
        path: '/me',
        name: 'Me',
        component: Me,
    },
];

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes,
});

export default router;