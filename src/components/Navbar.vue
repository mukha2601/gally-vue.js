<template>
  <div class="navbar">
    <input type="text" v-model="searchText" />
    <button type="button" @click="searchPhotos">Search</button>
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
        const response = await axios.get("https://api.unsplash.com/photos/", {
          params: {
            count: 28,
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
.navbar {
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: center;
  margin-bottom: 1rem;
}

input {
  width: 400px;
}

button:hover {
  color: white;
  background-color: black;
  border: 1px solid white;
}
</style>
