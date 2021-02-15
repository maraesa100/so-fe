import React from 'react'
import styles from './SubscriptionBoxStyles.css'
var classNames = require('classnames')

export default function SubscriptionBox(props) {
  return (
    <div
      onClick={() => props.onClick()}
      className={classNames(
        'stockopedia-subscription-box-container ',
        props.selected && 'stockopedia-subscription-box-container-active '
      )}
    >
      <h1>Subscription Type</h1>
      <h2>{props.subscriptionType && props.subscriptionType}</h2>
    </div>
  )
}
