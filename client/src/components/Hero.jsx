export default function Hero() {
  return (
    <section className="relative bg-hero-pattern py-16 lg:py-24 overflow-hidden border-b-4 border-purple-100">
      <div className="absolute top-10 left-10 text-cyan-400/40 text-6xl floating-pixel pointer-events-none">
        <i className="fa-solid fa-code"></i>
      </div>
      <div className="absolute bottom-10 right-12 text-pink-400/40 text-7xl floating-pixel pointer-events-none" style={{ animationDelay: '1.5s' }}>
        <i className="fa-solid fa-heart"></i>
      </div>
      <div className="absolute top-1/2 right-10 text-yellow-400/40 text-5xl floating-pixel pointer-events-none" style={{ animationDelay: '0.8s' }}>
        <i className="fa-solid fa-gear"></i>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-100 border-2 border-purple-300 text-purple-700 font-bold text-sm mb-6 shadow-sm">
              <span className="flex h-3 w-3 rounded-full bg-emerald-400 animate-ping"></span>
              🚀 100% Live Interactive Coding Classes for Kids
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-800 leading-tight mb-6">
              Where Young Minds <br className="hidden sm:inline" />
              <span className="bg-gradient-to-r from-purple-600 via-pink-500 to-cyan-500 bg-clip-text text-transparent">Meet Technology!</span>
            </h1>

            <p className="text-slate-600 text-lg sm:text-xl font-medium mb-8 leading-relaxed">
              Empower your children aged 6–17 to build games, websites, artificial intelligence models, and cybersecurity skills with expert 1-on-1 live instruction.
            </p>

            <div className="flex flex-wrap gap-3 justify-center lg:justify-start mb-8">
              <span className="px-4 py-2 rounded-2xl bg-cyan-100 text-cyan-800 font-bold text-xs sm:text-sm flex items-center gap-2 border border-cyan-200">
                <i className="fa-solid fa-child text-cyan-600"></i> Ages 6–17
              </span>
              <span className="px-4 py-2 rounded-2xl bg-emerald-100 text-emerald-800 font-bold text-xs sm:text-sm flex items-center gap-2 border border-emerald-200">
                <i className="fa-solid fa-video text-emerald-600"></i> 1-on-1 &amp; Small Groups
              </span>
              <span className="px-4 py-2 rounded-2xl bg-pink-100 text-pink-800 font-bold text-xs sm:text-sm flex items-center gap-2 border border-pink-200">
                <i className="fa-solid fa-robot text-pink-600"></i> Code Blocks, Web Dev, Python, AI &amp; Cybersecurity
              </span>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <a href="#booking" className="btn-bubbly w-full sm:w-auto bg-purple-600 hover:bg-purple-700 text-white font-extrabold py-4 px-8 text-lg text-center shadow-xl flex items-center justify-center gap-3">
                <i className="fa-solid fa-rocket"></i>
                <span>Book Free Trial Class</span>
              </a>
              <a href="#courses" className="btn-bubbly w-full sm:w-auto bg-white hover:bg-slate-50 text-slate-700 border-2 border-slate-200 font-bold py-4 px-8 text-lg text-center shadow-md flex items-center justify-center gap-2">
                <i className="fa-solid fa-gamepad text-purple-500"></i>
                <span>Explore Courses</span>
              </a>
            </div>
          </div>

          <div className="relative">
            <div className="bubbly-card p-6 sm:p-8 bg-gradient-to-br from-white via-purple-50 to-pink-50 border-4 border-white">
              <div className="flex items-center justify-between pb-4 border-b border-purple-100 mb-6">
                <div className="flex items-center gap-2">
                  <span className="w-3.5 h-3.5 rounded-full bg-red-400"></span>
                  <span className="w-3.5 h-3.5 rounded-full bg-yellow-400"></span>
                  <span className="w-3.5 h-3.5 rounded-full bg-green-400"></span>
                </div>
                <span className="text-xs font-mono font-bold text-purple-600 bg-purple-100 px-3 py-1 rounded-full">Codesyy Studio v2.4</span>
              </div>

              <div className="bg-slate-900 rounded-2xl p-5 font-mono text-xs sm:text-sm text-emerald-400 shadow-inner mb-6 space-y-2">
                <p className="text-slate-500">// Welcome to Codesyy Interactive Learning!</p>
                <p><span className="text-purple-400">function</span> <span className="text-yellow-300">createMagicApp</span>(kid) {'{'}</p>
                <p className="pl-4"><span className="text-cyan-300">kid</span>.<span className="text-pink-400">skills</span> += [<span className="text-amber-200">'Python'</span>, <span className="text-amber-200">'AI'</span>, <span className="text-amber-200">'Security'</span>];</p>
                <p className="pl-4"><span className="text-purple-400">return</span> kid.<span className="text-yellow-300">buildSuperpowers</span>();</p>
                <p>{'}'}</p>
                <p className="text-yellow-400 pt-2">&gt;&gt; Status: Ready to start trial class! 🚀</p>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="p-4 rounded-2xl bg-amber-50 border border-amber-200 text-center">
                  <span className="block text-2xl font-black text-amber-600 bubbly-font">98.4%</span>
                  <span className="text-xs font-bold text-slate-600">Parent Satisfaction</span>
                </div>
                <div className="p-4 rounded-2xl bg-purple-50 border border-purple-200 text-center">
                  <span className="block text-2xl font-black text-purple-600 bubbly-font">1-Hour</span>
                  <span className="text-xs font-bold text-slate-600">Prior Meeting Reminders</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
