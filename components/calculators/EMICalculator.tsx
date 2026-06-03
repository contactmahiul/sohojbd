'use client'

import { useState } from 'react'

export default function EMICalculator() {
  const [loanAmount, setLoanAmount] = useState('')
  const [interestRate, setInterestRate] = useState('')
  const [tenure, setTenure] = useState('')
  const [result, setResult] = useState<null | {
    emi: number
    totalPayment: number
    totalInterest: number
  }>(null)

  const calculate = () => {
    const P = parseFloat(loanAmount)
    const annualRate = parseFloat(interestRate)
    const months = parseFloat(tenure) * 12

    if (!P || !annualRate || !months) return

    const r = annualRate / 12 / 100
    const emi = (P * r * Math.pow(1 + r, months)) / (Math.pow(1 + r, months) - 1)
    const totalPayment = emi * months
    const totalInterest = totalPayment - P

    setResult({
      emi: Math.round(emi),
      totalPayment: Math.round(totalPayment),
      totalInterest: Math.round(totalInterest),
    })
  }

  const reset = () => {
    setLoanAmount('')
    setInterestRate('')
    setTenure('')
    setResult(null)
  }

  const formatBDT = (amount: number) =>
    '৳ ' + amount.toLocaleString('bn-BD')

  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
      
      {/* Header */}
      <div className="bg-green-700 px-6 py-5">
        <h2 className="text-white text-xl font-bold">EMI ক্যালকুলেটর</h2>
        <p className="text-green-200 text-sm mt-1">লোনের মাসিক কিস্তি হিসাব করুন</p>
      </div>

      <div className="p-6 flex flex-col gap-5">

        {/* Loan Amount */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            লোনের পরিমাণ (টাকা)
          </label>
          <input
            type="number"
            value={loanAmount}
            onChange={(e) => setLoanAmount(e.target.value)}
            placeholder="যেমন: 500000"
            className="w-full border border-gray-200 rounded-lg px-4 py-3 text-gray-800 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
          />
        </div>

        {/* Interest Rate */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            বার্ষিক সুদের হার (%)
          </label>
          <input
            type="number"
            value={interestRate}
            onChange={(e) => setInterestRate(e.target.value)}
            placeholder="যেমন: 9"
            className="w-full border border-gray-200 rounded-lg px-4 py-3 text-gray-800 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
          />
          <p className="text-xs text-gray-400 mt-1">বাংলাদেশের ব্যাংকগুলোতে সাধারণত ৭% - ১৩%</p>
        </div>

        {/* Tenure */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            লোনের মেয়াদ (বছর)
          </label>
          <input
            type="number"
            value={tenure}
            onChange={(e) => setTenure(e.target.value)}
            placeholder="যেমন: 5"
            className="w-full border border-gray-200 rounded-lg px-4 py-3 text-gray-800 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
          />
        </div>

        {/* Buttons */}
        <div className="flex gap-3">
          <button
            onClick={calculate}
            className="flex-1 bg-green-700 text-white font-bold py-3 rounded-lg hover:bg-green-800 transition-colors"
          >
            হিসাব করুন
          </button>
          <button
            onClick={reset}
            className="px-6 bg-gray-100 text-gray-600 font-medium py-3 rounded-lg hover:bg-gray-200 transition-colors"
          >
            রিসেট
          </button>
        </div>

        {/* Result */}
        {result && (
          <div className="mt-2 rounded-xl bg-green-50 border border-green-100 overflow-hidden">
            
            {/* Main EMI */}
            <div className="bg-green-700 text-white text-center py-5">
              <p className="text-sm text-green-200 mb-1">মাসিক কিস্তি (EMI)</p>
              <p className="text-4xl font-bold">{formatBDT(result.emi)}</p>
            </div>

            {/* Breakdown */}
            <div className="grid grid-cols-2 divide-x divide-green-100">
              <div className="px-5 py-4 text-center">
                <p className="text-xs text-gray-500 mb-1">মোট পরিশোধ</p>
                <p className="text-lg font-bold text-gray-800">{formatBDT(result.totalPayment)}</p>
              </div>
              <div className="px-5 py-4 text-center">
                <p className="text-xs text-gray-500 mb-1">মোট সুদ</p>
                <p className="text-lg font-bold text-red-500">{formatBDT(result.totalInterest)}</p>
              </div>
            </div>

            {/* Interest visual bar */}
            <div className="px-5 py-4">
              <div className="flex justify-between text-xs text-gray-500 mb-2">
                <span>মূল টাকা</span>
                <span>সুদ</span>
              </div>
              <div className="h-3 rounded-full bg-gray-200 overflow-hidden flex">
                <div
                  className="bg-green-600 h-full rounded-full transition-all duration-500"
                  style={{
                    width: `${(parseFloat(loanAmount) / result.totalPayment) * 100}%`
                  }}
                />
              </div>
              <div className="flex justify-between text-xs mt-2">
                <span className="text-green-700 font-medium">
                  {Math.round((parseFloat(loanAmount) / result.totalPayment) * 100)}%
                </span>
                <span className="text-red-500 font-medium">
                  {Math.round((result.totalInterest / result.totalPayment) * 100)}%
                </span>
              </div>
            </div>

          </div>
        )}

      </div>
    </div>
  )
} 