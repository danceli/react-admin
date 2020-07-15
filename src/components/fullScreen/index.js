import React,{useState,useEffect} from 'react';
import { FullscreenOutlined ,FullscreenExitOutlined} from '@ant-design/icons';
import {Tooltip , message} from 'antd';
import screenfull from 'screenfull';
import './index.less'

const click = () => {
  if (!screenfull.isEnabled) {
    message.warning("you browser can not work");
    return false;
  }
  screenfull.toggle();
};
const FullScreen = (props)=>{
  const [isFull,setIsFull] = useState(false);
  const change = ()=>{
    setIsFull(screenfull.isFullscreen);
  }
  const init = ()=>{//初始化screenfull
    if (screenfull.isEnabled) {
      screenfull.on("change", change);
    }
  }
  useEffect(()=>{
    init();
    return ()=>{
      if (screenfull.isEnabled) {
        screenfull.off("change", change);
      }
    }
  },[])
  const title = isFull ? '取消全屏' : '全屏';
  return (
    <div onClick={click} className="full-container">
      <Tooltip placement="bottom" title={title}>
          {isFull ? <FullscreenOutlined className="fullscreen-icon" /> : <FullscreenExitOutlined className="fullscreen-icon" />}
      </Tooltip>
    </div>
  )
}
export default FullScreen;
