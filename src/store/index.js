// store.js
import { defineStore } from 'pinia';
import axios from 'axios';

export const usePhotoStore = defineStore({
   id: 'images',
   state: () => ({
      images: []
   }),

   actions: {
      async fetchData() {
         try {
            const response = await axios(
               {
                  method: "get",
                  url: "https://api.unsplash.com/photos/random/",
                  params: {
                     count: 28,
                     client_id: '5L7IgPO9W3WngJMhAa31bAes8r0gRoijpKnukBk2VHk',
                  },
               }
            );
            this.images = response.data; // API dan olingan rasm ma'lumotlarini saqlash
         } catch (error) {
            console.error('Rasm ma\'lumotlarini olishda xatolik:', error);
         }
      }
   },
});

