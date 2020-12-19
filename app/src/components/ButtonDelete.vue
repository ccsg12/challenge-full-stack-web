<template>
  <v-dialog v-model="dialog" persistent max-width="290">
    <template v-slot:activator="{ on, attrs }">
      <v-btn class="ml-5 error" small v-bind="attrs" v-on="on">
        <v-icon>mdi-delete</v-icon>
      </v-btn>
    </template>
    <v-card>
      <v-card-title class="headline">
        Deletar usuário
      </v-card-title>
      <v-card-text>Deseja deletar esse usuário?</v-card-text>

      <v-card-actions>
        <v-spacer></v-spacer>

        <v-btn color="green darken-1" text @click="dialog = false">
          Não
        </v-btn>

        <v-btn color="green darken-1" text @click="del()">
          Sim
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
import axios from "axios";

export default {
  name: "ButtonEdit",

  data: () => ({
    dialog: false,
  }),

  props: {
    studentId: Number,
  },

  methods: {
    del() {
      var id = this.studentId;

      axios
        .delete("http://localhost:8082/student/" + id)
        .then((response) => {
          if (response.status == 200) {
            console.log("cadastro deletado");
            this.$emit("del");
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
