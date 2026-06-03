// app/tools/dps-calculator/page.tsx

import { Metadata } from 'next'
import Link from 'next/link'
import DPSCalculator from '@/components/calculators/DPSCalculator'

export const metadata: Metadata = {
  title: 'DPS ক্যালকুলেটর ২০২৬ — মেয়াদী সঞ্চয় হিসাব | SohojBD',
  description:
    'বাংলাদেশের যেকোনো ব্যাংকের DPS-এর মেয়াদপূর্তির পরিমাণ সহজে হিসাব করুন। মাসিক জমা, সুদের হার ও মেয়াদ দিয়ে তাৎক্ষণিক ফলাফল পান।',
}

export default function DPSCalculatorPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      <div className="bg-white border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-4 py-3 text-sm text-gray-500 flex items-center gap-2">
          <Link href="/" className="hover:text-green-700">হোম</Link>
          <span>/</span>
          <Link href="/tools" className="hover:text-green-700">টুলস</Link>
          <span>/</span>
          <span className="text-gray-800 font-medium">DPS ক্যালকুলেটর</span>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-10">
        <div className="grid lg:grid-cols-2 gap-10 items-start">
          <div className="lg:sticky lg:top-24">
            <DPSCalculator />
          </div>

          <div className="space-y-8">
            <div>
              <h1 className="text-3xl font-bold text-gray-800 mb-3">DPS ক্যালকুলেটর ২০২৬</h1>
              <p className="text-gray-600 leading-relaxed">
                DPS (Deposit Pension Scheme) বা মাসিক সঞ্চয় প্রকল্প হলো বাংলাদেশের সবচেয়ে জনপ্রিয় সঞ্চয় পদ্ধতিগুলোর একটি। প্রতি মাসে নির্দিষ্ট পরিমাণ টাকা জমা দিলে মেয়াদপূর্তিতে সুদসহ একটি বড় অঙ্কের অর্থ পাওয়া যায়। এই ক্যালকুলেটর দিয়ে আপনি সহজেই জানতে পারবেন মেয়াদ শেষে কত টাকা পাবেন।
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-gray-800 mb-4">বিভিন্ন ব্যাংকের DPS সুদের হার ২০২৬</h2>
              <div className="overflow-x-auto rounded-xl border border-gray-200">
                <table className="w-full text-sm">
                  <thead className="bg-green-700 text-white">
                    <tr>
                      <th className="text-left px-4 py-3">ব্যাংক</th>
                      <th className="text-center px-4 py-3">১ বছর</th>
                      <th className="text-center px-4 py-3">৩ বছর</th>
                      <th className="text-center px-4 py-3">৫ বছর</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100">
                    {[
                      { bank: 'সোনালী ব্যাংক', y1: '৬.০%', y3: '৬.৫%', y5: '৭.০%' },
                      { bank: 'ডাচ-বাংলা ব্যাংক', y1: '৬.৫%', y3: '৭.০%', y5: '৭.৫%' },
                      { bank: 'ব্র্যাক ব্যাংক', y1: '৭.০%', y3: '৭.৫%', y5: '৮.০%' },
                      { bank: 'ইসলামী ব্যাংক', y1: '৬.৭%', y3: '৭.২%', y5: '৭.৮%' },
                      { bank: 'পূবালী ব্যাংক', y1: '৬.০%', y3: '৬.৫%', y5: '৭.০%' },
                      { bank: 'মিউচুয়াল ট্রাস্ট ব্যাংক', y1: '৭.০%', y3: '৭.৫%', y5: '৮.০%' },
                    ].map((row, i) => (
                      <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                        <td className="px-4 py-3 font-medium text-gray-800">{row.bank}</td>
                        <td className="px-4 py-3 text-center text-gray-600">{row.y1}</td>
                        <td className="px-4 py-3 text-center text-gray-600">{row.y3}</td>
                        <td className="px-4 py-3 text-center text-green-700 font-semibold">{row.y5}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="text-xs text-gray-400 mt-2">* সুদের হার পরিবর্তনশীল। সর্বশেষ তথ্যের জন্য ব্যাংকে যোগাযোগ করুন।</p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-gray-800 mb-4">DPS কীভাবে কাজ করে?</h2>
              <div className="space-y-3">
                {[
                  { step: '১', title: 'অ্যাকাউন্ট খুলুন', desc: 'পছন্দের ব্যাংকে গিয়ে DPS অ্যাকাউন্ট খুলুন। NID ও পাসপোর্ট সাইজের ছবি লাগবে।' },
                  { step: '২', title: 'মাসিক জমা দিন', desc: 'প্রতি মাসে নির্দিষ্ট তারিখে নির্ধারিত পরিমাণ জমা দিন। অটো-ডেবিট সুবিধা নিতে পারেন।' },
                  { step: '৩', title: 'সুদ যুক্ত হয়', desc: 'ব্যাংক প্রতি মাসে বা বছরে একবার আপনার জমায় সুদ যোগ করে।' },
                  { step: '৪', title: 'মেয়াদে পান', desc: 'মেয়াদ শেষ হলে মোট জমা ও সুদসহ সম্পূর্ণ অর্থ পাবেন।' },
                ].map(item => (
                  <div key={item.step} className="flex gap-4 p-4 bg-white rounded-xl border border-gray-100">
                    <div className="w-9 h-9 bg-green-100 text-green-700 rounded-full flex items-center justify-center font-bold text-sm shrink-0">
                      {item.step}
                    </div>
                    <div>
                      <p className="font-semibold text-gray-800 text-sm">{item.title}</p>
                      <p className="text-gray-500 text-sm mt-0.5">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h2 className="text-xl font-bold text-gray-800 mb-4">সাধারণ প্রশ্নোত্তর</h2>
              <div className="space-y-3">
                {[
                  { q: 'DPS ভাঙলে কি সুদ পাওয়া যায়?', a: 'মেয়াদের আগে DPS ভাঙলে সাধারণত কম সুদ পাওয়া যায় বা কোনো সুদ নাও পাওয়া যেতে পারে। প্রতিটি ব্যাংকের নিয়ম আলাদা।' },
                  { q: 'DPS-এর সুদের উপর কি কর দিতে হয়?', a: 'হ্যাঁ, DPS সুদের উপর উৎসে কর (TDS) কাটা হয়। বর্তমানে TIN থাকলে ১০% এবং না থাকলে ১৫% কর প্রযোজ্য।' },
                  { q: 'সর্বনিম্ন কত টাকা দিয়ে DPS খোলা যায়?', a: 'বেশিরভাগ ব্যাংকে ৫০০ টাকা থেকে DPS শুরু করা যায়। তবে কিছু ব্যাংকে ন্যূনতম ১,০০০ টাকা লাগতে পারে।' },
                  { q: 'DPS ও FDR-এ পার্থক্য কী?', a: 'DPS-এ প্রতি মাসে জমা দিতে হয়, আর FDR-এ একবারে বড় অঙ্ক জমা দেওয়া হয়। নিয়মিত সঞ্চয়ের জন্য DPS, একবারে জমার জন্য FDR উপযুক্ত।' },
                ].map((faq, i) => (
                  <div key={i} className="bg-white rounded-xl border border-gray-100 p-4">
                    <p className="font-semibold text-gray-800 text-sm mb-1">{faq.q}</p>
                    <p className="text-gray-500 text-sm">{faq.a}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}