import React from 'react';
import {Tooltip } from 'antd'
import {SettingOutlined} from '@ant-design/icons'
import {SET_RIGHT_PANEL} from '@/store/action-type.js'
import {connect} from 'react-redux';

import './index.less'
const Settings = (props)=>{
  const setPanelVisible = ()=>{
    props.set_panel(true)
  }
  return (
    <div className="setting-container">
      <Tooltip placement="bottom" title="系统设置">
        <SettingOutlined className="settings-icon" onClick={setPanelVisible}/>
      </Tooltip>
    </div>
  )
}
export default connect(state=>state,{
  set_panel(show){
    return {
      type:SET_RIGHT_PANEL,
      show
    }
  }
})(Settings);
