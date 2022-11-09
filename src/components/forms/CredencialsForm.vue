<template>
    <v-form v-model="valid" lazy-validation>
        <v-row>
            <v-col cols="12">
                <!-- UserName -->
                <v-text-field v-model="userName" :rules="userNameRules" label="Usuario" dense required outlined />
            </v-col>

            <v-col cols="12">
                <!-- Password -->
                <v-text-field v-model="password" :counter="20" :rules="passwordRules" label="Contraseña" dense required
                    outlined :append-icon="show.password ? 'mdi-eye' : 'mdi-eye-off'"
                    :type="show.password ? 'text' : 'password'" @click:append="show.password = !show.password" />
            </v-col>

            <v-col cols="12">
                <!-- Last Name -->
                <v-text-field v-model="repeatPassword" :counter="20"
                    :rules="[...repeatPasswordRules, matchingPasswords]" label="Confirmar Contraseña" dense required
                    outlined :append-icon="show.repeatPassword ? 'mdi-eye' : 'mdi-eye-off'"
                    :type="show.repeatPassword ? 'text' : 'password'"
                    @click:append="show.repeatPassword = !show.repeatPassword" />
            </v-col>
        </v-row>

        <v-row>
            <v-col cols="12">
                <v-btn color="primary" class="font-weight-bold text-body-1" @click="createAccount">
                    Crear Cuenta
                </v-btn>
            </v-col>
        </v-row>
    </v-form>
</template>

<script>
import { HandleAxios } from '@/services/handler';
import { AuthService } from '@/services/auth.service';
import { userStore } from '@/store/users.store';

export default {
    name: "CredencialsForm",
    data: () => ({
        // Form data
        valid: false,
        password: "",
        repeatPassword: "",
        show: {
            password: false,
            repeatPassword: false,
        },
        passwordRules: [
            (v) => !!v || "Contraseña requerida",
            (v) =>
                (v && v.length <= 20) ||
                "La contraseña no debe tener más de 20 caracteres",
        ],
        repeatPasswordRules: [
            (v) => !!v || "Contraseña requerida",
            (v) =>
                (v && v.length <= 20) ||
                "La contraseña no debe tener más de 20 caracteres",
        ],
        userName: "",
        userNameRules: [(v) => !!v || "Usuario requerido"],
    }),

    methods: {
        /**
         *
         */
        matchingPasswords() {
            if (this.password === this.repeatPassword) {
                return true;
            } else {
                return "Ambas contraseñas deben ser iguales";
            }
        },

        /**
         * Create Account
         */
        createAccount() {
            HandleAxios(AuthService().login(this.userName)).then(r => {
                userStore().setProfile(r);
            }).finally(() => {
                this.$router.push('/')
            })
        },
    },
};
</script>