import Vue from 'vue'
import VueRouter from 'vue-router'

import Index from './components/Index.vue'

Vue.use(VueRouter);

const routes = [
  { path: '/', component: Index }
];

export const router = new VueRouter({
  routes // short for `routes: routes`
});