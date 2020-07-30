let windowResizeWidth
window.onresize = function (e) {
  // 当宽度变化时才有必要更改fontSize
  if (document.documentElement.clientWidth !== windowResizeWidth) {
    const fontSize = parseFloat(window.getComputedStyle(document.documentElement, null).getPropertyValue('font-size'));
    document.querySelector('html').style.fontSize = document.documentElement.clientWidth / 375 * 16 * 16 / fontSize + 'px'
    windowResizeWidth = document.documentElement.clientWidth
  }
}
window.onresize()
