<template>
    <div>
      <h2>Lista de Pedidos</h2>
      <ul>
        <li v-for="order in orders" :key="order.id">
          {{ order.customerName }} - Status: {{ order.status }}
          <button @click="showDetails(order)">Ver Detalhes</button>
        </li>
      </ul>
      <order-details v-if="selectedOrder" :order="selectedOrder" />
    </div>
  </template>
  
  <script>
  import { ref } from 'vue'; // Importe a função ref
  import { useOrdersStore } from '../store/orders';
  import OrderDetails from './OrderDetails.vue';
  
  export default {
    components: {
      OrderDetails
    },
    setup() {
      const ordersStore = useOrdersStore();
      const selectedOrder = ref(null);
  
      const showDetails = (order) => {
        selectedOrder.value = order;
      };
  
      return {
        orders: ordersStore.orders,
        selectedOrder,
        showDetails
      };
    }
  };
  </script>
  