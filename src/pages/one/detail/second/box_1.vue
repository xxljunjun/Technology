<template>
  <div class="table1">
    <div class="charts" ref="charts" style="height:300px;width:500px;"></div>
  </div>
</template>

<script>
import * as echarts from "echarts";
export default {
  created() {},
  mounted() {
     console.log("触发了table1的mounted")
    this.initCharts();
  },
  methods: {
    initCharts() {
      var myChart = echarts.init(this.$refs.charts);

var option;

option = {
  xAxis: {
    type: 'category',
    data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
  },
  yAxis: {
    type: 'value'
  },
  series: [
    {
      data: [120, 200, 150, 80, 70, 110, 130],
      type: 'bar'
    }
  ]
};

option && myChart.setOption(option);
    },
  },
};
</script>

<style lang="scss" scoped>
.table1 {
}
</style>
