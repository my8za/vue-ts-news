import ListView from './ListView.vue';
import bus from '@/utils/bus';

// 하이 오더 컴포넌트
export default function createListView(name) {
  return {
    name,
    mounted() {
      bus.$emit('off:progress')
    },
    render(h) {
      return h(ListView);
    },
  };
}