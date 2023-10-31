<template>
  <div id="app">
    <progress-bar :loading="loading"></progress-bar>
    <tool-bar></tool-bar>
    <transition name="routing-fade" mode="out-in">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
import ToolBar from './components/ToolBar.vue'
import ProgressBar from './components/ProgressBar.vue';
import bus from './utils/bus';

export default {
  components: {
    ToolBar,
    ProgressBar
  },
  data() {
    return {
      loading: false,
    }
  },
  methods: {
    onProgress() {
      // 인스턴스 생성 후 프로그래스 바 작동
      this.loading = true;
    },
    offProgress() {
      // actions 호출 이후 프로그래스바 X
      this.loading = false;
    }
  },
  created() {
    // 컴포넌트로 통신하지 않고 매개체 역할을 하는 이벤트 버스 통해서 송수신
    bus.$on('on:progress', this.onProgress);
    bus.$on('off:progress', this.offProgress);
  }
}
</script>

<st
    ProgressBaryle>
body {
  margin: 0;
}

a {
  color: #34495e;
  text-decoration: none;
}
a:hover {
  color: #42b883;
  text-decoration: underline;
}
a.router-link-active {
  text-decoration: underline;
}

/* Router Transition */
.routing-fade-enter-active, .routing-fade-leave-active {
  transition: opacity .3s ease;
}
.routing-fade-enter, .routing-fade-leave-to
/* .routing-fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>