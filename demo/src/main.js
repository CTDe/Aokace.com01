import { createApp } from 'vue';
import App from './App.vue';
import router from './router/index';
import store from './store';
import'./assets/font/font.css';
import'./assets/fontsvg/style.css'
import i18n from "./languang/index"
import Lazyload from './hooks/index'
import { swiper } from "swiper"
import VuePreview from 'vue-preview';
import Bfont from './assets/font/font.css'
import Fontimg from './assets/fontsvg/style.css'




createApp(App).use(store).use(router).use(Lazyload).use(swiper).use(VuePreview).use(Bfont).use(Fontimg)
.use(i18n).mount('#app')




  




