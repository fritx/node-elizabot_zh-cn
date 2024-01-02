// en.test.js
let ElizaBot = require('./elizabot')
let elizaData = require('./elizadata')
let { createTestReply } = require('./test-helper')

// This is plain Node code, there's no xv API
exports.test = () => {
  let eliza = new ElizaBot()
  let testReply = createTestReply(eliza)

  let map = new Map()
  elizaData.elizaKeywords.forEach(item => {
    map.set(item[0], item)
  })

  testReply('', elizaData.elizaInitials)

  testReply('Hello there', map.get('hello')[2][0][1])

  testReply('Where is my machine', map.get('computer')[2][0][1])

  testReply('What is your name', map.get('name')[2][0][1])

  testReply('I apologise', map.get('sorry')[2][0][1])

  testReply('Bye', elizaData.elizaFinals)
}
