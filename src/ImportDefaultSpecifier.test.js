import * as proxy from './proxy-ImportDefaultSpecifier'

jest.mock('./config')

describe('mocked values', () => {
  it('should return what I mocked in __mocks__', () => {
    expect(proxy.getName()).toBe('Diz')
    expect(proxy.getAge()).toBe(99)
    expect(proxy.getColor()).toBe('blue')
  })
})

// any way of exporting should work
xdescribe('exports', () => {
  test('module.exports')
  test('exports.foo')

  test('named exports')
  test('default exports')
})
