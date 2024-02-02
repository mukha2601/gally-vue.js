<template>
  <div class="grid">
    <div v-for="image in images" class="imaage-box">
      <img :src="image.urls.small" alt="" class="image" />
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      count: "28",
      client_id: "QaxOLYJFNjV5katlAPBXlpedw2R2Ovti2SKbFZEI4RU",
      images: [],
    };
  },
  methods: {
    async fetchData() {
      try {
        const response = await axios({
          method: "get",
          url: "https://api.unsplash.com/photos/random",
          params: {
            count: this.count,
            client_id: this.client_id,
          },
        });
        this.images = response.data;
      } catch (error) {
        alert(error);
      }
    },
  },
  mounted() {
    this.fetchData();
  },
};
</script>

<style scoped>
.grid {
  width: 100%;
  height: auto;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
  grid-auto-rows: 25rem;
  /* padding: 1rem; */
}

.imaage-box {
  overflow: hidden;
  width: 100%;
  height: 100%;
  position: relative;
  transition: 0.4s;

  /* &:hover {
      transform: scale(0.95);
      
      .photoBox {
         transform: scale(1.2);
      }
      
      a {
         transition: 0.3s;
         bottom: 3%;
         right: 3%;
      }
   } */
}

.image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>
