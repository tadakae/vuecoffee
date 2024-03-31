<script setup>
import Header from "@/components/Header.vue";
import BoxCoffee from "@/components/BoxCoffee.vue";
import Drawer from "@/components/Drawer.vue";
</script>

<template>
  <div class="w-4/5 m-auto bg-white h-screen rounded-xl shadow-xl mt-14">
      <Drawer />
      <Header />
      <BoxCoffee />

  </div>
</template>

<style scoped></style>
