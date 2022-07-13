<template>
  <div class="table1">
    <div>{{msg}}</div>
    <div class="charts" ref="charts" style="height: 700px; width: 1800px"></div>
  </div>
</template>

<script>
import * as echarts from "echarts";
import { sendWebsocket, closeWebsocket } from "@/utils/websocket.js";
export default {
  data(){
    return {
      msg:'我是一开始的信息'
    }
  },
  beforeDestroy() {
    // 页面销毁时关闭ws。因为有可能ws连接接收数据尚未完成，用户就跳转了页面
    // 在需要主动关闭ws的地方都可以调用该方法
    closeWebsocket();
  },
  created() {},
  mounted() {
    console.log("触发了table1的mounted");
    this.requstWs();
    this.initCharts();
  },
  methods: {
    // ws连接成功，后台返回的ws数据，组件要拿数据渲染页面等操作
    wsMessage(data) {
      const dataJson = data;
      console.log(dataJson);
      // 这里写拿到数据后的业务代码
      this.msg = dataJson.msg
    },
    // ws连接失败，组件要执行的代码
    wsError() {
      // 比如取消页面的loading
    },
    requstWs() {
      // 防止用户多次连续点击发起请求，所以要先关闭上次的ws请求。
      closeWebsocket();
      // 跟后端协商，需要什么参数数据给后台
      const obj = {
        monitorUrl: "xxxxxxxxxxxxx",
        userName: "xxxxxxxxxx",
      };
      // 发起ws请求
      sendWebsocket(
        "ws://localhost:8181",
        obj,
        this.wsMessage,
        this.wsError
      );
    },
    initCharts() {
      var myChart = echarts.init(this.$refs.charts);
      var option;

      option = {
        title: {
          text: "Stacked Line",
        },
        tooltip: {
          trigger: "axis",
        },
        legend: {
          data: ["Email", "Union Ads", "Video Ads", "Direct", "Search Engine"],
        },
        grid: {
          left: "3%",
          right: "4%",
          bottom: "3%",
          containLabel: true,
        },
        toolbox: {
          feature: {
            saveAsImage: {},
          },
        },
        xAxis: {
          type: "category",
          boundaryGap: false,
          data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
        },
        yAxis: {
          type: "value",
        },
        series: [
          {
            name: "Email",
            type: "line",
            stack: "Total",
            data: [120, 132, 101, 134, 90, 230, 210],
          },
          {
            name: "Union Ads",
            type: "line",
            stack: "Total",
            data: [220, 182, 191, 234, 290, 330, 310],
          },
          {
            name: "Video Ads",
            type: "line",
            stack: "Total",
            data: [150, 232, 201, 154, 190, 330, 410],
          },
          {
            name: "Direct",
            type: "line",
            stack: "Total",
            data: [320, 332, 301, 334, 390, 330, 320],
          },
          {
            name: "Search Engine",
            type: "line",
            stack: "Total",
            data: [820, 932, 901, 934, 1290, 1330, 1320],
          },
        ],
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
