import React from 'react'
// import logo from './logo.svg'
import { Counter } from './features/counter/Counter'
import './App.css'
import { ToggleSubscriptionTypes } from './features/subscription/ToggleSubscriptionTypes'

function App() {
  return (
    <div className='stockopedia-app-container'>
      <div className='stockopedia-subscription-container'>
        <ToggleSubscriptionTypes />
      </div>
    </div>
  )
}

export default App
