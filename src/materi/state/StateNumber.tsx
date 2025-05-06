import { useState } from "react";

const StateNumber = () => {
    const [ count, increaseCount ] = useState<number>(0);

    const handleClick = () => {
        increaseCount(count + 1);
    }

    return (
        <>
            <p>{count}</p>
            <button onClick={handleClick}>Add number</button>
        </>
    )
}

export default StateNumber
