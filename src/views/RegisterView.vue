 <template>
  <div id="register-view">
    <v-card class="mx-auto" :max-width="maxWidth">
      <v-container>
        <!-- Header -->
        <v-card-title class="text-h6 font-weight-medium justify-space-between">
          <span>{{ currentTitle }}</span>
        </v-card-title>

        <!-- Window Slider -->
        <v-window v-model="step">
          <v-window-item :value="1">
            <v-card-text>
              <RegisterDataForm />
            </v-card-text>
          </v-window-item>

          <v-window-item :value="2">
            <v-card-text>
              <CredencialsForm />
            </v-card-text>
          </v-window-item>
        </v-window>

        <v-divider />

        <!-- Actions -->
        <v-card-actions>
          <v-btn
            color="primary"
            v-if="step === 2"
            class="font-weight-bold text-body-1"
            @click="step--"
          >
            Atrás
          </v-btn>
          <v-spacer />
          <v-btn
            color="primary"
            v-if="step === 1"
            class="font-weight-bold text-body-1"
            @click="step++"
          >
            Siguiente
          </v-btn>
        </v-card-actions>
      </v-container>
    </v-card>
  </div>
</template>

<script>
import RegisterDataForm from "/src/components/forms/RegisterDataForm.vue";
import CredencialsForm from "/src/components/forms/CredencialsForm.vue";

export default {
  name: "RegisterView",
  components: {
    RegisterDataForm,
    CredencialsForm,
  },
  data: () => ({
    step: 1,
  }),
  computed: {
    currentTitle() {
      switch (this.step) {
        case 1:
          return "Datos Personales";
        case 2:
          return "Usuario y Contraseña";
        default:
          return "Default case";
      }
    },
    maxWidth() {
      return this.step == 1 ? 800 : 380;
    },
  },
};
</script>

<style lang="scss" scoped>
#register-view > .v-card {
  transition: all 0.5s;
}
</style>