<template>
  <div>
    <h1>Prueba del módulo 7</h1>
    <p>Te doy la bienvenida al inicio 😊🏁</p>
    <hr />
    <div class="container">
      <ul>
        <li>Ej. 1: manejo de datos con Vuex</li>
        <li>Ej. 2: navegación con VueRouter</li>
        <li>Ej. 3: comunicación entre componentes</li>
        <li>Ej. 4: deploy en Firebase</li>
        <button>
          <a href="https://m7-prueba-edd80.web.app" class="btn btn-primary"
            >Ir a la versión en Firebase 🔥</a
          >
        </button>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "HomeView",
};
</script>

<style scoped>
h1 {
  color: #42b983;
  padding-top: 2rem;
  padding-bottom: 1rem;
}
button {
  background-color: #31363f;
}

.container {
  padding: 1rem;
  text-align: left;
  border: 1px solid white;
  border-radius: 10px;
  margin-top: 2rem;
  margin-bottom: 2rem;
  background-color: #31363f;
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
