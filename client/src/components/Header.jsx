export default function Header() {
  return (
    <header className="sticky top-0 z-40 bg-white/80 backdrop-blur-md border-b-4 border-purple-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        <a href="#" className="flex items-center space-x-3 group">
          <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-purple-500 via-pink-400 to-yellow-300 flex items-center justify-center text-white text-2xl shadow-md group-hover:rotate-12 transition-transform">
            <i className="fa-solid fa-laptop-code"></i>
          </div>
          <div>
            <span className="text-3xl font-extrabold tracking-wide bg-gradient-to-r from-purple-600 via-pink-500 to-cyan-500 bg-clip-text text-transparent bubbly-font">
              Codesyy
            </span>
            <p className="text-[10px] font-bold text-purple-600 tracking-wider uppercase -mt-1 hidden sm:block">
              Where Young Minds Meet Technology
            </p>
          </div>
        </a>

        <nav className="hidden md:flex items-center space-x-8 font-semibold text-slate-700">
          <a href="#courses" className="hover:text-purple-600 transition">Courses</a>
          <a href="#booking" className="hover:text-purple-600 transition">Free Trial</a>
          <a href="#faq" className="hover:text-purple-600 transition">FAQ</a>
        </nav>

        <a href="#booking" className="btn-bubbly bg-gradient-to-r from-pink-500 to-purple-600 text-white font-bold py-3 px-6 text-sm sm:text-base hover:opacity-95 shadow-lg flex items-center gap-2">
          <span>Book Free Trial</span>
        </a>
      </div>
    </header>
  );
}
