
import React, { useState } from 'react';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import TravelCategories from '@/components/TravelCategories';
import PopularPackages from '@/components/PopularPackages';
import Testimonials from '@/components/Testimonials';
import TravelInspirations from '@/components/TravelInspirations';
import Footer from '@/components/Footer';
import EnquiryModal from '@/components/EnquiryModal';

const Index = () => {
  const [showEnquiry, setShowEnquiry] = useState(false);

  return (
    <div className="min-h-screen">
      <Header />
      <HeroSection onEnquireClick={() => setShowEnquiry(true)} />
      <TravelCategories />
      <PopularPackages />
      <Testimonials />
      <TravelInspirations />
      <Footer />
      
      {showEnquiry && (
        <EnquiryModal onClose={() => setShowEnquiry(false)} />
      )}
    </div>
  );
};

export default Index;
