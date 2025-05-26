import { useState } from "react";

const StateNumber = () => {
    const [ count, setCount ] = useState<number>(0);

    const handleClickIncrease = () => {
        setCount(count + 1);
    }
    const handleClickDecrease = () => {
        setCount(count - 1);
    }

    return (
        <>
            <p>{count}</p>
            <button onClick={handleClickIncrease}>Add number</button>
            <button onClick={handleClickDecrease}>Decrease number</button>
        </>
    )
}

export default StateNumber
