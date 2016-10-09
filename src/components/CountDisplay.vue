<template>
  <div>
    Count is {{ count }}
  </div>
</template>

<script>
import store from '../store.js'

export default {
  computed: {
    count () {
      return store.state.count
    }
  }
}
</script>

<style>
</style>
