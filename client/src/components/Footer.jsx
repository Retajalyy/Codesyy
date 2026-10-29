export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white py-12 border-t-4 border-purple-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center sm:text-left grid md:grid-cols-2 gap-8">
        <div>
          <h3 className="text-2xl font-bold bubbly-font text-purple-400 mb-2">Codesyy</h3>
          <p className="text-slate-400 text-sm">Where Young Minds Meet Technology. Interactive live coding academy for kids aged 6 to 17.</p>
        </div>
        <div>
          <h4 className="font-bold text-yellow-400 mb-3">Quick Contact</h4>
          <p className="text-slate-300 text-sm mb-1"><i className="fa-solid fa-envelope mr-2 text-purple-400"></i> codesyyschool@gmail.com</p>
          <p className="text-slate-300 text-sm"><i className="fa-solid fa-globe mr-2 text-cyan-400"></i> Live Online Classes Worldwide</p>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 mt-8 pt-6 border-t border-slate-800 text-center text-xs text-slate-500">
        &copy; 2026 Codesyy Academy. All Rights Reserved.
      </div>
    </footer>
  );
}
