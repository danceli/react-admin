import React from 'react';
import {Avatar} from 'antd';
import './index.less';
const PanThumb = (props) => {
  return (
    <div className="avatarItem">
      <Avatar className="avatarImg" size={50} src="http://yxhlxy.icu:8080/img/avatar.jpg" />
    </div>
  )
}
export default PanThumb;
