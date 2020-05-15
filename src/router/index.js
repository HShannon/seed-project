import Vue from 'vue'
import Router from 'vue-router'
import {routers, paths} from '@/router/routerConfig'
Vue.use(Router)
var router = new Router({
  mode: 'history',
  routers
})

router.beforeEach( (to, from, next) => {
  next();
})

export default router;