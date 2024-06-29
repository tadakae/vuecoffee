<script setup>

import Card from "@/components/Card.vue";

defineProps({
    items: Array
})
const emit =defineEmits(['addToCard'])

</script>


<template>
  <div class="hidden md:block">

  <div  class="grid grid-cols-5   bg-slate-50 pb-40 " v-auto-animate >
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
  </div>

<div class="md:hidden w-80 h-screen m-auto  ">
  <div class=" grid grid-cols-2 gap-0  bg-slate-50 pt-28 pb-10   " v-auto-animate >
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
</div>

</template>