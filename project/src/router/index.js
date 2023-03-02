import { createRouter, createWebHistory } from 'vue-router';
import Categories from '../views/CategoriesView.vue';
import CreateCategory from '../views/CreateCategory.vue';
import AboutView from '../views/AboutView.vue';
import LoginView from '../views/LoginView.vue';
import RegisterView from '../views/RegisterView.vue';

const routes = [
    // {
    //     path: '/',
    //     name: 'home',
    //     component: HomeView
    // },
    {
        path: '/categories',
        name: 'categories',
        component: Categories
    },
    {
        path: '/createcategories',
        name: 'createcategories',
        component: CreateCategory
    },
    {
        path: '/about',
        name: 'about',
        component: AboutView
    },
    {
        path: '/register',
        name: 'register',
        component: RegisterView
    },
    {
        path: '/login',
        name: 'login',
        component: LoginView
    },
    {
        path: '/',
        name: 'home',
        component: () => import('../views/CreateComponent')
      },
      {
        path: '/view',
        name: 'view',
        component: () => import('../views/ListComponent.vue')
      },
      {
        path: '/edit/:id',
        name: 'edit',
        component: () => import('../views/EditComponent')
      }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router;