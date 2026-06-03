import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400 mt-auto">
      <div className="max-w-6xl mx-auto px-4 py-12">
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-10">
          
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-2 mb-3">
              <span className="text-xl font-bold text-green-500">সহজ</span>
              <span className="text-xl font-bold text-white">BD</span>
            </div>
            <p className="text-sm leading-relaxed">
              বাংলাদেশের সকল সরকারি প্রক্রিয়া, ব্যাংকিং তথ্য ও আর্থিক হিসাব এক জায়গায়।
            </p>
          </div>

          {/* Tools */}
          <div>
            <h4 className="text-white font-semibold mb-4">টুলস</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/tools/emi-calculator" className="hover:text-green-400 transition-colors">EMI ক্যালকুলেটর</Link></li>
              <li><Link href="/tools/dps-calculator" className="hover:text-green-400 transition-colors">DPS ক্যালকুলেটর</Link></li>
              <li><Link href="/tools/tax-calculator" className="hover:text-green-400 transition-colors">আয়কর ক্যালকুলেটর</Link></li>
              <li><Link href="/tools/bkash-calculator" className="hover:text-green-400 transition-colors">বিকাশ চার্জ</Link></li>
            </ul>
          </div>

          {/* Bank */}
          <div>
            <h4 className="text-white font-semibold mb-4">ব্যাংক</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/bank" className="hover:text-green-400 transition-colors">ব্যাংক তুলনা</Link></li>
              <li><Link href="/bank/bkash-vs-nagad" className="hover:text-green-400 transition-colors">বিকাশ vs নগদ</Link></li>
              <li><Link href="/bank/dutch-bangla-loan" className="hover:text-green-400 transition-colors">ডাচ বাংলা লোন</Link></li>
            </ul>
          </div>

          {/* Govt */}
          <div>
            <h4 className="text-white font-semibold mb-4">সরকারি সেবা</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/govt/nid-correction" className="hover:text-green-400 transition-colors">NID সংশোধন</Link></li>
              <li><Link href="/govt/passport-application" className="hover:text-green-400 transition-colors">পাসপোর্ট আবেদন</Link></li>
              <li><Link href="/govt/trade-license" className="hover:text-green-400 transition-colors">ট্রেড লাইসেন্স</Link></li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-gray-800 pt-6 flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
          <p>© ২০২৬ সহজBD — সর্বস্বত্ব সংরক্ষিত</p>
          <div className="flex gap-6">
            <Link href="/privacy" className="hover:text-green-400 transition-colors">গোপনীয়তা নীতি</Link>
            <Link href="/about" className="hover:text-green-400 transition-colors">আমাদের সম্পর্কে</Link>
            <Link href="/contact" className="hover:text-green-400 transition-colors">যোগাযোগ</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}