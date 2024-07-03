<template>
 <div class=" w-2/4">
   <div class=" hidden md:block">
     <div class="box  ml-10 mt-10 p-4  w-60  border-0 rounded-md bg-white  flex">
       <img :src="imageUrl" alt="" class="img w-24 h-24 rounded-xl">


       <div class=" text-sm/[17px] mt-3    ml-3 font-extralight text-center">
         <b class="mt-2 p-2">
           {{ titlee }}
         </b>
         <span>
              <br>
                Цена:
            <b class="text-slate-600 ">
                {{ price }}
            </b>
                </span>
         <el-button @click="onClickAdd" class="   mt-2 ">
           Добавить
         </el-button>
       </div>
     </div>
   </div>

   <!--  mobile-->
   <div class="    md:hidden m-auto  ">
     <div class="       m-auto h-52  p-4  w-full bg-white   ">
       <div class="w-full   ">
         <img :src="imageUrl" alt="" class="img w-40  h-28 m-auto  rounded-xl">
         <div class="  text-sm/[17px] mt-3     font-medium ">

           <b class="">
             {{ titlee }}
           </b>


           <div class=" flex justify-between items-center">
             <b class="pt-3">
               {{ price }}тг
             </b>
             <svg  @click="onClickAdd" width="26px" height="26px" viewBox="0 0 24 24" fill="none"
                  xmlns="http://www.w3.org/2000/svg">

               <g id="SVGRepo_bgCarrier" stroke-width="0" />

               <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round" />

               <g id="SVGRepo_iconCarrier">
                 <path
                   d="M7.5 18C8.32843 18 9 18.6716 9 19.5C9 20.3284 8.32843 21 7.5 21C6.67157 21 6 20.3284 6 19.5C6 18.6716 6.67157 18 7.5 18Z"
                   stroke="#000000" stroke-width="1.5" />
                 <path
                   d="M16.5 18.0001C17.3284 18.0001 18 18.6716 18 19.5001C18 20.3285 17.3284 21.0001 16.5 21.0001C15.6716 21.0001 15 20.3285 15 19.5001C15 18.6716 15.6716 18.0001 16.5 18.0001Z"
                   stroke="#000000" stroke-width="1.5" />
                 <path d="M11 10.8L12.1429 12L15 9" stroke="#000000" stroke-width="1.5" stroke-linecap="round"
                       stroke-linejoin="round" />
                 <path
                   d="M2 3L2.26121 3.09184C3.5628 3.54945 4.2136 3.77826 4.58584 4.32298C4.95808 4.86771 4.95808 5.59126 4.95808 7.03836V9.76C4.95808 12.7016 5.02132 13.6723 5.88772 14.5862C6.75412 15.5 8.14857 15.5 10.9375 15.5H12M16.2404 15.5C17.8014 15.5 18.5819 15.5 19.1336 15.0504C19.6853 14.6008 19.8429 13.8364 20.158 12.3075L20.6578 9.88275C21.0049 8.14369 21.1784 7.27417 20.7345 6.69708C20.2906 6.12 18.7738 6.12 17.0888 6.12H11.0235M4.95808 6.12H7"
                   stroke="#000000" stroke-width="1.5" stroke-linecap="round" />
               </g>

             </svg>
           </div>
         </div>
       </div>
     </div>
   </div>

   <!--  mobile-->
   <div v-if="showModal" >
     <span @click="removeFromCard">---</span>
     <span>{{cartItemCount}}</span>
     <span @click="onClickAdd" >+</span>
   </div>
 </div>


</template>

<script setup>

import { inject } from 'vue'


const { cartItemCount,  removeFromCard, showModal } = inject('card')




defineProps({
  id: Number,
  titlee: String,
  imageUrl: String,
  price: Number,
  isFavorite: Boolean,
  isAdded: Boolean,
  onClickAdd: Function,
  cartItemCount: Function,
})



</script>

