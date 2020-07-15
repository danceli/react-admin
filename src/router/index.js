import React from 'react';
import {BrowserRouter ,Route,Switch} from 'react-router-dom'
import Login from '@/views/login'
import PrivateRoute from '@/components/privateRoute'
import Layout from '@/views/layout/'
function Router(props){
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/login" component={Login}></Route>
        <PrivateRoute path="/" component={Layout} />
      </Switch>
    </BrowserRouter>
  )
}
export default Router
