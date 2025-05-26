import { useReducer } from 'react';
import counterReducer, { CounterState } from './CounterReducer';

const initialState: CounterState = { count: 0 }

const Counter = () => {
    const [state, dispatch] = useReducer(counterReducer, initialState)
    //dispatch untuk menggunakan fungsi counterReducer

    return (
        <div>
            <h1>Count : {state.count}</h1>
            <button className='ml-1 mr-1' onClick={() => dispatch({ type: 'increment', payload: 1 })}>Increase</button>
            <button className='ml-1 mr-1' onClick={() => dispatch({ type: 'decrement', payload: 1 })}>Decrease</button>
            <button className='ml-1 mr-1' onClick={() => dispatch({ type: 'reset' })}>Reset</button>
        </div>
    )
}

export default Counter
