import { LOG_USER_VERIFY } from '../../action/appState/actionType'

const initialState = {
  login: false,
}
const appState = (state = initialState, action) => {
  switch (action.type) {
    case LOG_USER_VERIFY:
      return { ...state, login: action.payload }
    default:
      return state
  }
}
export default appState
