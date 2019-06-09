import * as proxyDefault from './proxy-ImportDefaultSpecifier'
import * as proxyNamespace from './proxy-ImportNamespaceSpecifier'
import * as proxySpec from './proxy-ImportSpecifier'

jest.mock('./config')

describe.each([
  [proxyDefault, 'ImportDefaultSpecifier'],
  [proxyNamespace, 'ImportNamespaceSpecifier'],
  [proxySpec, 'ImportSpecifier'],
])('basic mocks from __mocks__/', (proxy, name) => {

  it(`${name} should expose some stuff from config`, () => {
    expect(proxy.getName()).toBe('John')
    expect(proxy.getColor()).toBe('red')
  })
})
