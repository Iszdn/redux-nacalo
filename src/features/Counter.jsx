import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment, incrementByUser } from './counterSlice'

function Cont() {
  const count = useSelector((state) => state.nurane.deyer)
  const dispatch = useDispatch()
  return (
    <div>
      <button onClick={() => dispatch(increment())}>+</button>
      <button onClick={() => dispatch(incrementByUser(5))}>+5</button>

      <span>{count}</span>
      <button onClick={() => dispatch(decrement())}>-</button>

    </div>
  )
}

export default Cont