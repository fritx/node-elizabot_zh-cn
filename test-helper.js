let assert = require('node:assert/strict')

// https://github.com/sindresorhus/escape-string-regexp/blob/main/index.js
let escapeRegex = str => {
  return str.replace(/[|\\{}()[\]^$+*?.]/g, '\\$&')
    .replace(/-/g, '\\x2d');
}

let normalize = str => str.replace(/ +/g, ' ')

exports.createTestReply = bot => (ask, list) => {
  console.log('ask<<', ask)
  let reply = ask ? bot.transform(ask) : bot.getInitial()
  console.log('reply>>', reply)
  let r = normalize(reply)
  let found = list.some(str => {
    let s = normalize(str)
    s = escapeRegex(s)
    s = s.replace(/\\\(\d\\\)/g, '.+')
    return new RegExp(s, 'i').test(r)
  })
  assert(found)
}
