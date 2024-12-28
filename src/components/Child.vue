// Ejercicio 3: comunicación entre componentes

<template>
    <div>
      <input v-model="input" placeholder="Type a message" />
      <button @click="sendMessage">Send</button>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        input: '',
      };
    },
    methods: {
      sendMessage() {
        console.log('Message sent to parent:', this.input);
        this.$emit('message', this.input);
      },
    },
  };
  </script>
  