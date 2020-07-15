import {GET_USER,SET_USER_TOKEN,RESET_USER} from '@/store/action-type.js'
import {getToken} from '@/utils/auth.js'
const initState={
  name:'',
  token:getToken(),
  identity:'',
  avatar:''
}
export default function(state=initState,action){
  switch (action.type) {
    case GET_USER:
      return {
        ...state,
        name:action.userinfo.username,
        identity:action.userinfo.identity
      }
    case SET_USER_TOKEN:
      return {
        ...state,
        token:action.token
      }
    case RESET_USER:
      return {
        
      }
    default:
      return state
  }
}
