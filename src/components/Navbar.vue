<template>
  <div class="navbar">
    <!-- <div class="logo"><h1>logo</h1></div> -->

    <div class="search-box">
      <input type="text" v-model="searchText" />
      <button type="button" @click="searchPhotos">Search</button>
    </div>
  </div>
</template>

<script>
import { usePhotoStore } from "../store/index";
import axios from "axios";

export default {
  data() {
    return {
      searchText: "",
    };
  },
  methods: {
    async searchPhotos() {
      try {
        const response = await axios({
          method: "get",
          url: "https://api.unsplash.com/photos/random/",
          params: {
            count: 30,
            query: this.searchText, // Foydalanuvchi kiritgan matn
            client_id: "coqmge2ykQgYjS7v1EqICeFAOZNxpAFi6x34bOOms4g",
          },
        });
        usePhotoStore().images = response.data; // Ma'lumotlarni o'zgartiramiz
      } catch (error) {
        console.error("Rasm ma'lumotlarini qidirishda xatolik:", error);
      }
    },
  },
};
</script>

<style scoped>
h1 {
  color: gray;
}
.navbar {
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: space-between;
  position: sticky;
  top: 1rem;
  z-index: 2;
  backdrop-filter: blur(1rem);
  margin-bottom: 1rem;
}

.search-box {
  display: flex;
  gap: 0.1rem;
  width: 32.2rem;
}

input {
  width: 100%;
  padding: 0 1rem;
}

button:hover {
  color: white;
  background-color: black;
  border: 1px solid white;
}
</style>
