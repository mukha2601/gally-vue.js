// store.js
import { defineStore } from 'pinia';

const useCounterStore = defineStore({
   id: 'product',
   state: () => ({
      savedCount: 0,
      productCount: 0,
   }),
   getters: {

   },
   actions: {
      increment() {
         this.count++
      },
      decrement() {
         this.count--
      }
   },
});

export default useCounterStore