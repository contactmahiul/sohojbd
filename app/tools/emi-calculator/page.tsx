import EMICalculator from '@/components/calculators/EMICalculator'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'EMI ক্যালকুলেটর বাংলাদেশ — লোনের মাসিক কিস্তি হিসাব করুন | সহজBD',
  description: 'বাংলাদেশের যেকোনো ব্যাংকের লোনের EMI হিসাব করুন। হোম লোন, কার লোন, পার্সোনাল লোনের মাসিক কিস্তি জানুন সহজে।',
}

export default function EMICalculatorPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-10">

      {/* Breadcrumb */}
      <nav className="text-sm text-gray-500 mb-6">
        <span>হোম</span>
        <span className="mx-2">›</span>
        <span>টুলস</span>
        <span className="mx-2">›</span>
        <span className="text-green-700">EMI ক্যালকুলেটর</span>
      </nav>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">

        {/* Calculator — left/main */}
        <div className="lg:col-span-1">
          <EMICalculator />
        </div>

        {/* Info content — right */}
        <div className="lg:col-span-2 flex flex-col gap-8">

          <div>
            <h1 className="text-3xl font-bold text-gray-800 mb-4">
              EMI ক্যালকুলেটর বাংলাদেশ
            </h1>
            <p className="text-gray-600 leading-relaxed">
              ব্যাংক থেকে লোন নেওয়ার আগে মাসিক কিস্তি (EMI) কত হবে তা জানা অত্যন্ত জরুরি।
              আমাদের EMI ক্যালকুলেটর ব্যবহার করে মাত্র কয়েক সেকেন্ডে আপনার লোনের মাসিক
              কিস্তি, মোট সুদ এবং মোট পরিশোধের পরিমাণ জানতে পারবেন।
            </p>
          </div>

          {/* Bank rates table */}
          <div>
            <h2 className="text-xl font-bold text-gray-800 mb-4">
              বাংলাদেশের প্রধান ব্যাংকের লোনের সুদের হার ২০২৬
            </h2>
            <div className="overflow-x-auto rounded-xl border border-gray-100">
              <table className="w-full text-sm">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="text-left px-4 py-3 text-gray-600 font-semibold">ব্যাংক</th>
                    <th className="text-left px-4 py-3 text-gray-600 font-semibold">পার্সোনাল লোন</th>
                    <th className="text-left px-4 py-3 text-gray-600 font-semibold">হোম লোন</th>
                    <th className="text-left px-4 py-3 text-gray-600 font-semibold">কার লোন</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-50">
                  {[
                    { bank: 'ডাচ বাংলা ব্যাংক', personal: '১০%', home: '৮.৫%', car: '৯%' },
                    { bank: 'ব্র্যাক ব্যাংক', personal: '১১%', home: '৯%', car: '১০%' },
                    { bank: 'ইসলামী ব্যাংক', personal: '৯%', home: '৮%', car: '৯%' },
                    { bank: 'সিটি ব্যাংক', personal: '১২%', home: '৯.৫%', car: '১০%' },
                    { bank: 'সোনালী ব্যাংক', personal: '৮%', home: '৭.৫%', car: '৮.৫%' },
                  ].map((row) => (
                    <tr key={row.bank} className="hover:bg-gray-50">
                      <td className="px-4 py-3 font-medium text-gray-800">{row.bank}</td>
                      <td className="px-4 py-3 text-gray-600">{row.personal}</td>
                      <td className="px-4 py-3 text-gray-600">{row.home}</td>
                      <td className="px-4 py-3 text-gray-600">{row.car}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-xs text-gray-400 mt-2">* সুদের হার পরিবর্তনশীল। সর্বশেষ তথ্যের জন্য সরাসরি ব্যাংকে যোগাযোগ করুন।</p>
          </div>

          {/* FAQ */}
          <div>
            <h2 className="text-xl font-bold text-gray-800 mb-4">সাধারণ প্রশ্নোত্তর</h2>
            <div className="flex flex-col gap-4">
              {[
                {
                  q: 'EMI কি?',
                  a: 'EMI (Equated Monthly Installment) হলো মাসিক সমান কিস্তি যা আপনি ব্যাংককে প্রতি মাসে পরিশোধ করেন। এতে মূল টাকা ও সুদ দুটোই অন্তর্ভুক্ত থাকে।'
                },
                {
                  q: 'EMI কিভাবে হিসাব করা হয়?',
                  a: 'EMI = P × r × (1+r)^n ÷ ((1+r)^n - 1) — যেখানে P হলো লোনের পরিমাণ, r হলো মাসিক সুদের হার এবং n হলো মাসের সংখ্যা।'
                },
                {
                  q: 'সুদের হার বেশি হলে কি হয়?',
                  a: 'সুদের হার বেশি হলে মাসিক EMI বাড়ে এবং মোট সুদ পরিশোধও বেড়ে যায়। লোন নেওয়ার আগে সব ব্যাংকের রেট তুলনা করুন।'
                },
              ].map((faq, i) => (
                <div key={i} className="bg-gray-50 rounded-xl p-5">
                  <h3 className="font-semibold text-gray-800 mb-2">{faq.q}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}