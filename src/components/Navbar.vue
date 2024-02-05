<template>
  <div class="navbar">
    <button @click="">saved: {{ this.counter.savedCount }}</button>
  </div>
</template>

<script>
import useCounterStore from "../store/index";
export default {
  data() {
    return {
      counter: useCounterStore(),
    };
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

button {
  margin: 0.5rem;
  padding: 0 1rem;
  border: none;
}

button:hover {
  color: white;
  background-color: black;
  border: 1px solid white;
}
</style>
