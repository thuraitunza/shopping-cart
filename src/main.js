import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index'

const app = createApp(App);
//Pinia
import { createPinia } from 'pinia';
const pinia = createPinia();
// Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'

app.use(router)
app.use(pinia) 
app.mount('#app')
