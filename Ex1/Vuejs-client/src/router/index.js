import { createRouter, createWebHistory } from 'vue-router'
// import HomeLogin from '../views/HomeLogin.vue'

const router = createRouter({
    history: createWebHistory(
        import.meta.env.BASE_URL),
    routes: [{
            path: '/',
            name: 'login',
            component: () =>
                import ('../views/Login.vue')
        },
        {
            path: '/register',
            name: 'register',
            component: () =>
                import ('../views/Register.vue')
        },
        {
            path: '/home',
            name: 'homepage',
            component: () =>
                import ('../views/Homepage.vue')
        },
         {
            path: '/logout',
            name: 'logout',
            component: () =>
                import ('../views/Login.vue')
        },
    ]
})

export default router
