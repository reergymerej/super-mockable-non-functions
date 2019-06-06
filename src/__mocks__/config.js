// export const name = 'Carl'
// export const age = () => 19
export const age = jest.fn(() => 19)

let _name = 'Carl'

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
}
