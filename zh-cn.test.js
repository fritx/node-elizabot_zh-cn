// zh-cn.test.js
let ElizaBot = require('./elizabot_zh')
let elizaData = require('./elizadata_zh-cn')
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

  testReply('你好吗', map.get('你好')[2][0][1])

  testReply('在吗', map.get('你好')[2][0][1])

  testReply('我机器在哪里', map.get('电脑')[2][0][1])

  testReply('你叫什么姓名', map.get('名字')[2][0][1])

  testReply('不好意思哦', map.get('对不起')[2][0][1])

  testReply('什么时候下雨', map.get('什么')[2][0][1])

  testReply('哪个时候下雨', map.get('什么')[2][0][1])

  testReply('哪里下雨', map.get('什么')[2][0][1])

  testReply('如何上车', map.get('什么')[2][0][1])

  testReply('怎么这样了', map.get('什么')[2][0][1])

  testReply('你怎么这么6', map.get('你')[2][3][1])

  testReply('对的，就是这样', map.get('没错')[2][0][1])

  testReply('再见', elizaData.elizaFinals)
}
