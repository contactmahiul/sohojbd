'use client'

import { useState } from 'react'

type TaxPayer = 'general' | 'woman' | 'senior' | 'disabled'

const TAX_FREE_LIMITS: Record<TaxPayer, number> = {
  general: 350000,
  woman: 400000,
  senior: 400000,
  disabled: 475000,
}

const TAX_SLABS = [
  { limit: 100000, rate: 0.05, label: 'প্রথম ১ লাখ' },
  { limit: 300000, rate: 0.10, label: 'পরবর্তী ৩ লাখ' },
  { limit: 400000, rate: 0.15, label: 'পরবর্তী ৪ লাখ' },
  { limit: 500000, rate: 0.20, label: 'পরবর্তী ৫ লাখ' },
  { limit: Infinity, rate: 0.25, label: 'বাকি অংশ' },
]

export default function TaxCalculator() {
  const [income, setIncome] = useState('')
  const [taxpayer, setTaxpayer] = useState<TaxPayer>('general')
  const [result, setResult] = useState<null | {
    taxableIncome: number
    totalTax: number
    effectiveRate: number
    breakdown: { label: string; taxable: number; rate: number; tax: number }[]
  }>(null)

  const bn = (n: number) => Math.round(n).toLocaleString('bn-BD')
  const pct = (n: number) => n.toFixed(2)

  const calculate = () => {
    const grossIncome = parseFloat(income)
    if (!grossIncome || grossIncome <= 0) return

    const freeLimit = TAX_FREE_LIMITS[taxpayer]
    const taxableIncome = Math.max(0, grossIncome - freeLimit)

    let remaining = taxableIncome
    let totalTax = 0
    const breakdown: { label: string; taxable: number; rate: number; tax: number }[] = []

    for (const slab of TAX_SLABS) {
      if (remaining <= 0) break
      const taxable = Math.min(remaining, slab.limit === Infinity ? remaining : slab.limit)
      const tax = taxable * slab.rate
      breakdown.push({ label: slab.label, taxable, rate: slab.rate * 100, tax })
      totalTax += tax
      remaining -= taxable
    }

    const effectiveRate = grossIncome > 0 ? (totalTax / grossIncome) * 100 : 0
    setResult({ taxableIncome, totalTax, effectiveRate, breakdown })
  }

  const reset = () => {
    setIncome('')
    setTaxpayer('general')
    setResult(null)
  }

  const types: { key: TaxPayer; label: string; limit: string }[] = [
    { key: 'general', label: 'সাধারণ', limit: '৩.৫ লাখ' },
    { key: 'woman', label: 'মহিলা', limit: '৪ লাখ' },
    { key: 'senior', label: 'প্রবীণ', limit: '৪ লাখ' },
    { key: 'disabled', label: 'প্রতিবন্ধী', limit: '৪.৭৫ লাখ' },
  ]

  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
      <h2 className="text-xl font-bold text-gray-800 mb-1">আয়কর ক্যালকুলেটর</h2>
      <p className="text-sm text-gray-500 mb-6">অর্থবছর ২০২৫-২৬ অনুযায়ী আয়কর হিসাব করুন</p>

      <div className="space-y-4">
        {/* Taxpayer type */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">করদাতার ধরন</label>
          <div className="grid grid-cols-2 gap-2">
            {types.map(t => (
              <button
                key={t.key}
                onClick={() => setTaxpayer(t.key)}
                className={`py-2.5 px-3 rounded-lg border text-sm transition-colors text-left ${
                  taxpayer === t.key
                    ? 'bg-green-700 text-white border-green-700'
                    : 'bg-gray-50 text-gray-700 border-gray-200 hover:border-green-400'
                }`}
              >
                <span className="font-medium block">{t.label}</span>
                <span className={`text-xs ${taxpayer === t.key ? 'text-green-100' : 'text-gray-400'}`}>
                  করমুক্ত: {t.limit}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Income */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            বার্ষিক মোট আয় (৳)
          </label>
          <input
            type="number"
            value={income}
            onChange={e => setIncome(e.target.value)}
            placeholder="যেমন: 600000"
            className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-gray-800 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
          />
          <p className="text-xs text-gray-400 mt-1">
            করমুক্ত সীমা: ৳{bn(TAX_FREE_LIMITS[taxpayer])}
          </p>
        </div>

        <div className="flex gap-3 pt-1">
          <button
            onClick={calculate}
            className="flex-1 bg-green-700 hover:bg-green-800 text-white font-semibold py-3 rounded-xl transition-colors"
          >
            কর হিসাব করুন
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
        <div className="mt-6 space-y-4">
          {result.totalTax === 0 ? (
            <div className="bg-green-50 border border-green-200 rounded-xl p-5 text-center">
              <p className="text-green-700 font-semibold text-lg">🎉 কোনো আয়কর প্রযোজ্য নয়</p>
              <p className="text-green-600 text-sm mt-1">
                আপনার আয় করমুক্ত সীমার মধ্যে আছে।
              </p>
            </div>
          ) : (
            <>
              {/* Summary */}
              <div className="bg-red-50 rounded-xl p-4">
                <div className="grid grid-cols-2 gap-3 mb-3">
                  <div className="bg-white rounded-lg p-3 border border-red-100">
                    <p className="text-xs text-gray-500 mb-0.5">করযোগ্য আয়</p>
                    <p className="text-base font-bold text-gray-800">৳{bn(result.taxableIncome)}</p>
                  </div>
                  <div className="bg-white rounded-lg p-3 border border-red-100">
                    <p className="text-xs text-gray-500 mb-0.5">কার্যকর করহার</p>
                    <p className="text-base font-bold text-orange-600">{pct(result.effectiveRate)}%</p>
                  </div>
                </div>
                <div className="bg-red-600 text-white rounded-xl p-4 text-center">
                  <p className="text-sm opacity-80 mb-1">মোট প্রদেয় আয়কর</p>
                  <p className="text-3xl font-bold">৳{bn(result.totalTax)}</p>
                </div>
              </div>

              {/* Breakdown */}
              <div>
                <p className="text-sm font-semibold text-gray-700 mb-2">করের বিস্তারিত হিসাব</p>
                <div className="overflow-x-auto rounded-xl border border-gray-100">
                  <table className="w-full text-xs">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="text-left px-3 py-2 text-gray-500 font-medium">স্তর</th>
                        <th className="text-right px-3 py-2 text-gray-500 font-medium">করযোগ্য আয়</th>
                        <th className="text-right px-3 py-2 text-gray-500 font-medium">হার</th>
                        <th className="text-right px-3 py-2 text-gray-500 font-medium">কর</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-50">
                      {result.breakdown.map((row, i) => (
                        <tr key={i} className="bg-white">
                          <td className="px-3 py-2 text-gray-700">{row.label}</td>
                          <td className="px-3 py-2 text-right text-gray-600">৳{bn(row.taxable)}</td>
                          <td className="px-3 py-2 text-right text-gray-600">{row.rate}%</td>
                          <td className="px-3 py-2 text-right font-semibold text-red-600">৳{bn(row.tax)}</td>
                        </tr>
                      ))}
                    </tbody>
                    <tfoot>
                      <tr className="bg-gray-50 border-t border-gray-200">
                        <td colSpan={3} className="px-3 py-2 font-semibold text-gray-800 text-xs">মোট</td>
                        <td className="px-3 py-2 text-right font-bold text-red-600">৳{bn(result.totalTax)}</td>
                      </tr>
                    </tfoot>
                  </table>
                </div>
              </div>
            </>
          )}
        </div>
      )}
    </div>
  )
}