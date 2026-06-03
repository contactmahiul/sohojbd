// app/contact/page.tsx

import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'যোগাযোগ করুন | SohojBD',
  description: 'SohojBD-এর সাথে যোগাযোগ করুন। তথ্য সংশোধন, পরামর্শ বা সহযোগিতার জন্য আমাদের লিখুন।',
}

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      <div className="bg-white border-b border-gray-100">
        <div className="max-w-4xl mx-auto px-4 py-3 text-sm text-gray-500 flex items-center gap-2">
          <Link href="/" className="hover:text-green-700">হোম</Link>
          <span>/</span>
          <span className="text-gray-800 font-medium">যোগাযোগ</span>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="text-center mb-10">
          <h1 className="text-3xl font-bold text-gray-800 mb-3">যোগাযোগ করুন</h1>
          <p className="text-gray-500 max-w-xl mx-auto">
            কোনো তথ্যে ভুল পেয়েছেন? নতুন বিষয়ের গাইড চান? বা কোনো সহযোগিতা করতে চান? আমাদের জানান।
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Contact info */}
          <div className="space-y-4">
            {[
              {
                icon: '📧',
                title: 'ইমেইল',
                value: 'hello@sohojbd.com',
                sub: 'সাধারণ জিজ্ঞাসার জন্য',
              },
              {
                icon: '✏️',
                title: 'তথ্য সংশোধন',
                value: 'edit@sohojbd.com',
                sub: 'ভুল তথ্য জানাতে',
              },
              {
                icon: '🤝',
                title: 'সহযোগিতা',
                value: 'partner@sohojbd.com',
                sub: 'বিজ্ঞাপন ও পার্টনারশিপ',
              },
            ].map((item, i) => (
              <div key={i} className="bg-white rounded-2xl border border-gray-100 p-5 flex gap-4">
                <div className="text-2xl">{item.icon}</div>
                <div>
                  <p className="font-semibold text-gray-800">{item.title}</p>
                  <p className="text-green-700 font-medium text-sm">{item.value}</p>
                  <p className="text-gray-400 text-xs mt-0.5">{item.sub}</p>
                </div>
              </div>
            ))}

            <div className="bg-green-50 rounded-2xl border border-green-100 p-5">
              <p className="font-semibold text-green-800 mb-1">প্রতিক্রিয়ার সময়</p>
              <p className="text-green-700 text-sm">সাধারণত ২-৩ কার্যদিবসের মধ্যে উত্তর দেওয়া হয়।</p>
            </div>
          </div>

          {/* What to contact about */}
          <div className="bg-white rounded-2xl border border-gray-100 p-6">
            <h2 className="font-bold text-gray-800 mb-4">কী বিষয়ে লিখতে পারেন?</h2>
            <ul className="space-y-3">
              {[
                'কোনো তথ্য পুরনো বা ভুল মনে হলে',
                'নতুন কোনো সরকারি সেবার গাইড চাইলে',
                'কোনো ক্যালকুলেটরে সমস্যা পেলে',
                'বাংলাদেশের ব্যাংকিং বা আর্থিক বিষয়ে প্রশ্ন থাকলে',
                'নিজে লেখক হিসেবে যোগ দিতে চাইলে',
                'বিজ্ঞাপন দিতে আগ্রহী হলে',
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-2 text-sm text-gray-600">
                  <span className="text-green-500 mt-0.5">✓</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </main>
  )
}