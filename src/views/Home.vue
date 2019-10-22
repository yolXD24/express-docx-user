<template>
  <div>
    <v-carousel interval="4200" continuous cycle hide-delimiters show-arrows-on-hover>
      <v-carousel-item v-for="(i) in 3" :key="i" :src="items[items.length-1]" style="background:black" transition="fade-transition">
        <v-container fill-height fluid style="background : rgba(0,0,0,0.5)">
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
  </div>
</template>
<script>
export default {
  data() {
    return {
      colors: ["primary", "secondary", "yellow darken-2", "red", "orange"],
      docs: ["easy", "safe", "free"],
      items: ["https://source.unsplash.com/collection/894/"],
      background: ""
    };
  },
  methods: {
    generate(img) {
      this.background = img;
      this.items.push(img);
    }
  },
  created() {
    var count = 0;
    setInterval(() => {
      setTimeout(() => {
        this.generate("https://source.unsplash.com/collection/894/" + ++count);
      }, 990);
    }, 3000);
  }
};
</script>