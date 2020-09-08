import Vue from 'vue'
import App from './App'
import router from './router'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { AppImg } from './config/app-config';

// ######################################################################
//register all component
import AppContent from '@/theme/soft-purple/components/AppContent'
import AppFooter from '@/theme/soft-purple/components/AppFooter'
import AppShare from '@/theme/soft-purple/components/AppShare'
import AppScroll from '@/theme/soft-purple/components/AppScroll'
Vue.component('AppContent', AppContent);
Vue.component('AppFooter', AppFooter);
Vue.component('AppShare', AppShare);
Vue.component('AppScroll', AppScroll);

import ButtonPulse from '@/theme/soft-purple/components/ButtonPulse'
import ButtonImage from '@/theme/soft-purple/components/ButtonImage'
Vue.component('ButtonPulse', ButtonPulse);
Vue.component('ButtonImage', ButtonImage);

import ContentHeader from '@/theme/soft-purple/components/ContentHeader'
import ContentIntro from '@/theme/soft-purple/components/ContentIntro'
import ContentDetails from '@/theme/soft-purple/components/ContentDetails'
import ContentMap from '@/theme/soft-purple/components/ContentMap'
import ContentAds from '@/theme/soft-purple/components/ContentAds'
Vue.component('ContentHeader', ContentHeader);
Vue.component('ContentIntro', ContentIntro);
Vue.component('ContentDetails', ContentDetails);
Vue.component('ContentMap', ContentMap);
Vue.component('ContentAds', ContentAds);

// ######################################################################
//import all style
const scss = ["app", "general", "header", "content", "font", "footer", "share", "button", "map", "ads"];
scss.map((d, i) => {
  require(`./theme/soft-purple/style/${d}.scss`);
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
    //var body = document.getElementsByTagName("body")[0];
    //body.style.background = `url('${AppImg.get(AppImg.bodyBackground)}')`;
  },
  components: { App },
  template: '<App/>'
})

