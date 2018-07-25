const origin = process.env.VUE_APP_ORIGIN

export default {
  testGet: origin + '/testGet',
  testPost: origin + '/testPost'
}
