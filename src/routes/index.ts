import Vue from "vue";
import VueRouter, { Route, NavigationGuardNext } from 'vue-router';
import createListView from '../views/CreateListView';
import bus from "@/utils/bus";
import store from "@/store";


Vue.use(VueRouter);


export default new VueRouter({
  mode: 'history',
  routes: [
    { path: '/', redirect: '/news' },
    {
      path: '/news',
      name: 'news',
      // 고차컴포넌트(hoc)
      component: createListView('NewsView'),
      // 네비게이션 가드 함수
      async beforeEnter(
        routeTo: Route,
        routeFrom: Route,
        next: NavigationGuardNext<Vue>
      ) {
        bus.$emit('on:progress');
        try{
          await store.dispatch('FETCH_LIST', routeTo.name);
          next();
        } catch(err) {
          new Error('failed to fetch news items');
          // next(''); error페이지로 이동
        }
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
          .then(() => next())
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
          .then(() => next())
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
          .then(() => next())
          .catch((err) => new Error('failed to fetch item details'));
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
          .then(() => next())
          .catch((err) => new Error('failed to fetch user profile'));
      },
    },
  ],
});