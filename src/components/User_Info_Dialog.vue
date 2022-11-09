<template>
  <v-dialog v-model="dialog3" persistent transition="dialog-bottom-transition">
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
            <br />
            <v-avatar class="user_icon_avatar" size="130px">
              <v-icon class="white--text" size="100px"> mdi-account </v-icon>
            </v-avatar>
          </v-col>
        </v-row>
        <br />
        <v-form ref="form" v-model="valid" lazy-validation>
          <div v-if="error">
            <v-alert type="error" :value="alert">{{ error }}</v-alert>
          </div>
          <v-text-field
            v-model="username"
            :rules="usernameRules"
            label="Usuario"
            class="mt-4 ml-5 mr-5 inputs"
            required
            outlined
          ></v-text-field>

          <v-text-field
            v-model="password"
            :counter="20"
            :rules="passwordRules"
            label="Contraseña"
            class="mt-4 ml-5 mr-5 inputs"
            required
            outlined
            :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
            :type="show1 ? 'text' : 'password'"
            @click:append="show1 = !show1"
            @keydown.enter="submit"
          ></v-text-field>

          <v-text-field
            v-model="repeat_password"
            :counter="20"
            :rules="repeat_passwordRules"
            label="Confirmar Contraseña"
            class="mt-4 ml-5 mr-5 inputs"
            required
            outlined
            :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
            :type="show1 ? 'text' : 'password'"
            @click:append="show1 = !show1"
            @keydown.enter="submit"
          ></v-text-field>
          <br /><br />
          <v-row wrap>
            <v-col xs12 md12>
              <v-row wrap justify="end">
                <v-hover>
                  <template v-slot:default="{ hover }">
                    <v-btn
                      :disabled="!valid"
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
                      class="pa-6 mr-7 purple rounded-xl all_btn"
                      submit
                      :elevation="hover ? 24 : 6"
                      @click="crear_cuenta"
                    >
                      Crear
                    </v-btn>
                  </template>
                </v-hover>
              </v-row>
            </v-col>
          </v-row>
        </v-form>
      </v-container>
    </v-overlay>
  </v-dialog>
</template>

<script>
export default {
  name: "User_Info_Dialog",
  data: function () {
    return {
      dialog3: false,
      valid: true,
      password: "",
      repeat_password: "",
      show1: false,
      error: "",
      alert: false,
      passwordRules: [
        (v) => !!v || "Contraseña requerida",
        (v) =>
          (v && v.length <= 20) ||
          "La contraseña no debe tener más de 20 caracteres",
      ],
      repeat_passwordRules: [
        (v) => !!v || "Contraseña requerida",
        (v) =>
          (v && v.length <= 20) ||
          "La contraseña no debe tener más de 20 caracteres",
        (v) => v == this.password || "Ambas contraseñas deben ser iguales",
      ],
      username: "",
      usernameRules: [(v) => !!v || "Usuario requerido"],
      checkbox: false,
    };
  },

  methods: {
    open_dialog1() {
      this.dialog3 = false;
      this.$root.$emit("opendialog1", true);
    },

    crear_cuenta() {
      this.$router.push({ path: "/home" });
      /*this.$notify({
        title: "Cuenta creada con éxito",
        text: "Espere que su cuenta sea aprobada por la administración para empezar a usarla",
        type: "successs",
        duration: 10000,
        speed: 1000,
      });*/
    },
  },

  created() {
    let me = this;
    this.$root.$on("opendialog3", (data) => {
      me.dialog3 = data;
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
  height: 730px !important;
  width: 450px !important;
}

.user_icon_avatar {
  border-color: white;
  border-style: solid;
}

.all_btn {
  color: white;
  font-size: 20px;
  font-weight: bold;
  margin-right: 10px;
}
</style>
