import * as proxyImportSpecifier from './proxy-ImportSpecifier'

xdescribe('proxies', () => {
  it('should work for modules imported with default')
  it('should work for modules imported with named imports')
  it('should work for modules imported with namespace using namespace.default')

  // unless we can patch the stuff from default into the top-level...
  it('should NOT work for modules imported with namespace')
})

// any way of exporting should work
xdescribe('exports', () => {
  test('module.exports')
  test('exports.foo')

  test('named exports')
  test('default exports')
})
