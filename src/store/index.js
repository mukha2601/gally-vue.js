// store.js
import { defineStore } from 'pinia';
import axios from 'axios';

export const usePhotoStore = defineStore({
   id: 'images',
   state: () => ({
      images: [],
      page: 1
   }),

   actions: {
      async fetchData() {
         try {
            const response = await axios(
               {
                  method: "get",
                  url: "https://api.unsplash.com/photos/random/",
                  params: {
                     page: this.page,
                     count: 30,
                     client_id: '5L7IgPO9W3WngJMhAa31bAes8r0gRoijpKnukBk2VHk',
                  },
               }
            );
            this.images = [...this.images, ...response.data]; // API dan olingan rasm ma'lumotlarini saqlash
         } catch (error) {
            console.error('Rasm ma\'lumotlarini olishda xatolik:', error);
         }
      },
   },
});


export const useSearchPhotos = defineStore({
   id: 'searchPhotos',
   state: () => ({
      searchPhotos: [],
      searchText: '',
      page: 1,
   }),

   actions: {
      async searchPhotosData() {
         try {
            const response = await axios({
               method: "get",
               url: "https://api.unsplash.com/search/photos",
               params: {
                  page: this.page,
                  per_page: 30,
                  query: this.searchText, // Foydalanuvchi kiritgan matn
                  client_id: "5L7IgPO9W3WngJMhAa31bAes8r0gRoijpKnukBk2VHk",
               },
            });
            console.log(response.data.results);
            this.searchPhotos = [
               ...this.searchPhotos,
               ...response.data.results,
            ]; // Ma'lumotlarni o'zgartiramiz
            // usePhotoStore().images = response.data.results; // Ma'lumotlarni o'zgartiramiz
         } catch (error) {
            console.error("Rasm ma'lumotlarini qidirishda xatolik:", error);
         }
      },
   }
})

export const useModal = defineStore({
   id: 'modal',
   state: () => ({
      showModal: false,
   }),
})