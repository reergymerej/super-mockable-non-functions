import * as config from './config'

export const getName = () => config.default.name
export const getAge = () => config.age()
export const getColor = () => config.default.color
