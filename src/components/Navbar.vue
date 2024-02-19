<template>
  <div class="navbar">
    <div class="logo"><h1>logo</h1></div>

    <div class="search-box">
      <input type="text" v-model="this.searchText" />
      <button type="button" @click="searchPhotos">Search</button>
    </div>
  </div>
</template>

<script>
import { useSearchPhotos } from "../store/index";
// import axios from "axios";
import { mapWritableState } from "pinia";

export default {
  data() {
    return {};
  },
  computed: {
    ...mapWritableState(useSearchPhotos, ["searchText"]),
  },
  methods: {
    searchPhotos() {
      this.$router.push("/result");
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
