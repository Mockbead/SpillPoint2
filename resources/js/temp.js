// resources/js/router/index.js
import { createRouter, createWebHistory } from 'vue-router';
import { useAuthStore } from '../stores/auth';

const Login = () => import('../views/auth/Login.vue');
const Register = () => import('../views/auth/Register.vue');
const Home = () => import('../views/Home.vue');

const routes = [
    { path: '/login', component: Login, meta: { public: true } },
    { path: '/register', component: Register, meta: { public: true } },
    { path: '/', name: 'Home', component: Home },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

router.beforeEach(async (to, from, next) => {
    const publicPage = to.meta.public;
    const auth = useAuthStore();

    if (!auth.user) {
        await auth.fetchUser();
    }

    if (publicPage) {
        if (auth.isLoggedIn) return next('/'); // redirect logged in from public pages
        return next();
    }

    if (!auth.isLoggedIn) {
        return next('/login');
    }

    next();
});

export default router;
