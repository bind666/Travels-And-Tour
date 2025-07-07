import React, { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { MapPin, Calendar, Star, Binoculars, Camera, TreePine } from 'lucide-react';
import PackageModal from '@/components/PackageModal';
import EnquiryModal from '@/components/EnquiryModal';

const Wildlife = () => {
  const [selectedPackage, setSelectedPackage] = useState(null);
  const [showEnquiry, setShowEnquiry] = useState(false);

  const safariPackages = [
    {
      id: 1,
      name: 'Ranthambore Tiger Safari',
      destination: 'Ranthambore National Park, Rajasthan',
      duration: '3 Days / 2 Nights',
      price: '₹18,000',
      originalPrice: '₹25,000',
      image: 'https://images.unsplash.com/photo-1494790108755-2616c06e8c5b?w=400',
      rating: 4.9,
      reviews: 78,
      highlights: ['Tiger Spotting', 'Jungle Safari', 'Bird Watching', 'Photography'],
      inclusions: ['Accommodation', 'Safari', 'Meals', 'Guide'],
      itinerary: [
        'Day 1: Arrival and evening safari',
        'Day 2: Early morning safari and afternoon safari',
        'Day 3: Morning safari and departure'
      ]
    },
    {
      id: 2,
      name: 'Jim Corbett Wildlife Experience',
      destination: 'Jim Corbett National Park, Uttarakhand',
      duration: '4 Days / 3 Nights',
      price: '₹22,000',
      originalPrice: '₹30,000',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400',
      rating: 4.8,
      reviews: 92,
      highlights: ['Elephant Safari', 'Jeep Safari', 'River Rafting', 'Nature Walks'],
      inclusions: ['Resort Stay', 'All Safaris', 'Meals', 'Activities'],
      itinerary: [
        'Day 1: Arrival and check-in',
        'Day 2: Jeep safari and elephant ride',
        'Day 3: River rafting and nature walk',
        'Day 4: Morning safari and departure'
      ]
    }
  ];

  const nationalParks = [
    {
      name: 'Kaziranga National Park',
      state: 'Assam',
      description: 'Home to the one-horned rhinoceros',
      image: 'https://images.unsplash.com/photo-1614793437936-57e9349044e2?w=400'
    },
    {
      name: 'Bandipur National Park',
      state: 'Karnataka',
      description: 'Known for its diverse wildlife and tiger reserve',
      image: 'https://images.unsplash.com/photo-1622541694409-a8902b909c9a?w=400'
    },
    {
      name: 'Kanha National Park',
      state: 'Madhya Pradesh',
      description: 'One of the largest national parks in India',
      image: 'https://images.unsplash.com/photo-1563982354400-3391c8ca578a?w=400'
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="relative h-screen bg-cover bg-center" style={{backgroundImage: 'url(https://images.unsplash.com/photo-1494790108755-2616c06e8c5b?w=1920)'}}>
        <div className="absolute inset-0 bg-green-900 bg-opacity-50"></div>
        <div className="relative container mx-auto px-4 h-full flex items-center">
          <div className="text-white max-w-3xl">
            <h1 className="text-6xl font-bold mb-6">Wildlife Holidays</h1>
            <p className="text-xl mb-8">
              Embark on an unforgettable wildlife adventure. Discover exotic species in their natural habitats with our expertly curated safari packages.
            </p>
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700"
              onClick={() => setShowEnquiry(true)}
            >
              Explore Wildlife Tours
            </Button>
          </div>
        </div>
      </section>

      {/* Safari Packages */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Wildlife Safari Packages</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Experience the thrill of spotting majestic wildlife in their natural habitat
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {safariPackages.map((pkg) => (
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
                        Book Safari
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

      {/* National Parks */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Explore National Parks</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Discover the diverse flora and fauna of India's national parks
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {nationalParks.map((park, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="relative">
                  <img
                    src={park.image}
                    alt={park.name}
                    className="w-full h-40 object-cover"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4">
                    <h3 className="text-white text-xl font-bold">{park.name}</h3>
                    <p className="text-gray-200 text-sm">{park.state}</p>
                  </div>
                </div>
                <CardContent className="p-4">
                  <p className="text-gray-600">{park.description}</p>
                  <Button variant="outline" className="w-full mt-4">
                    Explore {park.name}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
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

export default Wildlife;
