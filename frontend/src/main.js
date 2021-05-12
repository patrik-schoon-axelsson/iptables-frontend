import { createApp } from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import 'materialize-css/dist/css/materialize.min.css'
import 'material-icons/iconfont/material-icons.scss'
import NavBar from './components/NavBar.vue'
import App from './App.vue'
import router from './router'
import store from './store'

const app = createApp(App)

app.component('NavBar', NavBar);
app.use(store);
app.use(router);
app.use(VueAxios, axios);
app.mount('#app');
