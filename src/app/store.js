import { configureStore } from '@reduxjs/toolkit'
import subscriptionReducer from '../features/subscription/subscriptionSlice'
import planReducer from '../features/plan/planSlice'

export default configureStore({
  reducer: {
    subscription: subscriptionReducer,
    plan: planReducer
  }
})
