import { createStore } from 'redux'

import reducer from './reducers'

export default (initialState) => {
  if (typeof window === 'undefined') {
    return createStore(reducer, initialState)
  } else {
    const extension = window.__REDUX_DEVTOOLS_EXTENSION__
    return createStore(reducer, initialState, extension && extension())
  }
}
