<template>
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </nav>
  <router-view/>
</template>

<script>
export default {
  created() {
    const html = document.documentElement
    html.setAttribute('lang', 'en')  }
}
</script>

<style>
body{
  background: #e4e4e7;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  max-width: 900px;
  margin: 0 auto;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
    background: #b2fd89;
    color: #376f27;
    padding: 5px 10px;
    border-radius: 10px;
}
</style>
