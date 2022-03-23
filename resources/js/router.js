import { createRouter, createWebHistory } from 'vue-router'
const routes = [
    {
        path: '/fruits', component: () => import('./components/Fruit/Index'),
        name: 'fruit.index'
    },
    {
        path: '/login', component: () => import('./components/User/Login'),
        name: 'user.login'
    },
    {
        path: '/registration', component: () => import('./components/User/Registration'),
        name: 'user.registration'
    },
    {
        path: '/personal', component: () => import('./components/PersonalComponent'),
        name: 'user.personal'
    }
]



const router = createRouter({
    history: createWebHistory(),
    mode: 'history',
    routes
})

router.beforeEach((to,from, next) => {
    const token = localStorage.getItem('x_xsrf_token')

    if(!token){
        if(to.name === 'user.login' || to.name === 'user.registration' ){
            return next()
        }else {
            return next({
                name: 'user.login'
            })
        }
    }

    if (token && to.name === 'user.login' || to.name === 'user.registration' ){
        return next({
            name: 'user.personal'
        })
    }

    next()
})

export default router
