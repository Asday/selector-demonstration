import { combineReducers, createStore } from 'redux'

import app from 'models/app/reducers'
import reviews from 'models/reviews/reducers'

const rootReducer = combineReducers({
  app,
  reviews,
})

export default createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)
