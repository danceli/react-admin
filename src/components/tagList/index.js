import React,{createRef} from 'react';
import {Tag} from 'antd';
import {connect} from 'react-redux';
import { Scrollbars } from 'react-custom-scrollbars';
import {withRouter} from 'react-router-dom';
import './index.less'
import {DELETE_TAG,EMPTY_TAGLIST,CLOSE_OTHER_TAGRS} from '@/store/action-type.js'
// import menuList from '@/config/menuConfig';

class TagList extends React.Component{
  constructor(...args){
    super(...args);
    this.tagListContainer = createRef();
    this.menuContainer = createRef();
    this.state={
      menuVisible:false,
      x:0,y:0
    }
  }
  handleClick = (item)=>{
    const {path} = item;
    this.props.history.push(path);
  }
  handleClose = (tag) => {
    const {tagList} = this.props.tagsView;
    const path = tag.path;
    const {pathname} = this.props.location;
    const length = tagList.length;
    if (path === pathname){  //如果关闭的是当前页，则跳转到最后一页
      this.props.history.push(tagList[length-1].path)
    }
    if (path === tagList[length-1].path && pathname === tagList[length-1].path) {                  //如果关闭的是最后一页，则跳转到最后一页前一夜[tagList.length-2]
        this.props.history.push(tagList[length-2].path);
    }
    this.props.removeTag(tag);
  }
  openContextMenu = (tag,ev) => {
    this.setState({
      menuVisible:true
    })
    //计算并设置contextMenu的位置，
    const menuWidth = 100;
    const {pageX,pageY} = ev;
    const maxLeft = this.tagListContainer.current.clientWidth - menuWidth ;  //左侧边界
    if (pageX > maxLeft) {//需要放到鼠标左边
      this.setState({
        x:pageX - maxLeft,
        y:pageY,
        currentTag:tag
      })
    } else {        //放右边
      this.setState({
        x:pageX,
        y:pageY,
        currentTag:tag
      })
    }
    ev.preventDefault();
  }
  handleClickOutside = (ev)=> {
    const {menuVisible} = this.state;
    const isOutside = !(this.menuContainer.current && this.menuContainer.current.contains(ev.target));
    if(isOutside && menuVisible){
      this.closeMenu();
    }
  }
  closeMenu = ()=> {
    this.setState({
      menuVisible:false
    })
  }
  handleCLoseOther = ()=> {
    const {currentTag} = this.state;
    this.props.history.push(currentTag.path);
    this.props.closeOtherTags(currentTag);

    this.closeMenu();
  }
  handleCloseAll = () => {
    this.props.emptyTagList();
    this.props.history.push('/home');
    this.closeMenu();
  }
  componentDidMount(){
    document.body.addEventListener('click',this.handleClickOutside);
  }
  componentWillUnmount () {
    document.body.removeEventListener('click',this.handleClickOutside);
  }
  render(){
    const {pathname} = this.props.location;
    const {tagList} = this.props.tagsView;
    const left = this.state.x;
    const top = this.state.y;
    return (
      <>
        <Scrollbars autoHide autoHideTimeout={1000} autoHideDuration={200} hideTracksWhenNotNeeded={true}
          renderView={(props) => (
            <div {...props} className="scrollbar-container" />
          )}
          renderTrackVertical={(props) => (
            <div {...props} className="scrollbar-track-vertical" />
          )}>

          <ul className="tag-list" ref={this.tagListContainer}>
            {tagList.map(item=>(<li key={item.path}><Tag onContextMenu={this.openContextMenu.bind(null,item)} onClose={this.handleClose.bind(null,item)} closable={item.path!=='/home'} color={pathname===item.path ? 'pink':'gold'} onClick={this.handleClick.bind(null,item)}>{item.title}</Tag></li>))}
          </ul>
        </Scrollbars>
        {this.state.menuVisible ? <ul ref={this.menuContainer} className="contextMenu" style={{left:left,top:top}}>
            <li onClick={this.handleCLoseOther}>关闭其他</li>
            <li onClick={this.handleCloseAll}>关闭所有</li>
          </ul> : null}
      </>
    )
  }
}
export default connect(state=>(state),{
  removeTag(tag){
    return {
      type:DELETE_TAG,
      tag
    }
  },
  emptyTagList(){
    return {
      type:EMPTY_TAGLIST
    }
  },
  closeOtherTags(tag){
    return {
      type:CLOSE_OTHER_TAGRS,
      tag
    }
  }
})(withRouter(TagList));
