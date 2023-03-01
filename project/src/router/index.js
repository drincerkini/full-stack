import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import Categories from '../views/CategoriesView.vue';
import CreateCategory from '../views/CreateCategory.vue';
import AboutView from '../views/AboutView.vue';

const routes = [
    {
        path: '/',
        name: 'home',
        component: HomeView
    },
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
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router;