import { useState } from 'react';
import { courses, filters } from '../data/courses.js';

export default function Courses({ onBook }) {
  const [active, setActive] = useState('all');
  const visible = courses.filter((c) => active === 'all' || c.category === active);

  return (
    <section id="courses" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="px-4 py-1.5 rounded-full bg-cyan-100 text-cyan-800 font-bold text-xs uppercase tracking-wider">Curriculum Roadmap</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-800 mt-3 mb-4">Choose the Perfect Coding Track</h2>
          <p className="text-slate-600 font-medium text-base sm:text-lg">
            Designed by tech educators to transform passive screen time into active creation.
          </p>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-12">
          {filters.map((f) => (
            <button
              key={f.key}
              onClick={() => setActive(f.key)}
              className={`px-5 py-2.5 rounded-2xl font-extrabold text-sm border-2 transition ${
                active === f.key
                  ? 'border-purple-600 bg-purple-600 text-white shadow-md'
                  : 'border-purple-200 bg-purple-50 text-purple-700 hover:bg-purple-100'
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {visible.map((c) => (
            <div key={c.title} className="bubbly-card p-6 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className={`px-3 py-1 rounded-xl text-xs font-bold ${c.ageBadge}`}>{c.ages}</span>
                  <span className="text-xs font-bold text-slate-400">
                    <i className={`fa-solid fa-signal ${c.levelColor}`}></i> {c.level}
                  </span>
                </div>
                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center text-3xl mb-4 ${c.iconBox}`}>
                  <i className={c.icon}></i>
                </div>
                <h3 className="text-2xl font-bold text-slate-800 mb-2">{c.title}</h3>
                <p className="text-slate-600 text-sm mb-6">{c.desc}</p>
                <ul className="space-y-2 text-xs font-bold text-slate-600 mb-6">
                  {c.features.map((f) => (
                    <li key={f} className="flex items-center gap-2">
                      <i className="fa-solid fa-check text-emerald-500"></i> {f}
                    </li>
                  ))}
                </ul>
              </div>
              <button
                onClick={() => onBook(c.title)}
                className={`btn-bubbly w-full py-3 font-extrabold text-sm flex items-center justify-center gap-2 ${c.btn}`}
              >
                <span>{c.btnLabel}</span>
                <i className="fa-solid fa-arrow-right"></i>
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
