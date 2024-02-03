<template>
  <!-- <Modal v-if="showModal" :image="image" @closeModal="showModal = false" /> -->
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

<!-- <script>
import Modal from "./Modal.vue";
export default {
  data() {
    return {
      showModal: false,
      images: [],
      image: [],
      isLoading: false,
    };
  },
  methods: {
    toModal(image) {
      this.showModal = true;
      this.image = image;
    },
  },
  components: { Modal },
};
</script> -->

<script setup>
import { ref } from "vue";
import Modal from "./Modal.vue";
import { usePhotoStore } from "../store/index";

const showModal = ref(false);
// const selectedImage = ref({});
const photoStore = usePhotoStore(); // Store ni ishlatish uchun
const toModal = (image) => {
  showModal.value = true;
  selectedImage.value = image;
};

const fetchData = async () => {
  try {
    await photoStore.fetchData(); // store ichidagi fetchData() ni chaqirish
  } catch (error) {
    console.error("Rasm ma'lumotlarini olishda xatolik:", error);
  }
};

// fetchData() metodini chaqirib, ma'lumotlarni olib kelish
fetchData();
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
