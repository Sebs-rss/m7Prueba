<template>
    <h1>Ejercicio 3</h1>
    <Parent /> <!-- Contiene al componente Child  -->
  </template>
  
  <script>
  import Parent from '../components/Parent.vue';
  
  export default {
    name: 'Ejercicio3View',
    components: {
      Parent
    }
  };
  </script>
  
  <style scoped>
   h1 {
    color: #42b983;
    padding-top: 2rem;
    padding-bottom: 1rem;
  }
  </style>