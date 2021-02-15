import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import styles from './Plan.css'
import { addToCart, removeFromCart } from './planSlice'
import { subscription } from '../subscription/subscriptionSlice'
import ReactCountryFlag from 'react-country-flag'

export function Plan() {
  const planObject = useSelector(state => state.plan.plan.data)
  const cartData = useSelector(state => state.plan.cartItems)

  const sub = useSelector(subscription)
  const dispatch = useDispatch()

  var cartPrice = 0

  return (
    <div>
      <h3>2. Choose Your Region</h3>

      {planObject &&
        cartData &&
        planObject.map(item => (
          <div key={item.id}>
            <h1>
              {item.plan_name}{' '}
              <ReactCountryFlag
                className='emojiFlag'
                countryCode={item.plan_code}
                style={{
                  fontSize: '2em',
                  lineHeight: '2em'
                }}
                aria-label='United States'
              />
            </h1>
            <p>
              Cost of Plan:{' £'}
              {sub === 'annual' ? item.annual_cost : item.monthly_cost}
            </p>
            <p>
              No. Of Plans Selected: {cartData[item.plan_code].numberOfPlans}
            </p>
            <button onClick={() => dispatch(addToCart(item.plan_code))}>
              Add Plan
            </button>
            <button
              disabled={cartData[item.plan_code].numberOfPlans < 1}
              onClick={() => dispatch(removeFromCart(item.plan_code))}
            >
              Remove Plan
            </button>
          </div>
        ))}

      <h3>3. Get Your Price</h3>
      <p>
        Total Price: {cartPrice}
        Interim Price:
        {planObject && cartData && (
          <p>
            {planObject.map(
              item =>
                (cartPrice +=
                  cartData[item.plan_code].numberOfPlans *
                  (sub === 'monthly' ? item.monthly_cost : item.annual_cost))
            )}
          </p>
        )}
      </p>
    </div>
  )
}
