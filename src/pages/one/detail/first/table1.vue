<template>
  <div class="table1">
    <div>{{ msg }}</div>
    <div class="charts" ref="charts" style="height: 650px; width: 1800px"></div>
  </div>
</template>

<script>
import * as echarts from "echarts";
import { sendWebsocket, closeWebsocket } from "@/utils/websocket.js";
export default {
  data() {
    return {
      msg: "我是一开始的信息",
    };
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
      this.msg = dataJson.msg;
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
      sendWebsocket("ws://localhost:8181", obj, this.wsMessage, this.wsError);
    },
    initCharts() {
      var myChart = echarts.init(this.$refs.charts);
      var option;

      option = {
        title: {
          text: "Stacked Line",
          show: false,
        },
        tooltip: {
          trigger: "axis",
          show: true,
        },
        //图例组件
        legend: {
          show: true,
          right: "10%",
          data: [
            {
              name: "Email",
              icon: "rect", // 用矩形替换
            },
            {
              name: "Union Ads",
              icon: "rect",
            },{
              name: "Video Ads",
              icon: "rect",
            },{
              name: "Direct",
              icon: "rect",
            },{
              name: "Search Engine",
              icon: "rect",
            },
          ],
          itemWidth: 25, //矩形宽度
          itemHeight: 2, //矩形高度
          textStyle: {
            color: "#fff",
          },
        },
        grid: {
          // top: "20%",
          //   bottom: "10%",
          //   left: "8%",
          //   right: "8%",
          containLabel: true,
          //  show:true,
        },
        //工具栏
        toolbox: {
          show: true,
          feature: {
            // saveAsImage: {},
            //  dataZoom:{}
          },
        },
        xAxis: {
          type: "category",
          boundaryGap: false,
          data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
          name: "我是横坐标",
          nameLocation: "middle",
          nameTextStyle: {
            color: "#fff",
            fontSize: "20px",
          },
          nameGap: 40,
          axisLine: {
            lineStyle: {
              color: "#fff",
            },
          },
          axisTick: {
            show: true,
            inside: true,
            lineStyle: {
              type: "dashed",
            },
          },
        },
        yAxis: {
          type: "value",
          splitLine: {
            //网格线
            lineStyle: {
              type: "dashed", //设置网格线类型 dotted：虚线   solid:实线
              color: ["rgba(43,70,126,1)"],
              width: 2,
            },
            show: true, //隐藏或显示
          },
          show: true,
          name: "我是纵坐标",
          nameLocation: "middle",
          nameTextStyle: {
            color: "#fff",
            fontSize: "20px",
          },
          nameGap: 60,
          axisLine: {
            lineStyle: {
              color: "#fff",
            },
          },
          axisTick: {
            inside: true,
            lineStyle: {
              // type:'dashed',
              // type: [500, 1000],
              // dashOffset:1000
            },
          },
        },
        series: [
          {
            name: "Email",
            type: "line",
            stack: "Total",
            // smooth: true,
            showSymbol: false,
            data: [120, 132, 101, 134, 90, 230, 210],
          },
          {
            name: "Union Ads",
            type: "line",
            stack: "Total",
            // smooth: true,
            showSymbol: false,
            data: [220, 182, 191, 234, 290, 330, 310],
          },
          {
            name: "Video Ads",
            type: "line",
            stack: "Total",
            // smooth: true,
            showSymbol: false,
            data: [150, 232, 201, 154, 190, 330, 410],
          },
          {
            name: "Direct",
            type: "line",
            stack: "Total",
            // smooth: true,
            showSymbol: false,
            data: [320, 332, 301, 334, 390, 330, 320],
          },
          {
            name: "Search Engine",
            type: "line",
            stack: "Total",
            // smooth: true,
            showSymbol: false,
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
