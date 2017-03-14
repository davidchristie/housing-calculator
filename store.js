import { applyMiddleware, compose, createStore } from 'redux'
import thunk from 'redux-thunk'

import reducer from './reducers'

export default (initialState) => {
  if (typeof window === 'undefined') {
    return createStore(reducer, initialState, applyMiddleware(thunk))
  } else {
    const extensionCompose = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    const composeEnhancers = extensionCompose || compose
    return createStore(reducer, initialState, composeEnhancers(
        applyMiddleware(thunk)
      )
    )
  }
}
