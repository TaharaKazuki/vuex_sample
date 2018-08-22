<template>
  <div id="app">
    <h1>{{ message }}</h1>
    <Input />
  </div>
</template>

<script>
  import Input from './components/Input.vue';

  export default {
    name: 'app',
    components: {
      Input
    },
    computed: {
      message() {
        return this.$store.getters.message
      }
    }
  }
</script>

<style lang="scss">

</style>
