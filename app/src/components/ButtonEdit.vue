<template>
  <v-dialog v-model="dialog" persistent max-width="600px">
    <template v-slot:activator="{ on, attrs }">
      <v-btn class="ml-5 warning" small v-bind="attrs" v-on="on">
        <v-icon>mdi-pencil</v-icon>
      </v-btn>
    </template>

    <v-card>
      <v-card-title>
        <span class="headline">Editar dados</span>
      </v-card-title>

      <v-card-text>
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
                :placeholder="studentData.name"
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
                :placeholder="studentData.email"
                required
              ></v-text-field>
            </validation-provider>

            <v-text-field
              :value="studentData.ra"
              :counter="6"
              label="RA"
              readonly
            ></v-text-field>

            <v-text-field
              :value="studentData.cpf"
              :counter="11"
              label="CPF (apenas números)"
              readonly
            ></v-text-field>

            <v-btn
              class="mr-5 brown lighten-4 white--text"
              small
              type="submit"
              :disabled="invalid"
            >
              Atualizar
            </v-btn>

            <v-btn small class="ml-5 error" @click="dialog = false">
              Cancelar
            </v-btn>
          </form>
        </validation-observer>
      </v-card-text>
    </v-card>
  </v-dialog>
</template>

<script>
import axios from "axios";
import { required, email } from "vee-validate/dist/rules";
import {
  extend,
  ValidationObserver,
  ValidationProvider,
  setInteractionMode,
} from "vee-validate";

setInteractionMode("eager");

extend("required", {
  ...required,
  message: "{_field_} não pode estar vazio",
});

extend("email", {
  ...email,
  message: "E-mail inválido",
});

export default {
  name: "ButtonEdit",
  components: { ValidationProvider, ValidationObserver },
  data: () => ({
    dialog: false,
    name: "",
    email: "",
  }),

  props: {
    studentData: Object,
  },

  methods: {
    submit() {
      this.$refs.observer.validate();

      var student = {
        name: this.name,
        email: this.email,
      };
      var id = this.studentData.id;

      axios
        .put("http://localhost:8082/student/" + id, student)
        .then((response) => {
          if (response.status == 200) {
            console.log("cadastro atualizado");
            this.$emit("cad");
            this.dialog = false;
          }
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>
