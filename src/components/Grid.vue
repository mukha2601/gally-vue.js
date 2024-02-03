<template>
  <Modal v-if="showModal" :image="image" @closeModal="showModal = false" />
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
</template>

<script>
import Modal from "./Modal.vue";

export default {
  components: { Modal },
  data() {
    return {
      showModal: false,
      image: [],
    };
  },
  props: ["images"],

  methods: {
    toModal(image) {
      this.showModal = true;
      this.image = image;
    },
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
  position: relative;
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
