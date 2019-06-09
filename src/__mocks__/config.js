// export const name = 'Diz'
// export const age = jest.fn(() => 99)
// export const color = 'blue'
//
// export default {
//   age,
//   color,
//   name,
// }

const config = jest.genMockFromModule('../config')


// console.log(config.age)
// console.log(config.default.age)

const nameMock = jest.fn(() => config.name)
const ageMock = jest.fn()
const colorMock = jest.fn(() => config.color)

const primitives = [
  'age',
  'name',
]


const mod = {
  // ...config,

  age: jest.fn(),



  nameMock,

  colorMock,
  get color() {
    return colorMock()
  },
}



module.exports = new Proxy(mod, {

  // This is a generic getter.  Any property that looks like a primitive will be
  // intercepted and have the mock returned instead.
  get(target, name, receiver) {
    const value = Reflect.get(target, name, receiver)

    if (primitives.includes(name)) {
      if (name === 'name') {
        return nameMock()
      }
      if (name === 'color') {
        return colorMock()
      }
    }

    return value
  },
})
