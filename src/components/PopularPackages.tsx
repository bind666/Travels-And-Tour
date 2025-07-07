
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { MapPin, Calendar, Users, Star, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import PackageModal from '@/components/PackageModal';
import EnquiryModal from '@/components/EnquiryModal';

const PopularPackages = () => {
  const [selectedPackage, setSelectedPackage] = useState(null);
  const [showEnquiry, setShowEnquiry] = useState(false);

  const packages = [
    {
      id: 1,
      name: 'Golden Triangle Classic',
      destination: 'Delhi - Agra - Jaipur',
      duration: '6 Days / 5 Nights',
      price: '₹25,000',
      originalPrice: '₹35,000',
      image: 'https://images.unsplash.com/photo-1564507592333-c60657eea523?w=400',
      rating: 4.8,
      reviews: 124,
      highlights: ['Taj Mahal', 'Red Fort', 'Hawa Mahal', 'City Palace'],
      inclusions: ['Accommodation', 'Meals', 'Transfers', 'Guide'],
      itinerary: [
        'Day 1: Arrival in Delhi, Red Fort visit',
        'Day 2-3: Delhi to Agra, Taj Mahal tour',
        'Day 4-5: Agra to Jaipur, City Palace',
        'Day 6: Departure from Jaipur'
      ]
    },
    {
      id: 2,
      name: 'Kerala Backwaters',
      destination: 'Cochin - Munnar - Alleppey',
      duration: '7 Days / 6 Nights',
      price: '₹45,000',
      originalPrice: '₹55,000',
      image: 'https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?w=400',
      rating: 4.9,
      reviews: 89,
      highlights: ['Houseboat', 'Tea Gardens', 'Spice Plantation', 'Backwaters'],
      inclusions: ['Accommodation', 'Meals', 'Houseboat', 'Transfers'],
      itinerary: [
        'Day 1: Arrival in Cochin',
        'Day 2-3: Munnar tea gardens',
        'Day 4-6: Alleppey houseboat experience',
        'Day 7: Departure'
      ]
    },
    {
      id: 3,
      name: 'Himachal Adventure',
      destination: 'Shimla - Manali - Dharamshala',
      duration: '8 Days / 7 Nights',
      price: '₹38,000',
      originalPrice: '₹48,000',
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400',
      rating: 4.7,
      reviews: 156,
      highlights: ['Mountain Views', 'Adventure Sports', 'Snow Activities', 'Hill Stations'],
      inclusions: ['Accommodation', 'Meals', 'Adventure Activities', 'Transfers'],
      itinerary: [
        'Day 1-2: Shimla sightseeing',
        'Day 3-5: Manali adventure activities',
        'Day 6-7: Dharamshala monastery visits',
        'Day 8: Departure'
      ]
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Popular Holiday Packages</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Discover our most loved destinations with specially crafted itineraries
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
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
                <div className="absolute top-4 left-4 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
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

        <div className="text-center">
          <Link to="/packages">
            <Button size="lg" className="bg-gradient-to-r from-blue-600 to-orange-500 hover:from-blue-700 hover:to-orange-600">
              View All Packages
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </Link>
        </div>
      </div>

      {selectedPackage && (
        <PackageModal 
          package={selectedPackage} 
          onClose={() => setSelectedPackage(null)} 
        />
      )}
      
      {showEnquiry && (
        <EnquiryModal onClose={() => setShowEnquiry(false)} />
      )}
    </section>
  );
};

export default PopularPackages;
