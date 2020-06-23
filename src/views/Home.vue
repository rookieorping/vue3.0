<template>
  <div class="home">
    <button @click="handleClick">返回上一页</button>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'Home',
  methods: {
    handleClick(){
      this.$router.back()
    }
  },
  components: {
  }
}
</script>
