import {Route,Redirect} from 'react-router-dom'
import React from 'react'
import {connect} from 'react-redux'

function PrivateRoute({component:Comp,...rest}){
  const isLogin=rest.user.token ? true:false;
  return (
    <Route {...rest} render={props=>(isLogin ? <Comp /> : <Redirect to={{pathname:'/login',state:{redirect:props.location.pathname}}} />)}/>
  )
}
export default connect((state,props)=>(state))(PrivateRoute)
