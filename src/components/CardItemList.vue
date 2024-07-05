<script setup>
import { inject } from 'vue'
import CardItem from '@/components/CardItem.vue'
// import Card from '@/components/Card.vue'



const {card, removeFromCard, removeFromCartOne, addToCard } = inject('card')


</script>





  <template>
    <div v-auto-animate >

    <CardItem v-for="item in card"  v-bind:key="item.id"
              :titlee="item.titlee"
              :imageUrl="item.imageUrl"
              :price="item.price"
              @on-click-remove="()=> removeFromCard(item)"
              @on-click-remove-one="()=> removeFromCartOne(item)"
              @on-click-add="()=> addToCard(item)"
    />
    </div>

  </template>

