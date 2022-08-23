import { useState } from "react";

export default function React() {
    const [counter, setCounter] = useState(0);
    const name = "React";

    return (
        <div>
            <button onClick={() => setCounter((i) => i - 1)}>-</button>
            <pre>{counter}</pre>
            <button onClick={() => setCounter((i) => i + 1)}>+</button>
            <p>I'm a {name} component</p>
        </div>
    )
}