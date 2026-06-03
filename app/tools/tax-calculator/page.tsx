import { Metadata } from 'next'
import Link from 'next/link'
import TaxCalculator from '@/components/calculators/TaxCalculator'

export const metadata: Metadata = {
  title: 'আয়কর ক্যালকুলেটর ২০২৫-২৬ — বাংলাদেশ | SohojBD',
  description:
    'বাংলাদেশের আয়কর অধ্যাদেশ ২০২৩ অনুযায়ী অর্থবছর ২০২৫-২৬-এর আয়কর সহজে হিসাব করুন। সাধারণ, মহিলা, প্রবীণ ও প্রতিবন্ধী করদাতাদের জন্য আলাদা হিসাব।',
}

export default function TaxCalculatorPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      {/* Breadcrumb */}
      <div className="bg-white border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-4 py-3 text-sm text-gray-500 flex items-center gap-2">
          <Link href="/" className="hover:text-green-700">হোম</Link>
          <span>/</span>
          <Link href="/tools" className="hover:text-green-700">টুলস</Link>
          <span>/</span>
          <span className="text-gray-800 font-medium">আয়কর ক্যালকুলেটর</span>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-10">
        <div className="grid lg:grid-cols-2 gap-10 items-start">
          {/* Calculator */}
          <div className="lg:sticky lg:top-24">
            <TaxCalculator />
          </div>

          {/* Content */}
          <div className="space-y-8">
            <div>
              <h1 className="text-3xl font-bold text-gray-800 mb-3">
                আয়কর ক্যালকুলেটর ২০২৫-২৬
              </h1>
              <p className="text-gray-600 leading-relaxed">
                বাংলাদেশের নতুন আয়কর আইন ২০২৩ অনুযায়ী ব্যক্তিশ্রেণির করদাতাদের আয়কর নির্ধারণ করা হয়। এই ক্যালকুলেটর দিয়ে আপনি অর্থবছর ২০২৫-২৬-এর জন্য আপনার প্রদেয় আয়কর এবং করের বিস্তারিত ভাঙন সহজেই জানতে পারবেন।
              </p>
            </div>

            {/* Tax slabs */}
            <div>
              <h2 className="text-xl font-bold text-gray-800 mb-4">
                আয়কর স্তর ২০২৫-২৬ (সাধারণ করদাতা)
              </h2>
              <div className="overflow-x-auto rounded-xl border border-gray-200">
                <table className="w-full text-sm">
                  <thead className="bg-green-700 text-white">
                    <tr>
                      <th className="text-left px-4 py-3">আয়ের পরিসর</th>
                      <th className="text-center px-4 py-3">করহার</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100">
                    {[
                      { range: 'প্রথম ৩,৫০,০০০ টাকা পর্যন্ত', rate: 'করমুক্ত', highlight: true },
                      { range: 'পরবর্তী ১,০০,০০০ টাকা', rate: '৫%', highlight: false },
                      { range: 'পরবর্তী ৩,০০,০০০ টাকা', rate: '১০%', highlight: false },
                      { range: 'পরবর্তী ৪,০০,০০০ টাকা', rate: '১৫%', highlight: false },
                      { range: 'পরবর্তী ৫,০০,০০০ টাকা', rate: '২০%', highlight: false },
                      { range: 'অবশিষ্ট আয়', rate: '২৫%', highlight: false },
                    ].map((row, i) => (
                      <tr key={i} className={row.highlight ? 'bg-green-50' : i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                        <td className="px-4 py-3 text-gray-700">{row.range}</td>
                        <td className={`px-4 py-3 text-center font-semibold ${row.highlight ? 'text-green-700' : 'text-gray-800'}`}>
                          {row.rate}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Free limits by type */}
            <div>
              <h2 className="text-xl font-bold text-gray-800 mb-4">করমুক্ত আয়ের সীমা</h2>
              <div className="grid grid-cols-2 gap-3">
                {[
                  { type: 'সাধারণ করদাতা', limit: '৩,৫০,০০০', color: 'blue' },
                  { type: 'মহিলা করদাতা', limit: '৪,০০,০০০', color: 'pink' },
                  { type: 'প্রবীণ করদাতা (৬৫+)', limit: '৪,০০,০০০', color: 'orange' },
                  { type: 'প্রতিবন্ধী করদাতা', limit: '৪,৭৫,০০০', color: 'purple' },
                ].map((item, i) => (
                  <div key={i} className="bg-white border border-gray-100 rounded-xl p-4">
                    <p className="text-xs text-gray-500 mb-1">{item.type}</p>
                    <p className="text-xl font-bold text-green-700">৳{item.limit}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Minimum tax */}
            <div className="bg-amber-50 border border-amber-200 rounded-xl p-5">
              <h3 className="font-semibold text-amber-800 mb-2">⚠️ ন্যূনতম আয়কর</h3>
              <p className="text-amber-700 text-sm leading-relaxed">
                করযোগ্য আয় থাকলে ঢাকা ও চট্টগ্রাম সিটি করপোরেশন এলাকায় বসবাসকারীদের ন্যূনতম ৫,০০০ টাকা এবং অন্যান্য সিটি করপোরেশন এলাকায় ৪,০০০ টাকা এবং অন্যান্য এলাকায় ৩,০০০ টাকা আয়কর দিতে হবে।
              </p>
            </div>

            {/* FAQ */}
            <div>
              <h2 className="text-xl font-bold text-gray-800 mb-4">সাধারণ প্রশ্নোত্তর</h2>
              <div className="space-y-3">
                {[
                  {
                    q: 'কখন আয়কর রিটার্ন জমা দিতে হয়?',
                    a: 'প্রতি বছর ৩০ নভেম্বরের মধ্যে আয়কর রিটার্ন জমা দিতে হয়। অনলাইনে etaxnbr.gov.bd-তে রিটার্ন জমা দেওয়া যায়।',
                  },
                  {
                    q: 'রিটার্ন না দিলে কী হয়?',
                    a: 'সময়মতো রিটার্ন না দিলে জরিমানা হতে পারে। বিলম্বের প্রতি মাসের জন্য প্রদেয় করের ২% হারে সুদ আরোপ হয়।',
                  },
                  {
                    q: 'TIN থাকলেই কি রিটার্ন দিতে হবে?',
                    a: 'হ্যাঁ, TIN নিবন্ধন থাকলে আয় করমুক্ত সীমার নিচে হলেও শূন্য রিটার্ন জমা দেওয়া বাধ্যতামূলক।',
                  },
                  {
                    q: 'বেতনভোগীরা কোথায় রিটার্ন দেবেন?',
                    a: 'বেতনভোগী করদাতারা কর্মস্থলের কর সার্কেলে বা অনলাইনে ই-রিটার্ন সিস্টেমে রিটার্ন জমা দিতে পারবেন।',
                  },
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