<template>
  <div class="home">
    <h1>Stock Search</h1>
    <div class="search-container">
      <input
        v-model="ticker"
        placeholder="Enter Ticker (e.g., AAPL)"
        @keyup.enter="fetchStock"
      />
      <button @click="fetchStock" :disabled="loading">Search</button>
    </div>

    <div v-if="stockData" class="stock-card">
      <h2>{{ ticker.toUpperCase() }}</h2>
      <p class="price">${{ stockData.price }}</p>
      <p :class="stockData.change >= 0 ? 'up' : 'down'">
        {{ stockData.change >= 0 ? "+" : "" }}{{ stockData.change }}%
      </p>
      <button @click="addToWatchlist">Add to Watchlist</button>
    </div>

    <p v-if="loading">Fetching data...</p>
    <p v-if="error" style="color: red">{{ error }}</p>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { usePortfolioStore } from "../stores/portfolio";

const ticker = ref("");
const stockData = ref(null);
const loading = ref(false);
const error = ref("");
const store = usePortfolioStore();

async function fetchStock() {
  if (!ticker.value) return;
  loading.value = true;
  error.value = "";

  try {
    const API_KEY = "e68e7763b4664936bcb90395c8944d64";
    const response = await fetch(
      `https://api.twelvedata.com/quote?symbol=${ticker.value}&apikey=${API_KEY}`,
    );
    const data = await response.json();

    if (data.status === "error") {
      error.value = "Stock not found.";
      stockData.value = null;
    } else {
      stockData.value = {
        symbol: ticker.value.toUpperCase(),
        price: parseFloat(data.close).toFixed(2),
        change: parseFloat(data.percent_change).toFixed(2),
      };
    }
  } catch (err) {
    error.value = "Connection error.";
  } finally {
    loading.value = false;
  }
}

function addToWatchlist() {
  store.addStock(stockData.value);
  alert("Added to Watchlist!");
}
</script>

<style scoped>
.stock-card {
  border: 2px solid #ddd;
  padding: 20px;
  border-radius: 10px;
  margin-top: 20px;
}
.price {
  font-size: 2.5rem;
  font-weight: bold;
  margin: 10px 0;
}
.up {
  color: green;
}
.down {
  color: red;
}
input {
  padding: 10px;
  border-radius: 5px;
  border: 1px solid #ccc;
}
button {
  padding: 10px 20px;
  margin-left: 10px;
  cursor: pointer;
}
</style>
