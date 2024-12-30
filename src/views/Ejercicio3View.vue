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
    margin-bottom: 2rem;
  }
  </style>