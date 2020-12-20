<template>
  <div class="home">
    <navbar />

    <v-container my-4>
      <v-layout row wrap justify-center>
        <v-card class="white px-4 pb-4" width="800" height="600">
          <v-card-title class="text-h3">
            Consulta de alunos
          </v-card-title>

          <v-divider></v-divider>

          <v-card-text>
            <searchbar
              :students="studentsData"
              @filtered="filterPage($event)"
              @cad="updatePage()"
            />
            <v-simple-table fixed-header height="380">
              <template v-slot:default>
                <thead>
                  <tr>
                    <th class="text-left">
                      Registro Acadêmico
                      <v-btn small icon @click="order(1)">
                        <v-icon>mdi-menu-down</v-icon>
                      </v-btn>
                    </th>
                    <th class="text-left">
                      Nome
                      <v-btn small icon @click="order(2)">
                        <v-icon>mdi-menu-down</v-icon>
                      </v-btn>
                    </th>
                    <th class="text-left">
                      CPF
                      <v-icon>mdi-menu-down</v-icon>
                    </th>
                    <th class="text-left">
                      Ações
                      <v-icon>mdi-menu-down</v-icon>
                    </th>
                  </tr>
                </thead>

                <tbody>
                  <tr v-for="student in students" :key="student.id">
                    <td id="ra">{{ student.ra }}</td>
                    <td id="name">{{ student.name }}</td>
                    <td id="cpf">
                      {{
                        student.cpf.replace(
                          /(\d{3})?(\d{3})?(\d{3})?(\d{2})/,
                          "$1.$2.$3-$4"
                        )
                      }}
                    </td>

                    <td class="text-center">
                      <buttonEdit :studentData="student" @cad="updatePage()" />

                      <buttonDelete
                        :studentId="student.id"
                        @del="updatePage()"
                      />
                    </td>
                  </tr>
                </tbody>
              </template>
            </v-simple-table>
          </v-card-text>
        </v-card>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
// @ is an alias to /src

import navbar from "@/components/Navbar";
import axios from "axios";
import searchbar from "@/components/Searchbar";
import buttonEdit from "@/components/ButtonEdit";
import buttonDelete from "@/components/ButtonDelete";

export default {
  name: "Home",
  components: {
    navbar,
    searchbar,
    buttonEdit,
    buttonDelete,
  },

  data() {
    return {
      students: [],
      studentsData: [],
    };
  },

  methods: {
    filterPage($event) {
      this.students = $event.studentsFiltered;
    },
    updatePage() {
      axios
        .get("http://localhost:8082/students")
        .then((response) => {
          this.students = response.data;
        })
        .catch((error) => {
          console.log(error);
        });
    },
    order(v) {
      if (v == 1) {
        this.students = this.students.sort((a, b) => a.ra - b.ra);
      }

      if (v == 2) {
        this.students = this.students.sort((a, b) => {
          if (a.name > b.name) return 1;
        });
      }
    },
  },

  async created() {
    try {
      const res = await axios.get("http://localhost:8082/students");

      this.students = res.data;
      this.studentsData = res.data;
    } catch (error) {
      console.log(error);
    }
  },
};
</script>
