import * as proxyDefault from './proxy-ImportDefaultSpecifier'
import * as proxyNamespace from './proxy-ImportNamespaceSpecifier'
import * as proxySpec from './proxy-ImportSpecifier'

jest.mock('./config')

xdescribe.each([
  [proxyDefault, 'ImportDefaultSpecifier'],
  [proxyNamespace, 'ImportNamespaceSpecifier'],
  [proxySpec, 'ImportSpecifier'],
])('basic mocks from __mocks__/', (proxy, name) => {

  it(`${name} should expose some stuff from config`, () => {
    // By default, I want these automocks to look like the values from the
    // original.  Let's deal with that later, though.
    expect(proxy.getName()).toBe('Diz')
    expect(proxy.getAge()).toBe(99)
    expect(proxy.getColor()).toBe('blue')
  })
})
