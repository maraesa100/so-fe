import { createSlice } from '@reduxjs/toolkit'
export const subscriptionSlice = createSlice({
  name: 'subscription',
  initialState: {
    value: 'annual'
  },
  reducers: {
    selectAnnual: state => {
      state.value = 'annual'
    },
    selectMonthly: state => {
      state.value = 'monthly'
    }
  }
})

export const { selectAnnual, selectMonthly } = subscriptionSlice.actions

export const subscription = state => state.subscription.value

export default subscriptionSlice.reducer
