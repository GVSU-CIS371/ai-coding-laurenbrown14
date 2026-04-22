# Project Development Note: StockTracker App

### 🤖 AI Tools Used

- **Gemini (Google):**

### 📈 Stock Data Service

- **Twelve Data API:**

### ✅ Working Features

- **Real-time Market Search:** Ability to fetch live stock data by ticker symbol using the Twelve Data endpoint.
- **Watchlist Management:** A centralized Pinia store allows users to add and remove stocks from their personal watchlist.
- **Dual-View Navigation:** A functional routing system using `createWebHashHistory` to toggle between the Search dashboard and the Watchlist.
- **Modern UI/UX:** A clean, responsive interface built with Vuetify components, customized with a specific "Avenir" typography and centered layout.

### 🚧 Incomplete Features / Future Roadmap

- **Data Persistence:** Currently, the watchlist is stored in memory. Future versions will implement a Firebase backend.
- **Form Validation:** Improved error handling for invalid ticker symbols or empty search inputs.

### ⚠️ Limitations & Encountered Issues

- **API Rate Limits:** The Twelve Data free tier is restricted to **8 requests per minute**.
- **Environment Configuration:** The app is configured with **Hash Routing** (`/#/`).
- **Styling Conflicts:** Balancing Vuetify's Material Design defaults with custom CSS resets required specialized styling overrides in the root `App.vue`.
