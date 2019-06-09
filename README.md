# jest-mock-primitive

[![Build Status](https://travis-ci.org/reergymerej/super-mockable-non-functions.svg?branch=master)](https://travis-ci.org/reergymerej/super-mockable-non-functions)

Ever tried to [mock a
primitive](https://jestjs.io/docs/en/jest-object#primitives)?  You can create a
mock within your test file...

```js
jest.mock('./config', () => ({ name: 'Bingo' }))
```

...but that only works once.  If you need to test variations of that, you need
to make a new test file for each version.

Unless you use `jest-mock-primitive`. 😎


## Usage

To mock primitives on a file called `config.js`, add a [manual
mock](https://jestjs.io/docs/en/manual-mocks#mocking-user-modules).  Then export
the module after passing it through `primitive-mock`.


```js
// __mocks__/config.js
import mock from 'jest-mock-primitive'
import path from 'path'

// Use module.exports and provide the absolute path.
module.exports = mock(path.resolve(__dirname, '../config'))
```

Now you can mock primitives just like you mock functions.  Each primitive is on
the mocked module with the original value, but they also have "backdoor" mocks.
To alter or interrogate the mock for `name`, use `nameMock`.  For `color`, use
`colorMock`.  For `evilBananaSpaceShip`, use `evilBananaSpaceShipMock`.

```js
it('should allow me to force feed values for a primitive', () => {
  const { nameMock } = require('./config')
  nameMock.mockImplementationOnce(() => 'Bert')
  expect(app.getName()).toBe('Bert')

  nameMock.mockImplementationOnce(() => 'Ernie')
  expect(app.getName()).toBe('Ernie')
})
```

The rest of the module is mocked via
[genMockFromModule](https://jestjs.io/docs/en/jest-object#jestgenmockfrommodulemodulename),
so you can use it as usual.


## Complete Example

![example](https://user-images.githubusercontent.com/1720010/59156631-76b4f480-8a53-11e9-8c1a-24328bd5762c.png)


## Caveats


Due to the way the [`import * as` style of imports breaks
references](https://reergymerej.github.io/blog/2019/06/08/importing-getters.html),
this does not work without a minor tweak.

For any non-functions you want to mock, the call sites must reference the
`default` export as shown here.

```js
import * as config from './config'

// can't mock
// export const getName = () => config.name

// can mock
export const getName = () => config.default.name
```



---
kickstarted by [npm-boom][npm-boom]

[npm-boom]: https://github.com/reergymerej/npm-boom
