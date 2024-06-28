<template>

  <div>
  <form @submit.prevent="register">

    <div class="">
    <input class="mt-64 p-2 ml-8 " type="text" v-model="username" placeholder="Username" required>
    <input class=" mt-3 p-2 ml-8 " type="email" v-model="email" placeholder="Email" required>
    <input class=" mt-3 p-2 ml-8 " type="password" v-model="password" placeholder="Password" required>
    </div>


      <button class="ml-40  mt-3" type="submit">Register</button>

  </form>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      username: '',
      email: '',
      password: ''
    };
  },
  methods: {
    async register() {
      try {
        const response = await axios.post('https://8a5d97df2ab05859.mokky.dev/register', {
          username: this.username,
          email: this.email,
          password: this.password
        });

        console.log(response.data);
      } catch (error) {
        console.error('Registration error:', error);

      }
    }
  }
};
</script>