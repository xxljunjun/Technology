<template>
  <div id="particles-js">
    <router-view></router-view>
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
  components: {},
  mounted() {
    this.init()
  },
  methods: {
    init() {
      particlesJS("particles-js", particlesConfig);
      document.body.style.overflow = "hidden";
    },
  },
};
</script>

<style lang="scss">
  #particles-js{

width: 100%;
 
 height: 100%;
 
 background-color: #000;
 
/* background-image: url('./img/5.jpg'); */
 
 background-size: cover;
 
 background-position: 50% 50%;
 
 background-repeat: no-repeat;
 
 }
</style>
