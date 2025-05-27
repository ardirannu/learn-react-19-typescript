import { useState } from "react"

interface UseCounterResult {
    count: number
    increment: () => void
    decrement: () => void
    reset: () => void
}

function useCounter(initialValue: number = 0): UseCounterResult {
    const [count, setCount] = useState<number>(initialValue)

    const increment = () => setCount(count+1)
    const decrement = () => setCount(count-1)
    const reset = () => setCount(initialValue)

    return {count, increment, decrement, reset}
}

export default useCounter