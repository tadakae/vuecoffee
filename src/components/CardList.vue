<script setup>

import Card from "@/components/Card.vue";

defineProps({
    items: Array
})
</script>


<template>
  <div class="grid grid-cols-6 ">
      <Card
              v-for="item in items"
              v-bind:key="item.id"
              :Title="item.Title"
              :imageUrl="item.imageUrl"
              :Price="item.Price"
      />

  </div>

</template>