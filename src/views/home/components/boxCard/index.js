import React from 'react';
import {Card, Progress} from 'antd';
import './index.less';
import PanThumb from '@/components/panThumb/'
const BoxCard = () => {
  return (
    <div className="box-card-container">
      <Card style={{width:'100%',height:'540px'}} cover={<img src="https://wpimg.wallstcn.com/e7d23d71-cf19-4b90-a1cc-f56af8c0903d.png" loading="true"/>}>
        <div style={ {position:'relative'} }>
          <PanThumb className="panThumb" />
          <div className="process-item">
            <span>Vue</span>
            <Progress percent={70} status="active" />
          </div>
          <div className="process-item">
            <span>React</span>
            <Progress percent={60} status="active" />
          </div>
          <div className="process-item">
            <span>JavaScript</span>
            <Progress percent={50} status="active" />
          </div>
        </div>
      </Card>

    </div>
  )
}
export default BoxCard;
//http://yxhlxy.icu:8080/img/background.81db5164.jpg
