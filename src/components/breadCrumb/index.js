import React from 'react';
import {Breadcrumb } from 'antd';
import {withRouter} from 'react-router-dom';
import './index.less'
import menuList from '@/config/menuConfig'
//根据历览器的pathname 从menuConfig中找到相应的路由信息  并返回menuConfig数组中的一个json子元素
// 如果是嵌套路由的话如/permission/adminPage 则返回{title:permission}{,title:adminPage}
const getPath = (menuList,pathname)=>{
  let tempPath=[];
  try {
    function getNodes(node){
      tempPath.push(node)
      if(node.path === pathname){//相等的话
        throw new Error('GET IT')
      }
      if(node.children && node.children.length>0){
        node.children.forEach(citem=>{
          getNodes(citem);
        })
        tempPath.pop();   //子元素里面没有找到就删除
      }else{
        tempPath.pop();   //找到子节点时，删除路径当中的该子节点
      }

    }
    menuList.forEach(item=>{
      getNodes(item);
    })
  } catch(e) {
    return tempPath
  }
}

const BreadC = (props)=>{
  const {pathname} = props.location;
  let breads = getPath(menuList,pathname);
  return (
    <div className="breadcrumb-container">
      <Breadcrumb>
        <Breadcrumb.Item><a href="/home">首页</a></Breadcrumb.Item>
        {breads ? (breads.map((item)=>(item.title!=='首页' ? <Breadcrumb.Item key={item.title}>{item.title}</Breadcrumb.Item> : null))) : (null)}
      </Breadcrumb>
    </div>
  )
}
export default withRouter(BreadC);
