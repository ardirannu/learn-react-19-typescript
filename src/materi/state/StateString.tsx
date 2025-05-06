import { useState } from "react";

const StateString = () => {
    const [ greeting, setGreeting ] = useState<string>('Hello');

    const handleClick = () => {
        setGreeting('Hello World');
    }

    return (
        <>
            <p>{greeting}</p>
            <button onClick={handleClick}>Update Greeting</button>
        </>
    )
}

export default StateString
