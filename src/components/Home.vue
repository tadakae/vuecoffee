<script setup>
import { computed, onMounted, provide, reactive, ref, watch } from 'vue'
import axios from 'axios'


import Header from '@/components/Header.vue'
import CardList from '@/components/CardList.vue'
import Drawer from '@/components/Drawer.vue'
import Head from '@/components/Head.vue'
import MainBox from '@/components/MainBox.vue'
import Footer from '@/components/Footer.vue'
import Orders from '@/pages/Orders.vue'

const items = ref([])
const card = ref([])

const drawerOpen = ref(false)







const createOrder = async () => {
  try {
    const { data } = await axios.post(`https://8a5d97df2ab05859.mokky.dev/orders`, {
      items: card.value,
      totalPrice: totalPrice.value,
    })

    card.value = []

    return data

  } catch (err) {
    console.log(err)
  }
}



const totalPrice = computed(
  () =>  card.value.reduce((acc, item) => acc + item.price, 0)
)

const vatPrice = computed(() => Math.round((totalPrice.value * 5)) / 100)


const openDrawer = () => {
  drawerOpen.value = true
}

const closeDrawer = () => {
  drawerOpen.value = false
}


const filters = reactive({
  sortBy: '',
  searchQuery: ''
})




const addToCard = (item) => {
  card.value.push(item)
}

const removeFromCard = (item) => {
  card.value.splice(
    card.value.indexOf(item), 1)
  item.isAdded = false
}

const onClickAddPlus = (item) => {
  if (!item.isAdded) {
    addToCard(item)
  }


}


const onChangeSelect = (event) => {
  filters.sortBy = event.target.value
}


onMounted(async () => {
  try {
    const { data } = await axios.get('https://8a5d97df2ab05859.mokky.dev/items')
    items.value = data
    console.log(data.data)
  } catch (err) {
    console.log(err)
  }
})


watch( filters, async () => {
  try {
    const { data } = await axios.get('https://8a5d97df2ab05859.mokky.dev/items?sortBy=' + filters.sortBy)
    items.value = data
  } catch (err) {
    console.log(err)
  }
})

provide('card', {
  card,
  addToCard,
  closeDrawer,
  openDrawer,
  removeFromCard,
})

watch(
  card,
  () => {
    localStorage.setItem('card', JSON.stringify(card.value))
  },
  {deep: true}
)

onMounted(async () => {
  const localCard = localStorage.getItem('card')
  card.value = localCard ? JSON.parse(localCard) : []
})

</script>

<template>
  <div class="w-full   m-auto bg-slate-50   " >
    <Drawer @create-order="createOrder" :vat-price="vatPrice" :total-price="totalPrice" v-if="drawerOpen" />

    <Header :total-price="totalPrice" @open-Drawer="openDrawer" />

    <MainBox/>
<!--    <Head :onChangeSelect="onChangeSelect" />-->

    <CardList :items="items" @add-to-card="onClickAddPlus" />

    <Footer />
  </div>
</template>

<style scoped></style>
