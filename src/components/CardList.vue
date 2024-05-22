<script setup>

import Card from "@/components/Card.vue";

defineProps({
    items: Array
})
const emit =defineEmits(['addToCard'])

</script>


<template>
  <div class="grid grid-cols-6 ">
      <Card
              v-for="item in items"
              v-bind:key="item.id"
              :Title="item.Title"
              :imageUrl="item.imageUrl"
              :Price="item.Price"
              :onClickAdd="() => emit('addToCard', item)"
      />

  </div>

</template>