import React from 'react'
import echarts from 'echarts';
import {connect} from 'react-redux';
import {debounce} from '@/utils/'
class LineChart extends React.Component {
  constructor(...args) {
    super(...args)
    this.state={
      chart:null,
      computedWidth:100
    }
  }
  componentDidMount() {
    debounce(this.initChart.bind(this),300)()
    window.addEventListener('resize',()=>this.resize());
  }
  componentWillReceiveProps (nextProps) {
    // const isColled = this.props.settings.SiderCollapsed;
    if(this.props.settings.SiderCollapsed != nextProps.settings.SiderCollapsed){
      this.resize();
    }
    if (this.props != nextProps){
      debounce(this.initChart.bind(this), 300)();
    }
  }
  setOptions = ({actualData,expectedData}={})=>{
    this.state.chart.setOption({
      backgroundColor: "#fff",
      xAxis: {
        data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
        boundaryGap: false,
        axisTick: {
          show: false,
        },
      },
      grid: {
        left: '2%',
        right: '2%',
        bottom: '2%',
        top:'8%',
        containLabel: true,
      },
      tooltip: {
        trigger: "axis",
        axisPointer: {
          type: "cross",
        },
        padding: [5, 10],
      },
      yAxis: {
        axisTick: {
          show: false,
        },
      },
      legend: {
        data: ["expected", "actual"],
      },
      series: [
        {
          name: "expected",
          itemStyle: {
            normal: {
              color: "#FF005A",
              lineStyle: {
                color: "#FF005A",
                width: 2,
              },
            },
          },
          smooth: true,
          type: "line",
          data: expectedData,
          animationDuration: 2800,
          animationEasing: "cubicInOut",
        },
        {
          name: "actual",
          smooth: true,
          type: "line",
          itemStyle: {
            normal: {
              color: "#3888fa",
              lineStyle: {
                color: "#3888fa",
                width: 2,
              },
              areaStyle: {
                color: "#f3f8ff",
              },
            },
          },
          data: actualData,
          animationDuration: 2800,
          animationEasing: "quadraticOut",
        },
      ],
    }
);
  }
  initChart () {
    if(!this.el) return ;
    this.setState({ chart: echarts.init(this.el,"macarons") }, ()=>{
      this.setOptions(this.props.lineChartData);
    })
  }
  resize () {
    const chart = this.state.chart;
    if (chart) {
      debounce(chart.resize.bind(this),300)();
    }
  }
  componentWillUnmount() {
    this.dispose();
  }
  dispose = () => {
    const chart = this.state.chart;
    if(!chart)return;
    window.removeEventListener('resize',()=>this.resize());
    this.setState({chart:null})
  }
  render() {
    return (
      <div ref={(el)=>(this.el = el)} style={{width:'100%',height:'350px',marginTop:'20px'}}>

      </div>
    )
  }
}
export default connect(state=>state)(LineChart);
//
// {
//   backgroundColor: "#fff",
//   xAxis: {
//     data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
//     boundaryGap: false,
//     axisTick: {
//       show: false,
//     },
//   },
//   grid: {
//     left: '2%',
//     right: '2%',
//     bottom: '2%',
//     top:'8%',
//     containLabel: true,
//   },
//   tooltip: {
//     trigger: "axis",
//     axisPointer: {
//       type: "cross",
//     },
//     padding: [5, 10],
//   },
//   yAxis: {
//     axisTick: {
//       show: false,
//     },
//   },
//   legend: {
//     data: ["expected", "actual"],
//   },
//   series: [
//     {
//       name: "expected",
//       itemStyle: {
//         normal: {
//           color: "#FF005A",
//           lineStyle: {
//             color: "#FF005A",
//             width: 2,
//           },
//         },
//       },
//       smooth: true,
//       type: "line",
//       data: expectedData,
//       animationDuration: 2800,
//       animationEasing: "cubicInOut",
//     },
//     {
//       name: "actual",
//       smooth: true,
//       type: "line",
//       itemStyle: {
//         normal: {
//           color: "#3888fa",
//           lineStyle: {
//             color: "#3888fa",
//             width: 2,
//           },
//           areaStyle: {
//             color: "#f3f8ff",
//           },
//         },
//       },
//       data: actualData,
//       animationDuration: 2800,
//       animationEasing: "quadraticOut",
//     },
//   ],
// }
