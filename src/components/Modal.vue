<template>
  <teleport to="#modal">
    <div class="modal-box">
      <div class="modal">
        <button @click="showModal = false">x</button>
        <img :src="image.urls.small" alt="" :key="image.id" />
      </div>
    </div>
  </teleport>
</template>

<script>
import { useModal } from "../store/index";
import { mapWritableState } from "pinia";
export default {
  props: {
    image: {
      type: Object,
      required: true,
    },
  },
  computed: {
    ...mapWritableState(useModal, ["showModal"]),
  },
};
</script>

<style scoped>
.modal-box {
  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  position: absolute;
  top: 0;
  right: 0;
  display: flex;
  justify-content: center;
  align-items: center;
}

.modal {
  display: flex;
  flex-direction: column;
  padding: 50px;
  background-color: aqua;
}
</style>
