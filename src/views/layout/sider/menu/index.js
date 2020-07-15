import React,{useState} from 'react'
import menuList from '@/config/menuConfig';
import {Link ,withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import { Scrollbars } from 'react-custom-scrollbars'
import {Menu} from 'antd';
import {createFromIconfontCN } from '@ant-design/icons'
import './index.less'
import {ADD_TAG} from '@/store/action-type.js'
const SubMenu=Menu.SubMenu;
const IconFont=createFromIconfontCN({
  scriptUrl:'//at.alicdn.com/t/font_1864228_426cbtj7e7f.js'
})

let getMenuItem = (menuLists,key) => {
  let curPath=null;
  for(let i=0;i<menuLists.length;i++){
    if(menuLists[i].path === key){
      curPath = menuLists[i];
    }
    if(curPath===null){
      if(menuLists[i].children){
        curPath = getMenuItem(menuLists[i].children,key)
      }
    }
  }
  return curPath
}
class LayoutMenu extends React.Component {
  constructor(...args) {
    super(...args);
    this.state={
      openKey:[],
      menuTreeNode:null
    }
  }
  //渲染menu列表
  getMenus = (menuList)=>{
    const path = this.props.location.pathname;//得到当前的路径
    return menuList.reduce((pre,item)=>{
      if(item.children){
        //查找与当前路径匹配的子cItem
        const cItem = item.children.find((cItem) => path.indexOf(cItem.path) === 0);
        //如果存在说明还有子列表需要打开
        if(cItem){
          this.setState((state) => ({
            openKey: [...state.openKey, item.path],
          }));
        }
        // 向pre添加<SubMenu>
        pre.push(
          <SubMenu
            key={item.path}
            title={
              <span>
                {item.icon ? <IconFont  type={item.icon} /> : null}
                <span>{item.title}</span>
              </span>
            }
          >
            {this.getMenus(item.children)}
          </SubMenu>
        );
      }else{
        pre.push(
          <Menu.Item key={item.path}>
            <Link to={item.path}>
              {item.icon ? <IconFont  type={item.icon} /> : null}
              <span>{item.title}</span>
            </Link>
          </Menu.Item>
        );
      }
      return pre;
    },[])

  }
  handleMenuSelect = ({key})=>{
    //根据item.key找到唉menuList中的元素
    let cur = getMenuItem(menuList,key);
    this.props.addTag(cur);
  }
  componentWillMount(){
    const treeNode = this.getMenus(menuList);
    this.setState({
      menuTreeNode:treeNode
    })
    //将默认的首页添加进去
    this.props.addTag(menuList[0]);
  }
  render(){
    const openKey=this.state.openKey;
    const path = this.props.location.pathname;
    return (
      <div className="menu-container">
        <Scrollbars autoHide autoHideTimeout={1000} autoHideDuration={200}>
          {this.state.menuTreeNode.map((item,index)=>(
            <Menu mode="inline" theme="dark" defaultOpenKeys={openKey} selectedKeys={[path]} key={index} onSelect={this.handleMenuSelect}>
              {item}
            </Menu>
          ))}
        </Scrollbars>
      </div>
    )
  }
}
// const LayoutMenu=(props)=>{
//
//   const path=props.location.pathname;
//   const [openKey,setOpenKey]=useState(['/home']);
//   //renderMenu
//   const getMenus=(menuList) => {
//     return menuList.map((item,index)=>{
//       if(item.children){
//         const cItem = item.children.find(
//             (cItem) => path.indexOf(cItem.path) === 0
//         );
//         if(cItem){
//           setOpenKey([...openKey,item.path])
//         }
//         return (<SubMenu key={item.path} title={item.title} icon={<IconFont type={item.icon} />}>
//           {getMenus(item.children)}
//         </SubMenu>)
//       }else{
//         return (
//           <Menu.Item key={item.path}>
//             <Link to={item.path}>
//               {item.icon ? <IconFont type={item.icon} /> : null}
//               <span>{item.title}</span>
//             </Link>
//           </Menu.Item>)
//       }
//     })
//   }
//   const handSelect = (item)=>{
//     // console.log(item)
//   }
//   const onOpenChange = (openKeys) => {
//     const latestOpenKey = openKeys.find(key => this.state.openKeys.indexOf(key) === -1);
//       if (this.rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
//         this.setState({ openKeys });
//       } else {
//         this.setState({
//           openKeys: latestOpenKey ? [latestOpenKey] : [],
//         });
//       }
//   );
//   return (
//     <div className="menu-container">
//       <Scrollbars autoHide autoHideTimeout={1000} autoHideDuration={200}>
//         {getMenus(menuList).map((item,index)=>(
//           <Menu mode="inline" theme="dark" onOpenChange={onOpenChange} openKeys={openKeys} key={index} onSelect={handSelect}>
//             {item}
//           </Menu>
//         ))}
//       </Scrollbars>
//     </div>
//   )
// }
export default connect(state=>state,{
  addTag(tag){
    return {
      type:ADD_TAG,
      tag
    }
  }
})(withRouter(LayoutMenu));
