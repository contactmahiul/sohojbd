'use client'

import { useState } from 'react'

type Provider = 'bkash' | 'nagad' | 'rocket'
type TransactionType = 'cashout_agent' | 'cashout_atm' | 'send_money' | 'payment'

const charges: Record<Provider, Record<TransactionType, { rate: number; flat: number; label: string }>> = {
  bkash: {
    cashout_agent: { rate: 1.85, flat: 0, label: 'ক্যাশ আউট (এজেন্ট)' },
    cashout_atm:   { rate: 0.9,  flat: 0, label: 'ক্যাশ আউট (ATM)' },
    send_money:    { rate: 0,    flat: 5, label: 'সেন্ড মানি' },
    payment:       { rate: 0,    flat: 0, label: 'পেমেন্ট' },
  },
  nagad: {
    cashout_agent: { rate: 1.5,  flat: 0, label: 'ক্যাশ আউট (এজেন্ট)' },
    cashout_atm:   { rate: 0.9,  flat: 0, label: 'ক্যাশ আউট (ATM)' },
    send_money:    { rate: 0,    flat: 0, label: 'সেন্ড মানি' },
    payment:       { rate: 0,    flat: 0, label: 'পেমেন্ট' },
  },
  rocket: {
    cashout_agent: { rate: 1.8,  flat: 0, label: 'ক্যাশ আউট (এজেন্ট)' },
    cashout_atm:   { rate: 0.9,  flat: 0, label: 'ক্যাশ আউট (ATM)' },
    send_money:    { rate: 0,    flat: 5, label: 'সেন্ড মানি' },
    payment:       { rate: 0,    flat: 0, label: 'পেমেন্ট' },
  },
}

const providerInfo = {
  bkash:  { name: 'বিকাশ',  color: 'bg-pink-600',  light: 'bg-pink-50  border-pink-200',  text: 'text-pink-600'  },
  nagad:  { name: 'নগদ',    color: 'bg-orange-500', light: 'bg-orange-50 border-orange-200', text: 'text-orange-500' },
  rocket: { name: 'রকেট',   color: 'bg-purple-600', light: 'bg-purple-50 border-purple-200', text: 'text-purple-600' },
}

