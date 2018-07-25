const obj = {}

export default obj

/**
 * 格式化日期
 * @param  {Date} date   js Date 对象
 * @param  {string} fmt  y:年; M:月份 如: "yyyy-MM-dd"
 * @return {string}      日期字符串
 */
obj.parseTime = (date, fmt = 'yyyy-MM-dd') => {
  if (!date || (date.getTime && date.getTime() === 0)) {
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

/**
 * 格式化ajax发送的参数
 * @param {object} obj 参数对象
 * @returns {object} 排除空字符串
 */
obj.formatParams = (obj) => {
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

/**
 * 深度拷贝
 */
obj.clone = (item) => {
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
      obj[i] = obj.clone(item[i])
    }
  } else if (type === '[object Object]' && item.constructor === Object) { // Object
    obj = {}

    for (key in item) {
      obj[key] = obj.clone(item[key])
    }
  } else if (type === '[object Object]') { // Instance of function
    obj = new item.constructor()

    for (var attr in item) {
      if (item.hasOwnProperty(attr)) obj[attr] = obj.clone(item[attr])
    }
  }

  return obj || item
}
