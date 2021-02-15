import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '../features/counter/counterSlice'
import subscriptionReducer from '../features/subscription/subscriptionSlice'

export default configureStore({
  reducer: {
    counter: counterReducer,
    subscription: subscriptionReducer
  }
})
