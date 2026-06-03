import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { getArticleBySlug, getArticlesByCategory } from '@/lib/articles'
import ArticleCard from '@/components/ArticleCard'

type Props = { params: Promise<{ slug: string }> }

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const article = getArticleBySlug(slug)
  if (!article) return {}
  return { title: `${article.title} | SohojBD`, description: article.description }
}

export async function generateStaticParams() {
  return getArticlesByCategory('blog').map((a) => ({ slug: a.slug }))
}

export default async function BlogArticlePage({ params }: Props) {
  const { slug } = await params
  const article = getArticleBySlug(slug)
  if (!article || article.category !== 'blog') notFound()

  const related = getArticlesByCategory('blog').filter(a => a.slug !== article.slug).slice(0, 3)
  const formatDate = (d: string) =>
    new Date(d).toLocaleDateString('bn-BD', { year: 'numeric', month: 'long', day: 'numeric' })

  return (
    <main className="min-h-screen bg-gray-50">
      <div className="bg-white border-b border-gray-100">
        <div className="max-w-5xl mx-auto px-4 py-3 text-sm text-gray-500 flex items-center gap-2 flex-wrap">
          <Link href="/" className="hover:text-green-700">হোম</Link>
          <span>/</span>
          <Link href="/blog" className="hover:text-green-700">ব্লগ</Link>
          <span>/</span>
          <span className="text-gray-700 font-medium line-clamp-1">{article.title}</span>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 py-10">
        <div className="grid lg:grid-cols-3 gap-10">
          <div className="lg:col-span-2">
            <div className="flex flex-wrap items-center gap-3 mb-4">
              <span className="bg-purple-100 text-purple-700 text-xs font-medium px-3 py-1 rounded-full">ব্লগ</span>
              {article.readingTime && <span className="text-sm text-gray-500">{article.readingTime} পড়া</span>}
              <span className="text-sm text-gray-500">আপডেট: {formatDate(article.updatedAt)}</span>
            </div>

            <h1 className="text-3xl font-bold text-gray-900 mb-4 leading-tight">{article.title}</h1>

            <p className="text-gray-700 text-lg leading-relaxed mb-8 border-l-4 border-purple-500 pl-4 bg-purple-50 py-3 pr-4 rounded-r-xl">
              {article.description}
            </p>

            <div className="flex flex-wrap gap-2 mb-8">
              {article.tags.map(tag => (
                <span key={tag} className="bg-gray-100 text-gray-600 text-xs px-3 py-1 rounded-full">#{tag}</span>
              ))}
            </div>

            <div className="article-content" dangerouslySetInnerHTML={{ __html: article.content }} />

            <div className="mt-10 pt-6 border-t border-gray-100 text-sm text-gray-400">
              প্রকাশিত: {formatDate(article.publishedAt)} | সর্বশেষ আপডেট: {formatDate(article.updatedAt)}
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-white rounded-2xl border border-gray-100 p-5">
              <h3 className="font-bold text-gray-800 mb-4 text-sm">আরও পড়ুন</h3>
              <div className="space-y-1">
                {related.map(a => <ArticleCard key={a.slug} article={a} variant="compact" />)}
              </div>
            </div>
            <div className="bg-purple-700 text-white rounded-2xl p-5">
              <h3 className="font-bold mb-2">আমাদের ক্যালকুলেটর ব্যবহার করুন</h3>
              <p className="text-purple-100 text-sm mb-4">EMI, DPS, আয়কর সহ বিভিন্ন আর্থিক হিসাব করুন।</p>
              <Link href="/tools" className="bg-white text-purple-700 font-semibold text-sm px-4 py-2 rounded-lg hover:bg-purple-50 transition-colors inline-block">
                সব টুলস দেখুন →
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}