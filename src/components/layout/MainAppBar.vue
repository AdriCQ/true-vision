<template>
  <v-app-bar fixed elevate-on-scroll class="white">
    <v-toolbar-title class="ml-5 text-h6">
      <v-btn
        color="primary"
        class="font-weight-bold"
        :to="{ name: ROUTES.HOME }"
        text
      >
        <span class="text-uppercase"> True Vision</span>
      </v-btn>
    </v-toolbar-title>
    <v-spacer />

    <!-- Navigation tabs -->
    <v-tabs
      align-with-title
      v-model="tab"
      color="primary"
      style="width: auto"
      right
      optional
    >
      <v-tab
        v-for="(link, index) in navLinks"
        :key="`app-bar-main-navlink-${index}`"
        class="grey--text text--darken-4 text-body-1 font-weight-bold"
        :to="link.to"
      >
        {{ link.title }}
      </v-tab>
    </v-tabs>
    <!-- / Navigation tabs -->

    <v-btn
      class="mx-2 font-weight-bold text-body-1"
      color="primary"
      dark
      :to="{ name: ROUTES.LOGIN }"
    >
      <v-icon class="mr-2">mdi-login</v-icon> Acceder
    </v-btn>
  </v-app-bar>
</template>
 
 <script>
import { ROUTES } from "/src/router/names";
export default {
  name: "MainAppBar",
  data: () => ({
    tab: null,
    navLinks: [
      {
        title: "Servicios",
        to: "#service",
      },
      {
        title: "Información del Centro",
        to: "#about",
      },
      {
        title: "Contacto",
        to: "#contact",
      },
    ],
    options: {
      duration: 600,
    },
    ROUTES: ROUTES,
  }),
};
</script>