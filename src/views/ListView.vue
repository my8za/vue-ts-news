<template>
  <div>
    <list-item :items="newsItems"></list-item>
  </div>
</template>

<script>
import ListItem from '@/components/ListItem.vue';
import { fetchNews } from "@/api"

export default {
  components: { ListItem },
  data () {
    return {
      newsItems: []
    }
  },
  created() {
    this.fetchNuewsItem();
    console.log(this.newsItem)
  },
  methods: {
    async fetchNuewsItem() {
      const resp = await fetchNews();
      this.newsItems = resp.data;
    },
  }
}
</script>

<style>

</style>