<script>
import NavBar from './components/NavBar.vue';

export default {
  name: 'App',
  components: {
    NavBar
  }
};
</script>

<template>
 <div id="app">
  <NavBar />
    <!-- <nav class="navbar navbar-expand-lg" style="background-color: #e3f2fd;">
      <div class="container-fluid">
        <router-link class="navbar-brand" to="/">Home</router-link>
        <div class="collapse navbar-collapse">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <router-link class="nav-link" to="/ej1">Ejercicio 1</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/ej3">Ejercicio 3</router-link>
            </li>
          </ul>
        </div>
      </div>
    </nav> -->

    <main>
      <router-view />
    </main>
  </div>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
