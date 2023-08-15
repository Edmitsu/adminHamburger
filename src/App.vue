<template>
  <div>
    <h1>Painel Administrativo</h1>
    <order-list></order-list>
  </div>
</template>

<script>
import { defineComponent } from 'vue';
import OrderList from './components/OrderList.vue';

export default defineComponent({
  components: {
    OrderList
  }
});
</script>

<style>
body {
  font-family: 'Montserrat', sans-serif;
}
</style>
