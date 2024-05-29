<script setup>
import { inject } from 'vue'
import CardItem from '@/components/CardItem.vue'
// import Card from '@/components/Card.vue'

const {card, removeFromCard} = inject('card')
</script>





  <template>
    <CardItem v-for="item in card"  v-bind:key="item.id"
              :Title="item.Title"
              :imageUrl="item.imageUrl"
              :Price="item.Price"
              @on-click-remove="()=> removeFromCard(item)"
    />

  </template>