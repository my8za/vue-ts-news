<template>
  <div>News</div>
</template>

<script>
import { fetchNews } from '@/api';
export default {
  created() {
    fetchNews()
      .then(resp => console.log(resp))
      .catch(err => console.log(err));
  }
}
</script>

<style>

</style>