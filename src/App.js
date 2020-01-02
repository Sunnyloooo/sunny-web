import React from 'react'
import { createStore, applyMiddleware, compose } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import rootReducer from './reducers/index'
import RootRouter from './router/RootRouter'

// login action
import { logCheck } from './action/appState'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)))

// login check
store.dispatch(logCheck())

function App() {
  return (
    <Provider store={store}>
      <RootRouter />
    </Provider>
  )
}

export default App
