// app/about/page.tsx

import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'আমাদের সম্পর্কে | SohojBD',
  description:
    'SohojBD সম্পর্কে জানুন — বাংলাদেশের সরকারি প্রক্রিয়া, ব্যাংকিং ও আর্থিক তথ্য সহজ বাংলায় প্রদানের আমাদের লক্ষ্য।',
}

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      <div className="bg-white border-b border-gray-100">
        <div className="max-w-4xl mx-auto px-4 py-3 text-sm text-gray-500 flex items-center gap-2">
          <Link href="/" className="hover:text-green-700">হোম</Link>
          <span>/</span>
          <span className="text-gray-800 font-medium">আমাদের সম্পর্কে</span>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-12">
        {/* Hero */}
        <div className="text-center mb-12">
          <div className="text-4xl font-bold mb-2">
            <span className="text-green-700">সহজ</span>
            <span className="text-gray-800">BD</span>
          </div>
          <p className="text-xl text-gray-600 mt-4 max-w-2xl mx-auto leading-relaxed">
            বাংলাদেশের জটিল সরকারি প্রক্রিয়া, ব্যাংকিং সেবা ও আর্থিক তথ্য সহজ বাংলায় তুলে ধরাই আমাদের লক্ষ্য।
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {[
            {
              icon: '🎯',
              title: 'আমাদের লক্ষ্য',
              text: 'বাংলাদেশের সাধারণ মানুষ যেন সহজেই সরকারি সেবা, ব্যাংকিং প্রক্রিয়া এবং আর্থিক সিদ্ধান্ত নিতে পারেন — এই উদ্দেশ্যে SohojBD তৈরি।',
            },
            {
              icon: '📚',
              title: 'আমরা যা দিই',
              text: 'সহজ বাংলায় লেখা গাইড, বিনামূল্যে আর্থিক ক্যালকুলেটর এবং সর্বশেষ তথ্য দিয়ে আপনাকে সাহায্য করি।',
            },
            {
              icon: '🔄',
              title: 'সর্বশেষ তথ্য',
              text: 'সরকারি নীতি ও ব্যাংকিং নিয়ম নিয়মিত পরিবর্তন হয়। আমরা সবসময় আমাদের কন্টেন্ট আপডেট রাখি।',
            },
            {
              icon: '🇧🇩',
              title: 'বাংলাদেশের জন্য',
              text: 'দেশে থাকা বা প্রবাসী — সব বাংলাদেশির কথা মাথায় রেখে আমাদের কন্টেন্ট তৈরি করা হয়।',
            },
          ].map((item, i) => (
            <div key={i} className="bg-white rounded-2xl border border-gray-100 p-6">
              <div className="text-3xl mb-3">{item.icon}</div>
              <h3 className="font-bold text-gray-800 mb-2">{item.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{item.text}</p>
            </div>
          ))}
        </div>

        {/* Disclaimer */}
        <div className="bg-amber-50 border border-amber-200 rounded-2xl p-6 mb-8">
          <h3 className="font-bold text-amber-800 mb-2">⚠️ দাবিত্যাগ (Disclaimer)</h3>
          <p className="text-amber-700 text-sm leading-relaxed">
            SohojBD-তে প্রকাশিত তথ্য শুধুমাত্র সাধারণ তথ্যের উদ্দেশ্যে। এটি কোনো পেশাদার আইনি, আর্থিক বা কর পরামর্শ নয়। গুরুত্বপূর্ণ সিদ্ধান্ত নেওয়ার আগে সংশ্লিষ্ট সরকারি দপ্তর বা পেশাদার উপদেষ্টার সাথে পরামর্শ করুন। তথ্য ও নিয়মকানুন পরিবর্তনশীল হওয়ায় সর্বশেষ তথ্যের জন্য সরকারি ওয়েবসাইট যাচাই করার পরামর্শ দেওয়া হচ্ছে।
          </p>
        </div>

        <div className="text-center">
          <p className="text-gray-500 mb-4">যোগাযোগ বা পরামর্শের জন্য:</p>
          <Link
            href="/contact"
            className="bg-green-700 hover:bg-green-800 text-white font-semibold px-6 py-3 rounded-xl transition-colors inline-block"
          >
            যোগাযোগ করুন
          </Link>
        </div>
      </div>
    </main>
  )
}