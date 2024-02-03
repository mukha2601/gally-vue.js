<script>
import Grid from "../components/Grid.vue";
import { usePhotoStore } from "../store/index";

export default {
  components: {
    Grid,
  },
  data() {
    return {
      images: [],
    };
  },
  mounted() {
    this.fetchData();
  },
  methods: {
    async fetchData() {
      const photoStore = usePhotoStore();
      try {
        await photoStore.fetchData(); // store ichidagi fetchData() ni chaqirish
        this.images = photoStore.images; // Store dan olingan rasm ma'lumotlarini o'zlashtirish
      } catch (error) {
        console.error("Rasm ma'lumotlarini olishda xatolik:", error);
      }
    },
  },
};
</script>

<template>
  <Grid :images="images" />
</template>
