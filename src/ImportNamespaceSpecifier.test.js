import * as proxy from './proxy-ImportNamespaceSpecifier'

jest.mock('./config')

describe('mocked values', () => {
  it('should allow me to force feed values for a function', () => {
    const { age } = require('./config')
    age.mockImplementationOnce(() => 99)
    expect(proxy.getAge()).toBe(99)

    age.mockImplementationOnce(() => 66)
    expect(proxy.getAge()).toBe(66)
  })

  it('should allow me to force feed values for a primitive', () => {
    const { nameMock } = require('./config')
    nameMock.mockImplementationOnce(() => 'Bert')
    expect(proxy.getName()).toBe('Bert')

    nameMock.mockImplementationOnce(() => 'Ernie')
    expect(proxy.getName()).toBe('Ernie')
  })

  it('should allow me to force feed values for another primitive', () => {
    const { colorMock } = require('./config')
    colorMock.mockImplementationOnce(() => 'green')
    expect(proxy.getColor()).toBe('green')

    colorMock.mockImplementationOnce(() => 'purple')
    expect(proxy.getColor()).toBe('purple')
  })

  it('should allow me use primitive mocks through default', () => {
    const { colorMock } = require('./config').default
    colorMock.mockImplementationOnce(() => 'pink')
    expect(proxy.getColor()).toBe('pink')

    colorMock.mockImplementationOnce(() => 'yellow')
    expect(proxy.getColor()).toBe('yellow')
  })
})
