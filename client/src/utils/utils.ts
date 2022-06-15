export const supportedOriginList: string[] = ['https://www.redfin.com']
export const isAnEligibleTab = (origin: string, url: string): boolean => {
  if (supportedOriginList.includes(origin)) {
    return true
  }
  // Need to do page level check
  return false
}

export const formatCurrency = (value: number): string => {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  }).format(value)
}

export const currencyToNumber = (value: string): number => {
  if (value) {
    return Number(value.replace(/\$\s?|(,*)/g, ''))
  }
  return 0
}

export const removeNumberFormats = (value: string): number => {
  return Number(value.replace(/\,/g, ''))
}

export const typeScriptCallBack = (
  a: number,
  b: number,
  fn: (number: number) => number
): number => {
  return fn(a + b)
}

export const typeScriptCallBackObject = (
  { a, b }: { a: number; b: number },
  fn: (number: number) => number
): number => {
  return fn(a + b)
}

export const typeScriptCallBackObjectGeneric = <T>(
  { a, b }: { a: T; b: number },
  fn: (T: any) => T
): T => {
  return fn(a)
}
