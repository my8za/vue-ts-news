import Vue from "vue";
import VueRouter from "vue-router";
import createListView from '../views/CreateListView';
import bus from "@/utils/bus";
import store from "@/store";


Vue.use(VueRouter);

const routes = [
  { path: '/', redirect: '/news' },
  {
    path: '/news',
    name: 'news',
    component: createListView('NewsView'),
    // 네비게이션 가드
    beforeEnter(routeTo, routeFrom, next) {
      bus.$emit('on:progress');
      store
        .dispatch('FETCH_LIST', routeTo.name)
        .then(next())
        .catch(() => new Error('failed to fetch news items'));
    },
  },
  {
    path: '/ask',
    name: 'ask',
    component: createListView('AskView'),
    beforeEnter(routeTo, routeFrom, next) {
      bus.$emit('on:progress');
      store
        .dispatch('FETCH_LIST', routeTo.name)
        .then(next())
        .catch(() => new Error('failed to fetch news items'));
    },
  },
  {
    path: '/jobs',
    name: 'jobs',
    component: createListView('JobsView'),
    beforeEnter(routeTo, routeFrom, next) {
      bus.$emit('on:progress');
      store
        .dispatch('FETCH_LIST', routeTo.name)
        .then(next())
        .catch(() => new Error('failed to fetch news items'));
    },
  },
  {
    path: '/item/:id',
    component: () => import('../views/ItemView.vue'),
    beforeEnter(routeTo, routeFrom, next) {
      bus.$emit('on:progress');
      const itemId = routeTo.params.id;
      store
        .dispatch('FETCH_ITEM', itemId)
        .then(next())
        .catch((err) => new Error('failed to fetch item details', err));
    },
  },
  { 
    path: '/user/:id',
    component: () => import('../views/UserView.vue'),
    beforeEnter(routeTo, routeFrom, next) {
      bus.$emit('on:progress');
      const itemId = routeTo.params.id;
      store
        .dispatch('FETCH_USER', itemId)
        .then(next())
        .catch((err) => new Error('failed to fetch user profile', err));
    },
  },
];

export default new VueRouter({
  mode: 'history',
  routes,
});