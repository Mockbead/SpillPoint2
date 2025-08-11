import { createRouter, createWebHistory } from 'vue-router';
import axios from '../axios'
//AUTH
import Login from '../views/auth/Login.vue'
import Register from '../views/auth/Register.vue'
//WEBSITE
import Home from '../views/Home.vue';

const routes = [
    //AUTH
    { path: '/login', component: Login, meta: { public: true } },
    { path: '/register', component: Register, meta: { public: true } },
    //WEBSITE
    { path: '/', name: 'Home', component: Home },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

router.beforeEach(async (to, from, next) => {
    if (to.meta.public) return next()

    try {
        await axios.get('/sanctum/csrf-cookie')
        await axios.get('/api/user')
        next()
    } catch (e) {
        if (e.response?.status === 401) return next('/login')
        next(e)
    }
})


export default router;
