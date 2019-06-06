const singleton = {}

module.exports = {
  get bar() {
    console.log('getting bar')
    return singleton
  },
}
