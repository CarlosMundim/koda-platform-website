// KODA Platform Homepage
// 11-Section Structure based on Japanese B2B Research + KODA Trinity
// See: /mnt/c/claude/KODA_CONSOLIDATED_MEMORY/PROJECT_MANAGEMENT/SOLUNAI_WEBSITE_SANDBOX_PROJECT_PLAN.md

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Section 1: Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-2xl font-bold" style={{ color: 'var(--solunai-blaze)' }}>KODA</span>
            <span className="text-sm text-gray-500">Platform</span>
          </div>
          <nav className="hidden md:flex items-center gap-8">
            <a href="#products" className="text-gray-600 hover:text-gray-900">Products</a>
            <a href="#trinity" className="text-gray-600 hover:text-gray-900">Technology</a>
            <a href="#case-study" className="text-gray-600 hover:text-gray-900">Case Studies</a>
            <a href="#contact" className="text-gray-600 hover:text-gray-900">Contact</a>
          </nav>
          <button
            className="px-5 py-2.5 text-white rounded-lg font-medium transition-all hover:opacity-90"
            style={{ backgroundColor: 'var(--solunai-blaze)' }}
          >
            Request Materials
          </button>
        </div>
      </header>

      {/* Section 2: Hero */}
      <section className="pt-32 pb-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            KODA Platform
          </h1>
          <p className="text-2xl text-gray-600 mb-4">AI that remembers</p>
          <p className="text-xl text-gray-500 mb-8 max-w-2xl mx-auto">
            Manufacturing AI solutions for Japanese SMEs. Powered by the KODA Trinity.
          </p>
          <div className="flex gap-4 justify-center">
            <button
              className="px-8 py-4 text-white rounded-lg font-medium text-lg transition-all hover:opacity-90"
              style={{ backgroundColor: 'var(--solunai-blaze)' }}
            >
              Request Materials
            </button>
            <button className="px-8 py-4 border-2 border-gray-300 text-gray-700 rounded-lg font-medium text-lg hover:border-gray-400 transition-all">
              Free Assessment
            </button>
          </div>
        </div>
      </section>

      {/* Section 3: Trust Indicators */}
      <section className="py-12 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <p className="text-4xl font-bold" style={{ color: 'var(--solunai-blaze)' }}>25+</p>
              <p className="text-gray-400 mt-2">Years Manufacturing Experience</p>
            </div>
            <div>
              <p className="text-4xl font-bold" style={{ color: 'var(--solunai-blaze)' }}>47</p>
              <p className="text-gray-400 mt-2">Cultural Dimensions</p>
            </div>
            <div>
              <p className="text-4xl font-bold" style={{ color: 'var(--solunai-blaze)' }}>30-50%</p>
              <p className="text-gray-400 mt-2">Cost Reduction</p>
            </div>
            <div>
              <p className="text-4xl font-bold" style={{ color: 'var(--solunai-blaze)' }}>95%+</p>
              <p className="text-gray-400 mt-2">Quality Improvement</p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4: Problem Statement */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
            Japan Manufacturing Challenges
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-8 bg-gray-50 rounded-2xl">
              <p className="text-5xl font-bold text-red-500 mb-4">77.2%</p>
              <h3 className="text-xl font-semibold mb-2">DX Not Started</h3>
              <p className="text-gray-600">Of Japanese SMEs have not begun digital transformation</p>
            </div>
            <div className="p-8 bg-gray-50 rounded-2xl">
              <p className="text-5xl font-bold text-red-500 mb-4">11M</p>
              <h3 className="text-xl font-semibold mb-2">Labor Shortage by 2040</h3>
              <p className="text-gray-600">Critical workforce gap facing Japanese manufacturing</p>
            </div>
            <div className="p-8 bg-gray-50 rounded-2xl">
              <p className="text-5xl font-bold text-red-500 mb-4">60%</p>
              <h3 className="text-xl font-semibold mb-2">Knowledge Loss Risk</h3>
              <p className="text-gray-600">Retiring workers taking tacit knowledge with them</p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 5: KODA Trinity (Solution Overview) */}
      <section id="trinity" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-4">
            The KODA Trinity
          </h2>
          <p className="text-xl text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            Three foundation engines powering all KODA products
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-8 bg-white rounded-2xl shadow-sm border border-gray-100">
              <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center mb-6">
                <span className="text-2xl">SCE</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Solunai Continuity Engine</h3>
              <p className="text-gray-500 mb-4">Memory & Identity</p>
              <p className="text-gray-600">AI that remembers. Persists memory across sessions unlike ChatGPT. Maintains identity and context continuity.</p>
            </div>
            <div className="p-8 bg-white rounded-2xl shadow-sm border border-gray-100">
              <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mb-6">
                <span className="text-2xl">47D</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">47 Dimensions</h3>
              <p className="text-gray-500 mb-4">Cultural Intelligence</p>
              <p className="text-gray-600">The science of cultural compatibility. Assesses workers across 47 cultural dimensions with academic backing.</p>
            </div>
            <div className="p-8 bg-white rounded-2xl shadow-sm border border-gray-100">
              <div className="w-16 h-16 rounded-full bg-purple-100 flex items-center justify-center mb-6">
                <span className="text-2xl">TSE</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Technical Skills Engine</h3>
              <p className="text-gray-500 mb-4">Worker Capability Analysis</p>
              <p className="text-gray-600">Visualize and maximize technical capability. Skill gap identification, training pathways, certification tracking.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 6: KODA Products Grid (5 Pillars) */}
      <section id="products" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-4">
            KODA Products
          </h2>
          <p className="text-xl text-gray-600 text-center mb-12">
            Five pillars built on the KODA Trinity
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* KODA Cultural */}
            <div className="p-6 border border-gray-200 rounded-2xl hover:border-orange-300 hover:shadow-lg transition-all">
              <h3 className="text-xl font-semibold mb-2" style={{ color: 'var(--solunai-blaze)' }}>KODA Cultural</h3>
              <p className="text-sm text-gray-500 mb-4">47D + SCE</p>
              <p className="text-gray-600 mb-4">Foreign worker retention support. 47-dimension cultural assessment and integration timeline prediction.</p>
              <p className="text-sm text-green-600">MHLW Grant Eligible</p>
            </div>
            {/* KODA WorkFlow */}
            <div className="p-6 border border-gray-200 rounded-2xl hover:border-orange-300 hover:shadow-lg transition-all">
              <h3 className="text-xl font-semibold mb-2" style={{ color: 'var(--solunai-blaze)' }}>KODA WorkFlow</h3>
              <p className="text-sm text-gray-500 mb-4">SCE + TSE</p>
              <p className="text-gray-600 mb-4">Perpetuate operational knowledge. Supplier/customer memory, project continuity, shift handover automation.</p>
              <p className="text-sm text-green-600">Monozukuri 50% Eligible</p>
            </div>
            {/* KODA Industry */}
            <div className="p-6 border border-gray-200 rounded-2xl hover:border-orange-300 hover:shadow-lg transition-all">
              <h3 className="text-xl font-semibold mb-2" style={{ color: 'var(--solunai-blaze)' }}>KODA Industry</h3>
              <p className="text-sm text-gray-500 mb-4">SCE + TSE</p>
              <p className="text-gray-600 mb-4">Digital twin for manufacturing. Predictive maintenance, quality inspection, process optimization.</p>
              <p className="text-sm text-green-600">METI Industry 4.0</p>
            </div>
            {/* KODA AI */}
            <div className="p-6 border border-gray-200 rounded-2xl hover:border-orange-300 hover:shadow-lg transition-all">
              <h3 className="text-xl font-semibold mb-2" style={{ color: 'var(--solunai-blaze)' }}>KODA AI</h3>
              <p className="text-sm text-gray-500 mb-4">Full Trinity</p>
              <p className="text-gray-600 mb-4">Custom AI solutions for SMEs. Integration with existing systems, on-premises or cloud deployment.</p>
              <p className="text-sm text-green-600">SME Digitalization Subsidy</p>
            </div>
            {/* KODA Training */}
            <div className="p-6 border border-gray-200 rounded-2xl hover:border-orange-300 hover:shadow-lg transition-all">
              <h3 className="text-xl font-semibold mb-2" style={{ color: 'var(--solunai-blaze)' }}>KODA Training</h3>
              <p className="text-sm text-gray-500 mb-4">TSE + 47D</p>
              <p className="text-gray-600 mb-4">AI workforce development. Corporate AI literacy programs, hands-on workshops, certification courses.</p>
              <p className="text-sm text-green-600">MEXT Reskilling Grant</p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 7: Why KODA (Differentiators) */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Why KODA?
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <p className="text-5xl font-bold mb-4" style={{ color: 'var(--solunai-blaze)' }}>5-7 Years</p>
              <h3 className="text-xl font-semibold mb-2">Competitive Moat</h3>
              <p className="text-gray-400">SCE architecture ahead of competitors. No other manufacturing AI has true continuity.</p>
            </div>
            <div className="text-center">
              <p className="text-5xl font-bold mb-4" style={{ color: 'var(--solunai-blaze)' }}>2-6 Weeks</p>
              <h3 className="text-xl font-semibold mb-2">Deployment Speed</h3>
              <p className="text-gray-400">vs 4-6 months traditional. Rapid implementation with proven methodology.</p>
            </div>
            <div className="text-center">
              <p className="text-5xl font-bold mb-4" style={{ color: 'var(--solunai-blaze)' }}>Government</p>
              <h3 className="text-xl font-semibold mb-2">Grant Alignment</h3>
              <p className="text-gray-400">All products aligned with Japanese government subsidies. 50% cost offset available.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 8: Case Study */}
      <section id="case-study" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
            Client Success
          </h2>
          <div className="max-w-4xl mx-auto bg-gray-50 rounded-2xl p-8 md:p-12">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 bg-gray-300 rounded-lg"></div>
              <div>
                <h3 className="text-xl font-semibold">FBM Hudson Italiana</h3>
                <p className="text-gray-500">Manufacturing | Italy</p>
              </div>
            </div>
            <p className="text-lg text-gray-600 mb-6">
              KODA Industry implementation for predictive maintenance and quality inspection.
              Achieved 48-72 hour failure prediction capability with 95%+ accuracy.
            </p>
            <div className="grid grid-cols-3 gap-4 text-center">
              <div>
                <p className="text-3xl font-bold" style={{ color: 'var(--solunai-blaze)' }}>30%</p>
                <p className="text-sm text-gray-500">Cost Reduction</p>
              </div>
              <div>
                <p className="text-3xl font-bold" style={{ color: 'var(--solunai-blaze)' }}>95%</p>
                <p className="text-sm text-gray-500">Quality Score</p>
              </div>
              <div>
                <p className="text-3xl font-bold" style={{ color: 'var(--solunai-blaze)' }}>4 weeks</p>
                <p className="text-sm text-gray-500">Deployment</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 9: Government Grants */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-2xl font-bold text-center text-gray-900 mb-8">
            Government Grant Eligible
          </h2>
          <div className="flex flex-wrap justify-center gap-4">
            <span className="px-6 py-3 bg-white rounded-full border border-gray-200 text-gray-700">
              Monozukuri 50%
            </span>
            <span className="px-6 py-3 bg-white rounded-full border border-gray-200 text-gray-700">
              IT Subsidy
            </span>
            <span className="px-6 py-3 bg-white rounded-full border border-gray-200 text-gray-700">
              MHLW Workforce
            </span>
            <span className="px-6 py-3 bg-white rounded-full border border-gray-200 text-gray-700">
              MEXT Reskilling
            </span>
          </div>
        </div>
      </section>

      {/* Section 10: Technology Partners */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-2xl font-bold text-center text-gray-900 mb-8">
            Technology Partners
          </h2>
          <div className="flex flex-wrap justify-center items-center gap-12">
            <span className="text-2xl text-gray-400 font-semibold">NVIDIA</span>
            <span className="text-2xl text-gray-400 font-semibold">Microsoft</span>
            <span className="text-2xl text-gray-400 font-semibold">Anthropic</span>
          </div>
        </div>
      </section>

      {/* Section 11: Contact CTA */}
      <section id="contact" className="py-20 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Transform?
          </h2>
          <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
            Request materials or schedule a free assessment with our team.
          </p>
          <div className="flex gap-4 justify-center">
            <button
              className="px-8 py-4 text-white rounded-lg font-medium text-lg transition-all hover:opacity-90"
              style={{ backgroundColor: 'var(--solunai-blaze)' }}
            >
              Request Materials
            </button>
            <button className="px-8 py-4 border-2 border-white text-white rounded-lg font-medium text-lg hover:bg-white hover:text-gray-900 transition-all">
              Free Assessment
            </button>
          </div>
          <div className="mt-12 text-gray-400">
            <p>Solunai Co., Ltd.</p>
            <p className="mt-2">contact@solunai.co.jp</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-black text-gray-400">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center gap-2 mb-4 md:mb-0">
              <span className="text-xl font-bold" style={{ color: 'var(--solunai-blaze)' }}>KODA</span>
              <span className="text-sm">Platform</span>
            </div>
            <div className="flex gap-6 text-sm">
              <a href="#" className="hover:text-white">Privacy Policy</a>
              <a href="#" className="hover:text-white">Terms of Service</a>
              <a href="#" className="hover:text-white">Company Info</a>
            </div>
            <p className="text-sm mt-4 md:mt-0">
              &copy; 2025 Solunai Co., Ltd. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </main>
  );
}
