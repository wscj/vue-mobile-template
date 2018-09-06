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
      try {
        const res = await testGet({ test: 123 })
        console.log(res.data.data)
      } catch (err) {
        throw err
      }
    },
    async testPost () {
      try {
        const res = await testPost({ test: 123 })
        console.log(res)
      } catch (err) {
        // 处理错误
        throw err
      }
    }
  },
  created () {
    this.testGet()
    // this.testPost()
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import '~@/assets/scss/index.scss';
.hello {
  font-size: rem(60);
  line-height: rem(160);
}
</style>
