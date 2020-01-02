import { combineReducers } from 'redux'
import domainData from './domainData/domainData'
import appState from './appState/appState'
import ui from './ui/ui'

export default combineReducers({
  domainData,
  appState,
  ui,
})
