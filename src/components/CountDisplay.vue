<template>
  <div>
    Count is {{ count }}
  </div>
</template>

<script>
import eventHub from '../eventHub.js'

export default {
  data () {
    return {
      count: 0
    }
  },

  created () {
    eventHub.$on('incCount', this.incCount)
  },

  methods: {
    incCount () {
      this.count++
    }
  }
}
</script>

<style>
</style>
