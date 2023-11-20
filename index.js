// const protobuf = require('./protobuf')
// const chat = require('./chat')
// const axios = require('axios')
import protobuf from './protobuf'
import chat from './chat'
import axios from 'axios'

const url = 'https://bsy-public-web-1308012692.cos.ap-guangzhou.myqcloud.com/bc/release/resources/bulletFile/8143c08d743f1801eb3bb6b4ef10a1f6.pb'

axios({
  url,
  method: 'GET',
  dataType: 'protobuf',
  responseType: "arraybuffer",
  header: {
    "X-Requested-With": "XMLHttpRequest",
    "Content-Type": "application/octet-stream",
  },
}).then((res) => {
  res = res.data
  let AwesomeRoot = protobuf.Root.fromJSON(chat)
  let AwesomeMessageList = AwesomeRoot.lookupType("ReLiveTalkBulletList")
  let obj = AwesomeMessageList.decode(res)
  console.log("obj", obj)
  document.querySelector('#app').innerHTML = JSON.stringify(obj, null, 2)
})
