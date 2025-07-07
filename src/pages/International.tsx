
import React, { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { MapPin, Calendar, Users, Star, Plane } from 'lucide-react';
import PackageModal from '@/components/PackageModal';
import EnquiryModal from '@/components/EnquiryModal';

const International = () => {
  const [selectedPackage, setSelectedPackage] = useState(null);
  const [showEnquiry, setShowEnquiry] = useState(false);
  const [activeRegion, setActiveRegion] = useState('all');

  const packages = [
    {
      id: 1,
      name: 'Europe Grand Tour',
      region: 'europe',
      countries: 'France - Italy - Germany - Switzerland',
      duration: '12 Days / 11 Nights',
      price: '₹1,85,000',
      originalPrice: '₹2,25,000',
      image: 'https://images.unsplash.com/photo-1467269204594-9661b134dd2b?w=400',
      rating: 4.8,
      highlights: ['Eiffel Tower', 'Colosseum', 'Swiss Alps', 'Rhine Valley'],
      inclusions: ['Flight', 'Hotels', 'Meals', 'Transfers', 'Sightseeing'],
      itinerary: [
        'Day 1-3: Paris - City tour, Eiffel Tower, Louvre',
        'Day 4-6: Rome - Colosseum, Vatican, Trevi Fountain',
        'Day 7-9: Switzerland - Alps, Jungfraujoch',
        'Day 10-12: Germany - Berlin, Munich'
      ]
    },
    {
      id: 2,
      name: 'Southeast Asia Explorer',
      region: 'asia',
      countries: 'Thailand - Singapore - Malaysia',
      duration: '8 Days / 7 Nights',
      price: '₹95,000',
      originalPrice: '₹1,20,000',
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400',
      rating: 4.7,
      highlights: ['Bangkok Temples', 'Marina Bay', 'Petronas Towers', 'Island Hopping'],
      inclusions: ['Flight', 'Hotels', 'Breakfast', 'Transfers'],
      itinerary: [
        'Day 1-3: Bangkok - Grand Palace, Temples, Markets',
        'Day 4-5: Singapore - Marina Bay, Gardens by Bay',
        'Day 6-8: Kuala Lumpur - Petronas Towers, Genting'
      ]
    },
    {
      id: 3,
      name: 'USA East Coast',
      region: 'america',
      countries: 'New York - Washington DC - Boston',
      duration: '10 Days / 9 Nights',
      price: '₹2,15,000',
      originalPrice: '₹2,65,000',
      image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=400',
      rating: 4.9,
      highlights: ['Statue of Liberty', 'White House', 'Times Square', 'Harvard University'],
      inclusions: ['Flight', 'Hotels', 'Meals', 'Transfers', 'City Tours'],
      itinerary: [
        'Day 1-4: New York - Manhattan, Brooklyn, Central Park',
        'Day 5-7: Washington DC - Capitol, Smithsonian',  
        'Day 8-10: Boston - Freedom Trail, Harvard'
      ]
    },
    {
      id: 4,
      name: 'Australia & New Zealand',
      region: 'oceania',
      countries: 'Sydney - Melbourne - Auckland - Queenstown',
      duration: '14 Days / 13 Nights',
      price: '₹2,85,000',
      originalPrice: '₹3,45,000',
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400',
      rating: 4.8,
      highlights: ['Opera House', 'Great Ocean Road', 'Milford Sound', 'Adventure Sports'],
      inclusions: ['Flight', 'Hotels', 'Meals', 'Transfers', 'Activities'],
      itinerary: [
        'Day 1-4: Sydney - Harbor Bridge, Bondi Beach',
        'Day 5-7: Melbourne - Great Ocean Road',
        'Day 8-11: Auckland - Bay of Islands',
        'Day 12-14: Queenstown - Adventure activities'
      ]
    }
  ];

  const regions = [
    { id: 'all', name: 'All Destinations' },
    { id: 'europe', name: 'Europe' },
    { id: 'asia', name: 'Asia' },
    { id: 'america', name: 'Americas' },
    { id: 'oceania', name: 'Australia & NZ' }
  ];

  const filteredPackages = activeRegion === 'all' 
    ? packages 
    : packages.filter(pkg => pkg.region === activeRegion);

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-600 to-orange-500 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6">International Holiday Packages</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Explore the world with our carefully crafted international tour packages to exotic destinations
          </p>
        </div>
      </section>

      {/* Region Filter */}
      <section className="py-8 bg-white shadow-sm">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4">
            {regions.map((region) => (
              <Button
                key={region.id}
                variant={activeRegion === region.id ? "default" : "outline"}
                onClick={() => setActiveRegion(region.id)}
                className="px-6 py-2"
              >
                <Plane className="w-4 h-4 mr-2" />
                {region.name}
              </Button>
            ))}
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
                  <div className="absolute top-4 left-4 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    Save ₹{parseInt(pkg.originalPrice.replace('₹', '').replace(',', '')) - parseInt(pkg.price.replace('₹', '').replace(',', ''))}
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-2">{pkg.name}</h3>
                  <div className="flex items-center text-gray-600 mb-2">
                    <MapPin className="w-4 h-4 mr-1" />
                    <span className="text-sm">{pkg.countries}</span>
                  </div>
                  <div className="flex items-center text-gray-600 mb-4">
                    <Calendar className="w-4 h-4 mr-1" />
                    <span className="text-sm">{pkg.duration}</span>
                  </div>
                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-800 mb-2">Highlights:</h4>
                    <div className="flex flex-wrap gap-1">
                      {pkg.highlights.slice(0, 3).map((highlight, index) => (
                        <span key={index} className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded">
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
                        className="flex-1 bg-gradient-to-r from-blue-600 to-orange-500 hover:from-blue-700 hover:to-orange-600"
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

export default International;
