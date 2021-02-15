import React from 'react'
import { SubscriptionBox } from './SubscriptionBox'
import { useSelector, useDispatch } from 'react-redux'
import { subscription, selectAnnual, selectMonthly } from './subscriptionSlice'

export function ToggleSubscriptionTypes() {
  const sub = useSelector(subscription)
  const dispatch = useDispatch()
  return (
    <div>
      <h1>Choose your Subscription Type</h1>
      <SubscriptionBox
        selected={sub === 'annual'}
        subscriptionType='Annual'
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
