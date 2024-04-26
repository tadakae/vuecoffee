<script setup>
import {onMounted} from "vue";
import axios from "axios";

import Header from "@/components/Header.vue";
import BoxCoffee from "@/components/BoxCoffee.vue";
import Drawer from "@/components/Drawer.vue";
import Head from "@/components/Head.vue"


onMounted(() => {
    axios.get('https://8a5d97df2ab05859.mokky.dev/items').then(resp => console.log(resp.data))
})
</script>

<template>
  <div class="w-4/5 m-auto bg-white h-screen rounded-xl shadow-xl mt-14">
<!--      <Drawer />-->
      <Header />
      <Head />
      <BoxCoffee />

  </div>
</template>

<style scoped></style>
