<template>
  <div>Item</div>
</template>

<script>
import { fetchItem } from '@/api';
export default {
  created() {
    fetchItem(1)
      .then(resp => console.log(resp))
      .catch(err => console.log(err));
  }
}
</script>

<style>

</style>