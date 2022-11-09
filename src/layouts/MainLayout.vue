<template>
  <v-main>
    <MainAppBar app />
    <router-view />
    <MainFooter app />
  </v-main>
</template>

<script>
import MainAppBar from "/src/components/layout/MainAppBar.vue";
import MainFooter from "/src/components/layout/MainFooter.vue";

export default {
  name: "MainLayout",
  components: {
    MainAppBar,
    MainFooter,
  },
};
</script>