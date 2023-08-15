<template>
    <div class="order-details">
      <h2>Detalhes do Pedido</h2>
      <p><strong>ID do Pedido:</strong> {{ order.id }}</p>
      <p><strong>Cliente:</strong> {{ order.customerName }}</p>
      <p><strong>Status:</strong> {{ order.status }}</p>
      <p><strong>Data de Criação:</strong> {{ order.createdAt }}</p>
      <h3>Itens do Pedido:</h3>
      <ul class="items-list">
        <li v-for="item in order.items" :key="item.id" class="item">
          {{ item.name }} - Quantidade: {{ item.quantity }} - Subtotal: {{ formatCurrency(calculateSubtotal(item)) }}
        </li>
      </ul>
      <p><strong>Total do Pedido:</strong> {{ formatCurrency(calculateTotal(order)) }}</p>
    </div>
  </template>
  
  <script>
  import { useProductsStore } from '../store/products'; // Importe a store de produtos
  import { computed } from 'vue';
  
  export default {
    props: {
      order: Object
    },
    methods: {
      formatCurrency(value) {
        return value.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL', minimumFractionDigits: 2 });
      }
    },
    setup(props) {
      const productsStore = useProductsStore(); // Use a store de produtos
  
      const calculateSubtotal = (item) => {
        const product = productsStore.getProductByName(item.name);
  
        if (product) {
          return item.quantity * product.price;
        } else {
          console.error(`Product not found: ${item.name}`);
          return 0;
        }
      };
  
      const calculateTotal = (order) => {
        return order.items.reduce((total, item) => total + calculateSubtotal(item), 0);
      };
  
      return {
        calculateSubtotal,
        calculateTotal
      };
    }
  };
  </script>
  
  <style>
  .order-details {
    border: 1px solid #ccc;
    padding: 20px;
    margin: 20px;
    border-radius: 5px;
    background-color: #f9f9f9;
  }
  
  .items-list {
    list-style: none;
    padding: 0;
  }
  
  .item {
    margin-bottom: 10px;
  }
  </style>
  