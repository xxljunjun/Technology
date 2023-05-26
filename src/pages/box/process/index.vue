<template>
  <div class="process">
    <div class="chart" ref="chart"></div>
  </div>
</template>

<script>
import * as echarts from "echarts";
export default {
  data() {
    return {};
  },
  components: {},
  mounted() {
    this.initCharts();
  },
  destroyed() {
    this.chart && this.chart.dispose();
    this.chart = null;
  },
  methods: {
    initCharts() {
      if (!this.$refs.chart) {
        return;
      }
      const options = {
        xAxis: {
          type: "category",
          data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
        },
        yAxis: {
          type: "value",
        },
        series: [
          {
            data: [150, 230, 224, 218, 135, 147, 260],
            type: "line",
          },
        ],
      };
      this.$refs.chart.style.height = "200px";
      this.$refs.chart.style.width =
        Number(
          getComputedStyle(this.$refs.chart.parentNode).width.replace("px", "")
        ) + "px";
      this.chart && this.chart.dispose();
      this.chart = null;
      this.chart = echarts.init(this.$refs.chart);
      this.chart.setOption(options);
    },
  },
};
</script>

<style lang="scss" scoped>
.process {
  margin: 10px 0;
  box-shadow: 0 0 30px #0099b8 inset, 0 0 2px #0099b8;
  // display: flex;
  //     align-items: center;
  //     justify-content: space-around;
  //     padding: 10px 0;
}
</style>
