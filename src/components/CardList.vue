<script setup>

import Card from '@/components/Card.vue'
defineProps({
  items: Array,
  // cartItemCount: Array,
  // showModal: Boolean,
})
const emit = defineEmits(['addToCard', 'removeFromCard'])

</script>


<template>



  <div class="md:hidden w-full h-screen m-auto">
    <div class="relative card-list" v-auto-animate>
      <Card
        v-for="(item) in items"
        v-bind:key="item.id"
        :titlee="item.titlee"
        :imageUrl="item.imageUrl"
        :price="item.price"
        :quantity="item.quantity"
        :onClickAdd="() => emit('addToCard', item)"
        :isAdded="item.isAdded"
        :item-id="item.id"
        :remove-from-card="() => emit('removeFromCard', item)"
        class="card"
      />
    </div>
    <!--    <div v-if="showModal" class="absolute w-[80px] left-20 bottom-[300px] bg-[#f3f4f6] flex justify-between bg-[#f3f4f6] px-2 py-1" v-auto-animate>-->
    <!--      <span @click="removeFromCard">-&#45;&#45;</span>-->
    <!--      <span>{{cartItemCount}}</span>-->
    <!--      <span >+</span>-->
    <!--    </div>-->
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
