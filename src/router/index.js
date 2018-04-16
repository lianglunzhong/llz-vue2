import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import Index from '@/components/Index'

// const _import = require('./_import_' + process.env.NODE_ENV)
let _import = file => () => import('@/views/' + file + '.vue')

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path: '/signin',
      name: 'signin',
      component: _import('login/signin')
    },
    {
      path: '/signup',
      name: 'signup',
      component: _import('login/signup')
    }
  ]
})
