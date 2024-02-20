<template>
  <div class="navbar">
    <router-link to="/">
      <div class="logo"><h1>logo</h1></div>
    </router-link>

    <div class="search-box">
      <input
        type="text"
        v-model="this.searchText"
        @keyup.enter="searchPhotos"
      />
      <button type="button" @click="searchPhotos">
        <Icon icon="line-md:search" width="1.4rem" />
      </button>
    </div>
  </div>
</template>

<script>
import { useSearchPhotos } from "../store/index";
import { mapWritableState } from "pinia";
import { RouterLink } from "vue-router";
import { Icon } from "@iconify/vue";

export default {
  components: {
    Icon,
  },
  computed: {
    ...mapWritableState(useSearchPhotos, ["searchText"]),
  },
  methods: {
    searchPhotos() {
      useSearchPhotos().searchPhotos = [];
      useSearchPhotos().searchPhotosData();
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
  outline: none;
}

button {
  width: 4rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 0;
  border-radius: 0;
}

button:hover {
  color: white;
  background-color: black;
}
</style>
