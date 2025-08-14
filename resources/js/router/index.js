// resources/js/router/index.js
import { createRouter, createWebHistory } from 'vue-router';
import { useAuthStore } from '../stores/auth';
import NProgress from 'nprogress';
import 'nprogress/nprogress.css';

const Login = () => import('../views/auth/Login.vue');
const Register = () => import('../views/auth/Register.vue');
const Home = () => import('../views/Home.vue');

const routes = [
    //{ path: '/login', component: Login, meta: { public: true } },
    //{ path: '/register', component: Register, meta: { public: true } },
    { path: '/', name: 'Home', component: Home, meta: { public: true } },
    { path: '/profile/{user}', name: 'Profile', component: Home, meta: { public: true } },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

router.beforeEach(async (to, from, next) => {
    NProgress.start();
    const publicPage = to.meta.public;
    const auth = useAuthStore();

    /*if (!auth.user) {
        await auth.fetchUser();
    }*/

    if (publicPage) {
        if (auth.isLoggedIn) return next('/'); // redirect logged in from public pages
        return next();
    }

    if (!auth.isLoggedIn) {
        return next('/');
    }

    next();
});


router.afterEach(() => {
    NProgress.done(); // Finish loading bar when route resolves
});

export default router;
