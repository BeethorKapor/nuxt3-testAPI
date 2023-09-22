<template>
  <div v-for="pro in product" :key="pro">
    <NuxtLink>{{ pro }}</NuxtLink>
  </div>
</template>

<script setup>
// import { defineStore } from "pinia";
import { storeToRefs } from "pinia";
import { useProduct } from "@/stores/product";

const store = useProduct();
const { getProduct } = store; // have all non reactiave stuff here
const { product } = storeToRefs(store); // have all reactive states here

await getProduct();
</script>
