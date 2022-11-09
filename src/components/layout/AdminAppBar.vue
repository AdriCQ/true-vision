<template>
    <v-app-bar fixed class="white">
        <v-toolbar-title class="ml-5 text-h6 font-weight-medium">
            Especialista
        </v-toolbar-title>

        <v-spacer />
        <!-- Navigation tabs -->
        <v-tabs align-with-title v-model="tab" color="primary" style="width: auto" right optional>
            <v-tab v-for="(link, index) in navLinks" :key="`app-bar-main-navlink-${index}`"
                class="grey--text text--darken-4 text-body-1 font-weight-bold" :to="{ name: link.to }">
                {{ link.title }}
            </v-tab>
        </v-tabs>
        <!-- / Navigation tabs -->

        <v-menu offset-y>
            <template v-slot:activator="{ on, attrs }">
                <v-btn v-bind="attrs" v-on="on" text class="font-weight-bold text-body-1">
                    {{ userProfile.usuario }}
                    <v-icon size="25" right dark>mdi-account-circle</v-icon>
                </v-btn>
            </template>
            <v-list>
                <v-list-item class="pa-1" @click="logout">
                    <v-list-item-title>Salir</v-list-item-title>
                </v-list-item>
            </v-list>
        </v-menu>
    </v-app-bar>
</template>
 
<script>
import { userStore } from '@/store/users.store';
import { ROUTES } from "/src/router/names";

export default {
    name: "AdminAppBar",
    data: () => ({
        tab: null,
        navLinks: [
            {
                title: "Inicio",
                to: ROUTES.HOME,
            },
            {
                title: "Pacientes",
                to: ROUTES.PATIENT_LIST,
            },
        ],
    }),
    computed: {
        userProfile: () => {
            return userStore().getProfile()
        }
    },
    methods: {
        logout() {
            localStorage.clear();
            this.$router.push('/');
        },
    },
};
</script>