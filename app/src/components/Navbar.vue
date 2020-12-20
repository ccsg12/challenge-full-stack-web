<template>
  <nav>
    <v-app-bar class="blue-grey" dark>
      <v-app-bar-nav-icon
        class="grey--text"
        @click="drawer = !drawer"
      ></v-app-bar-nav-icon>

      <v-toolbar-title class="grey--text text-h4"
        >Projeto full-stack-web</v-toolbar-title
      >
      <v-spacer></v-spacer>
      <v-btn text>
        <v-toolbar-title class="grey--text">Logout</v-toolbar-title>
        <v-icon class="ml-3 grey--text">mdi-logout-variant</v-icon>
      </v-btn>
    </v-app-bar>

    <v-navigation-drawer v-model="drawer" app dark class="brown lighten-4">
      <v-list class="pt-0">
        <v-list-item-group>
          <v-list-item disabled class="brown lighten-2 ">
            <v-list-item-content>
              <v-list-item-title class="text-h5">
                Módulo acadêmico
              </v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list-item-group>

        <v-list-item-group>
          <v-list-item
            v-for="link in links"
            :key="link.text"
            router
            :to="link.route"
          >
            <v-list-item-action>
              <v-icon>{{ link.icon }}</v-icon>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title>{{ link.text }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
  </nav>
</template>

<script>
export default {
  name: "Navbar",
  data() {
    return {
      drawer: false,
      links: [
        { icon: "mdi-account-search", text: "Consultar", route: "/" },
        { icon: "mdi-account-plus", text: "Registrar", route: "/register" },
      ],
    };
  },
};
</script>
