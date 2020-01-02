import { combineReducers } from 'redux'
import { LOG_BOX_SHOW } from '../../action/ui/actionType'
const initialState = {
  logBox: false,
}
const componentUi = (state = initialState, action) => {
  switch (action.type) {
    case LOG_BOX_SHOW:
      return { ...state, logBox: action.payload }
    default:
      return state
  }
}
export default combineReducers({
  componentUi,
})
