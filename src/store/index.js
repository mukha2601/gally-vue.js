// store.js
import { defineStore } from 'pinia';
import axios from 'axios';

export const usePhotoStore = defineStore({
   id: 'photo',
   state: () => ({
      count: 28,
      client_id: 'QaxOLYJFNjV5katlAPBXlpedw2R2Ovti2SKbFZEI4RU',
      images: [] // Rasm ma'lumotlarini saqlash uchun massiv
   }),
   actions: {
      async fetchData() {
         try {
            const response = await axios.get(
               {
                  method: "get",
                  url: "https://api.unsplash.com/photos/random",
                  params: {
                     count: this.count,
                     client_id: this.client_id,
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

