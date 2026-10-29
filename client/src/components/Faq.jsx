import { useState } from 'react';

const faqs = [
  {
    q: 'How does the free trial class work?',
    a: 'Our trial is a 45-minute live 1-on-1 session where an instructor introduces your child to a mix of Code Blocks, Web Dev, Python, AI, and Cybersecurity basics. We use it to gauge skill level and see which track excites them most before recommending a roadmap.',
  },
  {
    q: "Why can't I choose the course for the trial?",
    a: "Many kids don't yet know what they'll enjoy most. The trial is intentionally exploratory so our instructor can find your child's spark — once we know that, we'll recommend the best-fit course for their full program.",
  },
  {
    q: 'When will I receive the meeting link?',
    a: <>We send your unique live meeting link to your registered parent email address <strong>1 hour before the meeting starts</strong> to keep your link fresh and secure.</>,
  },
  {
    q: 'Does my child need prior coding experience?',
    a: 'No prior experience required! We cater to absolute beginners as well as young coders who already have basic knowledge.',
  },
];

function FaqItem({ q, a }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="bubbly-card p-5 bg-white cursor-pointer" onClick={() => setOpen(!open)}>
      <div className="flex justify-between items-center font-bold text-slate-800 text-lg">
        <span>{q}</span>
        <i className={`fa-solid fa-chevron-down text-purple-500 transition-transform ${open ? 'rotate-180' : ''}`}></i>
      </div>
      {open && <p className="text-slate-600 text-sm mt-3 pt-3 border-t border-slate-100">{a}</p>}
    </div>
  );
}

export default function Faq() {
  return (
    <section id="faq" className="py-20 bg-slate-50 border-t border-slate-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="px-4 py-1.5 rounded-full bg-yellow-100 text-yellow-800 font-bold text-xs uppercase">Got Questions?</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-800 mt-3">Frequently Asked Questions</h2>
        </div>
        <div className="space-y-4">
          {faqs.map((f) => <FaqItem key={f.q} {...f} />)}
        </div>
      </div>
    </section>
  );
}
