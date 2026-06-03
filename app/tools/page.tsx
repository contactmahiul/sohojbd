// app/tools/page.tsx

import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'আর্থিক ক্যালকুলেটর ও টুলস | SohojBD',
  description:
    'বাংলাদেশের জন্য বিনামূল্যে আর্থিক ক্যালকুলেটর — EMI, DPS, আয়কর, বিকাশ চার্জ সহ বিভিন্ন হিসাবের টুলস।',
}

const tools = [
  {
    href: '/tools/emi-calculator',
    icon: '🏦',
    title: 'EMI ক্যালকুলেটর',
    description: 'লোনের মাসিক কিস্তি (EMI) হিসাব করুন। সুদের হার ও মেয়াদ দিয়ে তাৎক্ষণিক ফলাফল পান।',
    badge: 'লোন',
    badgeColor: 'bg-blue-100 text-blue-700',
  },
  {
    href: '/tools/dps-calculator',
    icon: '💰',
    title: 'DPS ক্যালকুলেটর',
    description: 'মাসিক সঞ্চয় প্রকল্পের মেয়াদপূর্তির পরিমাণ হিসাব করুন।',
    badge: 'সঞ্চয়',
    badgeColor: 'bg-green-100 text-green-700',
  },
  {
    href: '/tools/tax-calculator',
    icon: '🧾',
    title: 'আয়কর ক্যালকুলেটর',
    description: 'অর্থবছর ২০২৫-২৬ এর জন্য আপনার প্রদেয় আয়কর হিসাব করুন।',
    badge: 'কর',
    badgeColor: 'bg-orange-100 text-orange-700',
  },
  {
    href: '/tools/bkash-calculator',
    icon: '📱',
    title: 'বিকাশ চার্জ ক্যালকুলেটর',
    description: 'বিকাশে ক্যাশ আউট, সেন্ড মানি ও পেমেন্টের চার্জ হিসাব করুন।',
    badge: 'মোবাইল ব্যাংকিং',
    badgeColor: 'bg-pink-100 text-pink-700',
  },
]

export default function ToolsPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      {/* Hero */}
      <div className="bg-gradient-to-r from-green-700 to-green-500 text-white">
        <div className="max-w-6xl mx-auto px-4 py-12">
          <div className="flex items-center gap-2 text-green-200 text-sm mb-3">
            <Link href="/" className="hover:text-white">হোম</Link>
            <span>/</span>
            <span>টুলস</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold mb-3">আর্থিক ক্যালকুলেটর</h1>
          <p className="text-green-100 text-lg max-w-2xl">
            EMI, DPS, আয়কর সহ বিভিন্ন আর্থিক হিসাব করুন — সম্পূর্ণ বিনামূল্যে।
          </p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-10">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {tools.map((tool) => (
            <Link
              key={tool.href}
              href={tool.href}
              className="bg-white rounded-2xl border border-gray-100 p-6 hover:shadow-md hover:border-green-100 transition-all group block"
            >
              <div className="flex items-center justify-between mb-4">
                <span className="text-4xl">{tool.icon}</span>
                <span className={`text-xs font-medium px-2.5 py-1 rounded-full ${tool.badgeColor}`}>
                  {tool.badge}
                </span>
              </div>
              <h2 className="font-bold text-gray-800 mb-2 group-hover:text-green-700 transition-colors">
                {tool.title}
              </h2>
              <p className="text-sm text-gray-500 leading-relaxed">
                {tool.description}
              </p>
              <div className="mt-4 text-green-700 text-sm font-medium group-hover:underline">
                ব্যবহার করুন →
              </div>
            </Link>
          ))}
        </div>
      </div>
    </main>
  )
}