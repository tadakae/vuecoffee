<template>
    <header class="flex justify-between border-b-4 border-orange-900 -mt-24   fixed bg-orange-100 pl-8 py-3 w-full">
        <div class="flex items-center gap-4 mr-60 p-2.5 rounded-2xl">
          <svg version="1.1" class="w-14" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
               viewBox="0 0 512 512" xml:space="preserve">
<path style="fill:#521F0E;" d="M509.571,220.737C492.388,96.041,385.419,0,256,0C114.615,0,0,114.616,0,256
	c0,113.387,73.722,209.54,175.843,243.182L509.571,220.737z"/>
            <path style="fill:#220D06;" d="M512,256c0-11.966-0.84-23.735-2.429-35.263L400.696,111.861L74.199,196.297l1.036,85.198
	l84.321,84.321L55.652,378.991l120.191,120.191C201.06,507.49,228.001,512,256,512C397.384,512,512,397.384,512,256z"/>
            <polygon style="fill:#FFE376;" points="422.957,378.991 400.696,417.948 256,417.948 234.296,367.861 "/>
            <polygon style="fill:#FFF3AD;" points="111.304,417.948 256,417.948 256,367.861 89.043,378.991 "/>
            <path style="fill:#FFFFFF;" d="M222.609,301.078H122.435c-36.824,0-66.783-29.959-66.783-66.783s29.959-66.783,66.783-66.783
	h100.174v22.261H122.435c-24.549,0-44.522,19.972-44.522,44.522s19.972,44.522,44.522,44.522h100.174V301.078z"/>
            <path style="fill:#FFF3AD;" d="M400.696,111.861H256l-33.391,267.13l122.435-22.261
	C345.043,266.768,400.696,201.824,400.696,111.861z"/>
            <path style="fill:#FFFFFF;" d="M111.304,111.861H256v267.13l-89.043-22.261C166.957,266.768,111.304,201.824,111.304,111.861z"/>
            <polygon style="fill:#FFD23E;" points="456.348,356.73 456.348,378.991 256,378.991 245.009,367.861 256,356.73 "/>
            <rect x="55.652" y="356.73" style="fill:#FFE376;" width="200.348" height="22.261"/>
            <path style="fill:#692811;" d="M200.904,111.861l176.295,22.261c-3.539,32.145-14.158,61.696-25.277,92.65
	c-12.099,33.67-24.543,68.307-28.127,107.698H256L200.904,111.861z"/>
            <path style="fill:#813115;" d="M256,111.861V334.47h-67.795c-3.584-39.391-16.028-74.029-28.127-107.698
	c-11.119-30.954-21.738-60.505-25.277-92.65L256,111.861z"/>
            <polygon style="fill:#B78456;" points="377.199,111.861 377.199,134.122 256,134.122 233.739,89.6 "/>
            <g>
	<polygon style="fill:#C9A06C;" points="134.801,111.861 256,89.6 256,134.122 134.801,134.122 	"/>
              <path style="fill:#C9A06C;" d="M377.199,111.861H256L233.739,89.6L256,67.339h76.678
		C357.165,67.339,377.199,87.374,377.199,111.861z"/>
</g>
            <path style="fill:#DBBC82;" d="M256,67.339v44.522H134.801c0-24.487,20.035-44.522,44.522-44.522H256z"/>
