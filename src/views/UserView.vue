<template>
  <div>
    <p>id : {{ fetchedUser.id }}</p>
    <p>karma : {{ fetchedUser.karma }}</p>
    <p>joined : {{ fetchedUser.created }}</p>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
  created() {
    this.$emit('on:progress');
    const userId = this.$route.params.id;
    this.$store.dispatch('FETCH_USER', userId)
      .then(() => this.$emit('off:progress'))
      .catch(err => console.log('user fetch error', err));
  },
  computed: {
    ...mapGetters(['fetchedUser']),
  },
}
</script>

<style>

</style>