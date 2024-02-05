<script setup>
import { RouterView } from "vue-router";
import Navbar from "./components/Navbar.vue";
</script>

<template>
  <div class="container">
    <!-- <Navbar /> -->
    <RouterView />
  </div>
</template>

<style scoped>
.container {
  max-width: 1600px;
  margin: auto;
  padding: 0 1rem;
}
</style>
