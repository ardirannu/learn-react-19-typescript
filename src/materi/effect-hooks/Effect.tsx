import { useEffect, useState } from "react";

const Effect = () => {
    const [count, setCount] = useState<number>(0)

    //hook tidak disarankan ditempatkan didalam function, if dll
    useEffect(() => {
        console.log("UI Rendered")
    }, [count])
    //jika dependency kosong, useEffect akan dirender terus
    //jika dependency ada [], useEffect hanya dirender sekali diawal
    //jika dependency diisi sebuah state [count], useEffect akan dirender setiap state berubah

    return (
        <div>
            <p>{count}</p>
            <button onClick={() => setCount(count + 1)}>Increase</button>
            <h1>Use Effect</h1>
        </div>
    )
}

export default Effect
