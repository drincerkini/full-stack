import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/HomeView.vue';
import Categories from '../views/CategoriesView.vue';
import CreateCategory from '../views/CreateCategory.vue';

const routes = [
    {
        path: '/',
        name: 'home',
        component: Home
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
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router;