<template>
  <Grid :images="images" />
</template>

<script>
import Grid from "../components/Grid.vue";
import products from "../data/index";

export default {
  components: {
    Grid,
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
