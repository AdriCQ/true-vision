<template>
  <div id="home-view">
    <!-- Header Section -->
    <v-container fluid class="header">
      <div class="overlay">
        <h1 class="subtitle text-uppercase">
          Tecnología para la detección de emociones
        </h1>
        <h1 class="main_title text-uppercase">True Vision</h1>
      </div>

      <div class="shape">
        <svg viewBox="0 0 1500 200">
          <path
            d="m 0,240 h 1500.4828 v -71.92164 c 0,0 -286.2763,-81.79324 -743.19024,-81.79324 C 300.37862,86.28512 0,168.07836 0,168.07836 Z"
          />
        </svg>
      </div>
    </v-container>
    <!-- / Header Section -->

    <!-- Service Section -->
    <section id="service" class="section pt-0">
      <v-container fluid>
        <h6 class="section-title text-center">Nuestros Servicios</h6>
        <h6 class="section-subtitle text-center mb-5 pb-3">
          Tecnologías y tratamientos disponibles.
        </h6>
        <br />
        <v-container fill-width fluid>
          <v-row justify="center">
            <v-col
              cols="6"
              md="4"
              v-for="(service, index) in services"
              :key="`home-view-service-card-${index}`"
            >
              <ServiceCard v-bind="service" />
            </v-col>
          </v-row>
        </v-container>
      </v-container>
    </section>
    <!-- / Service Section -->

    <!-- About Section -->
    <section id="about" class="section grey lighten-3">
      <v-container fluid>
        <v-row align="center" class="mx-6">
          <v-col cols="12" md="6">
            <h6 class="section-title mb-0">Sobre el Centro</h6>
            <h6 class="section-subtitle mb-4">
              Centro de Ayuda Psicológica para el Control de Emociones
            </h6>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Voluptate molestiae temporibus et tenetur unde quasi, cum nemo
              quo, molestias architecto alias voluptatibus corrupti corporis
              earum. Necessitatibus maxime modi ipsam, quod!
            </p>
            <v-img
              src="/images/about1.jpg"
              class="shadow-sm mx-auto"
              max-width="400"
            />
          </v-col>

          <v-col cols="12" md="6">
            <v-row>
              <v-col cols="6">
                <v-img
                  src="/images/about2.jpg"
                  max-width="450"
                  class="shadow-sm"
                />
              </v-col>
              <v-col cols="6">
                <v-img
                  src="/images/about3.jpg"
                  max-width="450"
                  class="shadow-sm"
                />
              </v-col>
              <v-col cols="12" mt="4">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo
                  iusto quidem laborum atque, sapiente ipsa excepturi fuga cum
                  sed in assumenda eos quasi harum culpa laboriosam nulla,
                  incidunt quae. Voluptatum.
                </p>
                <p>
                  <b
                    >Aliquid fuga sunt velit, temporibus molestias ab. Ipsa
                    nesciunt totam, aliquid dignissimos.</b
                  ><br />
                </p>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Nesciunt ut a dolorem, consectetur, eos suscipit consequatur
                  magnam est dolore obcaecati adipisci expedita, vero, iste
                  ducimus qui numquam animi facilis officia?
                </p>
              </v-col>
            </v-row>
          </v-col>
        </v-row>
      </v-container>
    </section>
    <!-- / About Section -->

    <!-- Contact Section -->
    <section id="contact" class="section">
      <v-container fluid>
        <h6 class="section-title text-center mb-10">Contáctanos</h6>

        <v-row align="center" justify="center" no-gutters>
          <v-col cols="4" md="6">
            <v-img
              src="/images/contact.png"
              max-width="350"
              class="mx-auto"
              style="transform: rotate(-30deg)"
            />
          </v-col>
          <v-col cols="8" md="6">
            <v-card max-width="500" elevation="10" class="rounded-lg px-2 py-4">
              <div class="text-h5 font-weight-medium text-center pa-2">
                Contacta a profesionales
              </div>
              <v-card-text>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Eveniet nostrum architecto quas soluta cum explicabo! Quod,
                laudantium blanditiis.
              </v-card-text>

              <v-card-text>
                <!-- Form -->
                <v-form @submit.prevent="submit">
                  <v-container fluid>
                    <v-row justify="center">
                      <v-col cols="12">
                        <v-text-field
                          v-model="form.name"
                          label="Nombre"
                          color="grey darken-3"
                          hide-details="auto"
                          outlined
                          dense
                          required
                        />
                      </v-col>
                      <v-col cols="12">
                        <v-text-field
                          v-model="form.email"
                          label="Correo"
                          color="grey darken-3"
                          hide-details="auto"
                          outlined
                          dense
                          required
                        />
                      </v-col>

                      <v-col cols="12">
                        <v-textarea
                          v-model="form.message"
                          label="Mensaje"
                          color="grey darken-3"
                          hide-details="auto"
                          auto-grow
                          dense
                          outlined
                          required
                        />
                      </v-col>
                    </v-row>
                    <v-row>
                      <v-col cols="12">
                        <v-btn
                          type="submit"
                          color="primary"
                          dark
                          class="mx-2 font-weight-bold text-body-1"
                        >
                          Enviar
                        </v-btn>
                      </v-col>
                    </v-row>
                  </v-container>
                </v-form>
                <!-- / Form -->
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </section>
    <!-- / Contact Section -->
  </div>
</template>

<script>
/**
 * TODO: Use intersection Observer API for changes active tab in AppBar, use Vuex for common data sharing
 * TODO: Validate form and sending a email
 */
import ServiceCard from "/src/components/ServiceCard.vue";

export default {
  name: "HomeView",
  components: {
    ServiceCard,
  },
  data: () => ({
    show: false,
    form: {
      name: "",
      email: "",
      message: "",
    },
    services: [
      {
        imageName: "card1.jpg",
        imageAlt: "card1.jpg alt",
        title: "Emociones en el rostro",
        ratingValue: 4.5,
        ratingCount: 100,
        overview:
          " Small plates, salads & sandwiches - an intimate setting with 12 indoor seats plus patio seating.",
        descriptionTitle: "Origin",
        description:
          "late 16th century (as a noun denoting a place where alms were distributed): from medieval Latin eleemosynarius, from late Latin eleemosyna ‘alms’, from Greek eleēmosunē ‘compassion’",
      },
      {
        imageName: "card2.png",
        imageAlt: "card2.png alt",
        title: "Detección de emociones en la voz",
        ratingValue: 4.0,
        ratingCount: 82,
        overview:
          " Small plates, salads & sandwiches - an intimate setting with 12 indoor seats plus patio seating.",
        descriptionTitle: "Origin",
        description:
          "late 16th century (as a noun denoting a place where alms were distributed): from medieval Latin eleemosynarius, from late Latin eleemosyna ‘alms’, from Greek eleēmosunē ‘compassion’",
      },
      {
        imageName: "card3.png",
        imageAlt: "card3.png alt",
        title: "Consultas y consejería",
        ratingValue: 4.8,
        ratingCount: 12,
        overview:
          " Small plates, salads & sandwiches - an intimate setting with 12 indoor seats plus patio seating.",
        descriptionTitle: "Origin",
        description:
          "late 16th century (as a noun denoting a place where alms were distributed): from medieval Latin eleemosynarius, from late Latin eleemosyna ‘alms’, from Greek eleēmosunē ‘compassion’",
      },
    ],
  }),
  methods: {
    submit: () => {
      console.log("Submit form");
    },
  },
};
</script>

<style src="../assets/css/home_page.css" scoped>
</style>