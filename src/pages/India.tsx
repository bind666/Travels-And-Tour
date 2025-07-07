import React, { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { MapPin, Star, Calendar, Users } from 'lucide-react';
import { Link } from 'react-router-dom';
import PackageModal from '@/components/PackageModal';
import EnquiryModal from '@/components/EnquiryModal';

const India = () => {
  const [selectedPackage, setSelectedPackage] = useState(null);
  const [showEnquiry, setShowEnquiry] = useState(false);

  const popularTours = [
    {
      id: 1,
      name: 'Golden Triangle Classic',
      states: ['Delhi', 'Rajasthan', 'Uttar Pradesh'],
      price: '₹25,000',
      duration: '6 Days / 5 Nights',
      image: 'https://images.unsplash.com/photo-1564507592333-c60657eea523?w=600',
      highlights: ['Taj Mahal', 'Red Fort', 'Hawa Mahal'],
      rating: 4.8
    },
    {
      id: 2,
      name: 'Kerala Backwaters',
      states: ['Kerala'],
      price: '₹35,000',
      duration: '5 Days / 4 Nights',
      image: 'https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?w=600',
      highlights: ['Houseboat', 'Tea Gardens', 'Spice Gardens'],
      rating: 4.9
    },
    {
      id: 3,
      name: 'Himachal Adventure',
      states: ['Himachal Pradesh'],
      price: '₹30,000',
      duration: '7 Days / 6 Nights',
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600',
      highlights: ['Snow Mountains', 'Adventure Sports', 'Hill Stations'],
      rating: 4.7
    }
  ];

  const stateDestinations = [
    {
      state: 'Rajasthan',
      description: 'Land of Kings and Palaces',
      image: 'https://images.unsplash.com/photo-1599661046827-dacde6fe8013?w=400',
      attractions: ['Jaipur', 'Udaipur', 'Jodhpur', 'Jaisalmer']
    },
    {
      state: 'Kerala',
      description: 'God\'s Own Country',
      image: 'https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?w=400',
      attractions: ['Alleppey', 'Munnar', 'Thekkady', 'Kochi']
    },
    {
      state: 'Himachal Pradesh',
      description: 'Paradise for Nature Lovers',
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400',
      attractions: ['Shimla', 'Manali', 'Dharamshala', 'Spiti']
    },
    {
      state: 'Goa',
      description: 'Beach Paradise',
      image: 'https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?w=400',
      attractions: ['North Goa', 'South Goa', 'Old Goa', 'Dudhsagar']
    },
    {
      state: 'Uttarakhand',
      description: 'Land of Gods',
      image: 'https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?w=400',
      attractions: ['Rishikesh', 'Haridwar', 'Nainital', 'Mussoorie']
    },
    {
      state: 'Karnataka',
      description: 'Cultural Heritage',
      image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400',
      attractions: ['Bangalore', 'Mysore', 'Hampi', 'Coorg']
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
            <h1 className="text-6xl font-bold mb-6">Discover Incredible India</h1>
            <p className="text-xl mb-8">
              Explore the diverse landscapes, rich culture, and timeless heritage of India. 
              From majestic palaces to serene backwaters, create unforgettable memories in the land of diversity.
            </p>
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600"
              onClick={() => setShowEnquiry(true)}
            >
              Explore India Tours
            </Button>
          </div>
        </div>
      </section>

      {/* Popular India Tours */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Popular Tours in India</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Our most loved domestic tour packages across incredible India
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {popularTours.map((tour) => (
              <Card key={tour.id} className="overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div className="relative">
                  <img
                    src={tour.image}
                    alt={tour.name}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute top-4 right-4 bg-white px-2 py-1 rounded-full flex items-center">
                    <Star className="w-4 h-4 text-yellow-400 fill-current mr-1" />
                    <span className="text-sm font-semibold">{tour.rating}</span>
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-2">{tour.name}</h3>
                  <div className="flex items-center text-gray-600 mb-2">
                    <MapPin className="w-4 h-4 mr-1" />
                    <span className="text-sm">{tour.states.join(', ')}</span>
                  </div>
                  <div className="flex items-center text-gray-600 mb-4">
                    <Calendar className="w-4 h-4 mr-1" />
                    <span className="text-sm">{tour.duration}</span>
                  </div>
                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-800 mb-2">Highlights:</h4>
                    <div className="flex flex-wrap gap-1">
                      {tour.highlights.map((highlight, index) => (
                        <span key={index} className="bg-orange-100 text-orange-800 px-2 py-1 rounded text-xs">
                          {highlight}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-sm text-gray-600">Starting from</span>
                      <div className="text-2xl font-bold text-orange-600">{tour.price}</div>
                    </div>
                    <Button className="bg-orange-600 hover:bg-orange-700">
                      Book Now
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Destinations by State */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Domestic Destinations by State</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Explore India's diverse states and their unique attractions
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {stateDestinations.map((destination, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="relative">
                  <img
                    src={destination.image}
                    alt={destination.state}
                    className="w-full h-40 object-cover"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4">
                    <h3 className="text-white text-xl font-bold">{destination.state}</h3>
                    <p className="text-gray-200 text-sm">{destination.description}</p>
                  </div>
                </div>
                <CardContent className="p-4">
                  <h4 className="font-semibold text-gray-800 mb-2">Popular Attractions:</h4>
                  <div className="flex flex-wrap gap-1">
                    {destination.attractions.map((attraction, idx) => (
                      <span key={idx} className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs">
                        {attraction}
                      </span>
                    ))}
                  </div>
                  <Button variant="outline" className="w-full mt-4">
                    Explore {destination.state}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Enquiry Section */}
      <section className="py-16 bg-gradient-to-r from-orange-500 to-red-500 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Plan Your India Journey</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Let our India travel experts create a customized itinerary just for you
          </p>
          <Button 
            size="lg" 
            className="bg-white text-orange-600 hover:bg-gray-100"
            onClick={() => setShowEnquiry(true)}
          >
            Get Custom Itinerary
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

export default India;
