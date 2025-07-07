import React, { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { MapPin, Calendar, Users, Star, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';
import PackageModal from '@/components/PackageModal';
import EnquiryModal from '@/components/EnquiryModal';

const WeekendGetaways = () => {
  const [selectedPackage, setSelectedPackage] = useState(null);
  const [showEnquiry, setShowEnquiry] = useState(false);

  const packages = [
    {
      id: 1,
      name: 'Lonavala Getaway',
      destination: 'Lonavala, Maharashtra',
      duration: '2 Days / 1 Night',
      price: '₹8,000',
      originalPrice: '₹12,000',
      image: 'https://images.unsplash.com/photo-1564507592333-c60657eea523?w=400',
      rating: 4.5,
      reviews: 65,
      highlights: ['Hill Station', 'Scenic Views', 'Adventure Activities'],
      inclusions: ['Accommodation', 'Meals', 'Activities'],
      itinerary: [
        'Day 1: Arrival and sightseeing',
        'Day 2: Adventure activities and departure'
      ]
    },
    {
      id: 2,
      name: 'Pondicherry Escape',
      destination: 'Pondicherry, Tamil Nadu',
      duration: '3 Days / 2 Nights',
      price: '₹10,000',
      originalPrice: '₹15,000',
      image: 'https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?w=400',
      rating: 4.7,
      reviews: 82,
      highlights: ['Beaches', 'French Colony', 'Spiritual Retreats'],
      inclusions: ['Accommodation', 'Meals', 'Sightseeing'],
      itinerary: [
        'Day 1: Arrival and beach visit',
        'Day 2: French colony tour',
        'Day 3: Spiritual retreats and departure'
      ]
    },
    {
      id: 3,
      name: 'Nainital Retreat',
      destination: 'Nainital, Uttarakhand',
      duration: '3 Days / 2 Nights',
      price: '₹12,000',
      originalPrice: '₹18,000',
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400',
      rating: 4.6,
      reviews: 72,
      highlights: ['Lake Views', 'Boating', 'Scenic Beauty'],
      inclusions: ['Accommodation', 'Meals', 'Boating'],
      itinerary: [
        'Day 1: Arrival and lake visit',
        'Day 2: Boating and sightseeing',
        'Day 3: Scenic beauty and departure'
      ]
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="relative h-screen bg-cover bg-center" style={{backgroundImage: 'url(https://images.unsplash.com/photo-1564507592333-c60657eea523?w=1920)'}}>
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        <div className="relative container mx-auto px-4 h-full flex items-center">
          <div className="text-white max-w-3xl">
            <h1 className="text-6xl font-bold mb-6">Quick Weekend Escapes</h1>
            <p className="text-xl mb-8">
              Recharge with our curated weekend getaways. Discover nearby destinations for a refreshing break.
            </p>
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-600 hover:to-blue-600"
              onClick={() => setShowEnquiry(true)}
            >
              Explore Getaways
            </Button>
          </div>
        </div>
      </section>

      {/* Weekend Packages */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Quick Weekend Escapes</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Perfect short getaways to refresh and rejuvenate your mind
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {packages.map((pkg) => (
              <Card key={pkg.id} className="overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div className="relative">
                  <img
                    src={pkg.image}
                    alt={pkg.name}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute top-4 right-4 bg-white px-2 py-1 rounded-full flex items-center">
                    <Star className="w-4 h-4 text-yellow-400 fill-current mr-1" />
                    <span className="text-sm font-semibold">{pkg.rating}</span>
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-2">{pkg.name}</h3>
                  <div className="flex items-center text-gray-600 mb-2">
                    <MapPin className="w-4 h-4 mr-1" />
                    <span className="text-sm">{pkg.destination}</span>
                  </div>
                  <div className="flex items-center text-gray-600 mb-4">
                    <Calendar className="w-4 h-4 mr-1" />
                    <span className="text-sm">{pkg.duration}</span>
                  </div>
                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-800 mb-2">Highlights:</h4>
                    <div className="flex flex-wrap gap-1">
                      {pkg.highlights.map((highlight, index) => (
                        <span key={index} className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded">
                          {highlight}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <span className="text-2xl font-bold text-green-600">{pkg.price}</span>
                      <span className="text-sm text-gray-500 line-through ml-2">{pkg.originalPrice}</span>
                      <p className="text-xs text-gray-500">per person</p>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex space-x-2">
                      <Button 
                        variant="outline" 
                        className="flex-1"
                        onClick={() => setSelectedPackage(pkg)}
                      >
                        View Details
                      </Button>
                      <Button 
                        className="flex-1 bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700"
                        onClick={() => setShowEnquiry(true)}
                      >
                        Book Now
                      </Button>
                    </div>
                    <Button 
                      variant="ghost" 
                      className="w-full"
                      onClick={() => setShowEnquiry(true)}
                    >
                      Send Enquiry
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* More Options */}
      <section className="py-16 bg-gradient-to-r from-green-600 to-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Explore More Weekend Options</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Discover additional weekend getaway destinations and experiences
          </p>
          <Button 
            size="lg" 
            className="bg-white text-green-600 hover:bg-gray-100"
            onClick={() => setShowEnquiry(true)}
          >
            Explore More
          </Button>
        </div>
      </section>

      <Footer />
      
      {selectedPackage && (
        <PackageModal 
          package={selectedPackage} 
          onClose={() => setSelectedPackage(null)} 
        />
      )}
      
      {showEnquiry && (
        <EnquiryModal onClose={() => setShowEnquiry(false)} />
      )}
    </div>
  );
};

export default WeekendGetaways;
