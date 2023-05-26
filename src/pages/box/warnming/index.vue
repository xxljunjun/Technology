<template>
  <div class="warnming">
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
        color: ["#07f8ff", "#004554", "#08697a"],
        tooltip: {
          trigger: "item",
          show: true,
        },
        //标题
        title: {
          show: false,
          // 主标题文本，'\n'指定换行
          text: "iphone销量",
          // 副标题文本，'\n'指定换行
          subtext: "纯属虚构",
          // 水平安放位置，默认为左侧，可选为：'center' | 'left' | 'right' | {number}（x坐标，单位px）
          x: "center",
          // 垂直安放位置，默认为全图顶端，可选为：'top' | 'bottom' | 'center' | {number}（y坐标，单位px）
          y: "top",
          // 水平对齐方式，默认根据x设置自动调整，可选为： left' | 'right' | 'center
          textAlign: "center",
        },
        // 图例
        legend: {
          show: false,
        },
        //数据
        series: [
          {
            name: "Access From",
            type: "pie",
            radius: ["40%", "70%"],
            avoidLabelOverlap: false,
            label: {
              show: false,
              position: "center",
            },
            emphasis: {
              label: {
                show: false,
                fontSize: 40,
                fontWeight: "bold",
              },
            },
            labelLine: {
              show: false,
            },
            data: [
              { value: 1048, name: "一级" },
              { value: 735, name: "二级" },
              { value: 580, name: "三级" },
            ],
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
.warnming {
  margin: 10px 0;
  box-shadow: 0 0 30px #0099b8 inset, 0 0 2px #0099b8;
  // display: flex;
  //     align-items: center;
  //     justify-content: space-around;
  //     padding: 10px 0;
}
</style>
