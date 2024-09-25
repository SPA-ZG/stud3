<script setup>
import TopNavbar from '../../components/TopNavbar.vue';
import NewArrivals from '../../components/new-arrivals/NewArrivals.vue';
import Footer from '../../components/Footer.vue';
</script>

<template src="./home.html"></template>
<style scoped src="./home.css"></style>

<script>
export default {
  components: {
    TopNavbar,
    NewArrivals,
    Footer
  },

  data() {
    return {
    };
  }
};
</script>