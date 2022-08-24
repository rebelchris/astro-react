<script>
export default {
  data() {
    return {
      count: 0,
      name: 'Vue'
    }
  }
}
</script>

<template>
  <button @click="count--">-</button>
  <pre>{{count}}</pre>
  <button @click="count++">+</button>
  <p>I'm a {{name}} component</p>
</template>