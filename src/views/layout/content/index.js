import React from 'react'
import {Layout} from 'antd';
import routerList from '@/config/routerList.js'
import {Route,Switch,Redirect,withRouter} from 'react-router-dom'
const {Content} = Layout

const LayoutContent = (props)=>{
  return (
    <Content style={{height:"calc(100% - 100px)"}}>
      <Switch>
        <Redirect exact from="/" to="/home" />
          {routerList.map((item,index)=>(
            <Route path={item.path} component={item.component} key={item.path}></Route>
          ))}
        </Switch>
    </Content>
  )
}
export default withRouter(LayoutContent);
