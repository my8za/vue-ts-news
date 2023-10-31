import Vue from "vue";
import VueRouter from "vue-router";
import createListView from '../views/CreateListView';

Vue.use(VueRouter);

const routes = [
  { path: '/', redirect: '/news' },
  {
    path: '/news',
    name: 'news',
    component: createListView('NewsView'),
  },
  {
    path: '/ask',
    name: 'ask',
    component: createListView('AskView'),
  },
  {
    path: '/jobs',
    name: 'jobs',
    component: createListView('JobsView'),
  },
  { path: '/item/:id', component: () => import('../views/ItemView.vue') },
  { path: '/user/:id', component: () => import('../views/UserView.vue') },
];

export default new VueRouter({
  mode: 'history',
  routes,
});