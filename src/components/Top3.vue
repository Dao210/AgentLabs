<template>
  <div class="top3-container">
    <h2>Top 3 AI Products by Industry</h2>
    <div v-for="industry in industries" :key="industry.name" class="industry-section">
      <h3>{{ industry.name }}</h3>
      <ul>
        <li v-for="product in industry.products" :key="product.name">{{ product.name }}</li>
      </ul>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const industries = ref([
  {
    name: 'Healthcare',
    products: [
      { name: 'Product 1' },
      { name: 'Product 2' },
      { name: 'Product 3' },
    ],
  },
  {
    name: 'Finance',
    products: [
      { name: 'Product 1' },
      { name: 'Product 2' },
      { name: 'Product 3' },
    ],
  },
  // Add more industries as needed
]);
</script>

<style scoped>
.top3-container {
  padding: 20px;
  max-width: 800px;
  margin: 0 auto;
}

.industry-section {
  margin-bottom: 20px;
}

h2, h3 {
  color: #333;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  padding: 10px;
  background-color: #f9f9f9;
  margin-bottom: 5px;
  border-radius: 5px;
}
</style> 