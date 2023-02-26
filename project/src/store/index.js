import { createStore } from 'vuex';

const store = createStore({
    state: {
        categories: []
    },
    getters: {

    },
    mutations: {
        setCategories(state, categories) {
            state.categories = categories;
        },
        addCategories(state, categories){
            state.categories.push(categories);
        }
    },
    actions: {
        async fetchCategories({ commit }){
            const res = await fetch('http://localhost:3000/categories');
            const categories = await res.json();

            commit('setCategories', categories);
        },
        async createCategory({ commit }, categoryData){
            const res = await fetch('http://localhost:3000/categories/create', {
                method: 'post',
                body: JSON.stringify(categoryData),
                headers: {
                    'Content-Type': 'application/json'
                }
            })

            const newCategory = await res.json();
            commit('addCategories', newCategory);
        }
    }
});

export default store;