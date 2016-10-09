<template>
  <button type="button" @click.prevent="activate">+1</button>
</template>

<script>
import eventHub from '../eventHub.js'

export default {
  methods: {
    activate () {
      eventHub.$emit('incCount')
    }
  }
}
</script>

<style>
</style>
