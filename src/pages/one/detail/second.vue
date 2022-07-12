<template>
  <div class="second">
    <card title="盒子1">
      <box1></box1>
    </card>
    <card title="盒子2">
      <box1></box1>
    </card>
    <card title="盒子3">
      <box1></box1>
    </card>
    <card title="盒子4">
      <box1></box1>
    </card>
    <card title="盒子5">
      <box1></box1>
    </card>
    <card title="盒子6">
      <box1></box1>
    </card>
  </div>
</template>

<script>
import card from "@/components/card.vue"
import box1 from "@/pages/one/detail/second/box_1.vue"
 export default { 
    components:{
      card,
      box1 

    }
 }
</script>

<style lang="scss" scoped>
.second{
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  padding: 50px 50px 0;
  .card{
    margin-bottom: 50px;
  }
}
</style>
