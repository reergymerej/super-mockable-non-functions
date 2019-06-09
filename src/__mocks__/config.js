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


const primitives = [
  'color',
  'name',
]

const getPrimitiveMockName = (primitive) => `${primitive}Mock`

const primitiveMocks = primitives.reduce((acc, primitive) => {
  return {
    ...acc,
    [getPrimitiveMockName(primitive)]: jest.fn(() => config[primitive]),
  }
}, {})


const mod = {
  age: jest.fn(),
  ...primitiveMocks,
}


module.exports = new Proxy(mod, {
  // This is a generic getter.  Any property that we've created a primitive mock
  // for will be intercepted and fed the mock value.
  get(target, name, receiver) {
    const primitiveMock = primitiveMocks[getPrimitiveMockName(name)]
    return primitiveMock
      ? primitiveMock()
      : Reflect.get(target, name, receiver)
  },

})
