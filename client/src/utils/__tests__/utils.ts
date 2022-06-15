import {
  isAnEligibleTab,
  typeScriptCallBack,
  typeScriptCallBackObject,
  typeScriptCallBackObjectGeneric,
} from '../utils'

test('isAnEligibleTab', () => {
  expect(isAnEligibleTab('x', 'y')).toBe(false)
  expect(isAnEligibleTab('https://www.redfin.com', 'y')).toBe(true)
  expect(
    isAnEligibleTab(
      'https://www.redfin.com',
      'https://www.redfin.com/TX/Leander/808-Alta-Way-78641/home/167598377'
    )
  ).toBe(true)
})

test('typeScriptCallBack', () => {
  let result = 0
  typeScriptCallBack(1, 2, (res) => (result = res))
  expect(result).toBe(3)
})

test('typeScriptCallBackObject', () => {
  let result = 0
  typeScriptCallBackObject({ a: 1, b: 2 }, (res) => (result = res))
  expect(result).toBe(3)
})

test('typeScriptCallBackObjectGeneric', () => {
  let result = 0
  typeScriptCallBackObjectGeneric({ a: 1, b: 2 }, (res) => (result = res))
  expect(result).toBe(1)
})

test('typeScriptCallBackObjectGeneric', () => {
  let result = 0
  typeScriptCallBackObjectGeneric({ a: '1', b: 2 }, (res) => (result = res))
  expect(result).toBe('1')
})
