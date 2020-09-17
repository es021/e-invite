import Vue from 'vue'
import App from './App'
import router from './router'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { AppImg } from './config/app-config';

// ######################################################################
//register all component
import AppContent from '@/theme/traditional/components/AppContent'
import AppFooter from '@/theme/traditional/components/AppFooter'
import AppShare from '@/theme/traditional/components/AppShare'
import AppScroll from '@/theme/traditional/components/AppScroll'
import AppPopup from '@/theme/traditional/components/AppPopup'
Vue.component('AppContent', AppContent);
Vue.component('AppFooter', AppFooter);
Vue.component('AppShare', AppShare);
Vue.component('AppScroll', AppScroll);
Vue.component('AppPopup', AppPopup);

import ButtonPulse from '@/theme/traditional/components/ButtonPulse'
import ButtonImage from '@/theme/traditional/components/ButtonImage'
Vue.component('ButtonPulse', ButtonPulse);
Vue.component('ButtonImage', ButtonImage);

import ContentHeader from '@/theme/traditional/components/ContentHeader'
import ContentIntro from '@/theme/traditional/components/ContentIntro'
import ContentDoa from '@/theme/traditional/components/ContentDoa'
import ContentDetails from '@/theme/traditional/components/ContentDetails'
import ContentMap from '@/theme/traditional/components/ContentMap'
import ContentAds from '@/theme/traditional/components/ContentAds'
import ContentAction from '@/theme/traditional/components/ContentAction'
Vue.component('ContentHeader', ContentHeader);
Vue.component('ContentIntro', ContentIntro);
Vue.component('ContentDoa', ContentDoa);
Vue.component('ContentDetails', ContentDetails);
Vue.component('ContentMap', ContentMap);
Vue.component('ContentAds', ContentAds);
Vue.component('ContentAction', ContentAction);


import FormRsvp from '@/theme/traditional/components/FormRsvp'
import FormCheckIn from '@/theme/traditional/components/FormCheckIn'
Vue.component('FormRsvp', FormRsvp);
Vue.component('FormCheckIn', FormCheckIn);

// ######################################################################
//import all style
const scss = [
  "app", "general",
  "header", "content",
  "font", "footer",
  "share", "button",
  "map", "ads",
  "action", "popup",
  "form", "doa"
];
scss.map((d, i) => {
  require(`./theme/traditional/style/${d}.scss`);
})

const css = ["fontawesome-all.min"];
css.map((d, i) => {
  require(`./style/css/${d}.css`);
})



// vuex setup
import Vuex from 'vuex';
Vue.use(Vuex);
import storeObj from './store';
const store = new Vuex.Store(storeObj);


console.log(process.env.NODE_ENV);
Vue.config.productionTip = false
new Vue({
  el: '#app',
  store,
  router,
  created() {
    AOS.init({
      duration: 1200,
      easing: 'ease-in-out-back'
    });

    // set body background;
    //var body = document.getElementsByTagName("body")[0];
    //body.style.background = `url('${AppImg.get(AppImg.bodyBackground)}')`;
  },
  components: { App },
  template: '<App/>'
})

