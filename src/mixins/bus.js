import bus from '@/bus/index.js'

export default {
  computed: {
    store () {
      return bus.$data
    }
  }
}
