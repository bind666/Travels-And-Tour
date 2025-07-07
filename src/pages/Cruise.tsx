
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Ship, Anchor, Waves, Star, MapPin, Calendar } from 'lucide-react';

const Cruise = () => {
  const featuredCruises = [
    {
      id: 1,
      name: 'Mediterranean Splendor',
      operator: 'Royal Caribbean',
      price: '₹1,85,000',
      duration: '7 Nights',
      image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=600',
      ports: ['Barcelona', 'Rome', 'Naples', 'Monaco'],
      ship: 'Harmony of the Seas',
      rating: 4.8
    },
    {
      id: 2,
      name: 'Caribbean Paradise',
      operator: 'MSC Cruises',
      price: '₹1,45,000',
      duration: '8 Nights',
      image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600',
      ports: ['Miami', 'Cozumel', 'Jamaica', 'Bahamas'],
      ship: 'MSC Seaside',
      rating: 4.7
    },
    {
      id: 3,
      name: 'Norwegian Fjords',
      operator: 'Norwegian Cruise Line',
      price: '₹2,25,000',
      duration: '10 Nights',
      image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=600',
      ports: ['Bergen', 'Geiranger', 'Flam', 'Stavanger'],
      ship: 'Norwegian Epic',
      rating: 4.9
    }
  ];

  const cruiseOperators = [
    {
      name: 'Royal Caribbean',
      logo: '🚢',
      description: 'World\'s largest cruise ships with innovative features',
      ships: 28,
      destinations: 300
    },
    {
      name: 'MSC Cruises',
      logo: '⚓',
      description: 'Mediterranean-style cruising with Italian hospitality',
      ships: 22,
      destinations: 200
    },
    {
      name: 'Norwegian Cruise Line',
      logo: '🛳️',
      description: 'Freestyle cruising with no formal dress codes',
      ships: 17,
      destinations: 430
    },
    {
      name: 'Celebrity Cruises',
      logo: '🌊',
      description: 'Modern luxury with award-winning dining',
      ships: 14,
      destinations: 280
    }
  ];

  const cruiseFeatures = [
    {
      icon: Ship,
      title: 'Luxury Ships',
      description: 'State-of-the-art vessels with world-class amenities'
    },
    {
      icon: Anchor,
      title: 'Multiple Ports',
      description: 'Visit multiple destinations in one seamless journey'
    },
    {
      icon: Waves,
      title: 'All-Inclusive',
      description: 'Dining, entertainment, and accommodations included'
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="relative h-screen bg-cover bg-center" style={{backgroundImage: 'url(https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=1920)'}}>
        <div className="absolute inset-0 bg-blue-900 bg-opacity-50"></div>
        <div className="relative container mx-auto px-4 h-full flex items-center">
          <div className="text-white max-w-3xl">
            <h1 className="text-6xl font-bold mb-6">Cruise Holidays</h1>
            <p className="text-xl mb-8">
              Sail away on the vacation of a lifetime. Discover multiple destinations while enjoying 
              world-class dining, entertainment, and luxury accommodations aboard the finest cruise ships.
            </p>
            <Button size="lg" className="bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600">
              Explore Cruises
            </Button>
          </div>
        </div>
      </section>

      {/* Featured Cruises */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Featured Cruises</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Discover our most popular cruise destinations and experiences
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {featuredCruises.map((cruise) => (
              <Card key={cruise.id} className="overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div className="relative">
                  <img
                    src={cruise.image}
                    alt={cruise.name}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute top-4 right-4 bg-white px-2 py-1 rounded-full flex items-center">
                    <Star className="w-4 h-4 text-yellow-400 fill-current mr-1" />
                    <span className="text-sm font-semibold">{cruise.rating}</span>
                  </div>
                  <div className="absolute bottom-4 left-4 bg-blue-600 text-white px-3 py-1 rounded">
                    <span className="text-sm font-semibold">{cruise.operator}</span>
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-2">{cruise.name}</h3>
                  <div className="flex items-center text-gray-600 mb-2">
                    <Ship className="w-4 h-4 mr-1" />
                    <span className="text-sm">{cruise.ship}</span>
                  </div>
                  <div className="flex items-center text-gray-600 mb-4">
                    <Calendar className="w-4 h-4 mr-1" />
                    <span className="text-sm">{cruise.duration}</span>
                  </div>
                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-800 mb-2">Ports of Call:</h4>
                    <div className="flex flex-wrap gap-1">
                      {cruise.ports.map((port, index) => (
                        <span key={index} className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs">
                          {port}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-sm text-gray-600">Starting from</span>
                      <div className="text-2xl font-bold text-blue-600">{cruise.price}</div>
                    </div>
                    <Button className="bg-blue-600 hover:bg-blue-700">
                      Book Now
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Cruise Features */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Why Choose Cruise Holidays?</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {cruiseFeatures.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                  <CardContent className="p-8">
                    <div className="bg-blue-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-800 mb-4">{feature.title}</h3>
                    <p className="text-gray-600">{feature.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Cruise Operators */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Our Cruise Partners</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We partner with the world's leading cruise lines to bring you the best experiences
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {cruiseOperators.map((operator, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="text-4xl mb-4">{operator.logo}</div>
                  <h3 className="text-lg font-bold text-gray-800 mb-2">{operator.name}</h3>
                  <p className="text-sm text-gray-600 mb-4">{operator.description}</p>
                  <div className="grid grid-cols-2 gap-4 text-center">
                    <div>
                      <div className="text-xl font-bold text-blue-600">{operator.ships}</div>
                      <div className="text-xs text-gray-500">Ships</div>
                    </div>
                    <div>
                      <div className="text-xl font-bold text-blue-600">{operator.destinations}</div>
                      <div className="text-xs text-gray-500">Destinations</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-cyan-500 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Set Sail?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Contact our cruise specialists to find the perfect cruise for your next vacation
          </p>
          <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
            Get Cruise Enquiry
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Cruise;
