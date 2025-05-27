import useCounter from "./useCounter"

const CounterComponent = () => {
    const {count, increment, decrement, reset} = useCounter(0)

    return (
        <div>
            <h1 className='text-lg mb-5'>Count : {count}</h1>

            <button onClick={increment} className='bg-blue-500 text-white px-3 py-1 rounded-md mr-2'>Increase</button>
            <button onClick={decrement} className='bg-red-500 text-white px-3 py-1 rounded-md mr-2'>Decrease</button>
            <button onClick={reset} className='bg-gray-500 text-white px-3 py-1 rounded-md mr-2'>Reset</button>
        </div>
    )
}

export default CounterComponent
