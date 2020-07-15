import React from 'react'
import echarts from 'echarts';
import 'echarts/theme/macarons.js'
import {debounce} from '@/utils/';
import {connect} from 'react-redux';
class RadarChart extends React.Component {
  constructor(...args) {
    super(...args)
    this.state={
      chart:null
    }
  }
  componentDidMount () {
    debounce(this.initChart(),300);
    window.addEventListener('resize',()=>this.resize());
  }
  componentWillReceiveProps(nextProps) {
    if (this.props.settings.SiderCollapsed != nextProps.settings.SiderCollapsed) {
      this.resize();
    }
  }
  setOptions = ()=> {
    this.state.chart.setOption({
      legend: {
        left:'center',
        bottom: '10',
        data: ['Allcated Budget','Expected Spending','Actual Spending']
      },
      tooltip: {
        trigger: "axis",
        axisPointer: {
          // 坐标轴指示器，坐标轴触发有效
          type: "shadow", // 默认为直线，可选为：'line' | 'shadow'
        },
      },
      radar: {
        center: ['50%','45%'],
        radius: '60%',
        splitNumber: 8,
        splitArea: {
          areaStyle: {
            color: "rgba(127,95,132,.3)",
            opacity: 1,
            shadowBlur: 45,
            shadowColor: "rgba(0,0,0,.5)",
            shadowOffsetX: 0,
            shadowOffsetY: 15,
          }
        },
        indicator: [
          { name: "Sales", max: 10000 },
          { name: "Administration", max: 20000 },
          { name: "Information Techology", max: 20000 },
          { name: "Customer Support", max: 20000 },
          { name: "Development", max: 20000 },
          { name: "Marketing", max: 20000 },
        ]
      },
      series: [
        {
          type: 'radar',
          symbolSize: 0,
          areaStyle: {
            shadowBlur: 13,
            shadowColor: "rgba(0,0,0,.2)",
            shadowOffsetX: 0,
            shadowOffsetY: 10,
            opacity: 1,
          },
          data: [
            {
              value: [5000, 7000, 12000, 11000, 15000, 14000],
              name: "Allcated Budget",
            },
            {
              value: [4000, 9000, 15000, 15000, 13000, 11000],
              name: "Expected Spending",
            },
            {
              value: [5500, 11000, 12000, 15000, 12000, 12000],
              name: "Actual Spending",
            },
          ],
        }
      ]
    });
  }
  initChart () {
    if(!this.el) return;
    this.setState({chart: echarts.init(this.el,'macarons')},()=> {
      this.setOptions();
    })
  }
  resize = () => {
    const chart = this.state.chart;
    if(chart) {
      debounce(chart.resize(),300);
    }
  }
  componentWillReceiveProps () {
    this.dispose()
  }
  dispose = () => {
    const chart = this.state.chart;
    if (!chart)return;
    window.removeEventListener('resize',()=>this.resize())
    this.setState({chart:null})
  }
  render () {
    return (
      <div className="radarChart-container" ref={el=>this.el=el} style={{width:'100%',height:'300px'}}></div>
    )
  }
}
export default connect(state=>state)(RadarChart)
// {
//   tooltip: {
//     trigger: "axis",
//     axisPointer: {
//       // 坐标轴指示器，坐标轴触发有效
//       type: "shadow", // 默认为直线，可选为：'line' | 'shadow'
//     },
//   },
//   radar: {
//     radius: "66%",
//     center: ["50%", "42%"],
//     splitNumber: 8,
//     splitArea: {
//       areaStyle: {
//         color: "rgba(127,95,132,.3)",
//         opacity: 1,
//         shadowBlur: 45,
//         shadowColor: "rgba(0,0,0,.5)",
//         shadowOffsetX: 0,
//         shadowOffsetY: 15,
//       },
//     },
//     indicator: [
//       { name: "Sales", max: 10000 },
//       { name: "Administration", max: 20000 },
//       { name: "Information Techology", max: 20000 },
//       { name: "Customer Support", max: 20000 },
//       { name: "Development", max: 20000 },
//       { name: "Marketing", max: 20000 },
//     ],
//   },
//   legend: {
//     left: "center",
//     bottom: "10",
//     data: ["Allocated Budget", "Expected Spending", "Actual Spending"],
//   },
//   series: [
//     {
//       type: "radar",
//       symbolSize: 0,
//       areaStyle: {
//         normal: {
//           shadowBlur: 13,
//           shadowColor: "rgba(0,0,0,.2)",
//           shadowOffsetX: 0,
//           shadowOffsetY: 10,
//           opacity: 1,
//         },
//       },
//       data: [
//         {
//           value: [5000, 7000, 12000, 11000, 15000, 14000],
//           name: "Allocated Budget",
//         },
//         {
//           value: [4000, 9000, 15000, 15000, 13000, 11000],
//           name: "Expected Spending",
//         },
//         {
//           value: [5500, 11000, 12000, 15000, 12000, 12000],
//           name: "Actual Spending",
//         },
//       ],
//       animationDuration:2000,
//     },
//   ],
// }
