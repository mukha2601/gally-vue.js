<template>
  <teleport to="#modal">
    <div class="modal-box">
      <div class="modal">
        <img :src="image.urls.regular" alt="" :key="image.id" />
        <div class="wrapper">
          <button @click="downImg(image.urls.full)">
            <Icon icon="iconoir:download" width="1.2rem" />
          </button>
          <button @click="showModal = false">
            <Icon icon="heroicons:x-mark-20-solid" width="1.2rem" />
          </button>
        </div>
      </div>
    </div>
  </teleport>
</template>

<script>
import { useModal } from "../store/index";
import { mapWritableState } from "pinia";
import { Icon } from "@iconify/vue";
export default {
  components: {
    Icon,
  },
  props: {
    image: {
      type: Object,
      required: true,
    },
  },
  computed: {
    ...mapWritableState(useModal, ["showModal"]),
  },
  methods: {
    downImg(imgUrl) {
      fetch(imgUrl)
        .then((res) => res.blob())
        .then((blob) => {
          const a = document.createElement("a");
          a.href = URL.createObjectURL(blob);
          a.download = new Date().getTime();
          a.click();
        })
        .catch(() => alert("Failed to download image!"));
    },
  },
};
</script>

<style scoped>
.modal-box {
  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  position: fixed;
  top: 0;
  right: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  backdrop-filter: blur(1.5rem);
  background-color: rgba(0, 0, 0, 0.384);
  z-index: 10;
}

.modal {
  display: flex;
  height: 80%;
  position: relative;
  max-width: 90%;
  flex-direction: column;
  justify-content: center;
  gap: 1rem;
}

img {
  max-width: 100%;
  max-height: 100%;
}

.wrapper {
  width: 100%;
  display: flex;
  bottom: 0;
  justify-content: center;
}

button {
  width: 4rem;
  height: 2.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
}

button:hover {
  background-color: black;
  color: white;
}
</style>
