import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { render } from '@testing-library/react'
import { Provider } from 'react-redux'
import store from './app/store'
import App from './App'
import { selectMonthly } from './features/subscription/subscriptionSlice'

test('renders "take control of your investments" string', () => {
  const { getByText } = render(
    <Provider store={store}>
      <App />
    </Provider>
  )
  expect(getByText('Take control of your investments')).toBeInTheDocument()
})

//  Further work: Redux tests, and unit testing for helper functions
// (would move cart calculations out into helper functions, for example)
