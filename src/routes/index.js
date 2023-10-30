import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  { path: '/', redirect: '/news' },
  { path: '/news', component: () => import('../views/NewsView.vue') },
  { path: '/ask', component: () => import('../views/AskView.vue') },
  { path: '/jobs', component: () => import('../views/JobsView.vue') },
  { path: '/item/:id', component: () => import('../views/ItemView.vue') },
  { path: '/user/:id', component: () => import('../views/UserView.vue') },
];

export default new VueRouter({
  mode: 'history',
  routes,
});