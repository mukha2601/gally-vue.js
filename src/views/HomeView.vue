<template>
  <HomeDetail :images="images" />
</template>

<script>
import HomeDetail from "../components/HomeDetail.vue";
import { usePhotoStore } from "../store/index";

export default {
  components: {
    HomeDetail,
  },
  computed: {
    images() {
      return usePhotoStore().images;
    },
  },
  created() {
    usePhotoStore().fetchData(); // holatni o'qish
  },
};
</script>
