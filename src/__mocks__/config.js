// export const name = 'Carl'
// export const age = () => 19
export const age = jest.fn(() => 19)

const originalName = 'Carl'
let _name = originalName

module.exports = {
  age,

  get name() {
    return _name
  },

  // These don't work when trying to change.
  // set name(value) {
  //   _name = value
  // },

  setName(value) {
    _name = value
  },

  resetName() {
    _name = originalName
  },
}
