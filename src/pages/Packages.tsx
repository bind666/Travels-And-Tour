
import React, { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { MapPin, Calendar, Users, Star } from 'lucide-react';

const Packages = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const packages = [
    {
      id: 1,
      name: 'Golden Triangle Tour',
      category: 'domestic',
      duration: '6 Days / 5 Nights',
      price: '₹25,000',
      image: 'https://images.unsplash.com/photo-1564507592333-c60657eea523?w=400',
      location: 'Delhi - Agra - Jaipur',
      rating: 4.8,
      highlights: ['Taj Mahal Visit', 'Red Fort', 'Hawa Mahal']
    },
    {
      id: 2,
      name: 'Kerala Backwaters',
      category: 'domestic',
      duration: '5 Days / 4 Nights',
      price: '₹35,000',
      image: 'https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?w=400',
      location: 'Kochi - Alleppey - Munnar',
      rating: 4.9,
      highlights: ['Houseboat Stay', 'Tea Gardens', 'Spice Plantations']
    },
    {
      id: 3,
      name: 'Europe Delight',
      category: 'international',
      duration: '10 Days / 9 Nights',
      price: '₹1,25,000',
      image: 'https://images.unsplash.com/photo-1467269204594-9661b134dd2b?w=400',
      location: 'Paris - Rome - Amsterdam',
      rating: 4.7,
      highlights: ['Eiffel Tower', 'Colosseum', 'Canal Cruise']
    },
    {
      id: 4,
      name: 'Maldives Paradise',
      category: 'honeymoon',
      duration: '4 Days / 3 Nights',
      price: '₹85,000',
      image: 'https://images.unsplash.com/photo-1573843981267-be1999ff37cd?w=400',
      location: 'Male - Resort Island',
      rating: 4.9,
      highlights: ['Overwater Villa', 'Private Beach', 'Couples Spa']
    },
    {
      id: 5,
      name: 'Himachal Adventure',
      category: 'adventure',
      duration: '7 Days / 6 Nights',
      price: '₹40,000',
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400',
      location: 'Manali - Rohtang - Solang',
      rating: 4.6,
      highlights: ['Paragliding', 'River Rafting', 'Mountain Trekking']
    },
    {
      id: 6,
      name: 'Dubai Luxury',
      category: 'international',
      duration: '5 Days / 4 Nights',
      price: '₹75,000',
      image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=400',
      location: 'Dubai - Abu Dhabi',
      rating: 4.8,
      highlights: ['Burj Khalifa', 'Desert Safari', 'Luxury Shopping']
    }
  ];

  const categories = [
    { id: 'all', name: 'All Packages' },
    { id: 'domestic', name: 'Domestic' },
    { id: 'international', name: 'International' },
    { id: 'honeymoon', name: 'Honeymoon' },
    { id: 'adventure', name: 'Adventure' }
  ];

  const filteredPackages = activeCategory === 'all' 
    ? packages 
    : packages.filter(pkg => pkg.category === activeCategory);

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-600 to-orange-500 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6">Holiday Packages</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Discover our carefully curated travel packages designed to give you the perfect vacation experience
          </p>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 bg-white shadow-sm">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <Button
                key={category.id}
                variant={activeCategory === category.id ? "default" : "outline"}
                onClick={() => setActiveCategory(category.id)}
                className="px-6 py-2"
              >
                {category.name}
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
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-2">{pkg.name}</h3>
                  <div className="flex items-center text-gray-600 mb-2">
                    <MapPin className="w-4 h-4 mr-1" />
                    <span className="text-sm">{pkg.location}</span>
                  </div>
                  <div className="flex items-center text-gray-600 mb-4">
                    <Calendar className="w-4 h-4 mr-1" />
                    <span className="text-sm">{pkg.duration}</span>
                  </div>
                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-800 mb-2">Highlights:</h4>
                    <ul className="text-sm text-gray-600">
                      {pkg.highlights.map((highlight, index) => (
                        <li key={index} className="flex items-center mb-1">
                          <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                          {highlight}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-sm text-gray-600">Starting from</span>
                      <div className="text-2xl font-bold text-blue-600">{pkg.price}</div>
                    </div>
                    <div className="space-x-2">
                      <Button variant="outline" size="sm">View Details</Button>
                      <Button size="sm">Send Enquiry</Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Packages;
