<script>
import { useStore } from '@nanostores/vue'
import { counter, increaseCounter, decreaseCounter } from "../store/counter";
export default {
  data() {
    const count = useStore(counter);
    return {
      count,
      name: 'Vue',
      increaseCounter,
      decreaseCounter
    }
  }
}
</script>

<template>
  <button @click="decreaseCounter">-</button>
  <pre>{{count.value}}</pre>
  <button @click="increaseCounter">+</button>
  <p>I'm a {{name}} component</p>
</template>