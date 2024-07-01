<template>

  <div>
  <form @submit.prevent="register">

    <div class="">
    <input class="mt-10 pl-5 pr-5 p-2 rounded-2xl w-80  " type="text" v-model="username" placeholder="Введите свое имя" required>
    </div>


      <button class="ml-40  mt-3" type="submit"></button>

  </form>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      username: '',
    };
  },
  methods: {
    async register() {
      try {
        const response = await axios.post('https://8a5d97df2ab05859.mokky.dev/orders', {
          username: this.username,
        });

        console.log(response.data);
      } catch (error) {
        console.error('Registration error:', error);

      }
    }
  }
};
</script>