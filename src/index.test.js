import * as foo from './foo'
import { bar } from './foo'

// import * as fromProxy from './proxy'
// import { barFromProxy } from './proxy'

console.log(foo)
//{ bar: {}, default: { bar: [Getter] } }
//{ bar: {}, default: { bar: [Getter] } }


it('should be identical', () => {
  // expect(foo.bar).toBe(bar)
  // expect(foo.bar).toBe(fromProxy.barFromProxy)
  // expect(foo.bar).toBe(barFromProxy)
})