export default function BkashCalculator() {
  const [provider, setProvider]         = useState<Provider>('bkash')
  const [txType, setTxType]             = useState<TransactionType>('cashout_agent')
  const [amount, setAmount]             = useState('')
  const [result, setResult]             = useState<null | {
    charge: number
    received: number
    chargePercent: string
  }>(null)

  const calculate = () => {
    const amt = parseFloat(amount)
    if (!amt || amt <= 0) return

    const { rate, flat } = charges[provider][txType]
    const charge = Math.ceil((amt * rate) / 100 + flat)
    const received = amt - charge

    setResult({
      charge,
      received,
      chargePercent: ((charge / amt) * 100).toFixed(2),
    })
  }

  const reset = () => {
    setAmount('')
    setResult(null)
  }

  const fmt = (n: number) => '৳ ' + n.toLocaleString('bn-BD')
  const info = providerInfo[provider]

  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">

      {/* Header */}
      <div className={`${info.color} px-6 py-5`}>
        <h2 className="text-white text-xl font-bold">মোবাইল ব্যাংকিং চার্জ ক্যালকুলেটর</h2>
        <p className="text-white/80 text-sm mt-1">বিকাশ, নগদ ও রকেটের চার্জ হিসাব করুন</p>
      </div>

      <div className="p-6 flex flex-col gap-5">

        {/* Provider selector */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-3">সেবা প্রদানকারী</label>
          <div className="grid grid-cols-3 gap-3">
            {(Object.keys(providerInfo) as Provider[]).map((p) => (
              <button
                key={p}
                onClick={() => { setProvider(p); setResult(null) }}
                className={`py-2.5 rounded-lg font-semibold text-sm border-2 transition-all
                  ${provider === p
                    ? `${providerInfo[p].color} text-white border-transparent`
                    : 'bg-gray-50 text-gray-600 border-gray-200 hover:border-gray-300'
                  }`}
              >
                {providerInfo[p].name}
              </button>
            ))}
          </div>
        </div>

        {/* Transaction type */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-3">লেনদেনের ধরন</label>
          <div className="grid grid-cols-2 gap-2">
            {(Object.keys(charges[provider]) as TransactionType[]).map((type) => (
              <button
                key={type}
                onClick={() => { setTxType(type); setResult(null) }}
                className={`py-2.5 px-3 rounded-lg text-sm border-2 transition-all text-left
                  ${txType === type
                    ? `${info.light} ${info.text} border-current font-semibold`
                    : 'bg-gray-50 text-gray-600 border-gray-200 hover:border-gray-300'
                  }`}
              >
                {charges[provider][type].label}
              </button>
            ))}
          </div>
        </div>

        {/* Amount */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">পরিমাণ (টাকা)</label>
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            placeholder="যেমন: 1000"
            className="w-full border border-gray-200 rounded-lg px-4 py-3 text-gray-800 focus:outline-none focus:ring-2 focus:ring-green-500"
          />
        </div>

        {/* Buttons */}
        <div className="flex gap-3">
          <button
            onClick={calculate}
            className={`flex-1 ${info.color} text-white font-bold py-3 rounded-lg hover:opacity-90 transition-opacity`}
          >
            চার্জ দেখুন
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
          <div className={`rounded-xl border ${info.light} overflow-hidden`}>

            {/* Received */}
            <div className={`${info.color} text-white text-center py-5`}>
              <p className="text-sm text-white/80 mb-1">প্রাপক পাবেন</p>
              <p className="text-4xl font-bold">{fmt(result.received)}</p>
            </div>

            {/* Breakdown */}
            <div className="grid grid-cols-2 divide-x divide-gray-100">
              <div className="px-5 py-4 text-center">
                <p className="text-xs text-gray-500 mb-1">পাঠানোর পরিমাণ</p>
                <p className="text-lg font-bold text-gray-800">{fmt(parseFloat(amount))}</p>
              </div>
              <div className="px-5 py-4 text-center">
                <p className="text-xs text-gray-500 mb-1">চার্জ কাটবে</p>
                <p className={`text-lg font-bold ${info.text}`}>{fmt(result.charge)}</p>
              </div>
            </div>

            <div className="px-5 py-3 bg-white/60 text-center">
              <p className="text-xs text-gray-500">
                চার্জের হার: <span className={`font-bold ${info.text}`}>{result.chargePercent}%</span>
              </p>
            </div>
          </div>
        )}

        {/* Charge reference table */}
        <div className="mt-2">
          <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-3">
            {providerInfo[provider].name}-এর সকল চার্জ
          </p>
          <div className="rounded-xl overflow-hidden border border-gray-100">
            <table className="w-full text-sm">
              <thead className="bg-gray-50">
                <tr>
                  <th className="text-left px-4 py-2.5 text-gray-600 font-medium">লেনদেন</th>
                  <th className="text-right px-4 py-2.5 text-gray-600 font-medium">চার্জ</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-50">
                {(Object.entries(charges[provider]) as [TransactionType, typeof charges.bkash.cashout_agent][]).map(([type, val]) => (
                  <tr key={type} className={txType === type ? `${info.light}` : 'hover:bg-gray-50'}>
                    <td className="px-4 py-2.5 text-gray-700">{val.label}</td>
                    <td className={`px-4 py-2.5 text-right font-medium ${txType === type ? info.text : 'text-gray-700'}`}>
                      {val.rate > 0 ? `${val.rate}%` : val.flat > 0 ? `৳${val.flat} ফ্ল্যাট` : 'বিনামূল্যে'}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

      </div>
    </div>
  )
}