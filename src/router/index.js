import Vue from 'vue'
import Router from 'vue-router'
import AppRoot from '@/AppRoot'

// register Router
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/:jemputan?',
      name: 'AppRoot',
      component: AppRoot
    }
  ]
})
