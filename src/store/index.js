// Ejercicio 1: manejo de estado con Vuex

import { createStore } from 'vuex';

export default createStore({
  state: {
    count: 0,
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
