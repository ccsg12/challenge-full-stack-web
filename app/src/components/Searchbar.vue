<template>
  <v-toolbar dense flat prominent>
    <v-text-field
      hide-details
      prepend-icon="mdi-magnify"
      single-line
    ></v-text-field>

    <v-btn class="ml-5">
      <span>Cadastrar aluno</span>
    </v-btn>
  </v-toolbar>
</template>

<script>
export default {
  name: "Searchbar",
  data() {
    return {};
  },
};
</script>
