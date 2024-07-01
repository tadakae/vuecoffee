<script setup>
defineProps({
    onChangeSelect: Array
})

</script>

<template>
    <div class=" ml-2  p-6  bg-gray-50 pt-28  ">
        <div class=" flex justify-between ">
            <div class="">
              <button class="w-36   h-10   ">
                <div class="bg-white rounded  ">Мои Заказы</div>
              </button>
            </div>
<!--            <select @change="onChangeSelect" class=" mt-2  h-6 md:border rounded-md">-->
<!--                <option value="name">По названию</option>-->
<!--                <option value="price">По цене (Дешевые)</option>-->
<!--                <option value="-price">По цене (Дорогие)</option>-->
<!--            </select>-->
        </div>

    </div>


</template>