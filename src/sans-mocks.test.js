import * as proxyDefault from './proxy-ImportDefaultSpecifier'
import * as proxyNamespace from './proxy-ImportNamespaceSpecifier'
import * as proxySpec from './proxy-ImportSpecifier'

describe.each([
  [proxyDefault, 'ImportDefaultSpecifier'],
  [proxyNamespace, 'ImportNamespaceSpecifier'],
  [proxySpec, 'ImportSpecifier'],
])('without mocking', (mod, name) => {

  it(`${name} should expose some stuff from config`, () => {
    expect(mod.getName()).toBe('John')
    expect(mod.getAge()).toBe(60)
    expect(mod.getColor()).toBe('red')
  })
})
