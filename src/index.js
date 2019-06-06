import { name, age } from './config'
export const getName = () => name
export const getAge = () => age()

// Ah, ha!  This f's it all up!
// import * as config from './config'
//
// export const getName = () => config.name
// export const getAge = () => config.age()
