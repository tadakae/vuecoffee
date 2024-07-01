<template>
  <div class=" hidden md:block">
    <div class="box  ml-10 mt-10 p-4  w-60  border-0 rounded-md bg-white  flex">
        <img  :src="imageUrl" alt="" class="img w-24 h-24 rounded-xl">


        <div class=" text-sm/[17px] mt-3    ml-3 font-extralight text-center">
            <b class="mt-2 p-2">
                {{titlee}}
            </b>
            <span>
              <br>
                Цена:
            <b class="text-slate-600 ">
                {{price}}
            </b>
                </span>
          <el-button @click="onClickAdd" class="   mt-2 ">
            Добавить
          </el-button>
        </div>
    </div>
  </div>

<!--  mobile-->
  <div class="md:hidden mt-3 ">
    <div class=" border border-slate-100 p-4 rounded-xl bg-white  flex items-center gap-4">
      <img :src="imageUrl" class=" w-16 h-16 rounded-xl" alt="">
      <div class="  flex flex-col w-52 mt-3">
        <p>{{ titlee }}</p>
        <div class=" flex justify-between mt-2">
          <b>{{ price }} тг</b>
          <el-button @click="onClickAdd" class="  ">
            Добавить
          </el-button>
        </div>
      </div>
    </div>
  </div>
  <!--  mobile-->




</template>

<script setup>
defineProps({
    id: Number,
    titlee: String,
    imageUrl: String,
    price: Number,
    isFavorite: Boolean,
    isAdded: Boolean,
    onClickFavorite: Function,
    onClickAdd: Function
})

</script>

<style scoped>

</style>