// src/store/orders.js
import { defineStore } from 'pinia';
import axios from 'axios';

export const useOrdersStore = defineStore('orders', {
  state: () => ({
    orders: JSON.parse(localStorage.getItem('orders')) || []
  }),
actions: {
    async fetchOrders() {
      try {
        const response = await axios.get('http://localhost:3000/orders');
        this.orders = response.data;
  
        // Armazenar no Local Storage
        localStorage.setItem('orders', JSON.stringify(this.orders));
      } catch (error) {
        console.error('Error fetching orders:', error);
      }
    }
  }
  
});
