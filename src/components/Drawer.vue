<template>
 <div class=" fixed top-0 left-0 h-full w-full bg-black z-10 opacity-50"></div>
  <div class=" bg-white w-96 h-full fixed right-0 top-0 z-20 p-8">
      <DrawerHead />
      <CartItem />
  </div>
</template>

<script setup>
import DrawerHead from "./DrawerHead.vue";
import CartItem from "./CartItem.vue";


</script>

