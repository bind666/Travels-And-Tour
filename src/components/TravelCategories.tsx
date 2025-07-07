
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Plane, Mountain, Ship, Camera, Heart, Building2 } from 'lucide-react';
import { Link } from 'react-router-dom';

const TravelCategories = () => {
  const categories = [
    {
      id: 1,
      name: 'International Tours',
      description: 'Explore the world with our curated international packages',
      icon: Plane,
      color: 'from-blue-500 to-blue-600',
      link: '/international'
    },
    {
      id: 2,
      name: 'Adventure Tours',
      description: 'Thrilling adventures and outdoor experiences',
      icon: Mountain,
      color: 'from-green-500 to-green-600',
      link: '/wildlife'
    },
    {
      id: 3,
      name: 'Cruise Holidays',
      description: 'Luxury cruise experiences across beautiful waters',
      icon: Ship,
      color: 'from-cyan-500 to-cyan-600',
      link: '/cruise'
    },
    {
      id: 4,
      name: 'Wildlife Tours',
      description: 'Get close to nature with our wildlife safaris',
      icon: Camera,
      color: 'from-amber-500 to-amber-600',
      link: '/wildlife'
    },
    {
      id: 5,
      name: 'Honeymoon Packages',
      description: 'Romantic getaways for couples',
      icon: Heart,
      color: 'from-pink-500 to-pink-600',
      link: '/honeymoon'
    },
    {
      id: 6,
      name: 'Corporate Travel',
      description: 'Professional travel solutions for businesses',
      icon: Building2,
      color: 'from-purple-500 to-purple-600',
      link: '/mice'
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Travel Categories</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Choose from our diverse range of travel experiences tailored to your preferences
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category) => {
            const IconComponent = category.icon;
            return (
              <Card key={category.id} className="group hover:shadow-xl transition-all duration-300 cursor-pointer">
                <CardContent className="p-6 text-center">
                  <div className={`w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-r ${category.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">{category.name}</h3>
                  <p className="text-gray-600 mb-4">{category.description}</p>
                  <Link to={category.link}>
                    <Button variant="outline" className="group-hover:bg-blue-50 transition-colors">
                      Explore More
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default TravelCategories;
