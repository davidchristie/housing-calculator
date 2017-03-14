import { applyMiddleware, compose, createStore } from 'redux'
import thunk from 'redux-thunk'

import reducer from './reducers'

export default (initialState) => {
  if (typeof window === 'undefined') {
    return createStore(reducer, initialState, applyMiddleware(thunk))
  } else {
    const extension = window.__REDUX_DEVTOOLS_EXTENSION__
    return createStore(
      reducer,
      initialState,
      compose(
        applyMiddleware(thunk),
        extension && extension()
      )
    )
  }
}
