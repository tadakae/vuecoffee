<template>
  <div class=" fixed top-0 left-0 h-full font-sans w-full bg-black z-10 opacity-50"></div>
  <div class=" overflow-y-auto  bg-slate-100  fixed right-0 top-0 z-20 p-8 md:w-96 h-full w-full ">
    <div class=" flex mt-16">
      <svg @click='closeDrawer' width="30px" height="30px" class=" mr-3 cursor-pointer " viewBox="0 0 24 24" fill="none"
           xmlns="http://www.w3.org/2000/svg">
        <path
          d="M16.19 2H7.81C4.17 2 2 4.17 2 7.81V16.18C2 19.83 4.17 22 7.81 22H16.18C19.82 22 21.99 19.83 21.99 16.19V7.81C22 4.17 19.83 2 16.19 2ZM13.92 16.13H9C8.59 16.13 8.25 15.79 8.25 15.38C8.25 14.97 8.59 14.63 9 14.63H13.92C15.2 14.63 16.25 13.59 16.25 12.3C16.25 11.01 15.21 9.97 13.92 9.97H8.85L9.11 10.23C9.4 10.53 9.4 11 9.1 11.3C8.95 11.45 8.76 11.52 8.57 11.52C8.38 11.52 8.19 11.45 8.04 11.3L6.47 9.72C6.18 9.43 6.18 8.95 6.47 8.66L8.04 7.09C8.33 6.8 8.81 6.8 9.1 7.09C9.39 7.38 9.39 7.86 9.1 8.15L8.77 8.48H13.92C16.03 8.48 17.75 10.2 17.75 12.31C17.75 14.42 16.03 16.13 13.92 16.13Z"
          fill="#292D32" />
      </svg>

      <HeadDr />

    </div>


    <InfoBlock v-if="!totalPrice" titlee="Корзина пустая" description="Добавьте пару кофе, что бы оформить заказ"
               image-url="https://i.imgur.com/9fD0UAA.png" />


    <CardItemList v-if="totalPrice" />

    <div v-if="totalPrice">
      <input class=" p-2 rounded-xl  pl-5 mb-2 mt-8 w-full"   v-model="name" type="text" placeholder="Введите свое имя">
      <div class=" flex flex-col gap-4 mb-5 mt-4">
<!--        <NameUs/>-->
        <div class=" flex gap-2 ">

              <span>
                  Итого:
              </span>
          <div class=" flex-1 border-b border-dashed"></div>
          <b>{{ totalPrice }}тг</b>
        </div>
      </div>
      <div class=" mb-5">
        <div class=" flex ">
              <span>
                  Комиссия 5%:
              </span>
          <div class=" flex-1 border-b border-dashed"></div>
          <b>{{ vatPrice }}тг</b>
        </div>
      </div>
      <button v-on:click="saveName"   :disabled="totalPrice ? false : true" @click="() => emit('createOrder')"
              class=" transition bg-white w-full rounded-xl py-3 hover:bg-blue-100 active:bg-blue-200">
        Оформить Заказ
      </button>
    </div>
  </div>

</template>

<script setup>
import HeadDr from './HeadDr.vue'
import CardItemList from '@/components/CardItemList.vue'
import { inject, ref } from 'vue'
import InfoBlock from '@/components/InfoBlock.vue'
import axios from 'axios'

const { closeDrawer } = inject('card')

defineProps({
  totalPrice: Number,
  vatPrice: Number
})

const emit = defineEmits(['createOrder'])


const name = ref('');

const saveName = async () => {
  try {
    const response = await axios.post('https://8a5d97df2ab05859.mokky.dev/users', {
      name: name.value
    });
    console.log('Успешно сохранено в базу данных:', response.data);

  } catch (err) {
    console.error(err);
  }
};







</script>

