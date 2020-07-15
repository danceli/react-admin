import React from 'react'
import PanpeGroup from './components/panpeGroup/'
import LineChart from './components/lineChart/'
import './index.less';
import {Row,Col} from 'antd';
import RadarChart from './components/radarChart/'
import PieChart from './components/pieChart/'
import BarChart from './components/barChart/'
import TransactionTable from './components/transactionTable/'
import BoxCard from './components/boxCard/'
const lineChartData = {
  "New Visits": {
    expectedData: [100, 120, 161, 134, 105, 160, 165],
    actualData: [120, 82, 91, 154, 162, 140, 145],
  },
  Messages: {
    expectedData: [200, 192, 120, 144, 160, 130, 140],
    actualData: [180, 160, 151, 106, 145, 150, 130],
  },
  Purchases: {
    expectedData: [80, 100, 121, 104, 105, 90, 100],
    actualData: [120, 90, 100, 138, 142, 130, 130],
  },
  Shoppings: {
    expectedData: [130, 140, 141, 142, 145, 150, 160],
    actualData: [120, 82, 91, 154, 162, 140, 130],
  },
};
class Home extends React.Component {
  constructor(...args){
    super(...args);
    this.state= {
      chartData:lineChartData["New Visits"]
    }
  }
  handleSelectSetCharData = (key) => {
    this.setState({
      chartData:lineChartData[key]
    })
  }
  render(){
    return (
      <div className="home-container">
        <PanpeGroup handleSelectSetCharData={this.handleSelectSetCharData}/>
        <LineChart lineChartData={this.state.chartData}/>

        <Row gutter={32}>
          <Col xs={24} sm={24} lg={8}><div className="chart-warpper"><RadarChart /></div></Col>
          <Col xs={24} sm={24} lg={8}><div className="chart-warpper"><PieChart /></div></Col>
          <Col xs={24} sm={24} lg={8}><div className="chart-warpper"><BarChart /></div></Col>
        </Row>
        <Row gutter={16}>
          <Col
            xs={24}
            sm={24}
            md={24}
            lg={12}
            xl={12}>
            <TransactionTable />
          </Col>
          <Col
            xs={24}
            sm={24}
            md={24}
            lg={12}
            xl={12}>
            <BoxCard />
          </Col>
        </Row>
      </div>
    )
  }
}
export default Home
