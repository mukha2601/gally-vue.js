<template>
  <ResultDetail :images="images" />
</template>

<script>
import ResultDetail from "../components/ResultDetail.vue";
import { useSearchPhotos } from "../store/index";

export default {
  components: {
    ResultDetail,
  },
  computed: {
    images() {
      return useSearchPhotos().searchPhotos;
    },
  },
  created() {
    useSearchPhotos().searchPhotosData(); // holatni o'qish
  },
};
</script>
