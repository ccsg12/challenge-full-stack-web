<template>
  <v-toolbar dense flat prominent>
    <v-text-field
      hide-details
      prepend-icon="mdi-magnify"
      single-line
    ></v-text-field>

    <v-dialog v-model="dialog" persistent max-width="600px">
      <template v-slot:activator="{ on, attrs }">
        <v-btn class="ml-5 brown lighten-4" dark v-bind="attrs" v-on="on">
          Cadastar Aluno
        </v-btn>
      </template>

      <register @clo="dialog = false" @cad="listen()" />
    </v-dialog>
  </v-toolbar>
</template>

<script>
import register from "@/components/Register.vue";

export default {
  name: "Searchbar",
  components: {
    register,
  },

  data: () => ({
    dialog: false,
  }),

  methods: {
    listen() {
      this.$emit("cad");
      this.dialog = false;
    },
  },
};
</script>
