<template>
  <div class="rate">
    <div class="item-box">
      <div class="item" v-for="item in listArr" :key="item.id">
      <span>{{item.name}}</span>
      <span>{{item.rateOne}}</span>
      <span>{{item.rateTwo}}</span>
    </div>
    </div>
   
  </div>
</template>

<script>
export default {
    data(){
        return {
          listArr:[
            {
              id:1,
              name:'星球名称',
              rateOne:'安全率',
              rateTwo:'危险率'
            },
            {
              id:2,
              name:'地球',
              rateOne:'58%',
              rateTwo:'46%'
            },
            {
              id:3,
              name:'月球',
              rateOne:'12%',
              rateTwo:'78%'
            },
            {
              id:4,
              name:'火星',
              rateOne:'33%',
              rateTwo:'95%'
            },
            {
              id:5,
              name:'水星',
              rateOne:'94%',
              rateTwo:'23%'
            },
            {
              id:6,
              name:'大星',
              rateOne:'94%',
              rateTwo:'23%'
            },
            {
              id:7,
              name:'效星',
              rateOne:'90%',
              rateTwo:'73%'
            },
          ]
        }
    }
}
</script>
<style scoped lang="scss">
.rate{
  box-shadow: 0 0 30px #0099b8 inset, 0 0 2px #0099b8;
  margin: 10px 0;
    .item-box{
      display: flex;
      flex-direction: column;
      padding: 20px 0;
      .item{
        display: flex;
        align-items: center;
        justify-content: space-around;
      } 
    }
}
</style>
