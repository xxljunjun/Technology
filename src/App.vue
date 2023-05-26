<template>
  <div id="app">
    <div style="height:100vh;">
    <div id="particles-js">
      <router-view></router-view>
    </div>
   
  </div>
      
  </div>
</template>

<script>
  import particlesJs from "particles.js";
  import particlesConfig from "@/components/particles/particles.json";
export default {
  name: "App",
  data() {
    return {};
  },
  components: {
  },
  mounted() {
      this.init();
    },
  methods: {
    init() {
      particlesJs("particles-js", particlesConfig);
        document.body.style.overflow = "hidden";
      }
  },
};
</script>

<style lang="scss">
@import "~@/components/particles/style.css";
#app {
  height: 100%;
}
</style>
