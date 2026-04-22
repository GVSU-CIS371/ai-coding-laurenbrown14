<template>
  <div class="watchlist">
    <h1>My Watchlist</h1>
    <div v-if="store.watchlist.length === 0">
      <p>Your watchlist is empty. Go to search to add stocks!</p>
    </div>

    <div v-else class="grid">
      <div
        v-for="stock in store.watchlist"
        :key="stock.symbol"
        class="mini-card"
      >
        <h3>{{ stock.symbol }}</h3>
        <p>${{ stock.price }}</p>
        <button @click="store.removeStock(stock.symbol)">Remove</button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { usePortfolioStore } from "../stores/portfolio";
const store = usePortfolioStore();
</script>

<style scoped>
.grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  gap: 20px;
}
.mini-card {
  border: 1px solid #ccc;
  padding: 15px;
  border-radius: 8px;
  text-align: center;
}
</style>
