<template>

  <div class="navBar">
    
    <router-link tag="div" to="/one">

      <span>标签一</span>

    </router-link>

    <router-link tag="div" to="/two">

      <span>标签二</span>
    </router-link>

    <router-link tag="div" to="/three">

      <span>标签三</span>
    </router-link>

    <router-link tag="div" to="/four">

      <span>标签四</span>
    </router-link>

  </div>

</template>

<script>
 export default { data() { return { } }, methods: { }, }
</script>

<style lang="scss" scoped>
.navBar {
  height: 60px;
  width: 100;
  background: rgba($color: blue, $alpha: 0.4);
  display: flex;
  align-items: center;
  //vue-router自带的样式
  .router-link-active{
    background: pink;
  }
}
</style>
