import rentalCashflowCalculator from '../RentalCashflowCalculator'
import RentalCashflowCalculator from '../RentalCashflowCalculator'

test('calculateNetRentAfterVacancy', () => {
  expect(
    RentalCashflowCalculator.calculateNetRentAfterVacancy(100, 1, 10)
  ).toBe(90)
})

test('calculateNetRent', () => {
  expect(
    RentalCashflowCalculator.calculateNetRentAfterVacancy(100, 0, 10)
  ).toBe(0)
})

test('calculateNetRent', () => {
  expect(
    RentalCashflowCalculator.calculateNetRentAfterVacancy(100, 2, 10)
  ).toBe(180)
})

test('calculateOperationExpense', () => {
  expect(
    RentalCashflowCalculator.calculateOperationExpense(430, 70, 483, 200, 177)
  ).toBe(1360)
})

test('getMonthlyMortgagePayment', () => {
  expect(
    RentalCashflowCalculator.calculateMonthlyMortgagePayment(
      2.99,
      360,
      480059,
      25
    )
  ).toBe(1516)
})

test('calculatePropertyManagementFee', () => {
  expect(RentalCashflowCalculator.calculatePropertyManagementFee(100, 10)).toBe(
    10
  )
})

test('calculatePropertyManagementFee', () => {
  expect(RentalCashflowCalculator.calculatePropertyManagementFee(100, 8)).toBe(
    8
  )
})

test('calculatePropertyManagementFee', () => {
  expect(RentalCashflowCalculator.calculatePropertyManagementFee(0, 8)).toBe(0)
})

test('calculatePropertyManagementFee', () => {
  expect(RentalCashflowCalculator.calculatePropertyManagementFee(100, 20)).toBe(
    20
  )
})

test('calculateMonthlyCashFlow', () => {
  expect(
    RentalCashflowCalculator.calculateMonthlyCashFlow(2216, 1516, 1361)
  ).toBe(-661)
})

test('calculateMonthlyCashFlow', () => {
  expect(
    RentalCashflowCalculator.calculateMonthlyCashFlow(2216, 1516, 1361)
  ).toBe(-661)
})

test('calculateCapRate', () => {
  expect(RentalCashflowCalculator.calculateCapRate(10263, 480059)).toBe(2.13)
})

test('calculateCashOnCashReturn', () => {
  expect(
    RentalCashflowCalculator.calculateCashOnCashReturn(-7929, 120015)
  ).toBe(-6.61)
})

test('calculateReturnOnInvestment', () => {
  expect(
    RentalCashflowCalculator.calculateReturnOnInvestment({
      price: 480059,
      rent: 2462,
      hoa_fee: 430,
      monthly_home_insurance: 70,
      monthly_property_taxes: 483.3,
      downPaymentPercentage: 25,
      interestRate: 2.99,
      loanYear: 30,
      propertyUnitCount: 1,
      maintenancePerMonthDollarAmount: 200,
      propertyManagementPercentage: 8,
      vacancyMonthlyRatePercentage: 10,
    })
  ).toEqual({
    monthlyMortgage: 1516,
    monthlyOperationExpense: 1361,
    monthlyCashFlow: -661,
    cashOnCash: -6.61,
    capRate: 2.13,
  })
})

test(`getRentPercentageNumber`, () => {
  expect(rentalCashflowCalculator.getRentPercentageNumber(1000, 1000)).toBe(100)
})
test(`getRentPercentageNumber`, () => {
  expect(rentalCashflowCalculator.getRentPercentageNumber(1000, 2000)).toBe(100)
})
test(`getRentPercentageNumber`, () => {
  expect(rentalCashflowCalculator.getRentPercentageNumber(-1000, 2000)).toBe(50)
})
test(`getRentPercentageNumber`, () => {
  expect(rentalCashflowCalculator.getRentPercentageNumber(-1208, 2000)).toBe(
    60.4
  )
})
