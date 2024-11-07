<template>
  <div>
    <v-toolbar dark prominent>
      <v-app-bar-nav-icon></v-app-bar-nav-icon>

      <router-link to="/">
        <v-toolbar-title>Saloon Boscaa</v-toolbar-title>
      </router-link>

      <v-spacer></v-spacer>

      <router-link to="employees">
        <v-btn>
          <v-icon class="mr-3">mdi-book-clock-outline</v-icon> Agendar horário
        </v-btn>
      </router-link>
    </v-toolbar>
  </div>
</template>

<style>
.v-toolbar {
  background: none !important;
}

a,
button {
  color: inherit !important;
  text-decoration: none;
}
</style>
