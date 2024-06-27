<script setup>
defineProps({
  titlee: String,
  description: String,
  imageUrl: String,
})
</script>

<template>
<div class="flex flex-col items-center text-center w-72 mx-auto h-full justify-center">
  <img width="100" height="100" :src="imageUrl" alt="">
  <h2 class="mt-4 text-2xl font-medium">{{titlee}}</h2>
  <p class="text-gray-400">{{description}}</p>
</div>
</template>

<style scoped>

</style>