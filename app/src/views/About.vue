<template>
  <div class="home">
    <navbar />

    <v-container my-4>
      <v-layout row wrap justify-center>
        <v-card width="600" class="pa-3">
          <v-card-title class="text-h3">
            Cadastro de alunos
          </v-card-title>

          <v-form v-model="valid">
            <v-container>
              <v-text-field
                v-model="name"
                :rules="nameRules"
                label="Nome"
                required
              ></v-text-field>

              <v-text-field
                v-model="email"
                :rules="emailRules"
                label="E-mail"
                required
              ></v-text-field>

              <v-text-field
                v-model="ra"
                :rules="raRules"
                :counter="6"
                label="RA"
                required
              ></v-text-field>

              <v-text-field
                v-model="cpf"
                :rules="cpfRules"
                :counter="11"
                label="CPF (apenas números)"
                required
              ></v-text-field>

              <v-btn @click="submit">
                Cadastrar
              </v-btn>
            </v-container>
          </v-form>
        </v-card>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
// @ is an alias to /src

import navbar from "@/components/Navbar";
import axios from "axios";

export default {
  name: "Home",
  components: { navbar },
  data: () => ({
    valid: false,

    name: "",
    nameRules: [(v) => !!v || "Campo obrigatório"],

    email: "",
    emailRules: [
      (v) => !!v || "Campo obrigatório",
      (v) => /.+@.+/.test(v) || "E-mail inválido",
    ],

    ra: "",
    raRules: [
      (v) => !!v || "Campo obrigatório",
      (v) => v.length == 6 || "O RA deve possuir 6 números",
    ],

    cpf: "",
    cpfRules: [
      (v) => !!v || "Campo obrigatório",
      (v) => v.length == 11 || "CPF inválido",
    ],
  }),
  methods: {
    submit() {
      var student = {
        name: this.name,
        email: this.email,
        ra: this.ra,
        cpf: this.cpf,
      };

      axios
        .post("http://localhost:8082/student", student)
        .then((response) => {
          if (response.status == 200) {
            alert("Game cadastrado!");
          }
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>
