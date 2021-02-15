import { createSlice } from '@reduxjs/toolkit'

export const planSlice = createSlice({
  name: 'plan',
  initialState: {
    plan: {
      plan: {
        data: {}
      }
    },
    cartItems: {
      gb: {
        numberOfPlans: 0
      },
      fr: {
        numberOfPlans: 0
      },
      de: {
        numberOfPlans: 0
      },
      us: {
        numberOfPlans: 0
      },
      jp: {
        numberOfPlans: 0
      }
    }
  },
  reducers: {
    getPlan: state => {
      state.loading = true
    },
    getPlanSuccess: (state, { payload }) => {
      state.plan = payload
      state.loading = false
      state.hasErrors = false
    },
    getPlanFailure: state => {
      state.loading = false
      state.hasErrors = true
    },
    addToCart: (state, { payload }) => {
      state.cartItems[payload].numberOfPlans += 1
    },
    removeFromCart: (state, { payload }) => {
      if (state.cartItems[payload].numberOfPlans !== 0) {
        state.cartItems[payload].numberOfPlans -= 1
      }
    }
  }
})

export const {
  getPlan,
  getPlanSuccess,
  getPlanFailure,
  addToCart,
  removeFromCart
} = planSlice.actions

export function fetchPlanData() {
  return async dispatch => {
    try {
      const response = await fetch('http://localhost:8080/api/plans')
      const data = await response.json()
      dispatch(getPlanSuccess(data))
    } catch (error) {
      dispatch(getPlanFailure())
    }
  }
}

export default planSlice.reducer
