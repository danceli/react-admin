import {SET_RIGHT_PANEL} from '@/store/action-type.js'
const initState={
  sidebarCollapsed: false,
  settingPanelVisible: false,
}
export default function(state=initState,action){
  switch (action.type) {
    case SET_RIGHT_PANEL:
      return {
        ...state,
        settingPanelVisible:action.show || action.hidden
      }
    default:
      return state
  }
}
