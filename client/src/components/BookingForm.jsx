import { useState } from 'react';
import confetti from 'canvas-confetti';

const input =
  'w-full px-4 py-3.5 rounded-2xl border-2 border-slate-200 focus:border-purple-500 focus:outline-none transition font-medium text-slate-800 bg-white';
const label = 'block text-slate-700 font-bold text-sm mb-2';
const empty = { parentName: '', parentEmail: '', childName: '', bookingDate: '', bookingTime: '', phone: '' };

export default function BookingForm({ interest, onReset }) {
  const [form, setForm] = useState(empty);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');

  const change = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  async function submit(e) {
    e.preventDefault();
    setLoading(true);
    setError('');
    try {
      const res = await fetch('/api/bookings', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...form, areaOfInterest: interest }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.message || 'Booking failed.');
      setSuccess(true);
      confetti({ particleCount: 120, spread: 70, origin: { y: 0.6 } });
    } catch (err) {
      setError(err.message || "We couldn't reach the server. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  function reset() {
    setForm(empty);
    setSuccess(false);
    onReset();
  }

  return (
    <section id="booking" className="py-20 bg-pastel-gradient relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bubbly-card p-8 sm:p-12 bg-white/95 border-4 border-white shadow-2xl">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="px-4 py-1.5 rounded-full bg-purple-100 text-purple-700 font-bold text-xs uppercase tracking-wider">Free Trial Session</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-800 mt-3 mb-2">Book Your Free Live Coding Class</h2>
            <p className="text-slate-600 text-sm sm:text-base font-medium">
              No need to pick a track yet — the trial class is designed to explore what your child enjoys most. Just fill out the form below and we'll notify our team instantly!
            </p>
          </div>

          {!success ? (
            <form onSubmit={submit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className={label} htmlFor="parentName"><i className="fa-solid fa-user-tie text-purple-500 mr-1"></i> Parent's Full Name *</label>
                  <input id="parentName" name="parentName" value={form.parentName} onChange={change} required placeholder="e.g. Sarah Johnson" className={input} />
                </div>
                <div>
                  <label className={label} htmlFor="parentEmail"><i className="fa-solid fa-envelope text-purple-500 mr-1"></i> Parent's Email Address *</label>
                  <input id="parentEmail" name="parentEmail" type="email" value={form.parentEmail} onChange={change} required placeholder="parent@example.com" className={input} />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className={label} htmlFor="childName"><i className="fa-solid fa-child text-pink-500 mr-1"></i> Student/Child's Name *</label>
                  <input id="childName" name="childName" value={form.childName} onChange={change} required placeholder="e.g. Leo Johnson" className={input} />
                </div>
                <div>
                  <label className={label} htmlFor="bookingDate"><i className="fa-solid fa-calendar-day text-emerald-500 mr-1"></i> Preferred Date *</label>
                  <input id="bookingDate" name="bookingDate" type="date" value={form.bookingDate} onChange={change} required className={input} />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className={label} htmlFor="bookingTime"><i className="fa-solid fa-clock text-amber-500 mr-1"></i> Preferred Time (CDT) *</label>
                  <input id="bookingTime" name="bookingTime" type="time" value={form.bookingTime} onChange={change} required className={input} />
                  <p className="text-[11px] font-bold text-slate-400 mt-1.5">
                    <i className="fa-solid fa-circle-info mr-1"></i>All times are Central Daylight Time (CDT, UTC−5). Pick any time that works for you.
                  </p>
                </div>
                <div>
                  <label className={label} htmlFor="parentPhone"><i className="fa-solid fa-phone text-purple-500 mr-1"></i> Phone / WhatsApp Number *</label>
                  <input id="parentPhone" name="phone" type="tel" value={form.phone} onChange={change} required placeholder="+1 (555) 000-0000" className={input} />
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-purple-50 border-2 border-purple-200 flex items-start gap-3">
                <i className="fa-solid fa-circle-info text-purple-600 text-lg mt-0.5"></i>
                <p className="text-xs text-purple-900 font-medium leading-relaxed">
                  <strong>Notice:</strong> This trial class isn't tied to a specific track — our instructor will explore Code Blocks, Web Dev, Python, AI, and Cybersecurity basics with your child to see what clicks. Once booked, a confirmation email will be sent to your address, and we will send the live meeting link <strong>1 hour before the class starts</strong>.
                </p>
              </div>

              {error && <p className="text-sm font-bold text-red-600 bg-red-50 border border-red-200 rounded-2xl p-3">{error}</p>}

              <button type="submit" disabled={loading} className="btn-bubbly w-full py-4 bg-gradient-to-r from-purple-600 to-pink-500 hover:opacity-95 disabled:opacity-60 text-white font-extrabold text-lg shadow-lg flex items-center justify-center gap-3">
                <i className="fa-solid fa-paper-plane"></i>
                <span>
                  {loading ? <><i className="fa-solid fa-spinner animate-spin"></i> Processing Booking...</> : 'Confirm Free Trial Booking'}
                </span>
              </button>
            </form>
          ) : (
            <div className="text-center py-8 space-y-4">
              <div className="w-20 h-20 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center text-4xl mx-auto border-4 border-emerald-300 animate-bounce">
                <i className="fa-solid fa-check"></i>
              </div>
              <h3 className="text-3xl font-extrabold text-slate-800">Booking Confirmed! 🎉</h3>
              <p className="text-slate-600 max-w-lg mx-auto font-medium">
                Thank you! Our team has been notified of your booking, and a confirmation email is on its way to your inbox.
              </p>
              <div className="p-4 bg-yellow-50 rounded-2xl border border-yellow-200 text-yellow-800 text-xs font-bold max-w-md mx-auto">
                📌 Please check your email. We will send you the live class link 1 hour before your selected session!
              </div>
              <button onClick={reset} className="btn-bubbly px-6 py-2.5 bg-slate-800 text-white font-bold text-sm mt-4">
                Book Another Trial
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
