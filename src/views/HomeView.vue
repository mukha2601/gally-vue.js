<script>
import Grid from "../components/Grid.vue";
import products from "../data/index";

export default {
  components: {
    Grid,
  },
  data() {
    return {
      products: [],
    };
  },
  mounted() {
    this.getData();
  },
  methods: {
    getData() {
      this.products = products;
    },
  },
};
</script>

<template>
  <Grid :products="products" />
</template>
