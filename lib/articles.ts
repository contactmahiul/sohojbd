export type Article = {
  slug: string
  title: string
  description: string   // was "excerpt"
  content: string
  category: 'bank' | 'govt' | 'blog'
  tags: string[]
  publishedAt: string
  updatedAt: string     // new
  readingTime: string   // new — e.g. "৫ মিনিট"
  readTime: number      // kept for backward compat
}

const articles: Article[] = [
  // ── BANK ──────────────────────────────────────────────────────────────────
  {
    slug: 'bank-comparison',
    title: 'বাংলাদেশের সেরা ব্যাংক তুলনা ২০২৪',
    description: 'ডাচ-বাংলা, ব্র্যাক, ইসলামী ব্যাংক সহ শীর্ষ ব্যাংকগুলোর সুদের হার, সুবিধা ও সেবা একসাথে তুলনা করুন।',
    content: `
<h2>বাংলাদেশের শীর্ষ ব্যাংকগুলোর তুলনা</h2>
<p>বাংলাদেশে বর্তমানে ৬০টিরও বেশি তফসিলি ব্যাংক কার্যক্রম পরিচালনা করছে। সঠিক ব্যাংক বেছে নেওয়া আপনার আর্থিক জীবনকে অনেক সহজ করে তুলতে পারে।</p>
<h3>ডাচ-বাংলা ব্যাংক (DBBL)</h3>
<ul><li><strong>সেভিংস সুদ:</strong> ৩.৫% – ৪%</li><li><strong>ফিক্সড ডিপোজিট:</strong> ৭% – ৮.৫%</li><li><strong>ATM নেটওয়ার্ক:</strong> সারাদেশে ৫,০০০+ বুথ</li><li><strong>বিশেষত্ব:</strong> Nexus Pay, বিনামূল্যে SMS alert</li></ul>
<h3>ব্র্যাক ব্যাংক</h3>
<ul><li><strong>সেভিংস সুদ:</strong> ৪% – ৪.৫%</li><li><strong>ফিক্সড ডিপোজিট:</strong> ৭.৫% – ৯%</li><li><strong>বিশেষত্ব:</strong> bKash-এর মাতৃ প্রতিষ্ঠান</li></ul>
<h3>ইসলামী ব্যাংক বাংলাদেশ</h3>
<ul><li><strong>মুনাফার হার:</strong> ৪% – ৫% (শরিয়াহ ভিত্তিক)</li><li><strong>শাখা সংখ্যা:</strong> ৩৫০+</li><li><strong>বিশেষত্ব:</strong> সুদমুক্ত ব্যাংকিং</li></ul>
<h2>কোন ব্যাংক আপনার জন্য সেরা?</h2>
<table><tr><td><strong>প্রয়োজন</strong></td><td><strong>সেরা পছন্দ</strong></td></tr><tr><td>সর্বোচ্চ FD সুদ</td><td>ব্র্যাক ব্যাংক</td></tr><tr><td>শরিয়াহ সম্মত</td><td>ইসলামী ব্যাংক</td></tr><tr><td>ATM সুবিধা</td><td>ডাচ-বাংলা</td></tr></table>
<blockquote>টিপস: অ্যাকাউন্ট খোলার আগে ন্যূনতম ব্যালেন্স ও সার্ভিস ফি যাচাই করুন।</blockquote>`,
    category: 'bank',
    tags: ['ব্যাংক', 'তুলনা', 'সঞ্চয়'],
    publishedAt: '2024-11-15',
    updatedAt: '2024-11-15',
    readingTime: '৬ মিনিট',
    readTime: 6,
  },
  {
    slug: 'bkash-vs-nagad',
    title: 'বিকাশ vs নগদ: কোনটি ভালো? সম্পূর্ণ তুলনা',
    description: 'চার্জ, সুবিধা, ক্যাশব্যাক এবং সিকিউরিটি — বিকাশ ও নগদের মধ্যে বিস্তারিত তুলনা।',
    content: `
<h2>বিকাশ vs নগদ: বিস্তারিত তুলনা</h2>
<p>মোবাইল ব্যাংকিং এখন বাংলাদেশের আর্থিক ব্যবস্থার অবিচ্ছেদ্য অংশ।</p>
<h3>ক্যাশ আউট চার্জ (প্রতি হাজারে)</h3>
<ul><li><strong>বিকাশ এজেন্ট:</strong> ১৮.৫০ টাকা</li><li><strong>নগদ এজেন্ট:</strong> ৯.৯৯ টাকা ✅ সস্তা</li><li><strong>বিকাশ ATM:</strong> ১৫ টাকা</li></ul>
<h3>সুদ / মুনাফা</h3>
<ul><li><strong>বিকাশ সেভিংস:</strong> ৪% পর্যন্ত বার্ষিক</li><li><strong>নগদ ডিজিটাল হিসাব:</strong> ৭.৫% পর্যন্ত ✅ বেশি</li></ul>
<h3>সুবিধা তুলনা</h3>
<table><tr><td><strong>ফিচার</strong></td><td><strong>বিকাশ</strong></td><td><strong>নগদ</strong></td></tr><tr><td>এজেন্ট পয়েন্ট</td><td>৩ লক্ষ+</td><td>২ লক্ষ+</td></tr><tr><td>লোন সুবিধা</td><td>✅ বিকাশ লোন</td><td>✅ নগদ লোন</td></tr></table>
<h2>আমাদের মতামত</h2>
<p>নিয়মিত ক্যাশ আউটের জন্য <strong>নগদ</strong> সাশ্রয়ী। পেমেন্ট ও অনলাইন শপিংয়ের জন্য <strong>বিকাশ</strong> বেশি প্রচলিত।</p>`,
    category: 'bank',
    tags: ['বিকাশ', 'নগদ', 'মোবাইল ব্যাংকিং'],
    publishedAt: '2024-11-20',
    updatedAt: '2024-11-20',
    readingTime: '৫ মিনিট',
    readTime: 5,
  },
  {
    slug: 'dutch-bangla-loan',
    title: 'ডাচ বাংলা ব্যাংক লোন: আবেদন, সুদ ও শর্তাবলী',
    description: 'DBBL পার্সোনাল লোন, হোম লোন ও গাড়ি লোনের সুদের হার, যোগ্যতা এবং আবেদন প্রক্রিয়া।',
    content: `
<h2>ডাচ-বাংলা ব্যাংক লোন গাইড</h2>
<h3>পার্সোনাল লোন</h3>
<ul><li><strong>পরিমাণ:</strong> ১ লক্ষ – ২০ লক্ষ টাকা</li><li><strong>সুদের হার:</strong> ১০% – ১৩%</li><li><strong>মেয়াদ:</strong> ১ – ৫ বছর</li></ul>
<h3>হোম লোন</h3>
<ul><li><strong>পরিমাণ:</strong> সর্বোচ্চ ১ কোটি টাকা</li><li><strong>সুদের হার:</strong> ৯% – ১১%</li><li><strong>মেয়াদ:</strong> সর্বোচ্চ ২০ বছর</li></ul>
<h3>গাড়ি লোন</h3>
<ul><li><strong>সুদের হার:</strong> ১১% – ১৩%</li><li><strong>ডাউন পেমেন্ট:</strong> ন্যূনতম ৩০%</li></ul>
<h2>আবেদন প্রক্রিয়া</h2>
<ul><li>নিকটস্থ DBBL শাখায় যোগাযোগ করুন</li><li>ফর্ম পূরণ করে কাগজপত্র জমা দিন</li><li>ব্যাংক যাচাই-বাছাই করবে (৭-১৪ দিন)</li><li>অনুমোদনের পর চুক্তি স্বাক্ষর</li></ul>`,
    category: 'bank',
    tags: ['ডাচ বাংলা', 'লোন', 'হোম লোন'],
    publishedAt: '2024-11-25',
    updatedAt: '2024-11-25',
    readingTime: '৭ মিনিট',
    readTime: 7,
  },

  {
  slug: 'islami-bank-account',
  title: 'ইসলামী ব্যাংকে অ্যাকাউন্ট খোলার সম্পূর্ণ গাইড',
  description: 'ইসলামী ব্যাংকে সঞ্চয়ী ও মুদারাবা হিসাব খোলার নিয়ম, প্রয়োজনীয় কাগজপত্র ও সুবিধা।',
  content: `
<h2>ইসলামী ব্যাংকে অ্যাকাউন্টের ধরন</h2>
<p>ইসলামী ব্যাংক বাংলাদেশে বিভিন্ন ধরনের শরিয়াহ সম্মত অ্যাকাউন্ট পাওয়া যায়।</p>

<h3>মুদারাবা সঞ্চয়ী হিসাব</h3>
<ul>
  <li>ন্যূনতম ব্যালেন্স: ১,০০০ টাকা</li>
  <li>মুনাফার হার: ৪% – ৫%</li>
  <li>যেকোনো শাখায় লেনদেন সুবিধা</li>
</ul>

<h3>আল-ওয়াদিয়াহ চলতি হিসাব</h3>
<ul>
  <li>ব্যবসায়িক লেনদেনের জন্য উপযুক্ত</li>
  <li>কোনো মুনাফা নেই তবে নিরাপদ</li>
</ul>

<h2>প্রয়োজনীয় কাগজপত্র</h2>
<ul>
  <li>জাতীয় পরিচয়পত্র (NID)</li>
  <li>২ কপি পাসপোর্ট সাইজ ছবি</li>
  <li>নমিনির NID ও ছবি</li>
  <li>প্রাথমিক জমার টাকা</li>
</ul>

<h2>আবেদন প্রক্রিয়া</h2>
<ul>
  <li>নিকটস্থ ইসলামী ব্যাংক শাখায় যান</li>
  <li>ফর্ম পূরণ করুন ও কাগজপত্র জমা দিন</li>
  <li>প্রাথমিক জমা দিন</li>
  <li>একই দিনে অ্যাকাউন্ট চালু হয়</li>
</ul>

<blockquote>💡 অনলাইনে islami-bank.com থেকেও আবেদন করা যায়।</blockquote>
`,
  category: 'bank',
  tags: ['ইসলামী ব্যাংক', 'অ্যাকাউন্ট', 'শরিয়াহ'],
  publishedAt: '2024-12-01',
  updatedAt: '2024-12-01',
  readingTime: '৪ মিনিট',
  readTime: 4,
},

  // ── GOVT ──────────────────────────────────────────────────────────────────
  {
    slug: 'nid-correction',
    title: 'NID সংশোধন: অনলাইনে আবেদনের সম্পূর্ণ গাইড',
    description: 'জাতীয় পরিচয়পত্রের নাম, জন্মতারিখ বা ঠিকানা সংশোধনের জন্য অনলাইনে কীভাবে আবেদন করবেন।',
    content: `
<h2>NID সংশোধন গাইড ২০২৪</h2>
<h3>কোন কোন তথ্য সংশোধন করা যায়?</h3>
<ul><li>নিজের নাম (বাংলা ও ইংরেজি)</li><li>পিতা/মাতার নাম</li><li>জন্মতারিখ</li><li>স্থায়ী ও বর্তমান ঠিকানা</li></ul>
<h2>অনলাইনে আবেদন পদ্ধতি</h2>
<ul><li><strong>ধাপ ১:</strong> services.nidw.gov.bd ওয়েবসাইটে যান</li><li><strong>ধাপ ২:</strong> NID নম্বর ও জন্মতারিখ দিয়ে লগইন করুন</li><li><strong>ধাপ ৩:</strong> "NID সংশোধন" বিকল্প নির্বাচন করুন</li><li><strong>ধাপ ৪:</strong> প্রয়োজনীয় কাগজপত্র আপলোড করুন</li><li><strong>ধাপ ৫:</strong> ফি পরিশোধ করুন</li></ul>
<h2>ফি কাঠামো</h2>
<table><tr><td><strong>সংশোধনের ধরন</strong></td><td><strong>ফি</strong></td></tr><tr><td>সাধারণ সংশোধন</td><td>২৩০ টাকা</td></tr><tr><td>জরুরি সংশোধন</td><td>৩৪৫ টাকা</td></tr></table>
<blockquote>⚠️ মনে রাখুন: মিথ্যা তথ্য দিয়ে আবেদন করা আইনত দণ্ডনীয়।</blockquote>`,
    category: 'govt',
    tags: ['NID', 'সংশোধন', 'জাতীয় পরিচয়পত্র'],
    publishedAt: '2024-11-10',
    updatedAt: '2024-11-10',
    readingTime: '৫ মিনিট',
    readTime: 5,
  },
  {
    slug: 'passport-application',
    title: 'পাসপোর্ট আবেদন: অনলাইনে নতুন পাসপোর্টের জন্য আবেদন',
    description: 'ই-পাসপোর্টের জন্য অনলাইনে আবেদন, প্রয়োজনীয় কাগজপত্র, ফি ও সময়কালের বিস্তারিত গাইড।',
    content: `
<h2>ই-পাসপোর্ট আবেদন গাইড</h2>
<p>ই-পাসপোর্ট (Electronic Passport) হলো বায়োমেট্রিক চিপসহ আধুনিক পাসপোর্ট যা বাংলাদেশে ২০২০ সাল থেকে চালু হয়েছে।</p>
<h2>অনলাইনে আবেদনের ধাপ</h2>
<ul><li><strong>ধাপ ১:</strong> epassport.gov.bd এ যান</li><li><strong>ধাপ ২:</strong> "Apply Online" ক্লিক করুন ও একাউন্ট তৈরি করুন</li><li><strong>ধাপ ৩:</strong> ফর্ম পূরণ করুন</li><li><strong>ধাপ ৪:</strong> ফি পরিশোধ করুন</li><li><strong>ধাপ ৫:</strong> পাসপোর্ট অফিসে অ্যাপয়েন্টমেন্ট নিন</li></ul>
<h2>ফি কাঠামো</h2>
<table><tr><td><strong>ধরন</strong></td><td><strong>মেয়াদ</strong></td><td><strong>সাধারণ</strong></td><td><strong>জরুরি</strong></td></tr><tr><td>৪৮ পাতা</td><td>৫ বছর</td><td>৩,৪৫০ টাকা</td><td>৬,৯০০ টাকা</td></tr><tr><td>৪৮ পাতা</td><td>১০ বছর</td><td>৫,৭৫০ টাকা</td><td>৮,০৫০ টাকা</td></tr></table>
<h2>ডেলিভারি সময়</h2>
<ul><li><strong>সাধারণ:</strong> ১৫ – ২১ কার্যদিবস</li><li><strong>জরুরি:</strong> ৭ কার্যদিবস</li><li><strong>সুপার এক্সপ্রেস:</strong> ২ কার্যদিবস</li></ul>`,
    category: 'govt',
    tags: ['পাসপোর্ট', 'ই-পাসপোর্ট', 'আবেদন'],
    publishedAt: '2024-11-18',
    updatedAt: '2024-11-18',
    readingTime: '৬ মিনিট',
    readTime: 6,
  },
  {
    slug: 'trade-license',
    title: 'ট্রেড লাইসেন্স: আবেদন, নবায়ন ও প্রয়োজনীয় কাগজপত্র',
    description: 'ব্যবসা শুরু করতে ট্রেড লাইসেন্স নেওয়ার সম্পূর্ণ প্রক্রিয়া, ফি ও অনলাইন আবেদনের গাইড।',
    content: `
<h2>ট্রেড লাইসেন্স গাইড</h2>
<p>ব্যবসা পরিচালনার জন্য ট্রেড লাইসেন্স বাধ্যতামূলক।</p>
<h3>প্রয়োজনীয় কাগজপত্র</h3>
<ul><li>আবেদন ফর্ম</li><li>NID কপি</li><li>২ কপি পাসপোর্ট সাইজ ছবি</li><li>ভাড়ার চুক্তি বা মালিকানার দলিল</li></ul>
<h2>ফি কাঠামো (ঢাকা সিটি কর্পোরেশন)</h2>
<table><tr><td><strong>ব্যবসার ধরন</strong></td><td><strong>বার্ষিক ফি</strong></td></tr><tr><td>ক্ষুদ্র ব্যবসা</td><td>৫০০ – ২,০০০ টাকা</td></tr><tr><td>মাঝারি ব্যবসা</td><td>২,০০০ – ১০,০০০ টাকা</td></tr></table>
<h2>নবায়ন</h2>
<p>প্রতি বছর ৩১ মার্চের মধ্যে নবায়ন করতে হবে। বিলম্বে নবায়নে জরিমানা প্রযোজ্য।</p>
<blockquote>💡 টিপ: লাইসেন্সের মেয়াদ শেষ হওয়ার ১ মাস আগেই নবায়নের আবেদন করুন।</blockquote>`,
    category: 'govt',
    tags: ['ট্রেড লাইসেন্স', 'ব্যবসা', 'সরকারি সেবা'],
    publishedAt: '2024-11-22',
    updatedAt: '2024-11-22',
    readingTime: '৫ মিনিট',
    readTime: 5,
  },

  // ── BLOG ──────────────────────────────────────────────────────────────────
  {
    slug: 'save-money-tips',
    title: 'মাসে ১০ হাজার টাকা সঞ্চয় করার ৭টি উপায়',
    description: 'সীমিত আয়েও কীভাবে প্রতি মাসে সঞ্চয় করা সম্ভব — ব্যবহারিক টিপস ও কৌশল।',
    content: `
<h2>সঞ্চয়ের ৭টি কার্যকর উপায়</h2>
<p>অনেকেই মনে করেন বেশি আয় না হলে সঞ্চয় সম্ভব না। কিন্তু সঠিক পরিকল্পনায় সীমিত আয়েও সঞ্চয় করা যায়।</p>
<h3>১. ৫০-৩০-২০ নিয়ম মেনে চলুন</h3>
<ul><li><strong>৫০%</strong> — প্রয়োজনীয় খরচ</li><li><strong>৩০%</strong> — ইচ্ছামতো খরচ</li><li><strong>২০%</strong> — সঞ্চয় ও বিনিয়োগ</li></ul>
<h3>২. অটো সেভিং চালু করুন</h3>
<p>বেতন পাওয়ার সাথে সাথে নির্দিষ্ট পরিমাণ DPS বা সঞ্চয়ী হিসাবে পাঠানোর ব্যবস্থা করুন।</p>
<h3>৩. অপ্রয়োজনীয় সাবস্ক্রিপশন বাদ দিন</h3>
<p>Netflix, YouTube Premium — প্রতিটি পর্যালোচনা করুন।</p>
<h3>৪. রান্না করে খান</h3>
<p>বাইরে খাওয়া কমিয়ে ঘরে রান্না করলে মাসে ২,০০০ – ৫,০০০ টাকা বাঁচানো সম্ভব।</p>
<h3>৫. DPS খুলুন</h3>
<p>মাসিক ৫০০ – ২,০০০ টাকার DPS-এ ৫ বছরে ভালো রিটার্ন পাওয়া যায়।</p>
<h2>উপসংহার</h2>
<p>সঞ্চয় অভ্যাসের বিষয়। আজ থেকে ছোট পরিমাণে শুরু করুন — ধীরে ধীরে বাড়ান।</p>`,
    category: 'blog',
    tags: ['সঞ্চয়', 'আর্থিক পরিকল্পনা', 'টিপস'],
    publishedAt: '2024-11-28',
    updatedAt: '2024-11-28',
    readingTime: '৪ মিনিট',
    readTime: 4,
  },
]

export function getAllArticles(): Article[] {
  return articles.sort(
    (a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
  )
}

export function getArticlesByCategory(category: Article['category']): Article[] {
  return getAllArticles().filter((a) => a.category === category)
}

export function getArticleBySlug(slug: string): Article | undefined {
  return articles.find((a) => a.slug === slug)
}

export function getRelatedArticles(current: Article, limit = 3): Article[] {
  return getAllArticles()
    .filter(
      (a) =>
        a.slug !== current.slug &&
        (a.category === current.category || a.tags.some((t) => current.tags.includes(t)))
    )
    .slice(0, limit)
}