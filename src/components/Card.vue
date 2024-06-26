<template>
    <div class="box  ml-10 mt-10 p-4  w-60  border-0 rounded-md bg-white flex   ">
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