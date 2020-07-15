import React,{useState} from 'react';
import {Link} from 'react-router-dom';
import {Layout,Dropdown , Menu,Avatar,Modal} from 'antd';
import './index.less'
import {CaretDownOutlined} from '@ant-design/icons'
import {connect} from 'react-redux';
import Hamburger from '@/components/hamburger/'
import FullScreen from '@/components/fullScreen/'
import Settings from '@/components/settings/'
import {RESET_USER} from '@/store/action-type.js'
import Breadcrumb from '@/components/breadCrumb/'
const {Header} = Layout;
const LayoutHeader = (props)=>{
  const {SiderCollapsed} = props.settings
  const [menuVisible,setMenuVisible]=useState(false);
  // const computedStyle= ()=>{
  //   let style=null;
  //   if(SiderCollapsed){
  //     style={
  //       width:"calc(100% - 80px)"
  //     }
  //   }else{
  //     style={
  //       width:"calc(100% - 0px)"
  //     }
  //   }
  //   return style
  // }
  // computedStyle();
  const handleMenuClick = (e)=>{
    if(e.key==='3'){//注销logout
      Modal.confirm({
        content:'你确定要退出本系统吗？',
        okText:'确定',
        cancelText:'取消',
        title:'注销',
        onOk:()=>{
          localStorage.removeItem('eleToken')
          props.logout()
        }
      })
    }
  }
  const menu = (
    <Menu onClick={handleMenuClick }>
      <Menu.Item key="1"><Link to="/">首页</Link></Menu.Item>
      <Menu.Item key="2">项目地址</Menu.Item>
      <Menu.Divider />
      <Menu.Item key="3">注销</Menu.Item>
    </Menu>
  )
  const changeVisible = (e)=>{
    setMenuVisible(e)
  }
  return (
    <Header className="site-layout-background">
      <Hamburger />
      <Breadcrumb />
      <div className="right-menu">
        <FullScreen />
        <Settings />
        <Dropdown
          overlay={menu}
          visible={menuVisible}
          placement="bottomCenter"
          onVisibleChange={changeVisible}
        >
          <div className="menu-icon" onClick={e => e.preventDefault()}>
              <Avatar src="../../../assets/images/avatar.jpg" /><CaretDownOutlined/>
          </div>
        </Dropdown>
      </div>
    </Header>
  )
}
export default connect(state=>state,{
  logout(){
    return {
      type:RESET_USER
    }
  }
})(LayoutHeader);
// {<a className="ant-dropdown-link" onClick={e => e.preventDefault()}>
//   Hover me <DownOutlined />
// </a>}
