<template>
    <div id="login-view">
        <v-card max-width="430" elevation="10" class="rounded-lg px-2 py-4 mx-auto">
            <v-card-title class="text-h6 font-weight-medium">
                Inicia Sesión
            </v-card-title>

            <v-card-text>
                <v-form ref="form" v-model="valid" lazy-validation>
                    <v-text-field v-model="username" :rules="usernameRules" label="Usuario" required outlined />

                    <v-text-field v-model="password" :counter="20" :rules="passwordRules" label="Contraseña" required
                        outlined :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
                        :type="showPassword ? 'text' : 'password'" @click:append="showPassword = !showPassword"
                        @keydown.enter="submit" />

                    <v-btn color="primary" block submit dark class="mx-auto font-weight-bold text-body-1 mb-5"
                        @click="login">
                        Iniciar
                    </v-btn>

                    <div class="text-body-1">
                        ¿No tiene una cuenta en True Vision aún?
                    </div>
                    <v-btn color="primary" class="font-weight-bold text-body-1" text :to="{ name: ROUTES.REGISTER }">
                        Crear Cuenta
                    </v-btn>
                </v-form>
            </v-card-text>
        </v-card>
    </div>
</template>

<script>
import { AuthService } from '@/services/auth.service';
import { HandleAxios } from '@/services/handler';
import { userStore } from '@/store/users.store';
import { ROUTES } from "/src/router/names";

export default {
    name: "LoginView",
    data: () => ({
        valid: true,
        password: "",
        showPassword: false,
        passwordRules: [
            (v) => !!v || "Contraseña requerida",
            (v) => (v && v.length <= 20) || "La contraseña excede los 20 caracteres",
        ],
        username: "",
        usernameRules: [(v) => !!v || "Usuario requerido"],
        checkbox: false,
        ROUTES: ROUTES,
    }),

    methods: {
        login() {
            HandleAxios(AuthService().login(this.userName)).then(r => {
                userStore().setProfile(r);
                // userStore().setProfile({
                //     usuario: "Adrian",
                //     password: "Adrian",
                //     rol: 'E'
                // });
                this.$router.push('/')
            });
        },
    },
};
</script>