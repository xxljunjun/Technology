<template>
   <div class="home">
    <div class="home-left">
      <card title="陨石统计">
        <nums/>
      </card>
      <card title="实时警告">
        <warnming/>
      </card>
      <card title="危险比例">
        <process/>
      </card>
      <card title="星球危险率">
        <rate/>
      </card>
    </div>
    <div class="home-middle">
      <toopBox/>
      <bottomBox/>
    </div>
    <div class="home-right">
      <card title="耀斑统计">
        <totalNum/>
      </card>
      <card title="设备电量">
        <electricity/>
      </card>
      <card title="耀斑数量">
        <flareNum/>
      </card>
      <card title="中国监测点">
        <monitoring/>
      </card>
    </div>
   </div>
</template>

<script>
import card from '@/components/card/index.vue'
import toopBox from '@/components/toopBox/index.vue'
import bottomBox from '@/components/bottomBox/index.vue'
import {
  nums,
  warnming,
  process,
  rate,
  totalNum,
  electricity,
    flareNum,
    monitoring
} from '@/pages/box/'
export default {
  data(){
    return {
    
    }
  },
  components: {
    card,
    nums,
    warnming,
    process,
    rate,
    totalNum,
    electricity,
    flareNum,
    monitoring,
    bottomBox,
    toopBox
  },
}
</script>

<style lang="scss" scoped>
.home{
  display: flex;
  padding: 20px;
  .home-left{
    flex: 1;
    margin-right: 20px;
  }
  .home-middle{
    flex: 3;
    display: flex;
    flex-direction: column;
  }
  .home-right{
    flex: 1;
    margin-left: 20px;
  }
}
</style>