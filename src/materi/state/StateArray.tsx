import { useState } from "react";

const StateArray = () => {
    const [ items, setItems ] = useState<string[]>(['Item 1', 'Item 2']);

    const addItems = () => {
        setItems([...items, `Item ${items.length + 1}`]);
    }

    return (
    <>
        <ul>
            {
                items.map((item, index) => {
                    return <li key={index}>{item}</li>
                })
            }
        </ul>
        <button onClick={addItems}>Add Item</button>
    </>
  )
}

export default StateArray
