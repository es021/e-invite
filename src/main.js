// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import AOS from 'aos';
import { AppImg } from './config/app-config';

import 'aos/dist/aos.css';

Vue.config.productionTip = false
//register all component
import AppHeader from '@/components/AppHeader'
import AppContent from '@/components/AppContent'
import AppFooter from '@/components/AppFooter'
import AppShare from '@/components/AppShare'

Vue.component('AppHeader', AppHeader);
Vue.component('AppContent', AppContent);
Vue.component('AppFooter', AppFooter);
Vue.component('AppShare', AppShare);

//import all style
const scss = ["app", "general","header", "footer","share","button"];
scss.map((d, i) => {
  require(`./style/${d}.scss`);
})

const css = ["fontawesome-all.min"];
css.map((d, i) => {
  require(`./style/css/${d}.css`);
})

//console.log(anime);
//require('./lib/anime.js');
//console.log(anime);

console.log(process.env.NODE_ENV);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  created() {
    AOS.init({
      duration: 1200,
      easing: 'ease-in-out-back'
    });

    // set body background;
    var body = document.getElementsByTagName("body")[0];
    body.style.background = `url('${AppImg.get(AppImg.bodyBackground)}')`;
  },
  components: { App },
  template: '<App/>'
})

