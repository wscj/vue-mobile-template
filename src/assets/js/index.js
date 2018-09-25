let windowResizeWidth
window.onresize = function (e) {
  // 当宽度变化时才有必要更改fontSize
  if (document.documentElement.clientWidth !== windowResizeWidth) {
    document.querySelector('html').style.fontSize = document.documentElement.clientWidth / 375 * 16 + 'px'
    windowResizeWidth = document.documentElement.clientWidth
  }
}
window.onresize()
