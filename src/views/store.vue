<template>
    <div>
        store
        <div>
            <AInput v-model="inputValue"></AInput>
            <p>{{inputValue}}</p>
        </div>
    </div>
</template>

<script>
  import AInput from '_c/AInput'

  export default {
    name: 'store',
    components: { AInput },
    data () {
      return {
        inputValue: ''
      }
    }
  }
</script>

<style scoped>

</style>
