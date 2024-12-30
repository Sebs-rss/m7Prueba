<template>
  <div>
    <nav class="navbar navbar-expand-lg" style="background-color: #e3f2fd">
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
    </nav>
  </div>
</template>

<script>
export default {
  name: "NavBar",
};
</script>

<style scoped></style>
