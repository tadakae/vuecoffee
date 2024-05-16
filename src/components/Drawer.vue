<template>
  <div class=" fixed top-0 left-0 h-full w-full bg-black z-10 opacity-50"></div>
  <div class=" bg-white w-96 h-full fixed right-0 top-0 z-20 p-8">
      <HeadDr />
      <CardItemList/>


      <div class=" flex flex-col gap-4 mb-5">
          <div class=" flex gap-2 ">
              <span>
                  Итого:
              </span>
              <div class=" flex-1 border-b border-dashed"></div>
              <b>790$</b>
          </div>
      </div>
      <div class=" mb-5">
          <div class=" flex ">
              <span>
                  Налог 100%:
              </span>
              <div class=" flex-1 border-b border-dashed"></div>
              <b>790$</b>
          </div>
      </div>
      <button class=" transition bg-orange-50 w-full rounded-xl py-3 hover:bg-orange-100 active:bg-orange-200">Оформить Заказ</button>
  </div>
</template>

<script setup>
import HeadDr from "./HeadDr.vue";
import CardItemList from "@/components/CardItemList.vue";
// import CartItem from "./CartItem.vue";


</script>

