import React from 'react'
import styles from './SubscriptionBoxStyles.css'

export function SubscriptionBox(props) {
  return (
    <div
      onClick={() => props.onClick()}
      className={
        !props.selected
          ? 'stockopedia-subscription-box-container'
          : 'stockopedia-subscription-box-container active'
      }
    >
      <h2>{props.subscriptionType && props.subscriptionType}</h2>
    </div>
  )
}
