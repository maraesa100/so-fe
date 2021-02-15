import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Counter } from './features/counter/Counter'
import './App.css'
import { ToggleSubscriptionTypes } from './features/subscription/ToggleSubscriptionTypes'

import { fetchPlanData } from './features/plan/planSlice'

function App() {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchPlanData())
  }, [dispatch])

  return (
    <div className='stockopedia-app-container'>
      <div className='stockopedia-subscription-container'>
        <ToggleSubscriptionTypes />
      </div>
    </div>
  )
}

export default App
