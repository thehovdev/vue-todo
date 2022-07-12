<template>
  <nav>
    <router-link class="mx-3" to="/">Home</router-link>
    <router-link class="mx-3" to="/">About</router-link>
    <router-link class="mx-3" to="/">Contacts</router-link>
    <router-link class="mx-3" to="/">Career</router-link>
    <router-link class="mx-3" to="/">Partnership</router-link>
  </nav>
  <router-view/>
</template>

<style lang="scss">

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
