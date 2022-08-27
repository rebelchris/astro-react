import { useStore } from '@nanostores/react'
import {addColor, colors, primaryColors} from "../store/colors";

export default function React() {
    const colorItems = useStore(colors);
    const primaryItems = useStore(primaryColors);
    return (
        <div>
            <ul>
                {Object.values(colorItems).map(({color, hex}) => (
                    <li key={color} style={{ backgroundColor: hex }}>
                        {color} {hex}
                    </li>
                ))}
            </ul>
            <button onClick={() => addColor('blue', '#a0c4ff', true)}>Change blue</button>
            <button onClick={() => addColor('red', '#ffadad', true)}>Add red</button>
            <button onClick={() => addColor('purple', '#bdb2ff', false)}>Add purple</button>
            <hr />
            <h4>Primary colors</h4>
            <ul>
                {Object.values(primaryItems).map(({color, hex}) => (
                    <li key={color} style={{ backgroundColor: hex }}>
                        {color} {hex}
                    </li>
                ))}
            </ul>
        </div>
    )
}