 <div id="patient-view">
    <v-container fluid>
    <v-row>
    <v-col>
      <v-card elevation="5" class="pa-5" rounded>
            <v-card-title></v-card-title>
      </v-card>
      </v-col>
    </v-row>
    </v-container>
  </div>
</template>

<script>
import {ROUTES} from "/src/router/names";
export default {
  name: "PatientView",
  data: () => ({
    ROUTES: ROUTES,
      patient:
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
  }),
};
</script>