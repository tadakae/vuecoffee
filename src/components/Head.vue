<script setup>
defineProps({
    onChangeSelect: Array
})

</script>

<template>
    <div class=" p-10  bg-orange-50 ">
        <div class=" flex justify-between ">
            <div class="relative pr-12">
<!--                <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">-->
<!--                    <img src="@/components/assets/search-svgrepo-com.png" class=" w-5 h-5" alt="">-->
<!--                </div>-->

<!--                    <input class=" border border-gray-200 rounded-md py-2 pl-10 pr-4 focus:outline-none focus:border-gray-400" placeholder="Поиск...">-->
            </div>
            <select @change="onChangeSelect" class=" border rounded-md py-2 px-3">
                <option value="name">По названию</option>
                <option value="price">По цене (Дешевые)</option>
                <option value="-price">По цене (Дорогие)</option>
            </select>
        </div>

    </div>


</template>