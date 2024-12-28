// Ejercicio 3: comunicación entre componentes

<template>
    <div>
      <Child @message="updateMessage" />
      <p>{{ message }}</p>
    </div>
  </template>
  
  <script>
  import Child from './Child.vue';
  
  export default {
    components: {
      Child,
    },
    data() {
      return {
        message: '',
      };
    },
    methods: {
      updateMessage(msg) {
        console.log('Message received from child:', msg);
        this.message = msg;
      },
    },
  };
  </script>
  