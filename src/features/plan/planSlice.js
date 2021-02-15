import { createSlice } from '@reduxjs/toolkit'

export const planSlice = createSlice({
  name: 'plan',
  initialState: {},
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
    }
  }
})

export const { getPlan, getPlanSuccess, getPlanFailure } = planSlice.actions

export function fetchPlanData() {
  return async dispatch => {
    // dispatch(getData())

    try {
      const response = await fetch('http://localhost:8080/api/plans')
      const data = await response.json()

      dispatch(getPlanSuccess(data))
      console.log('success')
      console.log(data)
    } catch (error) {
      // dispatch(getPlanFailure())
      console.log('failure')
    }
  }
}

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state) => state.plan.value)`
export const selectPlan = state => state.plan.value

export default planSlice.reducer
