<template>
  <div>
    Jobs
  </div>
</template>

<script>
import { fetchJobs } from '@/api';
export default {
  created() {
    fetchJobs()
      .then(resp => console.log(resp))
      .catch(err => console.log(err));
  }
}
</script>

<style>

</style>