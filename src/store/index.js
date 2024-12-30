// Ejercicio 1: manejo de estado con Vuex

import { createStore } from 'vuex';

export default createStore({
  state: {
    count: 0,
    text: ''
  },
  mutations: {
    increment(state) {
      state.count++;
      console.log('Count incremented:', state.count);
    },
    decrement(state) {
      state.count--;
      console.log('Count decremented:', state.count);
    },
    setText(state, payload) { //payload es una convención de Vuex para referirse al dato que se pasa como argumento a una mutación. Podría haber usado "NuevoTexto", por ejemplo
      state.text = payload;
    },
  },
  actions: {
    increment({ commit }) {
      commit('increment');
    },
    decrement({ commit }) {
      commit('decrement');
    },
  },
  getters: {
    count: (state) => state.count,
  },
});
