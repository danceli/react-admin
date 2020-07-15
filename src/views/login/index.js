import React from 'react'
import {Redirect} from 'react-router-dom';
import {connect} from 'react-redux'
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import { Form, Input, Button,message} from 'antd'
import {LoadingOutlined} from '@ant-design/icons'
import './login.less'
import Fetch from '@/utils/fetch'
import jwt from 'jwt-decode';
import {GET_USER,SET_USER_TOKEN} from '@/store/action-type.js'

function Login(props){
  const redirect=props.location.state.redirect || '/'
  const {token}=props.user
  if(token){
    return <Redirect to={redirect} />
  }
  const onFinish=async (value)=>{
    //登陆处理
    let res=await Fetch.getUser(value);
    if(res.data.success){//success
      message.success('登录成功');
      //save ls
      const {token}=res.data;
      localStorage.setItem('eleToken',token);
      const decode=jwt(token);
      // save redux
      props.getUser(decode);
      props.setToken(token);
      //跳转是首页
      // props.history.push('/');
    }else{//faid
      message.error('登录失败，请检查网络');
    }
  }
  return (
    <div className="login-container">
      <div className="form-container">
        <Form
          name="normal_login"
          className="login-form"
          initialValues={{ remember: true }}
          onFinish={onFinish}
        >
          <Form.Item
            name="username"
            rules={[{ required: true, message: 'Please input your Username!' }]}
          >
            <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
          </Form.Item>
          <Form.Item
            name="password"
            rules={[{ required: true, message: 'Please input your Password!' }]}
          >
            <Input
              prefix={<LockOutlined className="site-form-item-icon" />}
              type="password"
              placeholder="Password"
            />
          </Form.Item>

          <Form.Item>
            <Button type="primary" htmlType="submit" className="login-form-button">
              Log in
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  )
}
export default connect((state,props)=>(state),{
  getUser(userinfo){
    return {
      type:GET_USER,userinfo
    }
  },
  setToken(token){
    return {
      type:SET_USER_TOKEN,
      token
    }
  }
})(Login)
