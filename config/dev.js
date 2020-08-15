module.exports = {
  env: {
    NODE_ENV: '"production"' // 原 development 但导致文件太大 无法预览 改为 production 可以
  },
  defineConstants: {},
  mini: {},
  h5: {
    esnextModules: ['taro-ui']
  }
}
