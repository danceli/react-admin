import {SET_SIDER_COLLAPSED ,SET_SIDERBAR_LOGO } from '../action-type'

const initState={
  SiderCollapsed:false,
  siderBarLogo:true
}

function reducer(state=initState,action){
  switch (action.type) {
    case SET_SIDER_COLLAPSED:
      return {
        ...state,
        SiderCollapsed:action.Collapsed
      }
    case SET_SIDERBAR_LOGO:
      return {
        ...state,
        siderBarLogo:action.block
      }
    default:
      return state
  }
}
export default reducer;
