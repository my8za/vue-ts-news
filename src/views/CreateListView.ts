
import { CreateElement } from 'vue';
import ListView from './ListView.vue';
import bus from '@/utils/bus';

// 하이 오더 컴포넌트
export default function createListView(name: string) {
  return {
    name,
    mounted() {
      bus.$emit('off:progress')
    },
    render(h: CreateElement) {
      //h : Create Element
      // 뷰는 render함수를 이용하여 템플릿에 있는 코드를 변환해준다.
      return h(ListView);
    },
  };
}