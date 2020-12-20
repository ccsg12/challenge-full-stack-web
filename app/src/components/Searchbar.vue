<template>
  <v-toolbar dense flat prominent>
    <v-autocomplete
      v-model="select"
      :loading="loading"
      :items="items"
      :search-input.sync="search"
      cache-items
      class="mx-4"
      flat
      hide-no-data
      hide-details
      solo-inverted
      clearable
      dense
      prepend-inner-icon="mdi-magnify"
      placeholder="Nome"
    ></v-autocomplete>

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

  watch: {
    search(val) {
      val !== this.select && this.querySelections(val);
    },
  },

  data: () => ({
    loading: false,
    items: [],
    search: null,
    select: null,

    dialog: false,
  }),

  props: {
    students: Array,
  },

  methods: {
    listen() {
      this.$emit("cad");
      this.dialog = false;
    },
    querySelections(v) {
      this.loading = true;

      setTimeout(() => {
        var studentsFiltered = this.students.filter((e) => {
          return (
            (e.name || "").toLowerCase().indexOf((v || "").toLowerCase()) > -1
          );
        });

        for (var i = 0; i < studentsFiltered.length; i++) {
          this.items.push(studentsFiltered[i].name);
        }

        this.$emit("filtered", { studentsFiltered });

        this.loading = false;
      }, 500);
    },
  },
};
</script>
