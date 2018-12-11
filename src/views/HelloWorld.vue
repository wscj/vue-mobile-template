<template>
  <div class="hello">
    <p class="border-horizon">水平一像素</p>
    <p class="border-vertical">垂直一像素</p>
    <p class="border-all">四周一像素</p>
    <p class="two-rows">两行省略号两行省略号两行省略号两行省略号两行省略号两行省略号两</p>
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
  padding-top: rem(20);
  font-size: rem(36);
  line-height: rem(80);
  .border-horizon {
    @include border-b(#999);
  }
  .border-vertical {
    @include border-l(#999);
    @include border-r(#999);
    width: rem(300);
    margin: 0 auto;
  }
  .border-all {
    @include border-all(#999, rem(30));
    width: rem(600);
    margin: 0 auto;
  }
  .two-rows {
    @include two-rows();
    width: rem(400);
    margin: rem(30) auto;
    line-height: rem(46);
    font-size: rem(36);
  }
}
</style>
