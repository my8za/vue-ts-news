<template>
  <div>USer</div>
</template>

<script>
import { fetchUser } from '@/api';
export default {
  created() {
    fetchUser('davideast')
      .then(resp => console.log(resp))
      .catch(err => console.log(err));
  }
}
</script>

<style>

</style>