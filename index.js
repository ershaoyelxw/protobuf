// Import stylesheets
import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>JS Starter</h1>`;


import protobuf from './protobuf'
import axios from 'axios'

const url = 'https://bsy-public-web-1308012692.cos.ap-guangzhou.myqcloud.com/bc/release/resources/bulletFile/de3a5368a20c17284d79e9491a15c446.pb'

const res = await axios({
  url,
  method: 'GET',
  dataType: 'protobuf',
  responseType: "arraybuffer",
  header: {
    "X-Requested-With": "XMLHttpRequest",
    "Content-Type": "application/octet-stream",
  },
})
let AwesomeRoot = protobuf.Root.fromJSON(chat)
let AwesomeMessageList = AwesomeRoot.lookupType("ReLiveTalkBulletList")
let obj = AwesomeMessageList.decode(res)
console.log("obj", obj)