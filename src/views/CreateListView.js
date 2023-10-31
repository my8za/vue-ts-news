import ListView from './ListView.vue';

// 하이 오더 컴포넌트
export default function createListView(name) {
  return {
    name,
    render(h) {
      return h(ListView);
    },
  };
}