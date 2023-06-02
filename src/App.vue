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
    this.init();
  },
  methods: {
    init() {
      try {
        console.log("particlesJs", particlesJs);
        // eslint-disable-next-line no-unused-vars, no-undef
        particlesJS("particles-js", particlesConfig);
        document.body.style.overflow = "hidden";
      } catch (e) {
        console.log("背景出现失败的原因", e);
      }
    },
  },
};
</script>

<style lang="scss">
#particles-js {
  width: 100%;

  height: 100%;

  background-color: #000;

  /* background-image: url('./img/5.jpg'); */

  background-size: cover;

  background-position: 50% 50%;

  background-repeat: no-repeat;
  position: absolute;
  top: 0;
  z-index: 999;
}
</style>
