import { useState, useEffect } from 'react'
import Layout from '../Layout'
import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField'
import Container from '@mui/material/Container'
import {
  teal,
  grey,
  lightBlue,
  deepOrange,
  indigo,
  cyan,
  lime,
  amber,
  yellow,
} from '@mui/material/colors'

import MyCurrencyTextFiled from '../components/CurrencyInputBox'
import TextInputField from '../components/TextInputField'
import DisplayResult from '../components/DisplayResult'
import { formatCurrency } from '../utils/utils'
import rentalCashflowCalculator from '../utils/RentalCashflowCalculator'
import Typography from '@mui/material/Typography'

export type CashFlowFormValues = {
  rent: number
  price: number
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

const Line = ({
  width,
  backgroundColor,
  styles = {},
  children,
}: {
  width: number
  backgroundColor: string
  styles?: any
  children?: any
}) => {
  return (
    <div
      style={{
        width: `${width}%`,
        height: 8,
        backgroundColor: backgroundColor,
        ...styles,
      }}
    >
      {children}
    </div>
  )
}
const Dot = ({ label, color }: { label: string; color: string }) => {
  return (
    <div
      style={{
        display: 'flex',
        // justifyContent: 'center',
        // alignContent: 'center',
        alignItems: 'center',
        height: 20,
      }}
    >
      <div
        style={{
          width: 8,
          height: 8,
          backgroundColor: color,
          borderRadius: 8,
          marginRight: 5,
          marginTop: -3,
        }}
      />
      <Typography variant="caption" gutterBottom component="div">
        {label}
      </Typography>
    </div>
  )
}
const CashflowCalculator = () => {
  const [formValues, setFormValues] = useState<CashFlowFormValues>({
    rent: 4000,
    price: 500000,
    hoa_fee: 50,
    monthly_home_insurance: 100,
    monthly_property_taxes: 900,
    downPaymentPercentage: 20,
    interestRate: 3.5,
    loanYear: 30,
    propertyUnitCount: 1,
    maintenancePerMonthDollarAmount: 100,
    propertyManagementPercentage: 8.5,
    vacancyMonthlyRatePercentage: 5,
  })

  const [cashFlowDetail, setCashFlowDetail] = useState<CashFlowReturn>({
    monthlyMortgage: 0,
    monthlyOperationExpense: 0,
    monthlyCashFlow: 0,
    cashOnCash: 0,
    capRate: 0,
  })
  useEffect(() => {
    updateCashFlow()
  }, [formValues])

  const updateCashFlow = () => {
    const cashFlow = rentalCashflowCalculator.calculateReturnOnInvestment({
      ...formValues,
    })
    console.log({ cashFlow })
    setCashFlowDetail(cashFlow)
  }

  const onChangeHandler = (key: string, value: string) => {
    setFormValues({
      ...formValues,
      [key]: Number(value),
    })
    // updateCashFlow()
  }

  return (
    <Layout>
      <Container maxWidth="sm">
        <div style={{ marginTop: 40 }}>
          <Typography variant="h5" gutterBottom component="div">
            Cashflow Calculator
          </Typography>
          <Box
            component="form"
            sx={{
              '& > :not(style)': { m: 1, width: '25ch' },
            }}
            noValidate
            autoComplete="off"
          >
            <MyCurrencyTextFiled
              label="Rent"
              value={formValues.rent}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                onChangeHandler('rent', e.target.value)
              }}
            />
            <MyCurrencyTextFiled
              label="Property Price"
              value={formValues.price}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                onChangeHandler('price', e.target.value)
              }}
            />
            <MyCurrencyTextFiled
              label="HOA"
              value={formValues.hoa_fee}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                onChangeHandler('hoa_fee', e.target.value)
              }}
            />
            <MyCurrencyTextFiled
              label="Monthly Property Tax"
              value={formValues.monthly_property_taxes}
              onChange={(e) => {
                onChangeHandler('monthly_property_taxes', e.target.value)
              }}
            />
            <MyCurrencyTextFiled
              label="Monthly Insurance"
              value={formValues.monthly_home_insurance}
              onChange={(e) => {
                onChangeHandler('monthly_home_insurance', e.target.value)
              }}
            />

            <TextInputField
              label="Down Payment %"
              type="number"
              value={formValues.downPaymentPercentage}
              onChange={(e) => {
                onChangeHandler('downPaymentPercentage', e.target.value)
              }}
            />

            <MyCurrencyTextFiled
              label="Monthly Maintenance"
              value={formValues.maintenancePerMonthDollarAmount}
              onChange={(e) => {
                onChangeHandler(
                  'maintenancePerMonthDollarAmount',
                  e.target.value
                )
              }}
            />
            <TextInputField
              label="Property management %"
              value={formValues.propertyManagementPercentage}
              type="number"
              onChange={(e) => {
                onChangeHandler('propertyManagementPercentage', e.target.value)
              }}
            />
            <TextInputField
              label="Vacancy Rate %"
              value={formValues.vacancyMonthlyRatePercentage}
              type="number"
              onChange={(e) => {
                onChangeHandler('vacancyMonthlyRatePercentage', e.target.value)
              }}
            />
          </Box>

          <div style={{ marginTop: 20 }}>
            <Typography variant="h5" gutterBottom component="div">
              Cash Flow
            </Typography>

            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
              }}
            >
              <DisplayResult
                value={formatCurrency(cashFlowDetail.monthlyCashFlow)}
                label="Cash Flow"
              />
              <DisplayResult
                value={formatCurrency(cashFlowDetail.cashOnCash)}
                label="Cash on Cash"
              />
              <DisplayResult
                value={formatCurrency(cashFlowDetail.capRate)}
                label="Cap Rate"
              />
              <DisplayResult
                value={formatCurrency(cashFlowDetail.monthlyMortgage)}
                label="Mortgage/mo"
              />
              <DisplayResult
                value={formatCurrency(cashFlowDetail.monthlyOperationExpense)}
                label="Operation Cost/mo"
              />
            </div>
          </div>
          <div style={{ marginTop: 40 }}>
            <Typography variant="caption" display="block" gutterBottom>
              Total Rent
            </Typography>
            <Line
              width={100}
              backgroundColor={grey[300]}
              styles={{ borderRadius: 8 }}
            >
              <Line
                width={rentalCashflowCalculator.getRentPercentageNumber(
                  cashFlowDetail.monthlyCashFlow,
                  formValues.rent
                )}
                backgroundColor={teal[300]}
                styles={{ borderRadius: 8 }}
              />
            </Line>
          </div>

          <div>
            <Typography variant="caption" display="block" gutterBottom>
              Expenses
            </Typography>
            <div>
              <Line
                width={100}
                backgroundColor={grey[300]}
                styles={{
                  backgroundColor: grey[300],
                  borderRadius: 8,
                  display: 'flex',
                }}
              >
                <Line
                  width={
                    (cashFlowDetail.monthlyMortgage / formValues.rent) * 100
                  }
                  backgroundColor={lightBlue[300]}
                  styles={{ borderTopLeftRadius: 5, borderBottomLeftRadius: 5 }}
                />
                <Line
                  width={
                    (formValues.monthly_property_taxes / formValues.rent) * 100
                  }
                  backgroundColor={deepOrange[300]}
                  styles={{}}
                />
                <Line
                  width={
                    (formValues.monthly_home_insurance / formValues.rent) * 100
                  }
                  backgroundColor={indigo[300]}
                  styles={{}}
                />
                <Line
                  width={(formValues.hoa_fee / formValues.rent) * 100}
                  backgroundColor={lime[300]}
                  styles={{}}
                />
                <Line
                  width={formValues.propertyManagementPercentage}
                  backgroundColor={amber[300]}
                  styles={{}}
                />
                <Line
                  width={formValues.vacancyMonthlyRatePercentage}
                  backgroundColor={yellow[300]}
                  styles={{
                    borderTopRightRadius: 5,
                    borderBottomRightRadius: 5,
                  }}
                />
              </Line>
            </div>
            <div style={{}}>
              <Dot label="Principal & Interest" color={lightBlue[300]} />
              <Dot label="Property Taxes" color={deepOrange[300]} />
              <Dot label="Homeowner's Insurance" color={indigo[300]} />
              <Dot label="HOA" color={lime[300]} />
              <Dot label="Property Management" color={amber[300]} />
              <Dot label="Vacancy Rate" color={yellow[300]} />
            </div>
          </div>
        </div>
      </Container>
    </Layout>
  )
}

export default CashflowCalculator
