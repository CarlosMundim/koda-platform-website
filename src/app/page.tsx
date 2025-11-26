// KODA Platform Homepage
// Japanese B2B Standards - Humanized Version
// Based on: Japanese SME Website Best Practices
// Humanized: November 27, 2025 - Chachie's Katana Approach

'use client';

import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Professional Header from Solunai Design System */}
      <Header lang="ja" />

      {/* ============================================
          Section 1: HERO
          Humanized - Warm, Approachable, Clear Value
          ============================================ */}
      <section className="pt-40 pb-24 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <p className="text-lg text-gray-600 mb-4 font-medium">
            中小製造業のための、やさしいAI
          </p>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            あなたの会社を<br className="md:hidden" />
            <span style={{ color: 'var(--solunai-blaze)' }}>記憶する</span>AI
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
            毎回ゼロから説明する必要はありません。<br />
            KODAは御社のことを覚えています。
          </p>
          <p className="text-base text-gray-500 mb-10 max-w-3xl mx-auto">
            技術継承の危機、人手不足、DXの遅れ——<br />
            日本の製造業が抱える課題に、私たちは真正面から向き合います。<br />
            大企業向けの高価なシステムではなく、<br />
            中小企業でも導入できるAIソリューションをお届けします。
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <a
              href="#contact"
              className="px-8 py-4 text-white rounded-xl font-medium text-lg transition-all hover:opacity-90 shadow-lg"
              style={{ backgroundColor: 'var(--solunai-blaze)' }}
            >
              まずは相談してみる
            </a>
            <a
              href="#message"
              className="px-8 py-4 border-2 border-gray-300 text-gray-700 rounded-xl font-medium text-lg hover:border-[#f5480a] hover:text-[#f5480a] transition-all"
            >
              私たちについて
            </a>
          </div>
        </div>
      </section>

      {/* ============================================
          Section 2: 代表挨拶 (Representative's Message)
          CRITICAL for Japanese 親しみやすさ (Approachability)
          ============================================ */}
      <section id="message" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-4">
            代表挨拶
          </h2>
          <p className="text-center text-gray-500 mb-12">Message from CEO</p>

          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-br from-orange-50 to-white rounded-3xl p-8 md:p-12 border border-orange-100">
              {/* Founder Info */}
              <div className="flex flex-col md:flex-row items-center md:items-start gap-6 mb-8">
                <div className="w-24 h-24 rounded-full bg-gradient-to-br from-orange-400 to-orange-600 flex items-center justify-center text-white text-3xl font-bold shadow-lg">
                  CM
                </div>
                <div className="text-center md:text-left">
                  <h3 className="text-xl font-bold text-gray-900">カルロス・マグノ・フレイタス・ムンヂン</h3>
                  <p className="text-gray-500">Carlos Magno Freitas Mundim</p>
                  <p className="text-sm text-gray-400 mt-1">代表社員 / CEO</p>
                </div>
              </div>

              {/* Message - Humanized, Personal */}
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  はじめまして。Solunai Systemsの代表、ムンヂンと申します。
                </p>
                <p>
                  私がAIの世界に魅了されたのは、「AIが人間のように記憶を持てたら」という素朴な疑問からでした。
                  毎回同じ説明を繰り返さなければならないAIツール。御社のことを何も覚えていないチャットボット。
                  これは本当の「知能」なのだろうか？
                </p>
                <p>
                  日本で働く中で、私は製造業の現場が抱える深刻な課題を目の当たりにしてきました。
                  ベテラン職人さんが退職すると、何十年もかけて培った技術やノウハウが一緒に失われてしまう。
                  外国人技術者は高いスキルを持っていても、文化の壁で力を発揮できない。
                  中小企業には大企業のようなDX予算がない。
                </p>
                <p>
                  <span className="font-semibold" style={{ color: 'var(--solunai-blaze)' }}>
                    「記憶するAI」は、これらの課題への私たちの答えです。
                  </span>
                </p>
                <p>
                  御社の取引先情報、製造ノウハウ、過去のプロジェクト履歴——
                  KODAはこれらを記憶し、次のセッションでも、その次のセッションでも、
                  まるで長年一緒に働いてきた同僚のようにお手伝いします。
                </p>
                <p>
                  私たちは大企業ではありません。派手なマーケティングもしません。
                  でも、御社の課題に真剣に向き合い、一緒に解決策を考えることをお約束します。
                </p>
                <p className="font-medium">
                  まずはお気軽にご相談ください。
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================
          Section 3: 私たちの想い (Our Passion/Vision)
          Human Story Behind the Company
          ============================================ */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-4">
            私たちの想い
          </h2>
          <p className="text-center text-gray-500 mb-12">Our Vision</p>

          <div className="max-w-3xl mx-auto text-center">
            <p className="text-2xl md:text-3xl font-bold text-gray-900 mb-8 leading-relaxed">
              「AIは道具ではなく、<br />
              <span style={{ color: 'var(--solunai-blaze)' }}>一緒に成長するパートナー</span>であるべき」
            </p>
            <p className="text-lg text-gray-600 leading-relaxed mb-8">
              多くのAIツールは、使うたびにリセットされます。<br />
              昨日話したことを覚えていない。御社の業界のことを知らない。<br />
              それでは本当の意味で「役に立つ」とは言えないと、私たちは考えます。
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              KODAの名前には、「恒だ（永遠に続く）」という意味を込めています。<br />
              セッションが終わっても、月が変わっても、年が変わっても、<br />
              御社との関係は途切れることなく続いていく——<br />
              そんなAIを目指しています。
            </p>
          </div>
        </div>
      </section>

      {/* ============================================
          Section 4: 会社概要 (Company Profile)
          Japanese B2B Standard - Clean Table Format
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
                    外国人材の定着支援AIツール<br />
                    AIコンサルティング・導入支援
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ============================================
          Section 5: こんな課題はありませんか？
          Problem Statement - Conversational, Empathetic
          ============================================ */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-4">
            こんな課題はありませんか？
          </h2>
          <p className="text-center text-gray-500 mb-12">Common Challenges</p>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-8 bg-white rounded-2xl shadow-sm border border-gray-100 hover:border-orange-200 transition-all">
              <div className="w-12 h-12 rounded-full bg-red-100 flex items-center justify-center mb-4">
                <span className="text-2xl">👴</span>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">技術継承の危機</h3>
              <p className="text-gray-600 leading-relaxed">
                「ベテランの○○さんが来年退職する。でも、あの人の頭の中にあるノウハウをどうやって残せばいいんだ…」
              </p>
            </div>
            <div className="p-8 bg-white rounded-2xl shadow-sm border border-gray-100 hover:border-orange-200 transition-all">
              <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mb-4">
                <span className="text-2xl">🌏</span>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">外国人材の定着</h3>
              <p className="text-gray-600 leading-relaxed">
                「せっかく採用した外国人エンジニアが、半年で辞めてしまう。技術はあるのに、なぜうまくいかないんだろう…」
              </p>
            </div>
            <div className="p-8 bg-white rounded-2xl shadow-sm border border-gray-100 hover:border-orange-200 transition-all">
              <div className="w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center mb-4">
                <span className="text-2xl">💰</span>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">DXの費用対効果</h3>
              <p className="text-gray-600 leading-relaxed">
                「AIやDXが大事なのはわかる。でも、うちみたいな中小企業には予算がない。本当に投資に見合う効果があるのか？」
              </p>
            </div>
          </div>

          <p className="text-center text-gray-600 mt-12 text-lg">
            これらの課題、私たちも真剣に考えています。<br />
            <span className="font-medium" style={{ color: 'var(--solunai-blaze)' }}>
              一緒に解決策を探しませんか？
            </span>
          </p>
        </div>
      </section>

      {/* ============================================
          Section 6: KODAができること
          Product/Solution - Benefits-Focused, Not Feature-Focused
          ============================================ */}
      <section id="products" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-4">
            KODAができること
          </h2>
          <p className="text-center text-gray-500 mb-4">Our Solutions</p>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            すべてのソリューションは、御社の状況に合わせてカスタマイズいたします。<br />
            「うちでも使えるの？」と思ったら、まずはご相談ください。
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* KODA Cultural */}
            <div className="p-6 bg-gray-50 border border-gray-200 rounded-2xl hover:border-[#f5480a] hover:shadow-lg transition-all">
              <h3 className="text-xl font-semibold mb-2" style={{ color: 'var(--solunai-blaze)' }}>KODA Cultural</h3>
              <p className="text-sm text-gray-500 mb-4">外国人材の定着支援</p>
              <p className="text-gray-600 mb-4 leading-relaxed">
                47の文化的側面から相性を分析。<br />
                「なぜか合わない」を「だからこうすればいい」に変えます。
              </p>
            </div>

            {/* KODA WorkFlow */}
            <div className="p-6 bg-gray-50 border border-gray-200 rounded-2xl hover:border-[#f5480a] hover:shadow-lg transition-all">
              <h3 className="text-xl font-semibold mb-2" style={{ color: 'var(--solunai-blaze)' }}>KODA WorkFlow</h3>
              <p className="text-sm text-gray-500 mb-4">業務知識の継承</p>
              <p className="text-gray-600 mb-4 leading-relaxed">
                ベテランの頭の中にある「暗黙知」を見える化。<br />
                退職しても、知識は会社に残ります。
              </p>
            </div>

            {/* KODA Industry */}
            <div className="p-6 bg-gray-50 border border-gray-200 rounded-2xl hover:border-[#f5480a] hover:shadow-lg transition-all">
              <h3 className="text-xl font-semibold mb-2" style={{ color: 'var(--solunai-blaze)' }}>KODA Industry</h3>
              <p className="text-sm text-gray-500 mb-4">製造業向けAI</p>
              <p className="text-gray-600 mb-4 leading-relaxed">
                予知保全、品質検査、工程最適化。<br />
                御社の設備・工程に合わせたAIを構築します。
              </p>
            </div>

            {/* KODA AI */}
            <div className="p-6 bg-gray-50 border border-gray-200 rounded-2xl hover:border-[#f5480a] hover:shadow-lg transition-all">
              <h3 className="text-xl font-semibold mb-2" style={{ color: 'var(--solunai-blaze)' }}>KODA AI</h3>
              <p className="text-sm text-gray-500 mb-4">カスタムAI開発</p>
              <p className="text-gray-600 mb-4 leading-relaxed">
                「こんなことできる？」に応えます。<br />
                御社専用のAIソリューションを開発。
              </p>
            </div>

            {/* KODA Training */}
            <div className="p-6 bg-gray-50 border border-gray-200 rounded-2xl hover:border-[#f5480a] hover:shadow-lg transition-all">
              <h3 className="text-xl font-semibold mb-2" style={{ color: 'var(--solunai-blaze)' }}>KODA Training</h3>
              <p className="text-sm text-gray-500 mb-4">AI人材育成</p>
              <p className="text-gray-600 mb-4 leading-relaxed">
                AIを使いこなせる人材を育成。<br />
                導入後も自走できる体制をサポートします。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================
          Section 7: KODA Trinity - Technical Foundation
          For Technical Decision Makers
          ============================================ */}
      <section id="technology" className="py-20 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            技術基盤：KODA Trinity
          </h2>
          <p className="text-center text-gray-400 mb-4">Technical Foundation</p>
          <p className="text-center text-gray-300 mb-12 max-w-2xl mx-auto">
            KODAのすべてのソリューションは、3つの基盤エンジンの組み合わせで構成されています。
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {/* SCE */}
            <div className="p-8 bg-white/5 rounded-2xl border border-white/10 backdrop-blur">
              <div className="w-14 h-14 rounded-full bg-blue-500/20 flex items-center justify-center mb-6">
                <span className="text-lg font-bold text-blue-400">SCE</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Solunai Continuity Engine</h3>
              <p className="text-sm text-gray-400 mb-4">記憶・継続性エンジン</p>
              <p className="text-gray-300 leading-relaxed">
                セッション間でコンテキストを保持。御社のビジネス情報、プロジェクト履歴、意思決定の背景を継続的に記憶します。
              </p>
            </div>

            {/* 47 Dimensions */}
            <div className="p-8 bg-white/5 rounded-2xl border border-white/10 backdrop-blur">
              <div className="w-14 h-14 rounded-full bg-green-500/20 flex items-center justify-center mb-6">
                <span className="text-lg font-bold text-green-400">47D</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">47 Dimensions</h3>
              <p className="text-sm text-gray-400 mb-4">文化適合性評価システム</p>
              <p className="text-gray-300 leading-relaxed">
                学術研究に基づいた47の文化的側面から人材の適合性を評価。組織文化との相性を科学的に測定します。
              </p>
            </div>

            {/* TSE */}
            <div className="p-8 bg-white/5 rounded-2xl border border-white/10 backdrop-blur">
              <div className="w-14 h-14 rounded-full bg-purple-500/20 flex items-center justify-center mb-6">
                <span className="text-lg font-bold text-purple-400">TSE</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Technical Skills Engine</h3>
              <p className="text-sm text-gray-400 mb-4">技術スキル分析エンジン</p>
              <p className="text-gray-300 leading-relaxed">
                技術者のスキルを可視化し、ギャップを特定。育成計画の策定、資格追跡、最適な人材配置を支援します。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================
          Section 8: 導入事例 - FBM Hudson
          Real Case Study with Permission
          ============================================ */}
      <section id="case-study" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-4">
            導入事例
          </h2>
          <p className="text-center text-gray-500 mb-12">Case Study</p>

          <div className="max-w-4xl mx-auto bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 md:p-12 border border-gray-100">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-16 h-16 bg-white rounded-xl flex items-center justify-center border border-gray-200 shadow-sm">
                <span className="text-xl font-bold text-gray-700">FBM</span>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900">FBM Hudson Italiana S.A.R.L.</h3>
                <p className="text-gray-500">空冷式熱交換器メーカー | イタリア・ベルガモ</p>
              </div>
            </div>

            <div className="space-y-6">
              <div>
                <h4 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
                  <span className="w-6 h-6 rounded-full bg-orange-100 flex items-center justify-center text-sm" style={{ color: 'var(--solunai-blaze)' }}>1</span>
                  お客様について
                </h4>
                <p className="text-gray-600 leading-relaxed pl-8">
                  1941年創業、84年の歴史を持つ空冷式熱交換器（ACHE）の専門メーカー。
                  石油・ガス、LNG、石油化学プラント向けに、世界中で高品質な熱交換器を製造されています。
                </p>
              </div>

              <div>
                <h4 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
                  <span className="w-6 h-6 rounded-full bg-orange-100 flex items-center justify-center text-sm" style={{ color: 'var(--solunai-blaze)' }}>2</span>
                  抱えていた課題
                </h4>
                <p className="text-gray-600 leading-relaxed pl-8">
                  見積もり作成に14〜21日を要していました。複雑な熱設計計算がベテランエンジニアに集中し、
                  顧客対応のスピード向上と技術継承が急務でした。
                </p>
              </div>

              <div>
                <h4 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
                  <span className="w-6 h-6 rounded-full bg-orange-100 flex items-center justify-center text-sm" style={{ color: 'var(--solunai-blaze)' }}>3</span>
                  私たちの取り組み
                </h4>
                <p className="text-gray-600 leading-relaxed pl-8">
                  KODA Industryを活用したAI見積もりシステムを構築中。
                  データシート自動解析、熱設計計算、BOM生成、見積書作成を統合化し、
                  見積もり期間の大幅短縮を目指しています。
                </p>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-gray-200">
              <p className="text-sm text-gray-500">
                ※ 本プロジェクトは2025年10月に契約締結、現在開発フェーズです。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================
          Section 9: パートナー
          Authorized Partners Only
          ============================================ */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-2xl font-bold text-center text-gray-900 mb-4">
            パートナー企業
          </h2>
          <p className="text-center text-gray-500 mb-8">Partners</p>

          <div className="flex flex-wrap justify-center items-center gap-12">
            <div className="text-center">
              <div className="w-32 h-16 bg-white rounded-xl flex items-center justify-center border border-gray-200 shadow-sm mb-2">
                <span className="text-lg font-bold text-gray-700">FBM Hudson</span>
              </div>
              <p className="text-sm text-gray-500">イタリア</p>
            </div>
            <div className="text-center">
              <div className="w-32 h-16 bg-white rounded-xl flex items-center justify-center border border-gray-200 shadow-sm mb-2">
                <span className="text-lg font-bold text-gray-700">WorldEmp</span>
              </div>
              <p className="text-sm text-gray-500">人材パートナー</p>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================
          Section 10: お問い合わせ CTA
          Warm, Inviting, Low-Barrier
          ============================================ */}
      <section id="contact" className="py-20 bg-gradient-to-br from-orange-50 to-white">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            まずはお気軽にご相談ください
          </h2>
          <p className="text-gray-500 mb-2">Contact Us</p>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
            「うちみたいな小さい会社でも大丈夫？」<br />
            「予算があまりないんだけど…」<br />
            「とりあえず話だけ聞きたい」<br />
            <span className="font-medium mt-2 block">どんなご相談でも歓迎します。</span>
          </p>

          <div className="flex gap-4 justify-center flex-wrap mb-12">
            <a
              href="mailto:info@solunai.co.jp?subject=KODAについてのお問い合わせ"
              className="px-8 py-4 text-white rounded-xl font-medium text-lg transition-all hover:opacity-90 shadow-lg"
              style={{ backgroundColor: 'var(--solunai-blaze)' }}
            >
              メールで相談する
            </a>
            <a
              href="tel:045-285-9480"
              className="px-8 py-4 border-2 border-gray-300 text-gray-700 rounded-xl font-medium text-lg hover:border-[#f5480a] hover:text-[#f5480a] transition-all bg-white"
            >
              お電話で相談する
            </a>
          </div>

          <div className="bg-white rounded-2xl p-8 max-w-md mx-auto shadow-sm border border-gray-100">
            <p className="font-semibold text-gray-900 mb-4">Solunai Systems 合同会社</p>
            <div className="space-y-2 text-gray-600">
              <p>info@solunai.co.jp</p>
              <p>TEL: 045-285-9480</p>
              <p className="text-sm text-gray-400 mt-4">
                営業時間：平日 9:00-18:00
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Professional Footer from Solunai Design System */}
      <Footer lang="ja" />
    </main>
  );
}
