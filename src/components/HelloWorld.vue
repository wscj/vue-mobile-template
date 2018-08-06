<template>
  <div class="hello">
    Hello world
  </div>
</template>

<script>
import { testGet, testPost } from '@/request'
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  methods: {
    async testGet () {
      const res = await testGet({ test: 123 })
      console.log(res)
    },
    async testPost () {
      const res = await testPost({ test: 123 })
      console.log(res)
    }
  },
  created () {
    this.testGet()
    this.testPost()
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import '~@/assets/scss/index.scss';
.hello {
  font-size: rem(30);
  line-height: rem(80);
}
</style>
