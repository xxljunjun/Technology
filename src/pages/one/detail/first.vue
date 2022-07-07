<template>
  <div class="first">
    <div class="btn-box">
       <router-link tag="div" to="/one/first/table1" style="width:50px;">

      <span>表格1</span>

    </router-link>

    <router-link tag="div" to="/one/first/table2" style="width:50px;">

      <span>表格2</span>
    </router-link>
    </div>
    <div class="view-box">
       <router-view></router-view>
    </div>
  </div>
</template>

<script>
 export default { 
    // beforeRouterEnter(to,from,next){
    //   next({path:'/one/first'})
    // }
 }
</script>

<style lang="scss" scoped>
.first{
  display: flex;
  .btn-box{
    margin-top: 50px;
    display: flex;
    flex-direction: column;
    //vue-router自带的样式
  .router-link-active{
    background:green;
  }
  }
  .view-box{

  }
   
}
</style>
