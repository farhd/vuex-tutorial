<template>
  <button type="button" @click.prevent="activate">+1</button>
</template>

<script>
import store from '../store.js'

export default {
  methods: {
    activate () {
      store.commit('increment')

      // test the 'vuex strict mode'
      // store.state.count++
    }
  }
}
</script>

<style>
</style>
