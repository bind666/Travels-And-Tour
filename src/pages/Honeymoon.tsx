
import React, { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { MapPin, Calendar, Users, Star, Heart } from 'lucide-react';
import PackageModal from '@/components/PackageModal';
import EnquiryModal from '@/components/EnquiryModal';

const Honeymoon = () => {
  const [selectedPackage, setSelectedPackage] = useState(null);
  const [showEnquiry, setShowEnquiry] = useState(false);
  const [activeCategory, setActiveCategory] = useState('all');

  const packages = [
    {
      id: 1,
      name: 'Romantic Goa Honeymoon',
      destination: 'North & South Goa',
      duration: '5 Days / 4 Nights',
      price: '₹35,000',
      originalPrice: '₹45,000',
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400',
      rating: 4.8,
      reviews: 124,
      category: 'beach',
      highlights: ['Beach Resort', 'Candlelight Dinner', 'Sunset Cruise', 'Couple Spa'],
      inclusions: ['Accommodation', 'Meals', 'Transfers', 'Activities'],
      itinerary: [
        'Day 1: Arrival in Goa, Check-in to beach resort',
        'Day 2: North Goa sightseeing, Beach activities',
        'Day 3: South Goa tour, Romantic dinner',
        'Day 4: Couple spa, Sunset cruise',
        'Day 5: Departure'
      ]
    },
    {
      id: 2,
      name: 'Kerala Backwater Romance',
      destination: 'Munnar - Thekkady - Alleppey',
      duration: '7 Days / 6 Nights',
      price: '₹55,000',
      originalPrice: '₹70,000',
      image: 'https://images.unsplash.com/photo-1426604966848-d7adac402bff?w=400',
      rating: 4.9,
      reviews: 89,
      category: 'nature',
      highlights: ['Houseboat Stay', 'Tea Gardens', 'Wildlife Safari', 'Ayurveda Treatment'],
      inclusions: ['Accommodation', 'Meals', 'Transfers', 'Houseboat', 'Activities'],
      itinerary: [
        'Day 1-2: Munnar - Tea plantations, Romantic stay',
        'Day 3-4: Thekkady - Spice gardens, Wildlife safari',
        'Day 5-6: Alleppey - Houseboat experience',
        'Day 7: Departure from Cochin'
      ]
    },
    {
      id: 3,
      name: 'Rajasthan Royal Honeymoon',
      destination: 'Udaipur - Jaisalmer - Jodhpur',
      duration: '8 Days / 7 Nights',
      price: '₹75,000',
      originalPrice: '₹95,000',
      image: 'https://images.unsplash.com/photo-1466442929976-97f336a657be?w=400',
      rating: 4.7,
      reviews: 67,
      category: 'heritage',
      highlights: ['Palace Hotels', 'Desert Safari', 'Royal Dining', 'Cultural Shows'],
      inclusions: ['Palace Stay', 'Meals', 'Transfers', 'Desert Camp', 'Activities'],
      itinerary: [
        'Day 1-3: Udaipur - City of Lakes, Palace tours',
        'Day 4-5: Jaisalmer - Golden city, Desert safari',
        'Day 6-7: Jodhpur - Blue city, Mehrangarh Fort',
        'Day 8: Departure'
      ]
    },
    {
      id: 4,
      name: 'Shimla Manali Romance',
      destination: 'Shimla - Manali - Kullu',
      duration: '6 Days / 5 Nights',
      price: '₹42,000',
      originalPrice: '₹55,000',
      image: 'https://images.unsplash.com/photo-1472396961693-142e6e269027?w=400',
      rating: 4.6,
      reviews: 156,
      category: 'mountain',
      highlights: ['Hill Stations', 'Adventure Sports', 'Snow Activities', 'Romantic Walks'],
      inclusions: ['Accommodation', 'Meals', 'Transfers', 'Sightseeing'],
      itinerary: [
        'Day 1-2: Shimla - Mall Road, Ridge, Kufri',
        'Day 3-4: Manali - Solang Valley, Rohtang Pass',
        'Day 5: Kullu - River rafting, Local markets',
        'Day 6: Departure'
      ]
    }
  ];

  const categories = [
    { id: 'all', name: 'All Packages', icon: Heart },
    { id: 'beach', name: 'Beach', icon: MapPin },
    { id: 'mountain', name: 'Mountain', icon: MapPin },
    { id: 'heritage', name: 'Heritage', icon: MapPin },
    { id: 'nature', name: 'Nature', icon: MapPin }
  ];

  const filteredPackages = activeCategory === 'all' 
    ? packages 
    : packages.filter(pkg => pkg.category === activeCategory);

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-pink-500 to-red-500 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6">Honeymoon Packages</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Create magical memories with our romantic honeymoon destinations and experiences
          </p>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 bg-white shadow-sm">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => {
              const IconComponent = category.icon;
              return (
                <Button
                  key={category.id}
                  variant={activeCategory === category.id ? "default" : "outline"}
                  onClick={() => setActiveCategory(category.id)}
                  className="px-6 py-2"
                >
                  <IconComponent className="w-4 h-4 mr-2" />
                  {category.name}
                </Button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Packages Grid */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPackages.map((pkg) => (
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
                  <div className="absolute top-4 left-4 bg-pink-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
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
                        <span key={index} className="text-xs bg-pink-100 text-pink-800 px-2 py-1 rounded">
                          {highlight}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <span className="text-2xl font-bold text-green-600">{pkg.price}</span>
                      <span className="text-sm text-gray-500 line-through ml-2">{pkg.originalPrice}</span>
                      <p className="text-xs text-gray-500">per couple</p>
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
                        className="flex-1 bg-gradient-to-r from-pink-500 to-red-500 hover:from-pink-600 hover:to-red-600"
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

export default Honeymoon;
