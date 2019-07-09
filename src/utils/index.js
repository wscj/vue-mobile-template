import platformInfo from './platform.js'
import _operation from './operation.js'

// 从UA获取设备信息
export function getPlatform () {
  return platformInfo
}

// 加
export function add (a, b) {
  return _operation(a, b, 'add')
}
// 减
export function subtract (a, b) {
  return _operation(a, b, 'subtract')
}
// 乘
export function multiply (a, b) {
  return _operation(a, b, 'multiply')
}
// 除
export function divide (a, b) {
  return _operation(a, b, 'divide')
}

// 验证手机号码格式
export function isPhoneFmt (phoneNum) {
  return /^[1][3,4,5,6,7,8,9][0-9]{9}$/.test(phoneNum)
}

// 解析URL中的参数
export function getUrlParam (name, url = '') {
  url = url || window.location.search
  const reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)')
  const r = url.substr(url.indexOf('?') + 1).match(reg)
  return r === null ? null : unescape(r[2])
}

/**
 * 格式化ajax发送的参数
 * @param {object} obj 参数对象
 * @returns {object} 排除空字符串
 */
export const formatParams = (obj) => {
  if (Object.prototype.toString.call(obj) === '[Object Object]') {
    let ret = {}
    for (var key in obj) {
      if (obj[key] !== '') {
        ret[key] = obj[key]
      }
    }
    return ret
  }
  return obj
}

// 获取浏览器类型
export function getBrowerType () {
  const ua = navigator.userAgent.toLowerCase()
  // 微信
  if (ua.indexOf('micromessenger') !== -1) {
    return 'WX'
  }
  // 安卓QQ
  if (ua.indexOf('mobile mqqbrowser') !== -1) {
    return 'QQ'
  }
  // iphone QQ
  if ((ua.indexOf('iphone') > -1 || ua.indexOf('mac') > -1) &&
      (ua.indexOf('qq') > -1 && ua.indexOf('mqqbrowser') === -1)) {
    return 'QQ'
  }
  // 微博webview
  if (ua.indexOf('weibo') > -1) {
    return 'WB'
  }
  return 'BROWSER'
}

// 格式化时间
export function getDateTimeFmt (date, fmt = 'yyyy-MM-dd') {
  if (!date || date.getTime() === 0) {
    return ''
  }
  var type = ['object', 'string', 'number']
  if (type.indexOf(typeof date) === -1) throw Error('日期参数类型错误！')
  if (date === '') return ''

  if (typeof date === 'string') {
    date = new Date(date.replace(/-/g, '/')) // 兼容ios 时间格式
  } else if (typeof date === 'number') {
    date = new Date(date)
  }

  var o = {
    'M+': date.getMonth() + 1, // 月份
    'd+': date.getDate(), // 日
    'h+': date.getHours(), // 小时
    'm+': date.getMinutes(), // 分
    's+': date.getSeconds(), // 秒
    'q+': Math.floor((date.getMonth() + 3) / 3), // 季度
    'S': date.getMilliseconds() // 毫秒
  }
  if (/(y+)/.test(fmt)) fmt = fmt.replace(RegExp.$1, (date.getFullYear() + '').substr(4 - RegExp.$1.length))
  for (var k in o) {
    if (new RegExp('(' + k + ')').test(fmt)) fmt = fmt.replace(RegExp.$1, (RegExp.$1.length === 1) ? (o[k]) : (('00' + o[k]).substr(('' + o[k]).length)))
  }
  return fmt
}

// 深度拷贝
export function clone (item) {
  if (item === null || item === undefined) {
    return item
  }

  // Dom node
  if (item.nodeType && item.cloneNode) {
    return item.cloneNode(true)
  }

  var i, obj, key
  var type = toString.call(item)

  if (type === '[object Date]') { // Date
    return new Date(item.getTime())
  } else if (type === '[object Array]') { // Array
    obj = []
    i = item.length

    while (i--) {
      obj[i] = clone(item[i])
    }
  } else if (type === '[object Object]' && item.constructor === Object) { // Object
    obj = {}

    for (key in item) {
      obj[key] = clone(item[key])
    }
  } else if (type === '[object Object]') { // Instance of function
    obj = new item.constructor()

    for (var attr in item) {
      if (item.hasOwnProperty(attr)) obj[attr] = clone(item[attr])
    }
  }

  return obj || item
}

/**
 * 保留小数点，只舍不入
 * @method
 * @author ChenJing
 * @param  {Number} value   需要保留小数点的数值
 * @param  {Number} [decimal=2] 需要保留的小数点位数，默认2位
 * @param  {String} [type=round] round: 四舍五入; floor: 向下取整; ceil: 向上取整
 * @return {String}         返回小数点格式的字符串
 */
export function decimalPoint (value, decimal = 2, type = 'round') {
  const pow = Math.pow(10, decimal)
  value = type === 'round'
    ? Math.round(parseFloat(value) * pow) / pow + ''
    : type === 'floor'
      ? Math.floor(parseFloat(value) * pow) / pow + ''
      : Math.ceil(parseFloat(value) * pow) / pow + ''
  // 小数点后需要补充0的个数
  let cover = decimal - (value.split('.')[1] || '').length
  if (cover === 0) {
    return value
  }
  return value + (cover === decimal ? '.' : '') + String(Math.pow(10, cover)).substr(1)
}

/**
 * 防抖函数
 * @method debounce
 * @author ChenJing
 * @param  {Function}  func              目标执行函数
 * @param  {Number}    [wait=200]        防抖间隔毫秒数
 * @param  {Boolean}   [immediate=true]  是否立即执行
 * @return {Function}
 */
export function debounce (func, wait = 200, immediate = true) {
  let timeoutId = 0
  return function (...args) {
    clearTimeout(timeoutId)
    if (!timeoutId && immediate) {
      func.apply(this, args)
      timeoutId = setTimeout(() => {
        timeoutId = 0
      }, wait)
    } else {
      timeoutId = setTimeout(() => {
        func.apply(this, args)
        timeoutId = 0
      }, wait)
    }
  }
}

/**
 * 节流函数
 * @method throttle
 * @author ChenJing
 * @param  {Function} func 目标执行函数
 * @param  {Number} [wait=200] 间隔毫秒数
 * @return {Function}
 */
export function throttle (func, wait = 200) {
  let timeoutId = 0
  return function (...args) {
    if (!timeoutId) {
      timeoutId = setTimeout(() => {
        timeoutId = 0
        func.apply(this, args)
      }, wait)
    }
  }
}
