<template>

  <div class="one">

    <div class="tabBar-box">

      <router-link tag="div" to="/one/first">

        <span>详情一</span>

      </router-link>

      <router-link tag="div" to="/one/second">

        <span>详情二</span>

      </router-link>

      <router-link tag="div" to="/one/third">

        <span>详情三</span>

      </router-link>

      <router-link tag="div" to="/one/fourth">

        <span>详情四</span>

      </router-link>

    </div>

    <div class="detail-box">

      <router-view></router-view>

    </div>

  </div>

</template>

<script>
 export default { // beforeRouterEnter(to,from,next){ // next({path:'/one/first'})
// } 
}
</script>

<style lang="scss" scoped>
.one {
  display: flex;
  flex-direction: column;
  .tabBar-box{
    display: flex;
    //vue-router自带的样式
  .router-link-active{
    background:yellow;
  }
  } 
  .detail-box{

  }
}
</style>

