const config = jest.genMockFromModule('../config')

const primitivesBlacklist = [
  '__esModule',
  'default',
]

const getPrimitiveMockName = (primitive) => `${primitive}Mock`

const isPrimitive = ([key, value]) => !primitivesBlacklist.includes(key)
  && typeof value !== 'function'

const addPrimitiveMock = (acc, primitive) => ({
  ...acc,
  [getPrimitiveMockName(primitive)]: jest.fn(() => config[primitive]),
})

const primitiveMocks = Object.entries(config)
  .filter(isPrimitive)
  .map(([key]) => key)
  .reduce(addPrimitiveMock, {})

const defaultWithPrimitiveMocks = {
  ...config.default,
  ...primitiveMocks,
}

const mod = {
  ...defaultWithPrimitiveMocks,
  default: defaultWithPrimitiveMocks,
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
