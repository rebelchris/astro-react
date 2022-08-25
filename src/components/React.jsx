import { useStore } from '@nanostores/react'
import { counter, increaseCounter, decreaseCounter } from "../store/counter";

export default function React() {
    const count = useStore(counter);
    const name = "React";

    return (
        <div>
            <button onClick={decreaseCounter}>-</button>
            <pre>{count.value}</pre>
            <button onClick={increaseCounter}>+</button>
            <p>I'm a {name} component</p>
        </div>
    )
}