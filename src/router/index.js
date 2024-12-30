import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import Ejercicio1View from '../views/Ejercicio1View.vue';
import Ejercicio3View from '../views/Ejercicio3View.vue';

const routes = [
  { path: '/', name: 'HomeView', component: HomeView },
  { path: '/ej1', name: 'Ejercicio1View', component: Ejercicio1View },
  { path: '/ej3', name: 'Ejercicio3View', component: Ejercicio3View },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
