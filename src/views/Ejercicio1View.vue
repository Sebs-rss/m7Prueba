<template>
    <h1>Ejercicio 1</h1>
    <div class="container" style="text-align: center">
    <h4>Contador</h4>
    <h5 class="container counter">{{ contador }}</h5>


    <div class="container" style="display: flex; justify-content: space-evenly;">
        <button class="btn btn-primary incrementar" v-on:click="incrementar">+1</button>
        <button class="btn btn-danger disminuir" v-on:click="disminuir">-1</button>
    </div>
</div>
</template>

<script>

//Declaramos el componente Ejercicio1 que será importado en la App. 
export default {
    name: 'Ejercicio1View',
    props: {
        titulo: String,
        inicio: {
            default: 0 //Valor por defecto del contador
        }
    },

    data() {
        return {
            contador: this.inicio //Significa que el contador es igual al valor del prop inicio
        }
    },
    //definimos los metodos aumentar contador, incrementar (del botón) y disminuir (del botón)
    methods: {
        aumentar() {
            return this.contador + this.contador
        },

        incrementar() {
            this.contador++
        },

        disminuir() {
            this.contador--
        }
    },

    //Definimos las propiedades computadas, que hacen que las propiedades sean calculadas
    computed: {
        // Las propieades computadas se guardan en cache
        aumentarContador() {
            return this.contador * this.contador
        }

    }
}
</script>

