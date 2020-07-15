import React from 'react'
import echarts from 'echarts';
import 'echarts/theme/macarons.js'
import {debounce} from '@/utils/'
class PieChart extends React.Component {
  constructor (...args) {
    super(...args);
    this.state={
      chart:null
    }
  }
  setOption = ()=> {
    this.state.chart.setOption({
      tooltip: {
        trigger:'item',
        formatter: "{a} <br/>{b} : {c} ({d}%)"
      },
      legend:{
        bottom:'10',
        left:'center',
        data:["Industries", "Technology", "Forex", "Gold", "Forecasts"]
      },
      series: [
        {
          name:'WEEKLY WRITE ARTICLES',
          type: 'pie',
          radius: [15,95],
          center: ['50%','40%'],
          roseType: 'radius',
          label: {
            show: true
          },
          emphasis: {
            label: {
              show: true
            }
          },
          data: [
            { value: 320, name: "Industries" },
            { value: 240, name: "Technology" },
            { value: 149, name: "Forex" },
            { value: 100, name: "Gold" },
            { value: 59, name: "Forecasts" },
          ],
          animationDuration :2000,
          animationEasing:'cubicInOut'
        }
      ]
    })
  }
  initChart = ()=> {
    if(!this.el)return;
    this.setState({chart: echarts.init(this.el,"macarons")},()=> {
      this.setOption();
    })
  }
  componentDidMount () {
    debounce(this.initChart.bind(this),300)()
  }
  render () {
    return (
      <div ref={el=>this.el=el} style={{width:'100%',height:'300px'}}>aaa</div>
    )
  }
}
export default PieChart
