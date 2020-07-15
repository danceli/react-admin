import React from 'react'
import logoImg from '@/assets/images/atom.svg'
import './index.less'
function Logo(){
  return (
    <div className="sider-logo-container">
      <img className="sider-logo-img" src={logoImg}/>
      <h1 className="sider-logo-title">天道酬勤</h1>
    </div>
  )
}
export default Logo
