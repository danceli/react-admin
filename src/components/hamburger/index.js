import React from 'react';
import {MenuFoldOutlined ,MenuUnfoldOutlined} from '@ant-design/icons'
import {connect} from 'react-redux';
import './index.less'
  // {siderCollapsed ? <MenuUnfoldOutlined className="collapsible-icon" /> : <MenuFoldOutlined className="collapsible-icon" />}
import {SET_SIDER_COLLAPSED} from '@/store/action-type.js'
const Hamburger = (props)=>{
  const {SiderCollapsed} = props.settings;
  //修改settings里面的配置
  const toggleSiderBar = ()=>{
    props.setSiderCollapsed(!SiderCollapsed);
  }
  return (
    <span onClick={toggleSiderBar}>
      {SiderCollapsed ? <MenuUnfoldOutlined className="collapsible-icon"/> : <MenuFoldOutlined className="collapsible-icon" /> }
    </span>
  )
}
export default connect((state)=>state,{
  setSiderCollapsed(Collapsed){
    return {
      type:SET_SIDER_COLLAPSED,
      Collapsed
    }
  }
})(Hamburger)
