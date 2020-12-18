<template>
  <div class="home">
    <navbar />

    <v-container my-4>
      <v-layout row wrap justify-center>
        <v-sheet class="white px-4 py-2 rounded-lg" width="800" height="600">
          <h1 class="text-center">Consulta de aluno</h1>

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
                <tr v-for="item in desserts" :key="item.name">
                  <td>{{ item.name }}</td>
                  <td>{{ item.calories }}</td>
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

export default {
  name: "Home",
  components: { navbar },
};
</script>
