// app/privacy/page.tsx

import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'গোপনীয়তা নীতি | SohojBD',
  description: 'SohojBD-এর গোপনীয়তা নীতি — আমরা কীভাবে আপনার তথ্য ব্যবহার করি তা জানুন।',
}

export default function PrivacyPage() {
  const lastUpdated = '১ এপ্রিল ২০২৬'

  return (
    <main className="min-h-screen bg-gray-50">
      <div className="bg-white border-b border-gray-100">
        <div className="max-w-4xl mx-auto px-4 py-3 text-sm text-gray-500 flex items-center gap-2">
          <Link href="/" className="hover:text-green-700">হোম</Link>
          <span>/</span>
          <span className="text-gray-800 font-medium">গোপনীয়তা নীতি</span>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="bg-white rounded-2xl border border-gray-100 p-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">গোপনীয়তা নীতি</h1>
          <p className="text-gray-400 text-sm mb-8">সর্বশেষ আপডেট: {lastUpdated}</p>

          <div className="prose prose-gray prose-headings:font-bold prose-headings:text-gray-800 prose-h2:text-xl prose-h2:mt-8 prose-h2:mb-3 prose-p:text-gray-600 prose-p:leading-relaxed max-w-none space-y-6">

            <div>
              <h2 className="text-xl font-bold text-gray-800 mb-3">ভূমিকা</h2>
              <p className="text-gray-600 leading-relaxed">
                SohojBD (sohojbd.com) আপনার গোপনীয়তাকে সম্মান করে। এই নীতিতে আমরা ব্যাখ্যা করছি আমরা কী তথ্য সংগ্রহ করি, কীভাবে ব্যবহার করি এবং আপনার অধিকার কী।
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-gray-800 mb-3">আমরা কী তথ্য সংগ্রহ করি</h2>
              <p className="text-gray-600 leading-relaxed mb-3">SohojBD কোনো ব্যক্তিগত অ্যাকাউন্ট বা লগইন ব্যবস্থা নেই। তবে নিম্নলিখিত তথ্য স্বয়ংক্রিয়ভাবে সংগ্রহ হতে পারে:</p>
              <ul className="list-disc list-inside text-gray-600 space-y-1 text-sm">
                <li>ব্রাউজারের ধরন ও ভার্সন</li>
                <li>আপনি কোন পেজ দেখলেন ও কতক্ষণ ছিলেন</li>
                <li>ডিভাইসের ধরন (মোবাইল/ডেস্কটপ)</li>
                <li>আনুমানিক ভৌগোলিক অবস্থান (দেশ/শহর)</li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-bold text-gray-800 mb-3">Google AdSense ও কুকি</h2>
              <p className="text-gray-600 leading-relaxed">
                আমরা Google AdSense ব্যবহার করি যা কুকির মাধ্যমে বিজ্ঞাপন প্রদর্শন করে। Google আপনার ব্রাউজিং তথ্য ব্যবহার করে প্রাসঙ্গিক বিজ্ঞাপন দেখাতে পারে। Google-এর গোপনীয়তা নীতি সম্পর্কে আরও জানতে policies.google.com/privacy ভিজিট করুন।
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-gray-800 mb-3">Google Analytics</h2>
              <p className="text-gray-600 leading-relaxed">
                আমরা Google Analytics ব্যবহার করি সাইটের ব্যবহার পর্যবেক্ষণ করতে। এই ডেটা অ্যানোনিমাস এবং ব্যক্তিগতভাবে চিহ্নিতযোগ্য নয়।
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-gray-800 mb-3">তথ্য কীভাবে ব্যবহার করা হয়</h2>
              <ul className="list-disc list-inside text-gray-600 space-y-1 text-sm">
                <li>সাইটের কার্যকারিতা উন্নত করতে</li>
                <li>সর্বাধিক চাহিদার কন্টেন্ট বোঝতে</li>
                <li>প্রযুক্তিগত সমস্যা সমাধানে</li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-bold text-gray-800 mb-3">তৃতীয় পক্ষের সাথে তথ্য শেয়ার</h2>
              <p className="text-gray-600 leading-relaxed">
                আমরা আপনার ব্যক্তিগত তথ্য বিক্রি করি না। Google (Analytics ও AdSense) ছাড়া অন্য কোনো তৃতীয় পক্ষের সাথে তথ্য শেয়ার করা হয় না।
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-gray-800 mb-3">আপনার অধিকার</h2>
              <p className="text-gray-600 leading-relaxed">
                আপনি ব্রাউজার সেটিংস থেকে কুকি বন্ধ করতে পারেন। তবে এতে কিছু সাইট ফিচার সঠিকভাবে কাজ না-ও করতে পারে।
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-gray-800 mb-3">নীতি পরিবর্তন</h2>
              <p className="text-gray-600 leading-relaxed">
                এই নীতি যেকোনো সময় পরিবর্তন করা হতে পারে। পরিবর্তন হলে এই পেজে আপডেট তারিখ পরিবর্তন হবে।
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-gray-800 mb-3">যোগাযোগ</h2>
              <p className="text-gray-600 leading-relaxed">
                গোপনীয়তা সংক্রান্ত প্রশ্নের জন্য{' '}
                <Link href="/contact" className="text-green-700 hover:underline">
                  আমাদের সাথে যোগাযোগ করুন
                </Link>
                ।
              </p>
            </div>

          </div>
        </div>
      </div>
    </main>
  )
}