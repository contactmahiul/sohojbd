import BkashCalculator from '@/components/calculators/BkashCalculator'
import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'বিকাশ নগদ রকেট চার্জ ক্যালকুলেটর ২০২৬ | সহজBD',
  description: 'বিকাশ, নগদ ও রকেটের ক্যাশ আউট, সেন্ড মানি চার্জ হিসাব করুন। মোবাইল ব্যাংকিং লেনদেনের সঠিক চার্জ জানুন।',
}

export default function BkashCalculatorPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-10">

      {/* Breadcrumb */}
      <nav className="text-sm text-gray-500 mb-6">
        <Link href="/">হোম</Link>
        <span className="mx-2">›</span>
        <Link href="/tools">টুলস</Link>
        <span className="mx-2">›</span>
        <span className="text-green-700">মোবাইল ব্যাংকিং চার্জ</span>
      </nav>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">

        {/* Calculator */}
        <div className="lg:col-span-1">
          <BkashCalculator />
        </div>

        {/* Content */}
        <div className="lg:col-span-2 flex flex-col gap-8">

          <div>
            <h1 className="text-3xl font-bold text-gray-800 mb-4">
              বিকাশ, নগদ ও রকেট চার্জ ক্যালকুলেটর ২০২৬
            </h1>
            <p className="text-gray-600 leading-relaxed">
              মোবাইল ব্যাংকিং ব্যবহার করার সময় কত টাকা চার্জ কাটবে তা আগে থেকে জানা দরকার।
              আমাদের ক্যালকুলেটর দিয়ে বিকাশ, নগদ ও রকেটের যেকোনো লেনদেনের চার্জ মুহূর্তেই
              হিসাব করুন।
            </p>
          </div>

          {/* Comparison table */}
          <div>
            <h2 className="text-xl font-bold text-gray-800 mb-4">
              বিকাশ vs নগদ vs রকেট — চার্জ তুলনা ২০২৬
            </h2>
            <div className="overflow-x-auto rounded-xl border border-gray-100">
              <table className="w-full text-sm">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="text-left px-4 py-3 text-gray-600 font-semibold">লেনদেন</th>
                    <th className="text-center px-4 py-3 text-pink-600 font-semibold">বিকাশ</th>
                    <th className="text-center px-4 py-3 text-orange-500 font-semibold">নগদ</th>
                    <th className="text-center px-4 py-3 text-purple-600 font-semibold">রকেট</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-50">
                  {[
                    { type: 'ক্যাশ আউট (এজেন্ট)', bkash: '১.৮৫%', nagad: '১.৫%', rocket: '১.৮%' },
                    { type: 'ক্যাশ আউট (ATM)', bkash: '০.৯%', nagad: '০.৯%', rocket: '০.৯%' },
                    { type: 'সেন্ড মানি', bkash: '৳৫ ফ্ল্যাট', nagad: 'বিনামূল্যে', rocket: '৳৫ ফ্ল্যাট' },
                    { type: 'পেমেন্ট', bkash: 'বিনামূল্যে', nagad: 'বিনামূল্যে', rocket: 'বিনামূল্যে' },
                  ].map((row) => (
                    <tr key={row.type} className="hover:bg-gray-50">
                      <td className="px-4 py-3 text-gray-700 font-medium">{row.type}</td>
                      <td className="px-4 py-3 text-center text-gray-600">{row.bkash}</td>
                      <td className="px-4 py-3 text-center text-gray-600">{row.nagad}</td>
                      <td className="px-4 py-3 text-center text-gray-600">{row.rocket}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Winner boxes */}
          <div>
            <h2 className="text-xl font-bold text-gray-800 mb-4">কোনটা বেছে নেবেন?</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {[
                {
                  title: 'ক্যাশ আউটে সেরা',
                  winner: 'নগদ',
                  reason: 'সবচেয়ে কম চার্জ — প্রতি হাজারে মাত্র ১৫ টাকা',
                  color: 'border-orange-200 bg-orange-50',
                  badge: 'bg-orange-500',
                },
                {
                  title: 'সেন্ড মানিতে সেরা',
                  winner: 'নগদ',
                  reason: 'সেন্ড মানি সম্পূর্ণ বিনামূল্যে',
                  color: 'border-orange-200 bg-orange-50',
                  badge: 'bg-orange-500',
                },
                {
                  title: 'নেটওয়ার্কে সেরা',
                  winner: 'বিকাশ',
                  reason: 'সবচেয়ে বেশি এজেন্ট ও মার্চেন্ট সারাদেশে',
                  color: 'border-pink-200 bg-pink-50',
                  badge: 'bg-pink-600',
                },
              ].map((item) => (
                <div key={item.title} className={`rounded-xl border p-4 ${item.color}`}>
                  <p className="text-xs text-gray-500 mb-2">{item.title}</p>
                  <span className={`inline-block text-white text-sm font-bold px-3 py-1 rounded-full mb-2 ${item.badge}`}>
                    {item.winner}
                  </span>
                  <p className="text-sm text-gray-600">{item.reason}</p>
                </div>
              ))}
            </div>
          </div>

          {/* FAQ */}
          <div>
            <h2 className="text-xl font-bold text-gray-800 mb-4">সাধারণ প্রশ্নোত্তর</h2>
            <div className="flex flex-col gap-4">
              {[
                {
                  q: 'বিকাশে ক্যাশ আউট করলে কত চার্জ কাটে?',
                  a: 'বিকাশ এজেন্ট থেকে ক্যাশ আউট করলে ১.৮৫% চার্জ কাটে। অর্থাৎ ১০০০ টাকা তুলতে গেলে ১৮.৫০ টাকা চার্জ দিতে হবে।'
                },
                {
                  q: 'নগদে সেন্ড মানি কি সত্যিই ফ্রি?',
                  a: 'হ্যাঁ, নগদ থেকে নগদে সেন্ড মানি সম্পূর্ণ বিনামূল্যে। এটি নগদের সবচেয়ে বড় সুবিধা।'
                },
                {
                  q: 'কোন মোবাইল ব্যাংকিং সবচেয়ে ভালো?',
                  a: 'চার্জের দিক থেকে নগদ সেরা। কিন্তু নেটওয়ার্ক ও সুবিধার দিক থেকে বিকাশ এখনও এগিয়ে। আপনার প্রয়োজন অনুযায়ী বেছে নিন।'
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