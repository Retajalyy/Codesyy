import { useState } from 'react';
import Header from './components/Header.jsx';
import Hero from './components/Hero.jsx';
import Courses from './components/Courses.jsx';
import BookingForm from './components/BookingForm.jsx';
import Faq from './components/Faq.jsx';
import Footer from './components/Footer.jsx';

export default function App() {
  // Which course card the parent clicked "Book Trial" from (soft signal only)
  const [interest, setInterest] = useState('');

  const handleBook = (courseName) => {
    setInterest(courseName);
    document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <Header />
      <Hero />
      <Courses onBook={handleBook} />
      <BookingForm interest={interest} onReset={() => setInterest('')} />
      <Faq />
      <Footer />
    </>
  );
}
