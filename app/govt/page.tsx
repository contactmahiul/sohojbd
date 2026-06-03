// app/govt/page.tsx

import { Metadata } from 'next'
import Link from 'next/link'
import { getArticlesByCategory } from '@/lib/articles'
import ArticleCard from '@/components/ArticleCard'

export const metadata: Metadata = {
  title: 'সরকারি সেবা গাইড — পাসপোর্ট, NID, ট্রেড লাইসেন্স | SohojBD',
  description:
    'বাংলাদেশের সরকারি সেবা সম্পর্কে সহজ বাংলা গাইড। ই-পাসপোর্ট, NID সংশোধন, ট্রেড লাইসেন্স, আয়কর রিটার্ন সহ সকল তথ্য এক জায়গায়।',
}

export default function GovtPage() {
  const articles = getArticlesByCategory('govt')

  return (
    <main className="min-h-screen bg-gray-50">
      {/* Hero */}
      <div className="bg-gradient-to-r from-blue-700 to-blue-500 text-white">
        <div className="max-w-6xl mx-auto px-4 py-12">
          <div className="flex items-center gap-2 text-blue-200 text-sm mb-3">
            <Link href="/" className="hover:text-white">হোম</Link>
            <span>/</span>
            <span>সরকারি সেবা</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold mb-3">সরকারি সেবা গাইড</h1>
          <p className="text-blue-100 text-lg max-w-2xl">
            পাসপোর্ট, NID, ট্রেড লাইসেন্স থেকে শুরু করে আয়কর রিটার্ন পর্যন্ত — সব সরকারি প্রক্রিয়া সহজ বাংলায়।
          </p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-10">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-bold text-gray-800">
            সব গাইড ({articles.length}টি)
          </h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {articles.map(article => (
            <ArticleCard key={article.slug} article={article} />
          ))}
        </div>
      </div>
    </main>
  )
}