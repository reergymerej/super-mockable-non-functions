# mock-primitive

Jest gives you a pretty beefy way to mock imports, but have you ever tried to
[mock a primitive](https://jestjs.io/docs/en/jest-object#primitives)?  You can
create a mock within your test file...

```js
jest.mock('./config', () => ({ name: 'Bingo' }))
```

...but that only works once.  If you need to test variations of that, you need
to make a new test file for each version.


## Caveat

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
