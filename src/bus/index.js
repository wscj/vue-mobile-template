import Vue from 'vue'

export default new Vue({
  data () {
    return {
      hello: 'WORLD'
    }
  },
  created () {
    this.$on('setHello', (val) => {
      this.hello = val
    })
  }
})
