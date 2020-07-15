import React from 'react';
import {Drawer,Switch,Divider } from 'antd';
import {connect} from 'react-redux'
import {SET_RIGHT_PANEL,SET_SIDERBAR_LOGO} from '@/store/action-type.js'
import './index.less';
const RightPanel = (props)=>{
  const {settingPanelVisible}=props.app;
  const onClose = ()=>{
    props.setPanel(false)
  }
  const siderLogotrigger = (e)=>{
    props.chageSiderLogo(e)
  }
  return (
    <div className="panel-container">
      <Drawer
        title="系统设置"
        placement="right"
        closable={true}
        onClose={onClose}
        visible={settingPanelVisible}
        >
        <div className="setting-container">
          <div className="setting-item">
            <span className="item-title">侧边栏Logo</span>
            <Switch defaultChecked checkedChildren="开启" unCheckedChildren="关闭" onChange={siderLogotrigger}/>
          </div>
          <Divider dashed className="hr"/>
          <div className="setting-item">
            <span className="item-title">固定Header</span>
            <Switch checkedChildren="开启" unCheckedChildren="关闭" onChange={siderLogotrigger}  />
          </div>
          <Divider dashed className="hr"/>
          <div className="setting-item">
            <span className="item-title">开启Tag-views</span>
            <Switch checkedChildren="开启" unCheckedChildren="关闭" onChange={siderLogotrigger} />
          </div>
          <Divider dashed className="hr"/>
        </div>

      </Drawer>
    </div>
  )
}
export default connect(state=>state,{
  setPanel(hidden){
    return {
      type:SET_RIGHT_PANEL,
      hidden
    }
  },
  chageSiderLogo(block){
    return {
      type:SET_SIDERBAR_LOGO,
      block
    }
  }
})(RightPanel);
