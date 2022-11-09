<template>
    <div id="patient-list-view">
        <v-container fluid>
            <v-card elevation="5" class="pa-5" rounded>
                <!-- Patient List Table -->
                <v-data-table :headers="table.headers" :items="table.patients" :search="table.search">
                    <template v-slot:top>
                        <v-toolbar flat>
                            <v-toolbar-title>Listado de Pacientes</v-toolbar-title>
                            <v-spacer />
                            <v-text-field v-model="table.search" append-icon="mdi-magnify" label="Search" color="grey"
                                single-line hide-details />
                            <v-divider class="mx-4" inset vertical />
                        </v-toolbar>
                    </template>
                    <template slot="item.delete" slot-scope="props">
                        <div class="text-center">
                            <v-icon dark color="red" class="mx-auto" @click="deleteItem(props.item)">
                                mdi-delete
                            </v-icon>
                        </div>
                    </template>

                    <template slot="item.view" slot-scope="props">
                        <div class="text-center">
                            <router-link
                                :to="{ name: ROUTES.PATIENT, params: { id: table.patients.indexOf(props.item) } }">
                                <v-icon dark color="blue" class="mx-auto">
                                    mdi-eye
                                </v-icon>
                            </router-link>
                        </div>
                    </template>
                </v-data-table>
                <!-- / Patient List Table -->
            </v-card>
        </v-container>

        <!-- Delete Dialog -->
        <v-dialog v-model="dialogDelete" width="320">
            <v-card>
                <v-card-title class="text-subtitle-1">Estás seguro que deseas eliminarlo?</v-card-title>
                <v-card-actions>
                    <v-spacer />

                    <v-btn color="secondary" text @click="closeDelete">Cancelar</v-btn>
                    <v-btn color="secondary" text @click="deleteItemConfirm">Si</v-btn>
                    <v-spacer />
                </v-card-actions>
            </v-card>
        </v-dialog>
        <!-- / Delete Dialog -->
    </div>
</template>

<script>
import { ROUTES } from "/src/router/names";
import { SpecialistService } from '@/services/specialist.service'
import { userStore } from '@/store/users.store';
export default {
    name: "PatientListView",
    data: () => ({
        editedIndex: -1,
        editedItem: null,
        dialogDelete: false,
        ROUTES: ROUTES,
        table: {
            search: "",
            headers: [
                {
                    text: "Nombre",
                    align: "start",
                    value: "name",
                },
                { text: "Apellidos", value: "surnames" },
                { text: "CI", value: "ci" },
                { text: "Dirección", value: "address" },
                { text: "País", value: "country" },
                { text: "Año de nacimiento", value: "birthday" },
                { text: "Edad", value: "age" },
                { text: "Fecha de inicio del tratamiento", value: "date" },
                { text: "Sexo", value: "gender" },
                { text: "Eliminar", value: "delete", sortable: false },
                { text: "Ver", value: "view", sortable: false },
            ],
            patients: [
                {
                    index: 1,
                    name: "Susan",
                    surnames: "Camper",
                    ci: "98124312781",
                    address: "Calle 32 E/ Calle Ancha y Calle Martí",
                    country: "Cuba",
                    birthday: "1998",
                    age: "12",
                    date: "2005-12-02",
                    gender: "Femenino",
                },
                {
                    index: 2,
                    name: "Rocky",
                    surnames: "Camper",
                    ci: "00124312782",
                    address: "Calle 32 E/ Calle Ancha y Calle Martí",
                    country: "Francia",
                    birthday: "1998",
                    age: "20",
                    date: "2005-12-02",
                    gender: "Masculino",
                },
                {
                    index: 3,
                    name: "Sam",
                    surnames: "Camper",
                    ci: "01124312785",
                    address: "Calle 32 E/ Calle Ancha y Calle Martí",
                    country: "Cuba",
                    birthday: "1998",
                    age: "56",
                    date: "2005-12-02",
                    gender: "Masculino",
                },
            ],
        },
    }),
    methods: {
        deleteItem(patient) {
            this.editedIndex = this.table.patients.indexOf(patient);
            this.editedItem = Object.assign({}, patient);
            this.dialogDelete = true;
        },
        deleteItemConfirm() {
            this.table.patients.splice(this.editedIndex, 1);
            this.closeDelete();
        },
        closeDelete() {
            this.dialogDelete = false;
        },
    },
    beforeMount() {
        console.log('BeforeMount');
        const user = userStore().getProfile();
        SpecialistService().getPatients(user.usuario).then((r) => {
            this.patients = r;
        }).catch(error => { console.log({ error }) })
    }
};
</script>

<style lang="scss" scoped>
#patient-list-view {
    padding-top: 4.5rem;
}
</style>