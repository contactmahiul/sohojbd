// components/calculators/DPSCalculator.tsx

'use client'

import { useState } from 'react'

export default function DPSCalculator() {
  const [monthlyDeposit, setMonthlyDeposit] = useState('')
  const [interestRate, setInterestRate] = useState('')
  const [tenure, setTenure] = useState('')
  const [result, setResult] = useState<null | {
    totalDeposit: number
    totalInterest: number
    maturityAmount: number
  }>(null)

  const bn = (n: number) => Math.round(n).toLocaleString('bn-BD')

  const calculate = () => {
    const P = parseFloat(monthlyDeposit)
    const r = parseFloat(interestRate) / 100 / 12
    const n = parseFloat(tenure) * 12

    if (!P || !r || !n) return

    const maturityAmount = P * ((Math.pow(1 + r, n) - 1) / r) * (1 + r)
    const totalDeposit = P * n
    const totalInterest = maturityAmount - totalDeposit

    setResult({ totalDeposit, totalInterest, maturityAmount })
  }

  const reset = () => {
    setMonthlyDeposit('')
    setInterestRate('')
    setTenure('')
    setResult(null)
  }

  const interestPct = result
    ? ((result.totalInterest / result.maturityAmount) * 100).toFixed(1)
    : 0

  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
      <h2 className="text-xl font-bold text-gray-800 mb-1">DPS ক্যালকুলেটর</h2>
      <p className="text-sm text-gray-500 mb-6">মাসিক জমার ভিত্তিতে মেয়াদপূর্তির পরিমাণ হিসাব করুন</p>

      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            মাসিক জমার পরিমাণ (৳)
          </label>
          <input
            type="number"
            value={monthlyDeposit}
            onChange={e => setMonthlyDeposit(e.target.value)}
            placeholder="যেমন: 5000"
            className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-gray-800 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            বার্ষিক সুদের হার (%)
          </label>
          <input
            type="number"
            value={interestRate}
            onChange={e => setInterestRate(e.target.value)}
            placeholder="যেমন: 7.5"
            step="0.1"
            className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-gray-800 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            মেয়াদ (বছর)
          </label>
          <div className="grid grid-cols-4 gap-2 mb-2">
            {[1, 2, 3, 5].map(y => (
              <button
                key={y}
                onClick={() => setTenure(String(y))}
                className={`py-2 rounded-lg text-sm font-medium border transition-colors ${
                  tenure === String(y)
                    ? 'bg-green-700 text-white border-green-700'
                    : 'bg-gray-50 text-gray-600 border-gray-200 hover:border-green-400'
                }`}
              >
                {y} বছর
              </button>
            ))}
          </div>
          <input
            type="number"
            value={tenure}
            onChange={e => setTenure(e.target.value)}
            placeholder="বা নিজে লিখুন"
            className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-gray-800 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
          />
        </div>

        <div className="flex gap-3 pt-2">
          <button
            onClick={calculate}
            className="flex-1 bg-green-700 hover:bg-green-800 text-white font-semibold py-3 rounded-xl transition-colors"
          >
            হিসাব করুন
          </button>
          <button
            onClick={reset}
            className="px-5 py-3 border border-gray-200 text-gray-500 rounded-xl hover:bg-gray-50 transition-colors text-sm"
          >
            রিসেট
          </button>
        </div>
      </div>

      {result && (
        <div className="mt-6 bg-green-50 rounded-xl p-5 space-y-4">
          <div className="grid grid-cols-2 gap-3">
            <div className="bg-white rounded-lg p-3 border border-green-100">
              <p className="text-xs text-gray-500 mb-1">মোট জমা</p>
              <p className="text-lg font-bold text-gray-800">৳{bn(result.totalDeposit)}</p>
            </div>
            <div className="bg-white rounded-lg p-3 border border-green-100">
              <p className="text-xs text-gray-500 mb-1">মোট সুদ</p>
              <p className="text-lg font-bold text-green-700">৳{bn(result.totalInterest)}</p>
            </div>
          </div>

          <div className="bg-green-700 text-white rounded-xl p-4 text-center">
            <p className="text-sm opacity-80 mb-1">মেয়াদপূর্তিতে পাবেন</p>
            <p className="text-3xl font-bold">৳{bn(result.maturityAmount)}</p>
          </div>

          <div>
            <div className="flex justify-between text-xs text-gray-500 mb-1">
              <span>আসল ({(100 - parseFloat(String(interestPct))).toFixed(1)}%)</span>
              <span>সুদ ({interestPct}%)</span>
            </div>
            <div className="h-3 bg-gray-200 rounded-full overflow-hidden flex">
              <div
                className="bg-green-700 h-full transition-all duration-500"
                style={{ width: `${100 - parseFloat(String(interestPct))}%` }}
              />
              <div
                className="bg-green-400 h-full transition-all duration-500"
                style={{ width: `${interestPct}%` }}
              />
            </div>
          </div>
        </div>
      )}
    </div>
  )
}