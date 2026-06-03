import Link from 'next/link'
import type { Article } from '@/lib/articles'

interface ArticleCardProps {
  article: Article
  variant?: 'default' | 'compact'
}

const categoryColor: Record<Article['category'], string> = {
  bank: 'bg-green-100 text-green-700',
  govt: 'bg-blue-100 text-blue-700',
  blog: 'bg-purple-100 text-purple-700',
}

const categoryLabel: Record<Article['category'], string> = {
  bank: 'ব্যাংকিং',
  govt: 'সরকারি সেবা',
  blog: 'ব্লগ',
}

export default function ArticleCard({ article, variant = 'default' }: ArticleCardProps) {
  const href = `/${article.category}/${article.slug}`

  if (variant === 'compact') {
    return (
      <Link
        href={href}
        className="group flex items-start gap-2 py-2.5 border-b border-gray-100 last:border-0 hover:bg-gray-50 rounded px-1 transition-colors"
      >
        <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-gray-300 group-hover:bg-green-500 flex-shrink-0 transition-colors" />
        <span className="text-sm text-gray-700 group-hover:text-green-700 leading-snug transition-colors line-clamp-2">
          {article.title}
        </span>
      </Link>
    )
  }

  return (
    <Link
      href={href}
      className="group block bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow duration-200 overflow-hidden"
    >
      <div className="p-5">
        <span className={`inline-block text-xs font-semibold px-2.5 py-1 rounded-full mb-3 ${categoryColor[article.category]}`}>
          {categoryLabel[article.category]}
        </span>
        <h3 className="text-gray-900 font-semibold text-base leading-snug mb-2 group-hover:text-green-700 transition-colors line-clamp-2">
          {article.title}
        </h3>
        <p className="text-gray-500 text-sm leading-relaxed line-clamp-3 mb-4">
          {article.description}
        </p>
        <div className="flex items-center justify-between text-xs text-gray-400">
          <span>
            {new Date(article.publishedAt).toLocaleDateString('bn-BD', {
              year: 'numeric', month: 'long', day: 'numeric',
            })}
          </span>
          <span>{article.readingTime} পড়া</span>
        </div>
      </div>
    </Link>
  )
}