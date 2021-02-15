import { createSlice } from '@reduxjs/toolkit'
export const subscriptionSlice = createSlice({
  name: 'subscription',
  initialState: {
    value: 'annual'
  },
  reducers: {
    toggleSubscription: state => {
      state.value += 1

      if (state.value === 'annual') {
        state.value = 'monthly'
      } else if (state.value === 'monthly') {
        state.value = 'annual'
      }
    }
  }
})

export const { toggleSubscription } = subscriptionSlice.actions

export const subscription = state => state.subscription.value

export default subscriptionSlice.reducer
