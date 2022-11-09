import Vue from 'vue'
import VueRouter from 'vue-router'
// Layouts
import MainLayout from '/src/layouts/MainLayout.vue';
import PatientLayout from '/src/layouts/PatientLayout.vue';
import AuthLayout from '/src/layouts/AuthLayout.vue';

// Views
import HomeView from '/src/views/HomeView.vue'
import LoginView from '/src/views/LoginView.vue'
import RegisterView from '/src/views/RegisterView.vue'
import PatientListView from '/src/views/PatientListView.vue'
import PatientView from '/src/views/PatientView.vue'

import { ROUTES } from './names'

import goTo from 'vuetify/lib/services/goto'
import { specialistGuard } from './guards';

Vue.use(VueRouter)

const routes = [
    /**
     * Main Pages
     */
    {
        path: '/',
        component: MainLayout,
        children: [
            {
                path: '',
                name: ROUTES.HOME,
                component: HomeView
            },
        ]
    },

    /**
   * Authentication Pages
   */
    {
        path: '/login',
        component: AuthLayout,
        children: [
            {

                path: '',
                name: ROUTES.LOGIN,
                component: LoginView
            },
            {
                path: '/register',
                name: ROUTES.REGISTER,
                component: RegisterView
            }
        ]
    },

    /**
     * Patients Pages
     */
    {
        path: '/patients',
        component: PatientLayout,
        beforeEnter: specialistGuard,
        children: [
            {
                path: '',
                name: ROUTES.PATIENT_LIST,
                component: PatientListView
            },
            {
                path: ':id',
                name: ROUTES.PATIENT,
                component: PatientView
            }
        ]
    },

]

const router = new VueRouter({
    routes,
    /**
     * Programmatic scrolling
     */
    scrollBehavior: (to, from, savedPosition) => {
        let scrollTo = 0

        if (to.hash) {
            scrollTo = to.hash
        } else if (savedPosition) {
            scrollTo = savedPosition.y
        }

        return goTo(scrollTo)
    },
    base: process.env.BASE_URL,
})

export default router
