export interface PropertyCalCashFlow {
  monthlyMortgage: number
  monthlyPayment: number
  cashFlow: number
}

export interface propertyInvestmentReturns {
  propertyInvestmentReturns: {
    cashFlow: number
    cashOnCash: number
    capRate: number
  }
}

export interface CashFlowArgs {
  price: number
  rent: number
  hoa_fee: number
  monthly_home_insurance: number
  monthly_property_taxes: number
  downPaymentPercentage: number
  interestRate: number
  loanYear: number
  propertyUnitCount: number
  maintenancePerMonthDollarAmount: number
  propertyManagementPercentage: number
  vacancyMonthlyRatePercentage: number
}
export interface CashFlowReturn {
  monthlyMortgage: number
  monthlyOperationExpense: number
  monthlyCashFlow: number
  cashOnCash: number
  capRate: number
}

export const twoDecimalPoint = (number: number) =>
  Math.floor(number * 100) / 100

class RentalCashflowCalculator {
  public calculateNetRentAfterVacancy(
    rent: number = 0,
    propertyUnitCount: number = 0,
    vacancyMonthlyRatePercentage: number = 0
  ): number {
    const totalRent = rent * propertyUnitCount
    const netRent = totalRent - (vacancyMonthlyRatePercentage / 100) * totalRent
    return netRent
  }

  public calculateMonthlyMortgagePayment(
    interestRate: number,
    numberOfMonths: number,
    price: number,
    downPaymentPercentage: number
  ): number {
    const amountFinanced = price * (1 - downPaymentPercentage / 100)
    if (interestRate == 0)
      return Number((amountFinanced / numberOfMonths).toFixed(2))
    const monthlyInterestRate: number = interestRate / 1200
    const pvif: number = Math.pow(1 + monthlyInterestRate, numberOfMonths)
    return Number(
      ((monthlyInterestRate / (pvif - 1)) * (amountFinanced * pvif)).toFixed(0)
    )
  }

  public calculatePropertyManagementFee(
    netRent: number = 0,
    propertyManagementPercentage: number = 0
  ): number {
    return (netRent * propertyManagementPercentage) / 100
  }

  public calculateOperationExpense(
    hoa: number = 0,
    homeInsurance: number = 0,
    propertyTax: number = 0,
    maintenanceFee: number = 0,
    propertyManagementFee: number = 0
  ): number {
    if (!hoa) {
      hoa = 0
    }
    return Number(
      (
        hoa +
        homeInsurance +
        propertyTax +
        maintenanceFee +
        propertyManagementFee
      ).toFixed(2)
    )
  }

  public calculateMonthlyCashFlow(
    netRent: number,
    monthlyMortgagePayment: number,
    operationExpense: number
  ): number {
    return Number(
      (netRent - monthlyMortgagePayment - operationExpense).toFixed(2)
    )
  }

  public calculateCapRate(netOperationIncome: number, price: number): number {
    return Number(twoDecimalPoint((netOperationIncome / price) * 100))
  }

  public calculateCashOnCashReturn(
    yearlyCashFlow: number,
    downPayment: number
  ): number {
    return Number(twoDecimalPoint((yearlyCashFlow / downPayment) * 100))
  }

  public calculateReturnOnInvestment = ({
    price,
    rent,
    hoa_fee,
    monthly_home_insurance,
    monthly_property_taxes,
    downPaymentPercentage,
    interestRate,
    loanYear,
    propertyUnitCount,
    maintenancePerMonthDollarAmount,
    propertyManagementPercentage,
    vacancyMonthlyRatePercentage,
  }: CashFlowArgs): CashFlowReturn => {
    const netRent = this.calculateNetRentAfterVacancy(
      rent,
      propertyUnitCount,
      vacancyMonthlyRatePercentage
    )
    const monthlyOperationExpense = Math.round(
      this.calculateOperationExpense(
        hoa_fee,
        monthly_home_insurance,
        monthly_property_taxes,
        maintenancePerMonthDollarAmount,
        (netRent * propertyManagementPercentage) / 100
      )
    )
    const monthlyMortgage = Math.round(
      this.calculateMonthlyMortgagePayment(
        interestRate,
        loanYear * 12,
        price,
        downPaymentPercentage
      )
    )

    const monthlyCashFlow = Math.round(
      this.calculateMonthlyCashFlow(
        netRent,
        monthlyMortgage,
        monthlyOperationExpense
      )
    )
    const netOperationIncome = (monthlyCashFlow + monthlyMortgage) * 12
    const capRate = this.calculateCapRate(netOperationIncome, price)
    const cashOnCash = this.calculateCashOnCashReturn(
      monthlyCashFlow * 12,
      (price * downPaymentPercentage) / 100
    )
    return {
      monthlyMortgage,
      monthlyOperationExpense,
      monthlyCashFlow,
      cashOnCash,
      capRate,
    }
  }
  getRentPercentageNumber = (cashFlow: number, totalRent: number): number => {
    console.log({ cashFlow })
    console.log({ totalRent })
    if (totalRent === 0) {
      return 0
    }

    if (cashFlow > 0) {
      return 100
    }
    const total = cashFlow + totalRent
    const result = (Math.abs(cashFlow) / total) * 100
    console.log({ result })
    console.log(result.toFixed(2))
    return Number(result.toFixed(2))
  }
}
const rentalCashflowCalculator = new RentalCashflowCalculator()
export default rentalCashflowCalculator
