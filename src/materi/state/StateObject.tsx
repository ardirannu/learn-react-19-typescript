import { useState } from "react";

type User = {
    name: string
    age: number
};

const StateObject = () => {
    const [user, setUser] = useState<User>({
        name: 'John Doe',
        age: 23,
    });

    const IncreaseAge = () => {
        setUser({
            name: user.name,
            age: user.age + 1
        });
    }

    return (
        <>
            <div>{user.name}</div>
            <div>{user.age}</div>
            <button onClick={IncreaseAge}>Increase User Age</button>
        </>
    )
}

export default StateObject