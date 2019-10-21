<template>
  <v-carousel interval="3000" continuous cycle hide-delimiters show-arrows-on-hover>
    <v-carousel-item
      v-for="(item,i) in items"
      :key="i"
      :src="item.src"
      reverse-transition="fade-transition"
      transition="fade-transition"
    >
      <v-container fill-height fluid style="background:rgba(0,0,0,0.5)">
        <v-layout align-center>
          <v-flex>
            <h3
              class="display-4 heading white--text text-uppercase"
              align="center"
              justify="center"
            >{{ docs[i]}}!</h3>
          </v-flex>
        </v-layout>
      </v-container>
    </v-carousel-item>
  </v-carousel>
</template>
<script>
export default {
  data() {
    return {
      colors: ["primary", "secondary", "yellow darken-2", "red", "orange"],
      docs: ["easy", "safe", "free"],
      items: [
        {
          src:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTWYjOTNPD5aI7VvrCgrjjEpRUfx86crBorjDtsCuWpEfTL80fe"
        },
        {
          src:
            "https://images.unsplash.com/photo-1526080676457-4544bf0ebba9?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&w=1600&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ"
        },
        {
          src:
            "https://images.unsplash.com/photo-1426170042593-200f250dfdaf?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&w=1600&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ"
        }
      ]
    };
  }
};
</script>