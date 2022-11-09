<template>
  <div class="div_card">
    <v-card class="service-card" max-width="380px">
      <v-img :src="imageUrl" :alt="imageAlt" height="200px" />

      <v-card-title>
        {{ title }}
      </v-card-title>

      <v-card-text>
        <v-row align="center" class="mx-0">
          <v-rating
            :value="ratingValue"
            color="amber"
            dense
            half-increments
            readonly
            size="14"
          ></v-rating>

          <div class="grey--text ms-4">
            {{ ratingValue }} ({{ ratingCount }})
          </div>
        </v-row>

        <br />

        <div>
          {{ overview }}
        </div>
      </v-card-text>

      <v-card-actions>
        <v-btn color="secondary" text @click="reveal = true"> Leer Más </v-btn>
      </v-card-actions>

      <v-expand-transition>
        <v-card
          v-if="reveal"
          class="transition-fast-in-fast-out v-card--reveal"
          style="height: 100%"
        >
          <v-card-text class="pb-0">
            <p class="text-h4 text--primary">{{ descriptionTitle }}</p>
            <p>
              {{ description }}
            </p>
          </v-card-text>
          <v-card-actions class="pt-0">
            <v-btn color="secondary" text @click="reveal = false">
              Cerrar
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-expand-transition>
    </v-card>
  </div>
</template>

<script>
export default {
  name: "ServiceCard",
  props: {
    imageName: {
      type: String,
      required: true,
    },
    imageAlt: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    ratingValue: {
      type: Number,
      default: 0,
    },
    ratingCount: {
      type: Number,
      default: 0,
    },
    overview: {
      type: String,
      default: "",
    },
    descriptionTitle: {
      type: String,
      default: "",
    },
    description: {
      type: String,
      default: "",
    },
  },
  computed: {
    imageUrl: function () {
      return "/images/" + this.imageName;
    },
  },
  data: () => ({
    reveal: false,
  }),
};
</script>
<style scoped>
.v-card--reveal {
  bottom: 0;
  opacity: 1 !important;
  position: absolute;
  width: 100%;
}
</style>