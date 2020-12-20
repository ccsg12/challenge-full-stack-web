<template>
  <v-card>
    <v-card-title>
      <span class="headline">Cadastro de aluno</span>
    </v-card-title>

    <v-card-text>
      <validation-observer ref="observer" v-slot="{ invalid }">
        <form @submit.prevent="submit">
          <validation-provider v-slot="{ errors }" name="Name" rules="required">
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
            class="mr-5 brown lighten-4 white--text"
            small
            type="submit"
            :disabled="invalid"
          >
            Cadastar
          </v-btn>

          <v-btn small class="ml-5 error" @click="close()">
            Cancelar
          </v-btn>

          <v-dialog v-model="dialog1" max-width="300px">
            <v-card>
              <v-card-title></v-card-title>

              <v-card-text> {{ registerError }} </v-card-text>

              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn text color="green darken-1" @click="dialog1 = false">
                  Fechar
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-dialog>
        </form>
      </validation-observer>
    </v-card-text>
  </v-card>
</template>

<script>
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
  components: { ValidationProvider, ValidationObserver },
  data: () => ({
    name: "",
    cpf: "",
    email: "",
    ra: "",
    dialog1: false,
    registerError: "",
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
        .get("http://localhost:8082/students")
        .then((response) => {
          var students = response.data.filter((v) => v.name == student.name);

          if (students.length == 0) {
            students = response.data.filter((v) => v.email == student.email);

            if (students.length == 0) {
              students = response.data.filter((v) => v.ra == student.ra);

              if (students.length == 0) {
                students = response.data.filter((v) => v.cpf == student.cpf);

                if (students.length == 0) {
                  axios
                    .post("http://localhost:8082/student", student)
                    .then((response) => {
                      if (response.status == 200) {
                        this.registerError = "Estudante cadastrado com sucesso";
                        this.dialog1 = !this.dialog1;
                        this.$emit("cad");
                      }
                    })
                    .catch((error) => {
                      console.log(error);
                    });
                } else {
                  this.registerError = "CPF já registrado";
                  this.dialog1 = !this.dialog1;
                }
              } else {
                this.registerError = "RA já registrado";
                this.dialog1 = !this.dialog1;
              }
            } else {
              this.registerError = "Email já registrado";
              this.dialog1 = !this.dialog1;
            }
          } else {
            this.registerError = "Nome já registrado";
            this.dialog1 = !this.dialog1;
          }
        })
        .catch((error) => {
          console.log(error);
        });
    },
    close() {
      this.$emit("clo");
    },
  },
};
</script>
