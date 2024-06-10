<template>
    <div class="box  ml-10 mt-10 p-4 w-32 cursor-pointer rounded-md bg-amber-100 hover:bg-orange-100    ">
        <img  :src="imageUrl" alt="" class="img w-24 h-24 rounded-xl">


        <div class=" text-sm/[17px] mt-1  font-extralight text-center block">
            <b class="mt-2 p-2">
                {{titlee}}
            </b>
            <span>
                Цена:
            <b class="text-slate-600 ">
                {{price}}
            </b>
                </span>
        </div>
        <button @click="onClickAdd" class=" ml-3 p-1 rounded-b-md text-amber-50 mt-2 bg-amber-600 hover:bg-amber-900 active:bg-slate-50 active:text-black ">
          Добавить
        </button>
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