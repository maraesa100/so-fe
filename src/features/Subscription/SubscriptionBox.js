import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { subscription } from './subscriptionSlice'
import styles from './SubscriptionBoxStyles.css'

// var classNames = require('./node_modules/classnames')

export function SubscriptionBox(props) {
  const sub = useSelector(subscription)
  return (
    <div
      onClick={() => props.onClick()}
      // className={classNames(
      //   'stockopedia-subscription-box-container ',
      //   props.selected && 'stockopedia-subscription-box-container-active '
      // )}
      className={'stockopedia-subscription-box-container '}
    >
      <h1>Subscription Type</h1>
      <h2>{props.subscriptionType && props.subscriptionType}</h2>
    </div>
  )
}
