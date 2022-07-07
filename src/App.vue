<template>
  <div id="app">
    <div class="header">项目头部</div>
    <div class="content">
      <navBar/>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import navBar from "@/components/navBar.vue"
export default {
  name: 'App',
  data(){
    return {

    }
  },
  components: {
    navBar
  },
}
</script>

<style lang="scss">

#app{
  background-image: url(~@/assets/images/bg.png);
  min-height: 100vh;
  background-size:100% 100% ;
  background-repeat:no-repeat ;
  .header{
    height: 70px;
    width: 100%;
    background: rgba($color: red, $alpha: 0.4);
  }
  .content{
    padding: 0 50px;
  }
}
</style>
