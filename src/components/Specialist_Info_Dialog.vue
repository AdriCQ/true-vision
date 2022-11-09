<template>
  <v-dialog v-model="dialog2" persistent transition="dialog-bottom-transition">
    <v-overlay class="overlay">
      <v-container
        class="
          pa-4
          text-center text-no-wrap
          rounded-tr-xl
          signin_form_container
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
              <v-col xs12 md6>
                <v-text-field
                  v-model="specialty"
                  :rules="specialtyRules"
                  label="Especialidad"
                  required
                  outlined
                />
              </v-col>
              <v-col xs12 md6>
                <v-text-field
                  v-model="occupation"
                  :rules="occupationRules"
                  label="Ocupación"
                  required
                  outlined
                />
              </v-col>
            </v-row>

            <v-row wrap>
              <v-col xs12 md6>
                <v-menu
                  v-model="menu1"
                  :close-on-content-click="false"
                  transition="scale-transition"
                  offset-y
                  max-width="290px"
                  min-width="auto"
                >
                  <template v-slot:activator="{ on, attrs }">
                    <v-text-field
                      v-model="computedDateFormatted1"
                      label="Fecha de graduación"
                      hint="MM/YYYY"
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
                    v-model="date1"
                    no-title
                    type="month"
                    @input="menu1 = false"
                  ></v-date-picker>
                </v-menu>
              </v-col>
              <v-col xs12 md6>
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
                      v-model="computedDateFormatted2"
                      label="Fecha de inicio en el centro"
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
                    v-model="date2"
                    no-title
                    @input="menu2 = false"
                  ></v-date-picker>
                </v-menu>
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
                        class="pa-6 mr-3 purple rounded-xl all_btn"
                        submit
                        :elevation="hover ? 24 : 6"
                        @click="open_dialog1"
                      >
                        Atrás
                      </v-btn>
                    </template>
                  </v-hover>
                  <v-hover>
                    <template v-slot:default="{ hover }">
                      <v-btn
                        :disabled="!valid"
                        class="pa-6 purple rounded-xl all_btn"
                        submit
                        :elevation="hover ? 24 : 6"
                        @click="open_dialog3"
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
  name: "Specialist_Info_Dialog",
  data: function () {
    return {
      dialog2: false,
      valid: true,

      specialty: "",
      occupation: "",

      date1: new Date(Date.now() - new Date().getTimezoneOffset() * 60000)
        .toISOString()
        .substr(0, 7),
      menu1: false,

      date2: new Date(Date.now() - new Date().getTimezoneOffset() * 60000)
        .toISOString()
        .substr(0, 10),
      menu2: false,

      show1: false,
      error: "",
      alert: false,

      specialtyRules: [(v) => !!v || "Campo requerido requerido"],
      occupationRules: [(v) => !!v || "Campo requerido requerido"],
      birthdayRules: [(v) => !!v || "Campo requerido requerido"],
    };
  },

  computed: {
    computedDateFormatted1() {
      return this.formatDate1(this.date1);
    },
    computedDateFormatted2() {
      return this.formatDate2(this.date2);
    },
  },

  methods: {
    formatDate1(date) {
      if (!date) return null;
      const [year, month] = date.split("-");
      return `${month}/${year}`;
    },

    formatDate2(date) {
      if (!date) return null;
      const [year, month, day] = date.split("-");
      return `${day}/${month}/${year}`;
    },

    open_dialog1() {
      this.dialog2 = false;
      this.$root.$emit("opendialog1", true);
    },

    open_dialog3() {
      this.dialog2 = false;
      this.$root.$emit("opendialog3", true);
    },
  },

  created() {
    let me = this;
    this.$root.$on("opendialog2", (data) => {
      me.dialog2 = data;
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

.signin_form_container {
  background-color: rgba(0, 0, 0, 0.3);
  border-style: solid;
  border-color: rgb(183, 177, 177);
}

.signin_textfield_container {
  height: 300px !important;
}

.all_btn {
  color: white;
  font-size: 20px;
  font-weight: bold;
  margin-right: 10px;
}
</style>
