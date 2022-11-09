<template>
  <v-dialog v-model="dialog1" persistent>
    <v-overlay class="overlay">
      <v-container
        class="
          pa-4
          text-center text-no-wrap
          rounded-tr-xl
          signin_form_container_1
          justify-center
          align-center
        "
      >
        <v-row wrap>
          <v-col xs12 md12>
            <h1 class="font-weight-bold">TRUE VISION</h1>
            <h2 class="font-weight-bold">
              <v-icon class="white--text" size="30px">
                mdi-account-plus
              </v-icon>
              Crear Cuenta
            </h2>
          </v-col>
        </v-row>
        <br />
        <v-form ref="form" v-model="valid" lazy-validation>
          <v-container class="signin_textfield_container">
            <v-row wrap>
              <v-col xs12 md4>
                <v-text-field
                  v-model="id"
                  :counter="11"
                  :rules="idRules"
                  @keydown="checkKeyDownDigit($event)"
                  label="Carnet de Identidad"
                  required
                  outlined
                />
              </v-col>
              <v-col xs12 md4>
                <v-text-field
                  v-model="first_name"
                  :rules="first_nameRules"
                  label="Nombre"
                  required
                  outlined
                  class="white--text"
                />
              </v-col>

              <v-col xs12 md4>
                <v-text-field
                  v-model="last_name"
                  :rules="last_nameRules"
                  label="Apellidos"
                  required
                  outlined
                />
              </v-col>
            </v-row>
            <v-row wrap>
              <h6>Dirección</h6>
            </v-row>
            <v-row wrap>
              <v-col xs12 md4>
                <v-text-field
                  v-model="streets"
                  :rules="streetsRules"
                  label="Calles"
                  required
                  outlined
                />
              </v-col>
              <v-col xs12 md4>
                <v-text-field
                  v-model="city"
                  :rules="cityRules"
                  label="Ciudad"
                  required
                  outlined
                />
              </v-col>

              <v-col xs12 md4>
                <v-text-field
                  v-model="country"
                  :rules="countryRules"
                  label="País"
                  required
                  outlined
                />
              </v-col>
            </v-row>
            <v-row wrap>
              <v-col xs12 md4>
                <v-menu
                  v-model="menu2"
                  :rules="birthdayRules"
                  :close-on-content-click="false"
                  transition="scale-transition"
                  offset-y
                  max-width="290px"
                  min-width="auto"
                >
                  <template v-slot:activator="{ on, attrs }">
                    <v-text-field
                      v-model="computedDateFormatted"
                      label="Fecha de nacimiento"
                      hint="MM/DD/YYYY"
                      persistent-hint
                      prepend-icon="mdi-calendar"
                      readonly
                      required
                      outlined
                      v-bind="attrs"
                      v-on="on"
                    ></v-text-field>
                  </template>
                  <v-date-picker
                    v-model="date"
                    no-title
                    @input="menu2 = false"
                  ></v-date-picker>
                </v-menu>
              </v-col>
              <v-col xs12 md4>
                <v-select
                  v-model="sex"
                  :rules="sexRules"
                  :items="select_sex_items"
                  label="Sexo"
                  outlined
                  required
                ></v-select>
              </v-col>
            </v-row>
            <v-row wrap>
              <v-col xs12 md12>
                <v-row wrap justify="center">
                  <h6>Rol</h6>
                </v-row>
                <v-row wrap justify="center">
                  <v-radio-group v-model="rol_radios" row class="radio_group">
                    <v-radio label="Especialista" value="E"></v-radio>
                    <v-radio label="Paciente" value="P"></v-radio>
                  </v-radio-group>
                  <br />
                </v-row>
              </v-col>
            </v-row>
            <v-row wrap>
              <v-col xs12 md12> </v-col>
            </v-row>
            <v-row wrap>
              <v-col xs12 md12>
                <v-row wrap justify="end">
                <v-hover>
                    <template v-slot:default="{ hover }">
                      <v-btn
                        class="pa-6 mr-3 purple rounded-xl next_btn"
                        submit
                        :elevation="hover ? 24 : 6"
                        @click="close_signin_page"
                      >
                        Cancelar
                      </v-btn>
                    </template>
                  </v-hover>
                  <v-hover>
                    <template v-slot:default="{ hover }">
                      <v-btn
                        :disabled="!valid"
                        class="pa-6 purple rounded-xl next_btn"
                        submit
                        :elevation="hover ? 24 : 6"
                        @click="next_dialog"
                      >
                        Siguiente
                      </v-btn>
                    </template>
                  </v-hover>
                </v-row>
              </v-col>
            </v-row>
          </v-container>
        </v-form>
      </v-container>
    </v-overlay>
  </v-dialog>
