


<script setup>
import { computed, onMounted, provide,  ref, watch } from 'vue'
import axios from 'axios'


import Header from '@/components/Header.vue'
import CardList from '@/components/CardList.vue'
import Drawer from '@/components/Drawer.vue'
import Footer from '@/components/Footer.vue'

const items = ref([])
const card = ref([])

const drawerOpen = ref(false)


const createOrder = async () => {
  try {
    const { data } = await axios.post(`https://8a5d97df2ab05859.mokky.dev/orders`, {
      items: card.value,
      totalPrice: totalPrice.value
    })

    card.value = []

    return data

  } catch (err) {
    console.log(err)
  }
}


const totalPrice = computed(() => {
  return card.value.reduce((acc, item) => acc + item.price * item.quantity, 0);
});


const vatPrice = computed(() => Math.round((totalPrice.value * 5)) / 100)


const openDrawer = () => {
  drawerOpen.value = true
}

const closeDrawer = () => {
  drawerOpen.value = false
}


const addToCard = (item) => {
  const existingItem = card.value.find(ci => ci.id === item.id);
  if (!existingItem) {
    card.value.push({ ...item, quantity: 1 });
  } else {
    existingItem.quantity += 1;
  }
};



const removeFromCartOne = (item) => {
  const cartItem = card.value.find(ci => ci.id === item.id);
  if (cartItem.quantity > 1) {
    cartItem["quantity"] -= 1;
    return;
  }

  card.value = card.value.filter(ci => ci.id !== item.id);
}

const removeFromCard = (item) => {
  card.value = card.value.filter(ci => ci.id !== item.id);
};

const onClickAdd = (item) => {
  addToCard(item)
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

const _items = computed(() => {
  return items.value.map((item) => {
    const cartItem = card.value.find(ci => ci.id === item.id);
    return { ...item, quantity: cartItem?.quantity || 0 };
  })

});



provide('card', {
  card,
  addToCard,
  closeDrawer,
  openDrawer,
  removeFromCard,
  removeFromCartOne
})

watch(
  card,
  () => {
    localStorage.setItem('card', JSON.stringify(card.value))
  },
  { deep: true }
)

// watch(selectedItemId, (newItem) => {
//   if (newItem === 0) {
//     showModal.value = false;
//   }
// });

onMounted(async () => {
  const localCard = localStorage.getItem('card')
  card.value = localCard ? JSON.parse(localCard) : []
})

</script>

<template>
  <div class="w-full  m-auto bg-gray-100 h-screen rounded-xl shadow-xl ">
  <div class="w-full   m-auto bg-slate-50   ">
    <Drawer
      @create-order="createOrder"
      :vat-price="vatPrice"
      :total-price="totalPrice"
      v-if="drawerOpen"
      :items="_items"
    />

    <Header
      :total-price="totalPrice"
      @open-Drawer="openDrawer"
    />

    <div class="mt-52 absolute z-50">{{}}</div>


    <!--    <Head :onChangeSelect="onChangeSelect" />-->

    <CardList
      :items="_items"
      @add-to-card="onClickAdd"
      @remove-from-cart-one="removeFromCartOne"
    />


    <Footer />
  </div>
  </div>
</template>

<style scoped></style>