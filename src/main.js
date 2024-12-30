import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

import router from './router'
import store from './store';

//Importar Bootstrap CSS
import 'bootstrap/dist/css/bootstrap.css'
//Importar Bootstrap JS ( opcional )
import 'bootstrap/dist/js/bootstrap.js'

createApp(App).use(router).use(store).mount('#app')
