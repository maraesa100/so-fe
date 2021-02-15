import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '../features/counter/counterSlice'
import subscriptionReducer from '../features/subscription/subscriptionSlice'
import planReducer from '../features/plan/planSlice'

export default configureStore({
  reducer: {
    counter: counterReducer,
    subscription: subscriptionReducer,
    plan: planReducer
  }
})