</template>

<script>
export default {
  name: "Personal_Info_Dialog",

  data: function () {
    return {
      dialog1: true,

      valid: true,
      id: "",
      ignoredValue: "",
      first_name: "",
      last_name: "",
      streets: "",
      city: "",
      country: "",
      date: new Date(Date.now() - new Date().getTimezoneOffset() * 60000)
        .toISOString()
        .substr(0, 10),
      sex: "",
      select_sex_items: ["Femenino", "Masculino", "Otro"],
      rol_radios: "P",

      show1: false,
      error: "",
      alert: false,

      idRules: [
        (v) => !!v || "Campo requerido",
        (v) =>
          (v && v.length <= 11) ||
          "El carnet de identidad no puede tener más de 11 dígitos",
      ],

      first_nameRules: [(v) => !!v || "Campo requerido requerido"],
      last_nameRules: [(v) => !!v || "Campo requerido requerido"],
      streetsRules: [(v) => !!v || "Campo requerido requerido"],
      cityRules: [(v) => !!v || "Campo requerido requerido"],
      countryRules: [(v) => !!v || "Campo requerido requerido"],
      sexRules: [(v) => !!v || "Campo requerido requerido"],

      /*birthdayRules: [
      (v) =>
        (v <=  date) ||
        "La fecha de nacimiento no puede ser mayor que la fecha actual",],*/

      menu2: false,
    };
  },

  computed: {
    computedDateFormatted() {
      return this.formatDate(this.date);
    },
  },

  methods: {
    checkKeyDownDigit(event) {
      const key = event.key;
      if (!(key === "Backspace" || key === "Delete" || /[0-9\s]/.test(key))) {
        this.ignoredValue = key ? key : "";
        event.preventDefault();
      }
    },

    upload() {
      let uploadbtn = this.$refs.upload;
      uploadbtn.click();
    },

    formatDate(date) {
      if (!date) return null;
      const [year, month, day] = date.split("-");
      return `${month}/${day}/${year}`;
    },
    parseDate(date) {
      if (!date) return null;
      const [month, day, year] = date.split("/");
      return `${year}-${month.padStart(2, "0")}-${day.padStart(2, "0")}`;
    },

    next_dialog() {
      this.dialog1 = false;
      if (this.rol_radios === "E") {
        this.$root.$emit("opendialog2", true);
      } else {
        this.$root.$emit("opendialog3", true);
      }
    },

    close_signin_page (){
        this.$router.push({path: '/login'});
    },
  },

  created() {
    let me = this;
    this.$root.$on("opendialog1", (data) => {
      me.dialog1 = data;
    });
  },
};
</script>

<style scoped>
h1 {
  color: white;
  font-size: 40px;
  font-family: Georgia, "Times New Roman", Times, serif;
  text-align: center !important;
}

h2 {
  letter-spacing: 3px;
}

h3 {
  font-size: 18px;
  color: lightgrey;
}

h6 {
  font-size: 20px;
  color: lightgray;
}

.overlay {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.4);
  display: -webkit-box;
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -webkit-flex-direction: column;
  -ms-flex-direction: column;
  flex-direction: column;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
}

.signin_form_container_1 {
  background-color: rgba(0, 0, 0, 0.3);
  border-style: solid;
  border-color: rgb(183, 177, 177);
}

.signin_textfield_container {
  height: 550px !important;
}

#upload {
  height: 0;
  width: 0;
  visibility: hidden;
}

.next_btn {
  color: white;
  font-size: 20px;
  font-weight: bold;
  margin-right: 10px;
}


.radio_group::v-deep label {
  font-size: 25px;
}
</style>
