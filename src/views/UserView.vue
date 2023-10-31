<template>
  <div>
    <p>id : {{ fetchedUser.id }}</p>
    <p>karma : {{ fetchedUser.karma }}</p>
    <p>joined : {{ fetchedUser.created }}</p>
  </div>
</template>

<script>
import bus from '@/utils/bus';
import { mapGetters } from 'vuex';
export default {
  created() {
    bus.$emit('off:progress');
  },
  computed: {
    ...mapGetters(['fetchedUser']),
  },
}
</script>

<style>

</style>