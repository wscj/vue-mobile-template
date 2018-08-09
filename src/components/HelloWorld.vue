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
        console.log(res.data.data.hello)
      } catch (err) {
        if (err.toString().indexOf('Network Error') > -1) {
          // 使用localhost或ip有跨域问题
          window.location.href = 'http://0.0.0.0:5858'
        }
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
  font-size: rem(30);
  line-height: rem(80);
}
</style>
