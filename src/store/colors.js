import { computed, map } from "nanostores";

const colors = map({
    blue: {
        primary: true,
        color: 'blue',
        hex: '#9bf6ff'
    },
    green: {
        primary: false,
        color: 'green',
        hex: '#caffbf'
    }
});

const primaryColors = computed(colors, (list) => Object.values(list).filter(item => item.primary))

const addColor = (color, hex, primary) => colors.setKey(color, {color, hex, primary});

export { colors, addColor, primaryColors };