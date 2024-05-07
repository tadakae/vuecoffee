<template>
    <div class="box  ml-10 mt-10 p-4 w-32 cursor-pointer rounded-md bg-orange-50 hover:bg-orange-100 active:bg-orange-200  ">
        <img  :src="imageUrl" alt="" class="img w-24 h-24 rounded-xl">


        <div class=" text-sm/[17px] mt-1  font-extralight text-center block">
            <b class="mt-2 p-2">
                {{Title}}
            </b>
            <span>
                Цена:
            <b class="text-slate-600 ">
                {{Price}}
            </b>
                </span>
        </div>
    </div>

</template>

<script setup>
defineProps({
    id: Number,
    Title: String,
    imageUrl: String,
    Price: Number,
    isFavorite: Boolean,
    isAdded: Boolean,
    onClickFavorite: Function,
    onClickAdd: Function
})

</script>

<style scoped>

</style>