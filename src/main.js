import './styles/index.css';

import { createApp } from 'vue';
import { createPinia } from 'pinia';
import App from './App.vue';
import router from './router';
import * as C from 'cesium';

const app = createApp(App);

C.Ion.defaultAccessToken = import.meta.env.VITE_ACCESS_TOKEN;

app.use(createPinia());
app.use(router);
app.mount('#app');
