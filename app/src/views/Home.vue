<template>
  <div class="home">
    <navbar />

    <v-container my-4>
      <v-layout row wrap justify-center>
        <v-sheet class="white px-4 py-2 rounded-lg" width="800" height="600">
          <h1 class="text-center">Consulta de alunos</h1>

          <searchbar />

          <v-simple-table>
            <template v-slot:default>
              <thead>
                <tr>
                  <th class="text-left">
                    Registro Acadêmico
                  </th>
                  <th class="text-left">
                    Nome
                  </th>
                  <th class="text-left">
                    CPF
                  </th>
                  <th class="text-left">
                    Ações
                  </th>
                </tr>
              </thead>

              <tbody>
                <tr v-for="student in students" :key="student.id">
                  <td id="ra">{{ student.ra }}</td>
                  <td id="name">{{ student.name }}</td>
                  <td id="cpf">{{ student.cpf }}</td>

                  <td class="text-center">
                    <v-btn class="mx-2 warning">
                      <v-icon>mdi-pencil</v-icon>
                    </v-btn>
                    <v-btn class="mx-2 error">
                      <v-icon>mdi-delete</v-icon>
                    </v-btn>
                  </td>
                </tr>
              </tbody>
            </template>
          </v-simple-table>
        </v-sheet>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
// @ is an alias to /src

import navbar from "@/components/Navbar";
import axios from "axios";
import searchbar from "@/components/Searchbar";

export default {
  name: "Home",
  components: { navbar, searchbar },
  data() {
    return {
      students: [],
    };
  },
  async created() {
    try {
      const res = await axios.get("http://localhost:8082/students");

      this.students = res.data;
    } catch (error) {
      console.log(error);
    }
  },
};
</script>
