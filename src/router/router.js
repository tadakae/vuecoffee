import {createRouter, createWebHashHistory} from "vue-router";
import MainBox from '@/components/MainBox.vue'








 createRouter({
  history: createWebHashHistory(),
  routes: [
    {path: '/home', component: MainBox},

  ]
})