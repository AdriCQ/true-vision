<template>
  <v-form v-model="valid" lazy-validation>
    <v-row>
      <v-col cols="12" sm="6" md="4">
        <!-- Carnet ID -->
        <v-text-field
          v-model="ci"
          :counter="11"
          :rules="ciRules"
          @keydown="checkKeyDownDigit()"
          label="Carnet de Identidad"
          dense
          required
          outlined
        />
      </v-col>

      <v-col cols="12" sm="6" md="4">
        <!-- First Name -->
        <v-text-field
          v-model="firstName"
          :rules="firstNameRules"
          label="Nombre"
          dense
          required
          outlined
        />
      </v-col>

      <v-col cols="12" sm="6" md="4">
        <!-- Last Name -->
        <v-text-field
          v-model="lastName"
          :rules="lastNameRules"
          label="Apellidos"
          dense
          required
          outlined
        />
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12">
        <!-- Address -->
        <v-text-field
          v-model="address"
          :rules="addressRules"
          label="Calles, Ciudad, País"
          dense
          required
          outlined
        />
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12" sm="6" md="4">
        <!-- Birthday -->
        <v-menu
          v-model="menuBirthdayState"
          :close-on-content-click="false"
          offset-y
        >
          <template v-slot:activator="{ on, attrs }">
            <v-text-field
              v-model="computedDateFormatted"
              label="Fecha de nacimiento"
              hint="MM/DD/YYYY"
              persistent-hint
              dense
              readonly
              required
              outlined
              v-bind="attrs"
              v-on="on"
            />
          </template>
          <v-date-picker
            v-model="date"
            color="primary lighten-2"
            no-title
            required
            @input="menuBirthdayState = false"
          />
        </v-menu>
      </v-col>
      <v-col cols="12" sm="6" md="4">
        <!-- Gender -->
        <v-select
          v-model="gender"
          :rules="genderRules"
          :items="genders"
          :menu-props="{ offsetY: true }"
          label="Sexo"
          dense
          outlined
          required
        />
      </v-col>
    </v-row>
    <v-row align="center">
      <!-- Rol -->
      <v-card-subtitle class="text-subtitle-1 text-left py-1"
        >Rol del Usuario:</v-card-subtitle
      >
      <v-col cols="12" sm="6" md="4">
        <v-row justify="center">
          <v-radio-group v-model="rol" row>
            <v-radio label="Especialista" value="E" />
            <v-radio label="Paciente" value="P" />
          </v-radio-group>
        </v-row>
      </v-col>
    </v-row>
  </v-form>
</template>

<script>
export default {
  name: "RegisterDataForm",
  data: () => ({
    // Form data
    ci: "",
    firstName: "",
    lastName: "",
    address: "",
    date: new Date(Date.now() - new Date().getTimezoneOffset() * 60000)
      .toISOString()
      .substr(0, 10),
    gender: "",
    genders: ["Femenino", "Masculino"],
    rol: "P",
    menuBirthdayState: false,
    valid: false,

    // Form rules
    ciRules: [
      (v) => !!v || "Campo requerido",
      (v) => (v && v.length <= 11) || "Debe tener 11 dígitos",
    ],
    firstNameRules: [(v) => !!v || "Campo requerido"],
    lastNameRules: [(v) => !!v || "Campo requerido"],
    streetsRules: [(v) => !!v || "Campo requerido"],
    cityRules: [(v) => !!v || "Campo requerido"],
    countryRules: [(v) => !!v || "Campo requerido"],
    genderRules: [(v) => !!v || "Campo requerido"],
  }),

  computed: {
    computedDateFormatted() {
      return this.formatDate(this.date);
    },
  },

  methods: {
    /**
     * Check Key Down Digit
     */
    checkKeyDownDigit(event) {
      const key = event.key;
      if (!(key === "Backspace" || key === "Delete" || /[0-9\s]/.test(key))) {
        this.ignoredValue = key ? key : "";
        event.preventDefault();
      }
    },

    /**
     *
     */
    close_signin_page() {
      console.log("CLose SignIn Page");
    },

    /**
     *
     */
    formatDate(date) {
      if (!date) return null;
      const [year, month, day] = date.split("-");
      return `${month}/${day}/${year}`;
    },
  },
};
</script>

<style lang="scss" scoped>
</style>