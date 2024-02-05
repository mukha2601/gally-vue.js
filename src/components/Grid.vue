<template>
  <Modal
    v-if="showModal"
    :locStorArray="locStorArray"
    @closeModal="showModal = false"
  />
  <div class="saved-box">
    <button @click="toModal(products)">
      saved: {{ this.counter.savedCount }}
    </button>
  </div>
  <div class="grid">
    <div v-for="product in products" class="imaage-box">
      <img :src="product.image" alt="" :key="product.id" class="image" />
      <h1>{{ product.name }}</h1>
      <p>
        <del>{{ product.old_price }}</del> | {{ product.price }} UZS
      </p>
      <button @click="getLocalStoroge(product, product.id)">olish</button>
    </div>
  </div>
</template>

<script>
import Modal from "./Modal.vue";
import useCounterStore from "../store/index";

export default {
  components: { Modal },
  data() {
    return {
      counter: useCounterStore(),
      productCounter: useCounterStore(),
      showModal: false,
      product: [],
      locStorArray: [],
    };
  },
  computed: {
    counter() {
      return this.counter.savedCount;
    },
  },
  props: ["products"],
  methods: {
    increment() {
      this.counter.increment();
    },
    toModal(product) {
      this.showModal = true;
      this.product = product;
    },
    getLocalStoroge(product, id) {
      let productsInStorage = localStorage.getItem("products");
      let productsArray = productsInStorage
        ? JSON.parse(productsInStorage)
        : [];

      let found = false;

      productsArray.forEach((item) => {
        if (item.id === id) {
          item.count += 1;
          this.productCounter.productCount++;
          found = true;
        }
      });

      if (!found) productsArray.push(product);

      localStorage.setItem("products", JSON.stringify(productsArray));
      this.counter.savedCount = productsArray.length;
      this.locStorArray = productsArray;
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
  grid-auto-rows: auto;
  position: relative;
  gap: 1rem;
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
  height: auto;
  object-fit: cover;
}

h1,
p {
  color: white;
}

.imaage-box button {
  margin-top: 1rem;
  padding: 4px 8px;
}

.saved-box {
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: center;
  margin-bottom: 1rem;
}

.saved-box button {
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
