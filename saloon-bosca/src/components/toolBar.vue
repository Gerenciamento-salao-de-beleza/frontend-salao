<template>
  <div>
    <v-toolbar
      dark
      prominent
      class="my-5"
    >
      <v-app-bar-nav-icon></v-app-bar-nav-icon>

      <router-link to="/">
        <v-toolbar-title>Saloon Boscaa</v-toolbar-title>
      </router-link>

      <v-spacer></v-spacer>

      <router-link to="/scheduling">
        <v-btn>
          <v-icon class="mr-3">mdi-book-clock-outline</v-icon>Agenda
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
