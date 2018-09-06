<template>
  <div class="about">
    <h1>This is an about page</h1>
  </div>
</template>

<script>
import bus from '@/mixins/bus.js'
export default {
  mixins: [bus],
  created () {
    console.log(this.store.hello)
    this.$bus.$emit('setHello', 'About')
  }
}
</script>

<style scoped lang="scss">
@import '~@/assets/scss/index.scss';
.about {
  h1 {
    font-size: rem(60);
  }
}
</style>
