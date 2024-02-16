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
  data() {
    return {
    };
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
};
</script>

<style scoped>
.card {
  border: 2px solid black;
  padding: 5px;
  margin-top: 10px;
}
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
  min-width: 400px;
  height: 90%;
  display: flex;
  flex-direction: column;
  padding: 50px;
  background-color: bisque;
  position: relative;
  overflow-y: scroll;
}

.closeBtn {
  position: absolute;
  top: 0;
  right: 0;
  padding: 5px 10px;
}

.card-input {
  display: flex;
}

.btnOk {
  margin-top: 10px;
}
</style>
