<template>
  <form @submit.prevent="login">
    <input type="email" v-model="email" placeholder="Email" required>
    <input type="password" v-model="password" placeholder="Password" required>
    <button type="submit">Login</button>
  </form>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      email: '',
      password: ''
    };
  },
  methods: {
    async login() {
      try {
        const response = await axios.post('https://8a5d97df2ab05859.mokky.dev/auth', {
          email: this.email,
          password: this.password
        });

        console.log(response.data);
      } catch (error) {
        console.error('Login error:', error);

      }
    }
  }
};
</script>