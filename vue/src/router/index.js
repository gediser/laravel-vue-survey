import { createRouter, createWebHistory } from "vue-router"
import  Dashboard from '../views/Dashboard.vue'
import  Surveys from '../views/Surveys.vue'
import  Login from '../views/Login.vue'
import  Register from '../views/Register.vue'
import  DefaultLayout from '../components/DefaultLayout.vue'
import store from "../store"


const routes = [
    {
        path: '/',
        redirect: '/dashboard',
        name: 'Dashboard',
        component: DefaultLayout,
        meta: {requireAuth: true},
        children: [
            { 
                path: '/dashboard',
                name: 'Dashboard',
                component: Dashboard
            },
            { 
                path: '/surveys',
                name: 'Surveys',
                component: Surveys
            }
        ]
    },
    {
        path: '/login',
        name: 'Login',
        component: Login
    },
    {
        path: '/register',
        name: 'Register',
        component: Register
    },
    
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

router.beforeEach((to, from, next) => {
    if (to.meta.requireAuth && !store.state.user.token){
        next({name: 'Login'})
    }else{
        next()
    }
})

export default router