</svg>
            <div class=" text-orange-900" >
                <h2 class="text-xl font-bold uppercase">Vue Coffee</h2>
                <p class="text-orange-900">Кофе и Коктейли</p>
            </div>
        </div>

        <ul class="bg-orange-100 flex items-center gap-10   cursor-pointer mr-16">
          <li  class=" text-orange-900 flex items-center pl-16  gap-4 ">
            <svg width="35px" height="35px"  viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M17.79 10.47V17.79C17.79 20.12 15.9 22 13.58 22H6.21C3.89 22 2 20.11 2 17.79V10.47C2 8.14001 3.89 6.26001 6.21 6.26001H13.58C15.9 6.26001 17.79 8.15001 17.79 10.47Z" stroke="#292D32" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M5.5 4V2.25" stroke="#292D32" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M9.5 4V2.25" stroke="#292D32" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M13.5 4V2.25" stroke="#292D32" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M22 13.16C22 15.48 20.11 17.37 17.79 17.37V8.94995C20.11 8.94995 22 10.83 22 13.16Z" stroke="#292D32" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M2 12H17.51" stroke="#292D32" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
            Главная
          </li>

            <li @click="() => emit('openDrawer')"  class="flex items-center text-orange-900  gap-2">
              <svg width="40px" height="40px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M3.5 4.5H5.05848C5.7542 4.5 6.10206 4.5 6.36395 4.68876C6.62584 4.87752 6.73584 5.20753 6.95585 5.86754L7.5 7.5" stroke="#222222" stroke-linecap="round"/>
                <path d="M17.5 17.5H8.05091C7.90471 17.5 7.83162 17.5 7.77616 17.4938C7.18857 17.428 6.78605 16.8695 6.90945 16.2913C6.92109 16.2367 6.94421 16.1674 6.99044 16.0287V16.0287C7.04177 15.8747 7.06743 15.7977 7.09579 15.7298C7.38607 15.0342 8.04277 14.5608 8.79448 14.5054C8.8679 14.5 8.94906 14.5 9.11137 14.5H14.5" stroke="#222222" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M14.1787 14.5H11.1376C9.85836 14.5 9.21875 14.5 8.71781 14.1697C8.21687 13.8394 7.96492 13.2515 7.461 12.0757L7.29218 11.6818C6.48269 9.79294 6.07794 8.84853 6.52255 8.17426C6.96715 7.5 7.99464 7.5 10.0496 7.5H15.3305C17.6295 7.5 18.779 7.5 19.2126 8.24711C19.6462 8.99422 19.0758 9.99229 17.9352 11.9884L17.6517 12.4846C17.0897 13.4679 16.8088 13.9596 16.3432 14.2298C15.8776 14.5 15.3113 14.5 14.1787 14.5Z" stroke="#222222" stroke-linecap="round"/>
                <circle cx="17" cy="20" r="1" fill="#222222"/>
                <circle cx="9" cy="20" r="1" fill="#222222"/>
              </svg>
              Корзина
            </li>
            <li class="flex items-center gap-4 text-orange-900     ">
              <svg width="30px" height="30px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9 12C9 12.5523 8.55228 13 8 13C7.44772 13 7 12.5523 7 12C7 11.4477 7.44772 11 8 11C8.55228 11 9 11.4477 9 12Z" fill="#1C274C"/>
                <path d="M13 12C13 12.5523 12.5523 13 12 13C11.4477 13 11 12.5523 11 12C11 11.4477 11.4477 11 12 11C12.5523 11 13 11.4477 13 12Z" fill="#1C274C"/>
                <path d="M17 12C17 12.5523 16.5523 13 16 13C15.4477 13 15 12.5523 15 12C15 11.4477 15.4477 11 16 11C16.5523 11 17 11.4477 17 12Z" fill="#1C274C"/>
                <path d="M22 12C22 16.714 22 19.0711 20.5355 20.5355C19.0711 22 16.714 22 12 22C7.28595 22 4.92893 22 3.46447 20.5355C2 19.0711 2 16.714 2 12C2 7.28595 2 4.92893 3.46447 3.46447C4.92893 2 7.28595 2 12 2C16.714 2 19.0711 2 20.5355 3.46447C21.5093 4.43821 21.8356 5.80655 21.9449 8" stroke="#1C274C" stroke-width="1.5" stroke-linecap="round"/>
              </svg>
              Меню
            </li>

        </ul>
    </header>
</template>

<script setup>
const emit = defineEmits(['openDrawer'])

</script>

<style scoped>

</style>