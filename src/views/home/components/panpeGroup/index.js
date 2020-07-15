import React from 'react'
import {Row,Col} from 'antd';
import './index.less'
import { createFromIconfontCN } from '@ant-design/icons';
const IconFont = createFromIconfontCN({
  scriptUrl: '//at.alicdn.com/t/font_1864228_426cbtj7e7f.js',
});
const panleList = [
  {
    type: 'New Visits',
    icon: 'icon-user' ,
    num: 123012,
    color:'#40c9c6'
  },
  {
    type: 'Messages',
    icon: 'icon-xiaoxi' ,
    num: 9600,
    color:'#36a3f7'
  },
  {
    type: 'Purchases',
    icon: 'icon-tianmaohuodaofukuan' ,
    num: 123012,
    color:'#f4516c'
  },{
    type: 'Shoppings',
    icon: 'icon-31gouwuche' ,
    num: 10000,
    color:'#f6ab40'
  }
]
const PanleGroup = (props) => {
  return (
    <div className="panpeGroup-container">
      <Row gutter={40} className="row-container">
        {panleList.map(item=>(
          <Col key={item.type} lg={6} sm={12} xs={12} className="col-container" onClick={props.handleSelectSetCharData.bind(this,item.type)}>
            <div className="card-panel">
              <div className="card-panel-icon">
                <IconFont type={item.icon} style={{color:item.color,fontSize:60}}/>
              </div>
              <div className="card-panel-describe">
                <p className="card-panel-describe-title">{item.type}</p>
                <span className="card-panel-describe-num">{item.num}</span>
              </div>
            </div>
          </Col>
        ))}
      </Row>
    </div>
  )
}
export default PanleGroup;
