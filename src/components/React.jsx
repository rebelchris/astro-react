import { useStore } from '@nanostores/react'
import {addColor, colors} from "../store/colors";

export default function React() {
    const colorItems = useStore(colors);

    return (
        <div>
            <ul>
                {Object.values(colorItems).map(({color, hex}) => (
                    <li key={color} style={{ backgroundColor: hex }}>
                        {color} {hex}
                    </li>
                ))}
            </ul>
            <button onClick={() => addColor('blue', '#a0c4ff')}>Change blue</button>
            <button onClick={() => addColor('red', '#ffadad')}>Add red</button>
        </div>
    )
}