import { defineStore } from "pinia";

export const usePortfolioStore = defineStore("portfolio", {
  state: () => ({
    watchlist: [],
  }),
  actions: {
    addStock(stock) {
      if (!this.watchlist.find((s) => s.symbol === stock.symbol)) {
        this.watchlist.push(stock);
      }
    },
    removeStock(symbol) {
      this.watchlist = this.watchlist.filter((s) => s.symbol !== symbol);
    },
  },
});
