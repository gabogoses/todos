<template>
  <v-toolbar dark color="indigo">
    <v-toolbar-title>My Todo</v-toolbar-title>
    <v-spacer></v-spacer>
    <v-toolbar-items class="hidden-sm-and">
      <v-btn flat exact to="/" nuxt>Home</v-btn>
      <v-btn flat to="/active" nuxt>Active</v-btn>
      <v-btn flat to="/completed" nuxt>Completed</v-btn>
    </v-toolbar-items>
  </v-toolbar>
</template>
