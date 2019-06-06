import * as mod from './index'


// This doesn't do any mocking.
xit('should use the original value', () => {
  expect(mod.getName()).toBe('John')
  expect(mod.getAge()).toBe(60)
})


// We can mock the module here.
// jest.mock('./config', () => ({
//   name: 'Bill',
//   age: () => 24,
// }))

xdescribe('mocking in the test', () => {
  it('should mock primitives', () => {
    expect(mod.getName()).toBe('Bill')
  })

  it('should mock functions', () => {
    expect(mod.getAge()).toBe(24)
  })
})


// But we can't mock it again.  It will overwrite.
// jest.mock('./config', () => ({
//   name: 'Dr. Pepper',
//   age: () => 33,
// }))

xdescribe('mocking in the test', () => {
  it('should mock primitives', () => {
    expect(mod.getName()).toBe('Dr. Pepper')
  })

  it('should mock functions', () => {
    expect(mod.getAge()).toBe(33)
  })
})


// What if we move it to __mocks__/?
// NOTE: Mocks done like above overwrite those in __mocks__/.
jest.mock('./config')

describe('mocking in the test', () => {
  it('should mock primitives', () => {
    expect(mod.getName()).toBe('Carl')
  })

  it('should mock functions', () => {
    expect(mod.getAge()).toBe(19)
  })

  xit('should allow you to change the mocks as you go', () => {
    // These are read only, so you have to use a mock.
    // const { age } = require('./config')
    // age = () => 99
    expect(mod.getAge()).toBe(19)
  })

  it('should allow you to change the mocks as you go', () => {
    const { age } = require('./config')
    age.mockImplementationOnce(() => 99)
    expect(mod.getAge()).toBe(99)

    age.mockImplementationOnce(() => 33)
    expect(mod.getAge()).toBe(33)
  })

  // it('should blow up when you try and change the read-only primitive', () => {
  //   const { name } = require('./config')
  //   name = 'Jeremy Irons'
  //   expect(mod.getName()).toBe('Jeremy Irons')
  // })

  // How the heck can you mock a non-function multiple ways in the same file?
})
