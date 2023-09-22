import { defineStore } from "pinia";

export const useProduct = defineStore("product", {
  state: () => ({
    product: [],
  }),

  actions: {
    async getProduct() {
      const { $api } = useNuxtApp();
      try {
        const res = await $api.get('/department');
        console.log(res.data);
        this.product = res.data
      } catch (error) {
        console.log(error);
      }
    },
  },
});