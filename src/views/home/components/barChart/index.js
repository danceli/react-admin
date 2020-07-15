import React from 'react';
import echarts from 'echarts';
import 'echarts/theme/macarons.js';
import {connect} from 'react-redux';
import {debounce} from '@/utils/'
class BarChart extends React.Component {
  constructor (...args) {
    super(...args);
    this.state = {
      chart: null
    }
  }
  setOptions = ()=> {
    this.state.chart.setOption({
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'shadow'
        }
      },
      grid: {
        top: 10,
        left: "2%",
        right: "2%",
        bottom: "3%",
        containLabel: true
      },
      xAxis: [
        {
          type: 'category',
          data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
          axisTick: {
            alignWithLabel :true
          }
        }
      ],
      yAxis: [
        {type: 'value',axisTick: {show: false}}
      ],
      series: [
        {
          name: 'pageA',
          type: 'bar',
          stack: 'vistors',
          barWidth: '60%',
          data: [79, 52, 200, 334, 390, 330, 220],
        },
        {
          name: 'pageB',
          type: 'bar',
          stack: 'vistors',
          barWidth: '60%',
          data: [80, 52, 200, 334, 390, 330, 220],
        },
        {
          name: 'pageC',
          type: 'bar',
          stack: 'vistors',
          barWidth: '60%',
          data: [30, 52, 200, 334, 390, 330, 220],
        }
      ]

    })
  }
  initChart = () => {
    if(!this.el)return;
    this.setState( {chart: echarts.init(this.el,"macarons")} , ()=> {
      this.setOptions();
    });
  }
  componentDidMount () {
    debounce(this.initChart.bind(this),300)();
  }
  render () {
    return (
      <div style={{width:'100%',height:'300px'}} ref={el=> this.el = el}>

      </div>
    );
  }
}
export default connect(state=>state)(BarChart);
