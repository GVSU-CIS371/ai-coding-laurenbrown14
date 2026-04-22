<template>
  <v-app class="custom-app">
    <v-app-bar flat border color="white">
      <v-container class="d-flex align-center justify-center">
        <router-link to="/" class="nav-link">Search</router-link>
        <span class="divider">|</span>
        <router-link to="/watchlist" class="nav-link">Watchlist</router-link>
      </v-container>
    </v-app-bar>

    <v-main>
      <v-container>
        <router-view />
      </v-container>
    </v-main>
  </v-app>
</template>

<style>
.custom-app {
  font-family: Avenir, Helvetica, Arial, sans-serif !important;
  color: #2c3e50;
}
.nav-link {
  text-decoration: none;
  color: #2c3e50;
  padding: 0 15px;
  font-weight: 500;
}
.router-link-active {
  color: #42b983 !important; /* Green when active */
  font-weight: bold;
}
.divider {
  color: #ddd;
}
.v-main {
  text-align: center;
}
</style>
