<template>
  <v-main>
    <div class="pa-5 auth-layout">
      <v-container class="py-10 px-5">
        <v-overlay color="black" opacity="0.7" :dark="false" absolute>
          <router-view />
        </v-overlay>
      </v-container>
    </div>
  </v-main>
</template>

<script>
export default {
  name: "AuthLayout",
};
</script>
<style lang="scss" scoped>
.auth-layout {
  background: url("/public/images/header3.png") no-repeat center center fixed;
  background-size: cover;
  height: 100%;
  width: 100%;
}
</style>