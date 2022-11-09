<template>
  <v-main>
    <AdminAppBar app />
    <router-view />
  </v-main>
</template>

<script>
import AdminAppBar from "/src/components/layout/AdminAppBar.vue";
export default {
  name: "AdminLayout",
  components: { AdminAppBar },
};
</script>