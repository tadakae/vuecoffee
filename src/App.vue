<script setup>
import {onMounted, provide, reactive, ref, watch} from "vue";
import axios from "axios";

import Header from "@/components/Header.vue";
import CardList from "@/components/CardList.vue";
import Drawer from "@/components/Drawer.vue";
import Head from "@/components/Head.vue"

const items = ref([])

const drawerOpen = ref(false)

const openDrawer = () => {
    drawerOpen.value = true
}

const filters = reactive({
    sortBy: '',
    searchQuery: '',
})


const onChangeSelect = event => {
    filters.sortBy = event.target.value
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

watch( ()=> filters, async () => {
    try {
        const { data } = await axios.get('https://8a5d97df2ab05859.mokky.dev/items?sortBy=' + filters.sortBy)
        items.value = data
    }
    catch (err) {
        console.log(err)
    }
})

provide('cardActions', {
    // closeDrawer,
    openDrawer
})

</script>

<template>
  <div class="w-4/5 m-auto bg-white h-screen rounded-xl shadow-xl mt-14">
      <Drawer v-if="drawerOpen" />
      <Header @open-Drawer = "openDrawer" />
      <Head :onChangeSelect="onChangeSelect" />
      <CardList :items="items" />

  </div>
</template>

<style scoped></style>
