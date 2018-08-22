<template>
  <div class="input">
    <input value="新しいメッセージ" ref="input"><button @click="update()">Click</button>
  </div>
</template>
<script>

  export default {
    name: 'Input',
    methods: {
      update(){
        this.$store.commit('setMessage',this.$refs.input.value);
      }
    }
  }

</script>
<style>

</style>
