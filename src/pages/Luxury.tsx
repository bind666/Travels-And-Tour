import React, { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Crown, MapPin, Star, Calendar, Plane } from 'lucide-react';
import { Link } from 'react-router-dom';
import PackageModal from '@/components/PackageModal';
import EnquiryModal from '@/components/EnquiryModal';

const Luxury = () => {
  const [selectedPackage, setSelectedPackage] = useState(null);
  const [showEnquiry, setShowEnquiry] = useState(false);

  const luxuryPackages = [
    {
      id: 1,
      name: 'Exotic Maldives Escape',
      destination: 'Maldives',
      duration: '7 Days / 6 Nights',
      price: '₹2,50,000',
      originalPrice: '₹3,00,000',
      image: 'https://images.unsplash.com/photo-1542315774-19993e59c14e?w=400',
      rating: 4.9,
      reviews: 56,
      highlights: ['Private Beach Villa', 'Underwater Dining', 'Sunset Cruise', 'Spa Treatments'],
      inclusions: ['Accommodation', 'Meals', 'Transfers', 'Activities'],
      itinerary: [
        'Day 1: Arrival in Maldives, Check-in to private villa',
        'Day 2: Underwater dining experience',
        'Day 3: Sunset cruise and dolphin watching',
        'Day 4: Spa treatments and relaxation',
        'Day 5: Water sports and snorkeling',
        'Day 6: Private beach dinner',
        'Day 7: Departure'
      ]
    },
    {
      id: 2,
      name: 'Swiss Alps Luxury Tour',
      destination: 'Switzerland',
      duration: '8 Days / 7 Nights',
      price: '₹3,20,000',
      originalPrice: '₹3,80,000',
      image: 'https://images.unsplash.com/photo-1467269204594-9661b134dd2b?w=400',
      rating: 4.8,
      reviews: 42,
      highlights: ['Luxury Chalet Stay', 'Skiing', 'Mountain Views', 'Gourmet Dining'],
      inclusions: ['Accommodation', 'Meals', 'Ski Pass', 'Transfers'],
      itinerary: [
        'Day 1: Arrival in Zurich, Transfer to chalet',
        'Day 2: Skiing in Zermatt',
        'Day 3: Mountain excursion to Jungfraujoch',
        'Day 4: Gourmet dining experience',
        'Day 5: Hiking and nature walks',
        'Day 6: Spa and relaxation',
        'Day 7: City tour of Lucerne',
        'Day 8: Departure'
      ]
    },
    {
      id: 3,
      name: 'African Safari Extravaganza',
      destination: 'Kenya',
      duration: '9 Days / 8 Nights',
      price: '₹4,50,000',
      originalPrice: '₹5,20,000',
      image: 'https://images.unsplash.com/photo-1534778293319-922559739957?w=400',
      rating: 4.9,
      reviews: 61,
      highlights: ['Luxury Safari Lodge', 'Game Drives', 'Wildlife Viewing', 'Hot Air Balloon'],
      inclusions: ['Accommodation', 'Meals', 'Safari Drives', 'Park Fees'],
      itinerary: [
        'Day 1: Arrival in Nairobi, Transfer to lodge',
        'Day 2-3: Game drives in Masai Mara',
        'Day 4: Hot air balloon safari',
        'Day 5-6: Wildlife viewing in Amboseli',
        'Day 7: Visit to local Maasai village',
        'Day 8: Relaxation at the lodge',
        'Day 9: Departure'
      ]
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="relative h-screen bg-cover bg-center" style={{backgroundImage: 'url(https://images.unsplash.com/photo-1542315774-19993e59c14e?w=1920)'}}>
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="relative container mx-auto px-4 h-full flex items-center">
          <div className="text-white max-w-3xl">
            <h1 className="text-6xl font-bold mb-6">Luxury Travel Experiences</h1>
            <p className="text-xl mb-8">
              Indulge in the finest accommodations, exclusive services, and unforgettable adventures with our curated luxury packages.
            </p>
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700"
              onClick={() => setShowEnquiry(true)}
            >
              Explore Luxury Tours
            </Button>
          </div>
        </div>
      </section>

      {/* Luxury Packages */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Exclusive Luxury Packages</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Indulge in our premium travel experiences with world-class accommodations and services
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {luxuryPackages.map((pkg) => (
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
                  <div className="absolute top-4 left-4 bg-purple-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    Save ₹{parseInt(pkg.originalPrice.replace('₹', '').replace(',', '')) - parseInt(pkg.price.replace('₹', '').replace(',', ''))}
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
                      {pkg.highlights.slice(0, 3).map((highlight, index) => (
                        <span key={index} className="text-xs bg-purple-100 text-purple-800 px-2 py-1 rounded">
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
                        className="flex-1 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700"
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

      {/* Special Offers Section */}
      <section className="py-16 bg-gradient-to-r from-purple-600 to-pink-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Special Luxury Offers</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Limited time offers on our most exclusive luxury travel packages
          </p>
          <Link to="/packages">
            <Button 
              size="lg" 
              className="bg-white text-purple-600 hover:bg-gray-100"
            >
              View Special Offers
            </Button>
          </Link>
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

export default Luxury;
