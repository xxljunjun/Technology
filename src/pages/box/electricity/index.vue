<template>
  <div class="electricity">
    <div class="line-box" v-for="item in lineArr" :key="item.id">
      <span class="name-box"> {{ item.name }}</span>
      <el-progress
        style="width:180px"
        :text-inside="true"
        :stroke-width="12"
        :percentage="item.rate"
        color="#09feff"
        :show-text="false"
        define-back-color="#000000"
      ></el-progress>
      <span class="rate-txt">{{ `${item.rate}%` }}</span>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      lineArr: [
        {
          id: 1,
          name: "采集单元",
          rate: 24,
        },
        {
          id: 2,
          name: "传感器",
          rate: 60,
        },
        {
          id: 3,
          name: "工作站",
          rate: 84,
        },
        {
          id: 4,
          name: "网关",
          rate: 30,
        },
        {
          id: 5,
          name: "云节点",
          rate: 80,
        },
      ],
    };
  },
  components: {},
};
</script>

<style lang="scss" scoped>
.electricity {
  margin: 10px 0;
  box-shadow: 0 0 30px #0099b8 inset, 0 0 2px #0099b8;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  padding: 10px 10px;
  .line-box {
    display: flex;
    align-items: center;
    // justify-content: center;
    .name-box{
        display:block;
        width: 70px;
        margin-right: 5px;
    }
    .rate-txt{
        margin-left: 5px;
    }
  }
}
</style>
