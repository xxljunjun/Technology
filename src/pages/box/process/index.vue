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
        color:['#06BBC4','orange'],
        //标题
        title: {
          show: true,
          text: "2021-08-09 03:45",
          // subtext: "副标题{a|这段文本采用样式a}",
          // link: "http://baidu.com", //路由跳转
          // target: "blank", //self
          textStyle: {
            color: "#06BBC4",
            // rich: {
            //   a: {
            //     color: "red",
            //     lineHeight: 10,
            //   },
            // },
          },
          // subtextStyle: {
          //   color: "#fff",
          //   rich: {
          //     a: {
          //       color: "red",
          //       lineHeight: 10,
          //     },
          //   },
          // },
          // textAlign:'auto',
          // textVerticalAlign:'top'
          // left:'auto',
          right:'25%',
          // bottom:'10%',
          top:'5%'
        },
        //图例
        legend: {
          show: false,
          data: ["Email", "shchool"],
          type: "plain",
          // top: "10%",
          // right:'10%',
          left:'0%',
          bottom:'0%',
          itemHeight: 3,
          itemWidth: 30,
          itemGap: 20,
          inactiveColor: "#000", //关闭时的图例颜色
          // itemStyle:{
          //   color:'red',
          //   borderType :'dotted'
          // },
          // lineStyle:{
          //   color:'green'
          // },
          symbolRotate: "30",
          // 使用字符串模板，模板变量为图例名称 {name}
          // 使用回调函数
          formatter: function (name) {
            return echarts.format.truncateText(
              name,
              40,
              "14px Microsoft Yahei",
              "…"
            );
          },
          tooltip: {
            show: true,
          },
          textStyle: {
            color: "#fff",
          },
          selected: {
            // 选中'系列1'
            Email: true,
            // 不选中'系列2'
            shchool: true,
          },
          // selector: ['all', 'inverse'], //全选和反选功能
          icon: "rect", //'circle', 'rect', 'roundRect', 'triangle', 'diamond', 'pin', 'arrow', 'none'
        },
        //网格
        grid:{
          show:false,
          containLabel:false, //grid 区域是否包含坐标轴的刻度标签
          // top:'10%',
          // left:'10%',
          bottom:'20%',
          right:'10%',
        },
        //提示框
        tooltip: {
          show: true,
          trigger :'axis', //item  axis  none
          // axisPointer:{ //配置坐标轴指示器的快捷方式
          //   type:'cross', //十字坐标指示器
          //   label:{
          //     show:true
          //   }
          // }
        },
        xAxis: {
          show: false ,
          type: "category",
          data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
          axisTick:{
            show:false, //刻度线
            inside:true
          },
          axisLine:{
            show:false //是否显示坐标轴轴线。
          },
          splitLine:{
            show:false //背景网格线
          },
          // name:'横坐标',
          // nameRotate :60,
          axisLabel:{
            // 刻度线的相关设置
            rotate:60,
            
          }
        },
        yAxis:[
        {
          type: "value", 
          show: true ,
          axisTick:{
            show:false,  //刻度线
            inside:true
          },
          axisLine:{
            show:false //是否显示坐标轴轴线。
          },
          splitLine:{
            show:true, //背景网格线
            lineStyle:{
              color:'#333333'
            }
          },
          axisLabel:{
            // 刻度线的相关设置
            rotate:60,
            formatter:'',
          }
          // name:'纵坐标',
        },
        {
          type: "value", 
          show: true ,
          axisTick:{
            show:false,  //刻度线
            inside:true
          },
          axisLine:{
            show:false //是否显示坐标轴轴线。
          },
          splitLine:{
            show:true, //背景网格线
            lineStyle:{
              color:'#333333'
            }
          },
          axisLabel:{
            // 刻度线的相关设置
            rotate:60,
            formatter:'',
          }
          // name:'纵坐标',
        },
        ],
        series: [
          {
            name: "Email",
            data: [150, 230, 224, 218, 135, 147, 260],
            type: "line",
            symbol:'none', //去掉折线图中的节点
            smooth: true,  //true 为平滑曲线，false为直线
            label:{
              show:false,
              position:'insideTop',
            },
            step:false,
            yAxisIndex:0,
          },
          {
            name: "shchool",
            data: [100, 210, 124, 118, 35, 47, 360],
            type: "line",
            symbol:'none', //去掉折线图中的节点
            smooth: true , //true 为平滑曲线，false为直线
            yAxisIndex:1,
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
