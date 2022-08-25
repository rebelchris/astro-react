import { atom } from "nanostores";

const initialValue = { value: 0 };

const counter = atom(initialValue);

const increaseCounter = () => counter.set({ value: counter.get().value + 1});

const decreaseCounter = () => counter.set({ value: counter.get().value - 1});

export { counter, increaseCounter, decreaseCounter };