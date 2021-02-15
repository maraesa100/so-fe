import React from 'react'
import { SubscriptionBox } from './SubscriptionBox'
import { useSelector, useDispatch } from 'react-redux'
import { subscription, selectAnnual, selectMonthly } from './subscriptionSlice'

export function ToggleSubscriptionTypes() {
  const sub = useSelector(subscription)
  const dispatch = useDispatch()
  return (
    <div>
      <h1>Take control of your investments</h1>
      <h2>
        Join the thousands of investors around the world using Stockopedia to
        beat the market.
      </h2>
      <h3>1. Choose Monthly or Yearly Billing</h3>
      <p>Billing period:</p>
      <SubscriptionBox
        selected={sub === 'annual'}
        subscriptionType='Yearly'
        onClick={() => dispatch(selectAnnual())}
      />
      <SubscriptionBox
        selected={sub === 'monthly'}
        subscriptionType='Monthly'
        onClick={() => dispatch(selectMonthly())}
      />
    </div>
  )
}
