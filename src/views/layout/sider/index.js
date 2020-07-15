import React from 'react'
import {Layout} from 'antd';
import Logo from './logo'
import Menu from './menu/'
import {connect} from 'react-redux';
const {Sider} = Layout;

function LayoutSider(props){
  const {SiderCollapsed,siderBarLogo}= props.settings
  return (
    <Sider
      collapsible
      trigger={null}
      collapsed={SiderCollapsed}>
        {siderBarLogo ? <Logo /> : null}
        <Menu />
    </Sider>
  )
}
export default connect((state)=>state)(LayoutSider)
