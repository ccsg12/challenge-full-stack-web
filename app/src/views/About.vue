<template>
  <div class="home">
    <navbar />

    <v-container my-4>
      <v-layout row wrap justify-center>
        <v-sheet class="white px-4 py-2 rounded-sm" width="600" height="600">
          <h1 class="text-center">Cadastro de aluno</h1>
        </v-sheet>
      </v-layout>
    </v-container>
    <!-- <v-row class="text-center">
      <v-col cols="12">
      </v-col>
    </v-row> -->
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
