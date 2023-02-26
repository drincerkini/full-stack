<template>
    <div class="home">
      <main>
        <h2>Currently looking at Category page!</h2>
      </main>
      <section>
        <h3>Category</h3>
        <div class="wraper">
            <div v-for="category in this.categories" :key="category._id" class="card">
            
                <h3>{{ category.title }}</h3>

                <p>{{ category.description }}</p>
            </div>
        </div>
      </section>
    </div>
  </template>
  
<script>
  import { mapState } from 'vuex';

  export default {
    name: 'categoriesView',
    computed: {
      ...mapState(['categories'])
    },
    mounted() {
      this.$store.dispatch('fetchCategories');
    }
  }
</script>

<style scoped>
.wraper{
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    
}
.card{
    display: flex;
    flex-direction:  column;
    justify-content: center;
    align-items: center;
    background-color: antiquewhite;
    border: 1px solid black;
    border-radius: 50xp;
    margin-right: 50px;
    padding: 50px;
}
</style>