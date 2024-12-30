// Ejercicio 3: comunicación entre componentes

//Alt A
<!-- <template>
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
  </script> -->

<!-- El componente Child va a tener un campo de ingreso de texto y un botón. Al dar clic en el botón el texto del input será enviado al Parent -->

<template>
  <div>
      <input type="text" v-model="text"> <!-- v-model se utiliza para vincular el input con la variable text -->
      <button class="btn btn-primary btn-enviar" style="margin-left: 10px;" v-on:click="enviar">Enviar</button> <!-- v-on se utiliza para vincular el evento click con el metodo enviar -->
  </div>
</template>

<script> 

export default {
  name: 'Child', //El nombre del componente
  data() { //Los datos del componente
      return { //que vamos a retornar con...
          text: '' //la variable text, vacía porque se va a llenar con el input
      }
  },
  methods: { //Los metodos del componente
      enviar() { //metodo enviar del botón
          this.$store.commit('setText', this.text) //emitimos el evento 'enviar' con la variable text al estado global, para que desde ahí lo tome el Parent y lo muestre. Se usa setText porque es un mutación.
      }
  }
}

</script>


  