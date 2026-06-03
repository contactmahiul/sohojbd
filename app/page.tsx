import Link from 'next/link'

const tools = [
  { title: 'EMI ক্যালকুলেটর', desc: 'লোনের মাসিক কিস্তি হিসাব করুন', href: '/tools/emi-calculator', icon: '🏦' },
  { title: 'DPS ক্যালকুলেটর', desc: 'DPS-এ কত টাকা পাবেন জানুন', href: '/tools/dps-calculator', icon: '💰' },
  { title: 'আয়কর ক্যালকুলেটর', desc: 'আপনার করের পরিমাণ জানুন', href: '/tools/tax-calculator', icon: '📊' },
  { title: 'বিকাশ চার্জ', desc: 'লেনদেনের চার্জ হিসাব করুন', href: '/tools/bkash-calculator', icon: '📱' },
]

const bankArticles = [
  { title: 'বিকাশ vs নগদ vs রকেট ২০২৬', desc: 'কোনটা আপনার জন্য সেরা — চার্জ, সুবিধা ও তুলনা', href: '/bank/bkash-vs-nagad', icon: '⚖️' },
  { title: 'ডাচ বাংলা ব্যাংক লোন', desc: 'লোনের নিয়ম, সুদের হার ও আবেদন পদ্ধতি', href: '/bank/dutch-bangla-loan', icon: '🏛️' },
  { title: 'কোন ব্যাংকের সুদ কম ২০২৬', desc: 'সব ব্যাংকের লোনের সুদের হার তুলনা', href: '/bank/bank-comparison', icon: '📉' },
]

const govtArticles = [
  { title: 'NID কার্ড সংশোধন', desc: 'অনলাইনে NID সংশোধনের সম্পূর্ণ গাইড', href: '/govt/nid-correction', icon: '🪪' },
  { title: 'ই-পাসপোর্ট আবেদন', desc: 'পাসপোর্টের জন্য আবেদনের ধাপে ধাপে নিয়ম', href: '/govt/passport-application', icon: '📘' },
  { title: 'ট্রেড লাইসেন্স ২০২৬', desc: 'ট্রেড লাইসেন্স করার সহজ নিয়ম ও কাগজপত্র', href: '/govt/trade-license', icon: '📋' },
]

export default function HomePage() {
  return (
    <div className="flex flex-col gap-16 pb-16 bg-gray-50">

      {/* Hero */}
      <section className="bg-gradient-to-br from-green-700 to-green-900 text-white py-20 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            বাংলাদেশের যেকোনো কাজ <br />
            <span className="text-yellow-300">সহজে করুন</span>
          </h1>
          <p className="text-lg md:text-xl text-green-100 mb-10 leading-relaxed">
            সরকারি প্রক্রিয়া, ব্যাংকিং তথ্য ও আর্থিক ক্যালকুলেটর — সব এক জায়গায়, বাংলায়।
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/tools"
              className="bg-yellow-400 text-gray-900 font-bold px-8 py-3 rounded-lg hover:bg-yellow-300 transition-colors">
              ক্যালকুলেটর ব্যবহার করুন
            </Link>
            <Link href="/govt"
              className="bg-white/10 border border-white/30 text-white font-bold px-8 py-3 rounded-lg hover:bg-white/20 transition-colors">
              সরকারি গাইড দেখুন
            </Link>
          </div>
        </div>
      </section>

      {/* Tools Section */}
      <section className="max-w-6xl mx-auto px-4 w-full">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h2 className="text-2xl font-bold text-gray-800">আর্থিক ক্যালকুলেটর</h2>
            <p className="text-gray-500 mt-1">দ্রুত ও সঠিক হিসাব করুন</p>
          </div>
          <Link href="/tools" className="text-green-700 font-medium hover:underline">সব দেখুন →</Link>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {tools.map((tool) => (
            <Link key={tool.href} href={tool.href}
              className="bg-white rounded-xl p-5 shadow-sm border border-gray-100 hover:shadow-md hover:border-green-200 transition-all group">
              <div className="text-3xl mb-3">{tool.icon}</div>
              <h3 className="font-semibold text-gray-800 group-hover:text-green-700 transition-colors mb-1">
                {tool.title}
              </h3>
              <p className="text-sm text-gray-500">{tool.desc}</p>
            </Link>
          ))}
        </div>
      </section>

      {/* Bank Section */}
      <section className="max-w-6xl mx-auto px-4 w-full">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h2 className="text-2xl font-bold text-gray-800">ব্যাংকিং গাইড</h2>
            <p className="text-gray-500 mt-1">সঠিক সিদ্ধান্ত নিন</p>
          </div>
          <Link href="/bank" className="text-green-700 font-medium hover:underline">সব দেখুন →</Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {bankArticles.map((article) => (
            <Link key={article.href} href={article.href}
              className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md hover:border-green-200 transition-all group">
              <div className="text-3xl mb-4">{article.icon}</div>
              <h3 className="font-semibold text-gray-800 group-hover:text-green-700 transition-colors mb-2">
                {article.title}
              </h3>
              <p className="text-sm text-gray-500 leading-relaxed">{article.desc}</p>
            </Link>
          ))}
        </div>
      </section>

      {/* Govt Section */}
      <section className="max-w-6xl mx-auto px-4 w-full">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h2 className="text-2xl font-bold text-gray-800">সরকারি সেবা গাইড</h2>
            <p className="text-gray-500 mt-1">ধাপে ধাপে সহজ নির্দেশিকা</p>
          </div>
          <Link href="/govt" className="text-green-700 font-medium hover:underline">সব দেখুন →</Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {govtArticles.map((article) => (
            <Link key={article.href} href={article.href}
              className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md hover:border-green-200 transition-all group">
              <div className="text-3xl mb-4">{article.icon}</div>
              <h3 className="font-semibold text-gray-800 group-hover:text-green-700 transition-colors mb-2">
                {article.title}
              </h3>
              <p className="text-sm text-gray-500 leading-relaxed">{article.desc}</p>
            </Link>
          ))}
        </div>
      </section>

      {/* Trust Banner */}
      <section className="bg-green-50 border-y border-green-100 py-10 px-4">
        <div className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[
            { number: '১০+', label: 'ক্যালকুলেটর' },
            { number: '৫০+', label: 'গাইড আর্টিকেল' },
            { number: '১০০%', label: 'বিনামূল্যে' },
            { number: '২৪/৭', label: 'অ্যাক্সেস' },
          ].map((stat) => (
            <div key={stat.label}>
              <div className="text-3xl font-bold text-green-700 mb-1">{stat.number}</div>
              <div className="text-gray-600 text-sm">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

    </div>
  )
}