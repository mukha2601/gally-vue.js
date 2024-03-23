<template>
  <Modal v-if="showModal" :image="image" />
  <div class="grid">
    <div v-for="image in images" class="imaage-box">
      <img
        :src="image.urls.small"
        alt=""
        :key="image.id"
        class="image"
        @click="toModal(image)"
      />
    </div>
  </div>
  <div class="showMore-box" v-if="this.images.length">
    <button class="showMoreBtn" @click="showMore">show more</button>
  </div>
</template>

<script>
import { useSearchPhotos, useModal } from "../store/index";
import { mapWritableState } from "pinia";
import Modal from "./Modal.vue";

export default {
  components: { Modal },
  data() {
    return {
      image: [],
    };
  },
  props: ["images"],
  computed: {
    ...mapWritableState(useModal, ["showModal"]),
    ...mapWritableState(useSearchPhotos, ["page"]),
    ...mapWritableState(useSearchPhotos, ["searchText"]),
  },
  methods: {
    toModal(image) {
      this.image = image;
      this.showModal = true;
    },
    showMore() {
      this.page++;
      useSearchPhotos().searchPhotosData();
    },
  },
};
</script>

<style scoped>
.showMore-box {
  margin-top: 1rem;
  width: 100%;
  display: flex;
  justify-content: center;
}
.showMoreBtn {
  padding: 1rem 2rem;
  display: flex;
  background-color: transparent;
  width: fit-content;
  cursor: pointer;
  border: 1px solid gray;
  color: gray;
}

.showMoreBtn:hover {
  background-color: gray;
  color: black;
}
.grid {
  width: 100%;
  height: auto;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(15rem, 1fr));
  grid-auto-rows: 15rem;
  position: relative;
  gap: 0.2rem;
}

.imaage-box {
  overflow: hidden;
  width: 100%;
  height: 100%;
  position: relative;
  transition: 0.4s;
}

.image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>
