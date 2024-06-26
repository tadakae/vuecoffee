<script setup>

import Card from "@/components/Card.vue";

defineProps({
    items: Array
})
const emit =defineEmits(['addToCard'])

</script>


<template>
  <div class="grid grid-cols-8 bg-orange-50 pb-40 ">
      <Card
              v-for="item in items"
              v-bind:key="item.id"
              :titlee="item.titlee"
              :imageUrl="item.imageUrl"
              :price="item.price"
              :onClickAdd="() => emit('addToCard', item)"
              :isAdded="item.isAdded"
      />

  </div>

</template>