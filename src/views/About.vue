<template>
  <div class="about">
    <h1>This is an about page</h1>
    <button @click="loading">Loading</button>
    <button @click="toast">Toast</button>
  </div>
</template>

<script>
import bus from '@/mixins/bus.js'
import loading from '@/plugins/loading/index.js'
import toast from '@/plugins/toast/index.js'
export default {
  mixins: [bus],
  methods: {
    loading () {
      loading(true, '出来了')
      setTimeout(() => {
        loading(false)
      }, 2000)
    },
    toast () {
      toast('这是提示语')
    }
  },
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
    margin-bottom: rem(50);
  }
  button {
    font-size: rem(40);
    margin: rem(20) auto;
    border: 1px solid #eee;
    padding: rem(8) 0;
    width: rem(400);
    border-radius: rem(15);
    background-color: #42b983;
    color: #fff;
  }
}
</style>
