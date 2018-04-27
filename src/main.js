import Vue from 'vue'
import App from './App'
import router from './router'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { AppImg } from './config/app-config';

// ######################################################################
//register all component
import AppContent from '@/components/AppContent'
import AppFooter from '@/components/AppFooter'
import AppShare from '@/components/AppShare'
import AppScroll from '@/components/AppScroll'
Vue.component('AppContent', AppContent);
Vue.component('AppFooter', AppFooter);
Vue.component('AppShare', AppShare);
Vue.component('AppScroll', AppScroll);

import ButtonPulse from '@/components/ButtonPulse'
Vue.component('ButtonPulse', ButtonPulse);

import ContentHeader from '@/components/ContentHeader'
import ContentIntro from '@/components/ContentIntro'
import ContentDetails from '@/components/ContentDetails'
Vue.component('ContentHeader', ContentHeader);
Vue.component('ContentIntro', ContentIntro);
Vue.component('ContentDetails', ContentDetails);

// ######################################################################
//import all style
const scss = ["app", "general", "header", "font", "footer", "share", "button"];
scss.map((d, i) => {
  require(`./style/${d}.scss`);
})

const css = ["fontawesome-all.min"];
css.map((d, i) => {
  require(`./style/css/${d}.css`);
})


console.log(process.env.NODE_ENV);
Vue.config.productionTip = false
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

