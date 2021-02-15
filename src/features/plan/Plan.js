import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import styles from './Plan.css'
import { addToCart, removeFromCart } from './planSlice'
import { subscription } from '../subscription/subscriptionSlice'

export function Plan() {
  const planObject = useSelector(state => state.plan.plan.data)
  const cartData = useSelector(state => state.plan.cartItems)
  console.log(cartData)
  const sub = useSelector(subscription)
  const dispatch = useDispatch()

  return (
    <div>
      {planObject &&
        planObject.map(item => (
          <div key={item.id}>
            <h1>{item.plan_name}</h1>
            <p>
              Cost:{' £'}
              {sub === 'annual' ? item.annual_cost : item.monthly_cost}
            </p>
            <p>No. Of Plans Selected: </p>
            <button onClick={() => dispatch(addToCart(item.plan_code))}>
              Add Plan
            </button>
            <button>Remove Plan</button>
          </div>
        ))}

      {/* <div className={styles.row}>
        <button
          className={styles.button}
          aria-label='Increment value'
          onClick={() => dispatch(increment())}
        >
          +
        </button>
        <span className={styles.value}>{count}</span>
        <button
          className={styles.button}
          aria-label='Decrement value'
          onClick={() => dispatch(decrement())}
        >
          -
        </button>
      </div>
      <div className={styles.row}>
        <input
          className={styles.textbox}
          aria-label='Set increment amount'
          value={incrementAmount}
          onChange={e => setIncrementAmount(e.target.value)}
        />
        <button
          className={styles.button}
          onClick={() =>
            dispatch(incrementByAmount(Number(incrementAmount) || 0))
          }
        >
          Add Amount
        </button>
        <button
          className={styles.asyncButton}
          onClick={() => dispatch(incrementAsync(Number(incrementAmount) || 0))}
        >
          Add Async
        </button>
      </div> */}
    </div>
  )
}
