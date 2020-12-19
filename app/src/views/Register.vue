<template>
  <div class="home">
    <navbar />

    <v-container my-4>
      <v-layout row wrap justify-center>
        <v-card width="600" class="px-4 pb-4">
          <v-card-title class="text-h3">
            Cadastro de alunos
          </v-card-title>

          <validation-observer ref="observer" v-slot="{ invalid }">
            <form @submit.prevent="submit">
              <validation-provider
                v-slot="{ errors }"
                name="Name"
                rules="required"
              >
                <v-text-field
                  v-model="name"
                  :error-messages="errors"
                  label="Nome"
                  required
                ></v-text-field>
              </validation-provider>

              <validation-provider
                v-slot="{ errors }"
                name="email"
                rules="required|email"
              >
                <v-text-field
                  v-model="email"
                  :error-messages="errors"
                  label="E-mail"
                  required
                ></v-text-field>
              </validation-provider>

              <validation-provider
                v-slot="{ errors }"
                name="ra"
                :rules="{
                  required: true,
                  digits: 6,
                }"
              >
                <v-text-field
                  v-model="ra"
                  :counter="6"
                  :error-messages="errors"
                  label="RA"
                  required
                ></v-text-field>
              </validation-provider>

              <validation-provider
                v-slot="{ errors }"
                name="cpf"
                :rules="{
                  required: true,
                  digits: 11,
                }"
              >
                <v-text-field
                  v-model="cpf"
                  :counter="11"
                  :error-messages="errors"
                  label="CPF (apenas números)"
                  required
                ></v-text-field>
              </validation-provider>

              <v-btn
                color="#D7CCC8"
                class="mr-4"
                type="submit"
                :disabled="invalid"
              >
                Cadastar
              </v-btn>
            </form>
          </validation-observer>
        </v-card>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
// @ is an alias to /src

import navbar from "@/components/Navbar";
import axios from "axios";
import { required, digits, email } from "vee-validate/dist/rules";
import {
  extend,
  ValidationObserver,
  ValidationProvider,
  setInteractionMode,
} from "vee-validate";

setInteractionMode("eager");

extend("digits", {
  ...digits,
  message: "{_field_} precisa de {length} digitos. ({_value_})",
});

extend("required", {
  ...required,
  message: "{_field_} não pode estar vazio",
});

extend("email", {
  ...email,
  message: "E-mail inválido",
});

export default {
  name: "Register",
  components: { navbar, ValidationProvider, ValidationObserver },
  data: () => ({
    name: "",
    cpf: "",
    email: "",
    ra: "",
  }),
  methods: {
    submit() {
      this.$refs.observer.validate();

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
            alert("Estudante cadastrado!");
          }
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>
