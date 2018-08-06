import Fingerprint from 'fingerprintjs'
import uuid from 'uuid/v1.js'

export default {
  'id': uuid(), // 校验ID
  // 设备信息
  'client': {
    'caller': 'caller',
    'userAgent': navigator.userAgent,
    'deviceId': (new Fingerprint().get()).toString(),
    'versionCode': navigator.productSub,
    'versionName': navigator.appName,
    'platform': navigator.platform,
    'ex': { // 扩展参数
      'key1': '',
      'key2': ''
    }
  },
  data: {}
}
