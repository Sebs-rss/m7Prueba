// Ejercicio 3: comunicación entre componentes

<!-- Alt A -->
<!-- <template>
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
  </script> -->
  
  <!-- Parent mostrará en pantalla la información enviada por el Child -->

<template>
  <div>
      <Child />
      <p>Texto ingresado:</p>
      <p>{{ text }}</p> <!-- Imprimimos la variable text que proviene del Child -->
  </div>
</template>

<script>
import { mapState } from 'vuex';
import Child from '../components/Child.vue';

export default {
  name: 'Parent',
  components: {
      Child
  },
  computed: {
      ...mapState(['text']),
  },
};
</script>