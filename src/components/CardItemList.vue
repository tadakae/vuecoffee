<script setup>
import { inject } from 'vue'
import CardItem from '@/components/CardItem.vue'
// import Card from '@/components/Card.vue'

const {card, removeFromCard} = inject('card')
</script>





  <template>
    <CardItem v-for="item in card"  v-bind:key="item.id"
              :titlee="item.titlee"
              :imageUrl="item.imageUrl"
              :price="item.price"
              @on-click-remove="()=> removeFromCard(item)"
    />

  </template>