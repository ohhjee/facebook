import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import login from '../view/Auth/login.vue'
import Register from '../view/Auth/Register.vue'
import Dashboard from '../view/Dashboard.vue'
import store from '../store'
import validateVue from '../view/Auth/validate.vue'



const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        redirect: '/dashboard',
        meta: { requireAuth: true },
        component: Dashboard,
        children: [
            {
                path: '/dashboard',
                name: 'Dashboard',
                component: Dashboard,
            },
        ]
    },

    {
        path: '/auth',
        redirect: '/login',
        name: 'Auth',
        meta: { isGuest: true },
        children: [
            {
                path: '/login',
                name: 'Login',
                component: login
            },
            {
                path: '/validate',
                component: validateVue,
                name: 'Validate',
            },
            {
                path: '/register',
                name: 'Register',
                component: Register
            },
        ]
    }
]


const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes
})

router.beforeEach((to, from, next) => {
    if (to.meta.requireAuth && !store.state.user.token) {
        next({ name: 'Login' })
    } else if (store.state.user.token && (to.meta.isGuest)) {
        next({ name: 'Dashboard' })
    }
    else {
        next()
    }
})

export default router