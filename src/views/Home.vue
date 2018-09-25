<template>
  <div class="home">
    <img src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import bus from '@/mixins/bus.js'
export default {
  name: 'home',
  mixins: [bus],
  components: {
    HelloWorld
  },
  created () {
    console.log(this.store.hello)
    this.$bus.$emit('setHello', 'Home')
  }
}
</script>

<style scoped lang="scss">
@import '~@/assets/scss/index.scss';
.home {
  img {
    margin-top: rem(50);
    width: rem(320);
  }
}
</style>
