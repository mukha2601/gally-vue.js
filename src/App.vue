<script setup>
import { RouterView } from "vue-router";
import Navbar from "./components/Navbar.vue";
</script>

<template>
  <div class="container">
    <Navbar />
    <RouterView />
  </div>
</template>

<style scoped>
.container {
  max-width: 1600px;
  padding: 1rem;
  margin: auto;
}
</style>
