<template>
  <div>ask</div>
</template>

<script>
import { fetchAsk } from '@/api';
export default {
  created() {
    fetchAsk()
      .then(resp => console.log(resp))
      .catch(err => console.log(err));
  }
}
</script>

<style>

</style>