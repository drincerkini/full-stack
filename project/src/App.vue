<template>
  <nav>
    <ul>
      <li><router-link to="/">Home</router-link></li>
      <li><router-link to="/about">About</router-link></li>
      <li><router-link to="/categories">Categories</router-link></li>
      <li><router-link to="/createcategories">Create Categories</router-link></li>
      <li><router-link to="/register">Register</router-link></li>
      <li><router-link to="/login">Login</router-link></li>
    </ul>
  </nav>
  <RouterView></RouterView>
</template>

<script>

export default {
  components: {
    
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
nav{
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: aliceblue;
  color: #2c3e50;
  text-decoration: none;
}
ul{
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  text-decoration: none;
}
li{
  margin-right: 45px;
  text-decoration: none;
  color: #2c3e50;
}
</style>
