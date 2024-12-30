<template>
  <div>
    <nav class="navbar navbar-expand-lg bg-body-secondary">
      <div class="container-fluid">
        <router-link class="navbar-brand" to="/">M7 prueba 🏡</router-link>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <router-link class="nav-link" to="/ej1">Ejercicio #1</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/ej3">Ejercicio #3</router-link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  name: "NavBar",
};
</script>

<style scoped>
.navbar {
    width: 100vh;
}
</style>
