import Vue from 'vue'
import App from './App'
import router from './router'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { AppImg } from './config/app-config';

// ######################################################################
//register all component
import AppContent from '@/theme/cloud-blue/components/AppContent'
import AppFooter from '@/theme/cloud-blue/components/AppFooter'
import AppShare from '@/theme/cloud-blue/components/AppShare'
import AppScroll from '@/theme/cloud-blue/components/AppScroll'
import AppPopup from '@/theme/cloud-blue/components/AppPopup'
Vue.component('AppContent', AppContent);
Vue.component('AppFooter', AppFooter);
Vue.component('AppShare', AppShare);
Vue.component('AppScroll', AppScroll);
Vue.component('AppPopup', AppPopup);

import ButtonPulse from '@/theme/cloud-blue/components/ButtonPulse'
import ButtonImage from '@/theme/cloud-blue/components/ButtonImage'
Vue.component('ButtonPulse', ButtonPulse);
Vue.component('ButtonImage', ButtonImage);

import ContentHeader from '@/theme/cloud-blue/components/ContentHeader'
import ContentIntro from '@/theme/cloud-blue/components/ContentIntro'
import ContentDetails from '@/theme/cloud-blue/components/ContentDetails'
import ContentMap from '@/theme/cloud-blue/components/ContentMap'
import ContentAds from '@/theme/cloud-blue/components/ContentAds'
import ContentAction from '@/theme/cloud-blue/components/ContentAction'
Vue.component('ContentHeader', ContentHeader);
Vue.component('ContentIntro', ContentIntro);
Vue.component('ContentDetails', ContentDetails);
Vue.component('ContentMap', ContentMap);
Vue.component('ContentAds', ContentAds);
Vue.component('ContentAction', ContentAction);


import FormRsvp from '@/theme/cloud-blue/components/FormRsvp'
import FormCheckIn from '@/theme/cloud-blue/components/FormCheckIn'
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
  "form",
];
scss.map((d, i) => {
  require(`./theme/cloud-blue/style/${d}.scss`);
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

