<template>
  <v-app>
    <v-app-bar app>
      <v-toolbar-title class="headline text-uppercase">
        <span>Express</span>
        <span class="font-weight-light">_DOCX</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn text href="#" target="_self">
        <span class="mr-2">About</span>
      </v-btn>
    </v-app-bar>

    <v-content>
      <router-view />
    </v-content>
  </v-app>
</template>

<script>

export default {
  name: "App",

  data(){
    return{

    }
  }
};
</script>
