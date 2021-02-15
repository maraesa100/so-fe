import { createSlice } from '@reduxjs/toolkit'

export const subscriptionSlice = createSlice({
  name: 'subscriptionType',
  initialState: {
    value: 'annual'
  },
  reducers: {
    toggle: state => {
      state.value += 1

      if (state.value === 'annual') {
        state.value = 'monthly'
      } else if (state.value === 'monthly') {
        state.value = 'annual'
      }
    }
  }
})

export const { toggle } = subscriptionSlice.actions

export const selectSubscription = state => state.subscriptionType.value

export default subscriptionSlice.reducer
