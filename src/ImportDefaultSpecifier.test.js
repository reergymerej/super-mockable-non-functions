import * as proxy from './proxy-ImportDefaultSpecifier'

jest.mock('./config')

describe('mocked values', () => {
  it('should allow me to force feed values for a function', () => {
    expect(proxy.getAge()).toBe(99)
  })
})

    // expect(proxy.getName()).toBe('Diz')
    // expect(proxy.getColor()).toBe('blue')
//
// any way of exporting should work
xdescribe('exports', () => {
  test('module.exports')
  test('exports.foo')

  test('named exports')
  test('default exports')
})
