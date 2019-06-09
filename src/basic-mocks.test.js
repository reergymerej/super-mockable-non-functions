import * as proxyDefault from './proxy-ImportDefaultSpecifier'
import * as proxyNamespace from './proxy-ImportNamespaceSpecifier'
import * as proxySpec from './proxy-ImportSpecifier'

jest.mock('./config')

describe.each([
  [proxyDefault, 'ImportDefaultSpecifier'],
  [proxyNamespace, 'ImportNamespaceSpecifier'],
  [proxySpec, 'ImportSpecifier'],
])('without mocking', (proxy, name) => {

  it(`${name} should expose some stuff from config`, () => {
    expect(proxy.getName()).toBe('Diz')
    expect(proxy.getAge()).toBe(99)
    expect(proxy.getColor()).toBe('blue')
  })
})
