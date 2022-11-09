<template>
  <v-footer
    color="grey darken-4"
    padless
    dark
    class="py-6 px-2 text-body-1 mt-8"
  >
    <v-container fluid>
      <v-row justify="center">
        <v-col cols="6" md="4">
          <div class="text-h6 font-weight-black mb-3">Sobre Nuestro Equipo</div>
          <p class="mx-4">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Distinctio
            itaque iusto quasi soluta dolore corrupti facere.Distinctio itaque
            iusto quasi soluta dolore corrupti facere.
          </p>
        </v-col>

        <v-col cols="6" md="4">
          <div class="text-h6 font-weight-black mb-3">
            Información de Contacto
          </div>
          <div class="text-left ml-10">
            <p>Dirección: Lorem ipsum dolor sit amet.</p>
            <p>Teléfono: +53 34127011</p>
            <p>Correo: truevision@gmail.com</p>
          </div>
        </v-col>

        <v-col cols="6" md="4">
          <div class="text-h6 font-weight-black mb-3">Enlaces Importantes</div>
          <ul class="text-left ml-2">
            <li
              v-for="(link, index) in links"
              :key="`footer-main-links-${index}`"
            >
              <v-btn color="white" text class="text-body-1 mb-1">{{
                link.title
              }}</v-btn>
            </li>
          </ul>
        </v-col>
      </v-row>
      <v-divider inset class="my-5" />
    </v-container>
    <v-row align="center" class="footer-bootom">
      <v-col cols="6" md="8">
        <div>
          Copyright 2022 Todos los derechos reservados | Esta web fue hecha con
          <v-icon color="red">mdi-heart</v-icon> por FMFC
        </div>
      </v-col>
      <v-col cols="6" md="4">
        <v-btn
          v-for="(link, index) in socialLinks"
          :to="link.to"
          :key="`footer-main-social-links-${index}`"
          color="white"
          fab
          depressed
          small
          class="mx-2"
        >
          <v-icon color="black">mdi-{{ link.icon }}</v-icon>
        </v-btn>
      </v-col>
    </v-row>
  </v-footer>
</template>

<script>
export default {
  name: "MainFooter",
  data: () => ({
    icons: ["mdi-facebook", "mdi-twitter", "mdi-linkedin", "mdi-instagram"],
    links: [
      {
        title: "Universidad Central 'Martha Abreu de Las Villas'",
        to: "",
      },
      {
        title: "Dirección de Infomatización",
        to: "",
      },
      {
        title: "Facultades",
        to: "",
      },
    ],
    socialLinks: [
      {
        icon: "facebook",
        to: "facebook.com",
      },
      {
        icon: "twitter",
        to: "twitter.com",
      },
      {
        icon: "linkedin",
        to: "linkedin.com",
      },
      {
        icon: "whatsapp",
        to: "dribbble.com",
      },
    ],
  }),
};
</script>