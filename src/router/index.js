import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import TestCss from '@/components/TestCss'
import TestAos from '@/components/TestAos'

// register Router
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/test-css',
      name: 'TestCss',
      component: TestCss
    },
    {
      path: '/test-aos',
      name: 'TestAos',
      component: TestAos
    }
  ]
})
