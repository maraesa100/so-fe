import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import './App.css'

import { fetchPlanData } from './features/plan/planSlice'

import { ToggleSubscriptionTypes } from './features/subscription/ToggleSubscriptionTypes'
import { Plan } from './features/plan/Plan'

function App() {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchPlanData())
  }, [dispatch])

  return (
    <div className='stockopedia-app-container'>
      <div className='stockopedia-subscription-container'>
        <ToggleSubscriptionTypes />
        <Plan />
      </div>
    </div>
  )
}

export default App
