import React from 'react'
// import logo from './logo.svg'
// import { Counter } from './features/counter/Counter'
import './App.css'
import SubscriptionBox from './features/Subscription/SubscriptionBox'

function App() {
  return (
    <div className='stockopedia-app-container'>
      <div className='stockopedia-subscription-container'>
        <h1>Choose your Subscription</h1>
        <SubscriptionBox
          selected
          subscriptionType='Annual'
          onClick={() => console.log('annual clicked')}
        />
        <SubscriptionBox
          subscriptionType='Monthly'
          onClick={() => console.log('monthly clicked')}
        />
      </div>
    </div>
  )
}

export default App
