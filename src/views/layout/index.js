import React from 'react'
import {Layout} from 'antd';
import Sider from './sider'
import Header from './header'
import RightPanel from '@/components/rightPanel/'
import Content from './content/'
import TagsView from './tagsView/'
function Main(props){
  return (
    <Layout style={{minHeight:'100vh'}}>
      <Sider />
      <Layout>
        <Header />
        <TagsView />
        <Content />
        <RightPanel />
      </Layout>
    </Layout>
  )
}
export default Main
