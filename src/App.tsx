/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import History from './components/History';
import MenuGrid from './components/MenuGrid';
import Testimonials from './components/Testimonials';
import LatestNews from './components/LatestNews';
import CateringForm from './components/CateringForm';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-beige-100 font-sans selection:bg-gold-500/30 selection:text-maroon-900 flex flex-col w-full overflow-x-hidden">
      <Header />
      <main className="flex-1 w-full">
        <Hero />
        <History />
        <MenuGrid />
        <Testimonials />
        <LatestNews />
        <CateringForm />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
