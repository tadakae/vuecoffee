<script setup>
import {onMounted, ref, watch} from "vue";
import axios from "axios";

import Header from "@/components/Header.vue";
import CardList from "@/components/CardList.vue";
// import Drawer from "@/components/Drawer.vue";
import Head from "@/components/Head.vue"

const items = ref([])
const sortBy = ref('')
const searchQuery = ref('')

const onChangeSelect = event => {
    sortBy.value = event.target.value
}


onMounted(async () => {
      try {
          const { data } = await axios.get('https://8a5d97df2ab05859.mokky.dev/items')
          items.value = data
          console.log(data.data)
      }
      catch (err) {
          console.log(err)
      }
})

watch(sortBy, async () => {
    try {
        const { data } = await axios.get('https://8a5d97df2ab05859.mokky.dev/items?sortBy=' + sortBy.value)
        items.value = data
        console.log(data.data)
    }
    catch (err) {
        console.log(err)
    }
})
</script>

<template>
  <div class="w-4/5 m-auto bg-white h-screen rounded-xl shadow-xl mt-14">
<!--      <Drawer />-->
      <Header />
      <Head :onChangeSelect="onChangeSelect" />
      <CardList :items="items" />

  </div>
</template>

<style scoped></style>
