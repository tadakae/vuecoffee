<script setup>

import Card from '@/components/Card.vue'

defineProps({
  items: Array,
  cartItemCount: Array
})
const emit = defineEmits(['addToCard'])

</script>


<template>
  <div class="hidden md:block">

    <div class="grid grid-cols-5   bg-slate-50 pb-40 " v-auto-animate>
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

  <div   class="md:hidden w-full h-screen m-auto  ">
    <div class=" card-list" v-auto-animate>
      <Card
        v-for="(item) in items"
        v-bind:key="item.id"
        :titlee="item.titlee"
        :imageUrl="item.imageUrl"
        :price="item.price"
        :onClickAdd="() => emit('addToCard', item)"
        :isAdded="item.isAdded"
        class="card"
       />
    </div>
  </div>

</template>


<style>
.card-list {
  @apply flex flex-wrap bg-slate-50 pt-20;
}

.card-list .card:nth-child(2n) {
  @apply border-r-0;
}

.card-list .card:nth-child(1n) {
  @apply border-r border-b-2;
}
</style>
