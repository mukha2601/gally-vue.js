<template>
  <div class="navbar">
    <router-link to="/">
      <div class="logo">
        <Icon icon="line-md:external-link" width="1.5rem" />
      </div>
    </router-link>

    <div class="search-box">
      <input
        type="text"
        placeholder="image search"
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
.logo {
  width: 4rem;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  border-right: 1px solid gray;
  color: white;
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
  width: 32.2rem;
}

input {
  width: 100%;
  padding: 0 1rem;
  outline: none;
  color: black;
  border: 0;
  border-radius: 0;
  background-color: rgba(255, 255, 255, 0.326);
}

button {
  width: 4rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 0;
  border-radius: 0;
  background-color: rgba(255, 255, 255, 0.326);
}

button:hover {
  color: white;
  background-color: black;
}
</style>
