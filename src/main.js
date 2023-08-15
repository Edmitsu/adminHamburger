import { createApp } from 'vue';
import App from './App.vue';
import { pinia } from './store';
import { useProductsStore } from './store/products'; // Importe a store de produtos

const app = createApp(App);

app.use(pinia);

const productsStore = useProductsStore(); // Inicialize a store de produtos
productsStore.fetchProducts(); // Busque os produtos

app.mount('#app');
