// app/blog/page.tsx

import { Metadata } from 'next'
import Link from 'next/link'
import { getArticlesByCategory } from '@/lib/articles'
import ArticleCard from '@/components/ArticleCard'

export const metadata: Metadata = {
  title: 'ব্লগ — আর্থিক পরামর্শ ও তথ্য | SohojBD',
  description:
    'বাংলাদেশের ব্যক্তিগত অর্থনীতি, বিনিয়োগ, সঞ্চয় এবং আর্থিক পরিকল্পনা নিয়ে সহজ বাংলায় লেখা।',
}

export default function BlogPage() {
  const articles = getArticlesByCategory('blog')

  return (
    <main className="min-h-screen bg-gray-50">
      {/* Hero */}
      <div className="bg-gradient-to-r from-purple-700 to-purple-500 text-white">
        <div className="max-w-6xl mx-auto px-4 py-12">
          <div className="flex items-center gap-2 text-purple-200 text-sm mb-3">
            <Link href="/" className="hover:text-white">হোম</Link>
            <span>/</span>
            <span>ব্লগ</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold mb-3">ব্লগ</h1>
          <p className="text-purple-100 text-lg max-w-2xl">
            ফ্রিল্যান্সিং, বিনিয়োগ, সঞ্চয় ও আর্থিক পরিকল্পনা নিয়ে সহজ বাংলায় বিশেষজ্ঞ পরামর্শ।
          </p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-10">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-bold text-gray-800">
            সব পোস্ট ({articles.length}টি)
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