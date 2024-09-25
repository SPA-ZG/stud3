<script setup>
import { useCart } from '/src/store/cart.js';
import { useAuthStore } from '/src/store/auth.js';

const store = useAuthStore();
const cart = useCart();
</script>

<template>
  <nav class="py-2 fixed-top">
    <div class="container d-flex flex-wrap">
      <ul class="nav me-auto">
        <li class="nav-item"><router-link to="/home" class="nav-link px-2 active" aria-current="page">Home</router-link></li>
      </ul>

      <div class="d-block text-decoration-none" style="color: white; font-size: 15; margin-top: 4px">{{ store.username }}</div>

      <div class="shopping-cart" style="margin-left: 10px;">
        <router-link to="/cart/" class="d-block text-decoration-none" id="dropdownUser2" aria-expanded="false" style="margin-top: 4px; color: white;">
          Cart
          <span class="badge bg-primary rounded-pill">{{ count }}</span>
        </router-link>
      </div>
    </div>
  </nav>
</template>

<style scoped>
  .wrapper .fixed-top {
    position: sticky;
    z-index: 2100;
  }

  .wrapper nav {
    background-color: rgba(0, 0, 0, .8);
  }

  .wrapper nav a {
    color: #FFFFFF;
    font-weight: 500;
  }

  nav .dropdown-menu a {
    color: #222;
  }

  nav .dropdown-menu a:hover {
    color: #AFAEAE;
  }

  nav .bg-primary {
    --bs-primary-rgb: 255, 190, 231;
    --bs-bg-opacity: .9;
    color: #000000;
  }
</style>

<script>
import { mapState } from 'pinia';

export default {
  data() {
    return {};
  },

  computed: {
    ...mapState(useCart, {
      count: 'count'
    })
  },

  methods: {}
};
</script>
