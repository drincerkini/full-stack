
<script>
    export default {
        data(){
            return {
                newCategory: {
                    title: '',
                    description: ''
                },
                allCategories: this.$store.state.categories
            }
        },

        methods: {
            async handleCreateCategory(){
                this.$store.dispatch('createCategory', { ...this.newCategory });
                this.newCategory.title = '';
                this.newCategory.description = '';
            }
        }

    }
</script>


<template>

    <!-- <div v-for="cat in allCategories" :key="cat.id"> {{ cat.title }}</div> -->

    <form @submit.prevent="handleCreateCategory">
        <h3>Create New Category</h3>
        <div class="from-group">
            <label for="name" >Title:</label>
            <input id="name" v-model="newCategory.title"  />
        </div>
        <div class="from-group">
            <label for="description" >Description:</label>
            <input id="description" v-model="newCategory.description"  />
        </div>
        <button>Create</button>
    </form>

</template>


<style scoped>

form{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border: 2px solid gray;
    border-radius: 50px;
    width: 500px;
    height: 300px;
    margin-left: 500px;
    margin-top: 50px;
    padding: 5px;
}
.from-group{
    margin: 5px;
    padding: 5px;
}
button{
    width: 200px;
    background-color: beige;
    color: gray;
    font-size: large;
    border-radius: 50px;
    margin-top: 15px; 
}
</style>