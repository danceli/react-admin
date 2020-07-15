import {
  ADD_TAG,
  DELETE_TAG,
  EMPTY_TAGLIST,
  CLOSE_OTHER_TAGRS
} from '../action-type'
const initState = {
  tagList: []
}

function reducer(state = initState, action) {
  switch (action.type) {
    case ADD_TAG:
      if (state.tagList.includes(action.tag)) {
        return {
          ...state
        }
      } else {
        return {
          ...state,
          tagList: [...state.tagList, action.tag]
        }
      }
      case DELETE_TAG:
        const {
          tag
        } = action;
        return {
          ...state,
          tagList: state.tagList.filter(item => item != tag)
        }
      case EMPTY_TAGLIST:
        return {
          ...state,
          tagList:[...state.tagList.filter(tag=>tag.path==='/home')]
        }
      case CLOSE_OTHER_TAGRS:
        return {
          ...state,
          tagList:[...state.tagList.filter(item=>item.path === '/home' ||item === action.tag)]
        }
        default:
          return state
  }
}
export default reducer;
