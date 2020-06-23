<template>
    <div><input type="text" @input="handleInput" :value="value"></div>
</template>

<script>
  export default {
    name: 'AInput',
    props: {
      value: {
        type: [String, Number]
      }
    },
    methods: {
      handleInput (event) {
        const value = event.target.value
      }
    }
  }
</script>

<style scoped>

</style>
