// KODA Platform Homepage
// Japanese B2B Standards - Honest Claims Only
// Based on: Solunai Website Design System
// Updated: November 27, 2025

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* ============================================
          Section 1: HEADER (Floating Morph Design)
          Matches Solunai Website Style
          ============================================ */}
      <header className="fixed top-5 left-1/2 -translate-x-1/2 w-[calc(100%-80px)] max-w-[1400px] h-20 bg-white/95 backdrop-blur-sm z-50 rounded-2xl shadow-lg transition-all duration-400">
        <div className="max-w-[1400px] mx-auto px-10 h-full flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <a href="/" className="flex items-center gap-2">
              <span className="text-2xl font-bold" style={{ color: 'var(--solunai-blaze)' }}>KODA</span>
              <span className="text-sm text-gray-500 font-medium">Platform</span>
            </a>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <a href="#about" className="text-gray-700 hover:text-[#f5480a] font-medium transition-colors">会社概要</a>
            <a href="#products" className="text-gray-700 hover:text-[#f5480a] font-medium transition-colors">製品</a>
            <a href="#technology" className="text-gray-700 hover:text-[#f5480a] font-medium transition-colors">技術</a>
            <a href="#case-study" className="text-gray-700 hover:text-[#f5480a] font-medium transition-colors">導入事例</a>
            <a href="#contact" className="text-gray-700 hover:text-[#f5480a] font-medium transition-colors">お問い合わせ</a>
          </nav>

          {/* Language Toggle & CTA */}
          <div className="flex items-center gap-4">
            <a href="/en" className="text-sm text-gray-500 border border-gray-300 px-4 py-2 rounded hover:border-[#f5480a] hover:text-[#f5480a] transition-all">
              EN
            </a>
            <a
              href="#contact"
              className="px-5 py-2.5 text-white rounded-lg font-medium transition-all hover:opacity-90"
              style={{ backgroundColor: 'var(--solunai-blaze)' }}
            >
              資料請求
            </a>
          </div>
        </div>
      </header>

      {/* ============================================
          Section 2: HERO
          Japanese-First, Honest Positioning
          ============================================ */}
      <section className="pt-40 pb-24 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <p className="text-lg text-gray-500 mb-4 font-medium">製造業向けAIプラットフォーム</p>
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            KODA Platform
          </h1>
          <p className="text-3xl font-semibold mb-4" style={{ color: 'var(--solunai-blaze)' }}>
            記憶するAI
          </p>
          <p className="text-xl text-gray-600 mb-4 max-w-2xl mx-auto leading-relaxed">
            AI that remembers your business context
          </p>
          <p className="text-lg text-gray-500 mb-10 max-w-3xl mx-auto">
            セッションを超えて記憶を保持するAIエンジン。従来のAIツールとは異なり、
            お客様のビジネスコンテキストを学習し、継続的に価値を提供します。
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <a
              href="#contact"
              className="px-8 py-4 text-white rounded-lg font-medium text-lg transition-all hover:opacity-90 shadow-lg"
              style={{ backgroundColor: 'var(--solunai-blaze)' }}
            >
              資料請求
            </a>
            <a
              href="#case-study"
              className="px-8 py-4 border-2 border-gray-300 text-gray-700 rounded-lg font-medium text-lg hover:border-[#f5480a] hover:text-[#f5480a] transition-all"
            >
              導入事例を見る
            </a>
          </div>
        </div>
      </section>

      {/* ============================================
          Section 3: 会社概要 (Company Profile)
          CRITICAL for Japanese B2B - Must come early
          ============================================ */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-4">
            会社概要
          </h2>
          <p className="text-center text-gray-500 mb-12">Company Profile</p>

          <div className="max-w-4xl mx-auto bg-gray-50 rounded-2xl p-8 md:p-12">
            <table className="w-full text-left">
              <tbody className="divide-y divide-gray-200">
                <tr>
                  <th className="py-4 pr-8 text-gray-500 font-medium w-1/3">会社名</th>
                  <td className="py-4 text-gray-900">Solunai Systems 合同会社</td>
                </tr>
                <tr>
                  <th className="py-4 pr-8 text-gray-500 font-medium">英文名</th>
                  <td className="py-4 text-gray-900">Solunai Systems K.K.</td>
                </tr>
                <tr>
                  <th className="py-4 pr-8 text-gray-500 font-medium">代表者</th>
                  <td className="py-4 text-gray-900">カルロス・マグノ・フレイタス・ムンヂン</td>
                </tr>
                <tr>
                  <th className="py-4 pr-8 text-gray-500 font-medium">本社所在地</th>
                  <td className="py-4 text-gray-900">
                    〒222-0033<br />
                    神奈川県横浜市港北区新横浜2-5-14<br />
                    WISE NEXT 新横浜 4F
                  </td>
                </tr>
                <tr>
                  <th className="py-4 pr-8 text-gray-500 font-medium">東京支社</th>
                  <td className="py-4 text-gray-900">
                    〒104-0061<br />
                    東京都中央区銀座1-22-11<br />
                    銀座大竹ビジデンス 2F
                  </td>
                </tr>
                <tr>
                  <th className="py-4 pr-8 text-gray-500 font-medium">電話番号</th>
                  <td className="py-4 text-gray-900">045-285-9480</td>
                </tr>
                <tr>
                  <th className="py-4 pr-8 text-gray-500 font-medium">メール</th>
                  <td className="py-4 text-gray-900">info@solunai.co.jp</td>
                </tr>
                <tr>
                  <th className="py-4 pr-8 text-gray-500 font-medium">事業内容</th>
                  <td className="py-4 text-gray-900">
                    製造業向けAIソリューションの開発・提供<br />
                    デジタルツイン・予知保全システム構築<br />
                    AIコンサルティング・導入支援
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ============================================
          Section 4: PROBLEM STATEMENT
          Japan Manufacturing Challenges (Verified Statistics)
          ============================================ */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-4">
            日本の製造業が直面する課題
          </h2>
          <p className="text-center text-gray-500 mb-12">Industry Challenges</p>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-8 bg-white rounded-2xl shadow-sm border border-gray-100">
              <p className="text-5xl font-bold text-red-500 mb-4">2040年</p>
              <h3 className="text-xl font-semibold mb-2 text-gray-900">深刻な人手不足</h3>
              <p className="text-gray-600">
                経済産業省の試算によると、製造業では約1,100万人の労働力不足が予測されています。
              </p>
            </div>
            <div className="p-8 bg-white rounded-2xl shadow-sm border border-gray-100">
              <p className="text-5xl font-bold text-red-500 mb-4">技能</p>
              <h3 className="text-xl font-semibold mb-2 text-gray-900">技術継承の危機</h3>
              <p className="text-gray-600">
                ベテラン技術者の退職に伴い、暗黙知として蓄積された技術・ノウハウの継承が課題となっています。
              </p>
            </div>
            <div className="p-8 bg-white rounded-2xl shadow-sm border border-gray-100">
              <p className="text-5xl font-bold text-red-500 mb-4">DX</p>
              <h3 className="text-xl font-semibold mb-2 text-gray-900">デジタル化の遅れ</h3>
              <p className="text-gray-600">
                中小製造業の多くがDXに着手できておらず、競争力維持のための変革が求められています。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================
          Section 5: KODA TRINITY (Technology)
          Core Engine Architecture
          ============================================ */}
      <section id="technology" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-4">
            KODA Trinity
          </h2>
          <p className="text-xl text-gray-600 text-center mb-4">
            3つの基盤エンジンによる統合アーキテクチャ
          </p>
          <p className="text-center text-gray-500 mb-12">Three Foundation Engines</p>

          <div className="grid md:grid-cols-3 gap-8">
            {/* SCE */}
            <div className="p-8 bg-gray-50 rounded-2xl border border-gray-100 hover:border-[#f5480a] hover:shadow-lg transition-all">
              <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center mb-6">
                <span className="text-xl font-bold text-blue-600">SCE</span>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-900">Solunai Continuity Engine</h3>
              <p className="text-sm text-gray-500 mb-4">記憶・継続性エンジン</p>
              <p className="text-gray-600">
                セッション間でコンテキストを保持するAIエンジン。
                お客様のビジネス情報、プロジェクト履歴、意思決定の背景を
                継続的に学習・記憶します。
              </p>
            </div>

            {/* 47 Dimensions */}
            <div className="p-8 bg-gray-50 rounded-2xl border border-gray-100 hover:border-[#f5480a] hover:shadow-lg transition-all">
              <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mb-6">
                <span className="text-xl font-bold text-green-600">47D</span>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-900">47 Dimensions</h3>
              <p className="text-sm text-gray-500 mb-4">文化適合性評価システム</p>
              <p className="text-gray-600">
                47の文化的側面から人材の適合性を評価。
                学術研究に基づいた多次元分析により、
                組織文化との相性を科学的に測定します。
              </p>
            </div>

            {/* TSE */}
            <div className="p-8 bg-gray-50 rounded-2xl border border-gray-100 hover:border-[#f5480a] hover:shadow-lg transition-all">
              <div className="w-16 h-16 rounded-full bg-purple-100 flex items-center justify-center mb-6">
                <span className="text-xl font-bold text-purple-600">TSE</span>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-900">Technical Skills Engine</h3>
              <p className="text-sm text-gray-500 mb-4">技術スキル分析エンジン</p>
              <p className="text-gray-600">
                技術者のスキルを可視化し、ギャップを特定。
                育成計画の策定、資格追跡、
                最適な人材配置を支援します。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================
          Section 6: KODA PRODUCTS (5 Pillars)
          Product Grid
          ============================================ */}
      <section id="products" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-4">
            KODA 製品ラインナップ
          </h2>
          <p className="text-center text-gray-500 mb-12">Product Portfolio</p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* KODA Cultural */}
            <div className="p-6 bg-white border border-gray-200 rounded-2xl hover:border-[#f5480a] hover:shadow-lg transition-all">
              <h3 className="text-xl font-semibold mb-2" style={{ color: 'var(--solunai-blaze)' }}>KODA Cultural</h3>
              <p className="text-sm text-gray-500 mb-4">47D + SCE</p>
              <p className="text-gray-600 mb-4">
                外国人材の定着支援ソリューション。
                47次元の文化評価と組織適合予測により、
                効果的なオンボーディングを実現します。
              </p>
            </div>

            {/* KODA WorkFlow */}
            <div className="p-6 bg-white border border-gray-200 rounded-2xl hover:border-[#f5480a] hover:shadow-lg transition-all">
              <h3 className="text-xl font-semibold mb-2" style={{ color: 'var(--solunai-blaze)' }}>KODA WorkFlow</h3>
              <p className="text-sm text-gray-500 mb-4">SCE + TSE</p>
              <p className="text-gray-600 mb-4">
                業務知識の継承支援ツール。
                取引先情報、プロジェクト履歴、
                シフト引継ぎ情報を自動化・記録します。
              </p>
            </div>

            {/* KODA Industry */}
            <div className="p-6 bg-white border border-gray-200 rounded-2xl hover:border-[#f5480a] hover:shadow-lg transition-all">
              <h3 className="text-xl font-semibold mb-2" style={{ color: 'var(--solunai-blaze)' }}>KODA Industry</h3>
              <p className="text-sm text-gray-500 mb-4">SCE + TSE</p>
              <p className="text-gray-600 mb-4">
                製造業向けデジタルツイン。
                予知保全、品質検査、
                工程最適化を統合的に支援します。
              </p>
            </div>

            {/* KODA AI */}
            <div className="p-6 bg-white border border-gray-200 rounded-2xl hover:border-[#f5480a] hover:shadow-lg transition-all">
              <h3 className="text-xl font-semibold mb-2" style={{ color: 'var(--solunai-blaze)' }}>KODA AI</h3>
              <p className="text-sm text-gray-500 mb-4">Full Trinity</p>
              <p className="text-gray-600 mb-4">
                中小企業向けカスタムAIソリューション。
                既存システムとの連携、
                オンプレミス・クラウド両対応。
              </p>
            </div>

            {/* KODA Training */}
            <div className="p-6 bg-white border border-gray-200 rounded-2xl hover:border-[#f5480a] hover:shadow-lg transition-all">
              <h3 className="text-xl font-semibold mb-2" style={{ color: 'var(--solunai-blaze)' }}>KODA Training</h3>
              <p className="text-sm text-gray-500 mb-4">TSE + 47D</p>
              <p className="text-gray-600 mb-4">
                AI人材育成プログラム。
                企業向けAIリテラシー研修、
                ハンズオンワークショップを提供。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================
          Section 7: CASE STUDY - FBM Hudson (Authorized)
          Real Client with Permission
          ============================================ */}
      <section id="case-study" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-4">
            導入事例
          </h2>
          <p className="text-center text-gray-500 mb-12">Case Study</p>

          <div className="max-w-4xl mx-auto bg-gray-50 rounded-2xl p-8 md:p-12 border border-gray-100">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 bg-white rounded-lg flex items-center justify-center border border-gray-200 overflow-hidden">
                <span className="text-xl font-bold text-gray-700">FBM</span>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900">FBM Hudson Italiana S.A.R.L.</h3>
                <p className="text-gray-500">空冷式熱交換器メーカー | イタリア・ベルガモ</p>
              </div>
            </div>

            <div className="mb-8">
              <h4 className="font-semibold text-gray-900 mb-2">プロジェクト概要</h4>
              <p className="text-gray-600 mb-4">
                1941年創業、84年の歴史を持つ空冷式熱交換器（ACHE）メーカー。
                石油・ガス、LNG、石油化学プラント向けに高品質な熱交換器を製造。
              </p>

              <h4 className="font-semibold text-gray-900 mb-2">課題</h4>
              <p className="text-gray-600 mb-4">
                見積もり作成に14〜21日を要し、複雑な熱設計計算がベテランエンジニアに集中。
                顧客対応のスピード向上と技術継承が急務でした。
              </p>

              <h4 className="font-semibold text-gray-900 mb-2">ソリューション</h4>
              <p className="text-gray-600">
                KODA Industryを活用したAI見積もりシステムを構築中。
                データシート自動解析、熱設計計算、BOM生成、見積書作成を統合化。
                現在開発フェーズ。
              </p>
            </div>

            <div className="pt-6 border-t border-gray-200">
              <p className="text-sm text-gray-500">
                ※ 本プロジェクトは2025年10月に契約締結、現在開発進行中です。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================
          Section 8: パートナー (Authorized Only)
          Only FBM and WorldEmp - with permission
          ============================================ */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-2xl font-bold text-center text-gray-900 mb-4">
            パートナー企業
          </h2>
          <p className="text-center text-gray-500 mb-8">Partners</p>

          <div className="flex flex-wrap justify-center items-center gap-12">
            <div className="text-center">
              <div className="w-32 h-16 bg-white rounded-lg flex items-center justify-center border border-gray-200 mb-2">
                <span className="text-lg font-bold text-gray-700">FBM Hudson</span>
              </div>
              <p className="text-sm text-gray-500">イタリア</p>
            </div>
            <div className="text-center">
              <div className="w-32 h-16 bg-white rounded-lg flex items-center justify-center border border-gray-200 mb-2">
                <span className="text-lg font-bold text-gray-700">WorldEmp</span>
              </div>
              <p className="text-sm text-gray-500">人材パートナー</p>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================
          Section 9: CONTACT CTA
          資料請求 as Primary CTA (Japanese Standard)
          ============================================ */}
      <section id="contact" className="py-20 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            お問い合わせ
          </h2>
          <p className="text-gray-400 mb-2">Contact Us</p>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            KODA Platformの詳細資料をお送りいたします。<br />
            お気軽にお問い合わせください。
          </p>

          <div className="flex gap-4 justify-center flex-wrap mb-12">
            <a
              href="mailto:info@solunai.co.jp"
              className="px-8 py-4 text-white rounded-lg font-medium text-lg transition-all hover:opacity-90"
              style={{ backgroundColor: 'var(--solunai-blaze)' }}
            >
              資料請求
            </a>
            <a
              href="tel:045-285-9480"
              className="px-8 py-4 border-2 border-white text-white rounded-lg font-medium text-lg hover:bg-white hover:text-gray-900 transition-all"
            >
              お電話でのお問い合わせ
            </a>
          </div>

          <div className="text-gray-400 space-y-2">
            <p className="font-medium text-white">Solunai Systems 合同会社</p>
            <p>info@solunai.co.jp</p>
            <p>TEL: 045-285-9480</p>
          </div>
        </div>
      </section>

      {/* ============================================
          FOOTER (Matches Solunai Website Style)
          ============================================ */}
      <footer className="py-20 bg-black text-white">
        <div className="max-w-[1400px] mx-auto px-10">
          {/* Footer Hero */}
          <div className="text-center mb-20 pb-20 border-b border-white/10">
            <div className="inline-block bg-white rounded-3xl px-12 py-8 mb-10">
              <span className="text-3xl font-bold" style={{ color: 'var(--solunai-blaze)' }}>KODA</span>
              <span className="text-xl text-gray-500 ml-2">Platform</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold leading-tight">
              AI革命<br />
              日本の製造業における
            </h2>
          </div>

          {/* Footer Grid */}
          <div className="grid md:grid-cols-4 gap-12 mb-16 pb-16 border-b border-white/10">
            {/* Products */}
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wider mb-6">製品</h3>
              <ul className="space-y-4">
                <li><a href="#products" className="text-white/70 hover:text-[#f5480a] transition-colors">KODA Cultural</a></li>
                <li><a href="#products" className="text-white/70 hover:text-[#f5480a] transition-colors">KODA WorkFlow</a></li>
                <li><a href="#products" className="text-white/70 hover:text-[#f5480a] transition-colors">KODA Industry</a></li>
                <li><a href="#products" className="text-white/70 hover:text-[#f5480a] transition-colors">KODA AI</a></li>
                <li><a href="#products" className="text-white/70 hover:text-[#f5480a] transition-colors">KODA Training</a></li>
              </ul>
            </div>

            {/* Company */}
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wider mb-6">企業情報</h3>
              <ul className="space-y-4">
                <li><a href="#about" className="text-white/70 hover:text-[#f5480a] transition-colors">会社概要</a></li>
                <li><a href="#technology" className="text-white/70 hover:text-[#f5480a] transition-colors">技術</a></li>
                <li><a href="#case-study" className="text-white/70 hover:text-[#f5480a] transition-colors">導入事例</a></li>
              </ul>
            </div>

            {/* Support */}
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wider mb-6">サポート</h3>
              <ul className="space-y-4">
                <li><a href="#contact" className="text-white/70 hover:text-[#f5480a] transition-colors">お問い合わせ</a></li>
                <li><a href="/privacy" className="text-white/70 hover:text-[#f5480a] transition-colors">プライバシーポリシー</a></li>
                <li><a href="/terms" className="text-white/70 hover:text-[#f5480a] transition-colors">利用規約</a></li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wider mb-6">お問い合わせ</h3>
              <div className="space-y-4">
                <a href="mailto:info@solunai.co.jp" className="text-white/70 hover:text-[#f5480a] transition-colors block">
                  info@solunai.co.jp
                </a>

                <div className="mt-4">
                  <p className="text-white/90 font-medium">本社:</p>
                  <p className="text-white/70 text-sm">WISE NEXT 新横浜 4F</p>
                  <p className="text-white/70 text-sm">神奈川県横浜市港北区新横浜2-5-14</p>
                  <p className="text-white/70 text-sm">〒222-0033</p>
                  <p className="text-white/70 text-sm">045-285-9480</p>
                </div>

                <div className="mt-4">
                  <p className="text-white/90 font-medium">東京支社:</p>
                  <p className="text-white/70 text-sm">銀座大竹ビジデンス 2F</p>
                  <p className="text-white/70 text-sm">東京都中央区銀座1-22-11</p>
                  <p className="text-white/70 text-sm">〒104-0061</p>
                </div>
              </div>
            </div>
          </div>

          {/* Footer Bottom */}
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-white/60 text-sm">
              © 2025 Solunai Systems K.K. All rights reserved.
            </p>
            <a
              href="https://www.linkedin.com/company/solunai-systems/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/70 hover:text-[#f5480a] transition-colors mt-4 md:mt-0"
              aria-label="LinkedIn"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}
