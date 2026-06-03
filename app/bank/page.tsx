// app/bank/page.tsx

import { Metadata } from 'next'
import Link from 'next/link'
import { getArticlesByCategory } from '@/lib/articles'
import ArticleCard from '@/components/ArticleCard'

export const metadata: Metadata = {
  title: 'ব্যাংকিং গাইড — অ্যাকাউন্ট, লোন, মোবাইল ব্যাংকিং | SohojBD',
  description:
    'বাংলাদেশের ব্যাংকিং সেবা সম্পর্কে সহজ বাংলা গাইড। ব্যাংক অ্যাকাউন্ট, লোন, DPS, FDR এবং মোবাইল ব্যাংকিং সম্পর্কিত সকল তথ্য।',
}

export default function BankPage() {
  const articles = getArticlesByCategory('bank')

  return (
    <main className="min-h-screen bg-gray-50">
      {/* Hero */}
      <div className="bg-gradient-to-r from-green-700 to-green-500 text-white">
        <div className="max-w-6xl mx-auto px-4 py-12">
          <div className="flex items-center gap-2 text-green-200 text-sm mb-3">
            <Link href="/" className="hover:text-white">হোম</Link>
            <span>/</span>
            <span>ব্যাংকিং</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold mb-3">ব্যাংকিং গাইড</h1>
          <p className="text-green-100 text-lg max-w-2xl">
            ব্যাংক অ্যাকাউন্ট, লোন, DPS থেকে শুরু করে মোবাইল ব্যাংকিং পর্যন্ত — বাংলাদেশের সব ব্যাংকিং তথ্য সহজ ভাষায়।
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