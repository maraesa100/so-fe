import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import styles from './Plan.css'

export function Plan() {
  const planObject = useSelector(state => state.plan.plan.data)
  // const dispatch = useDispatch()
  // const [incrementAmount, setIncrementAmount] = useState('2')
  console.log('debugging')

  console.log(planObject)
  return (
    <div>
      <h1>I am a plan</h1>
      {planObject &&
        planObject.map(item => (
          <div key={item.id}>
            <h1>{item.plan_name}</h1>
            <p>Cost: </p>
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
