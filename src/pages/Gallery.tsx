
import React, { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent } from '@/components/ui/dialog';
import { Camera, MapPin, X } from 'lucide-react';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [activeCategory, setActiveCategory] = useState('all');

  const images = [
    {
      id: 1,
      src: 'https://images.unsplash.com/photo-1500375592092-40eb2168fd21?w=800',
      thumbnail: 'https://images.unsplash.com/photo-1500375592092-40eb2168fd21?w=400',
      title: 'Taj Mahal at Sunrise',
      location: 'Agra, India',
      category: 'heritage'
    },
    {
      id: 2,
      src: 'https://images.unsplash.com/photo-1426604966848-d7adac402bff?w=800',
      thumbnail: 'https://images.unsplash.com/photo-1426604966848-d7adac402bff?w=400',
      title: 'Kerala Backwaters',
      location: 'Alleppey, Kerala',
      category: 'nature'
    },
    {
      id: 3,
      src: 'https://images.unsplash.com/photo-1472396961693-142e6e269027?w=800',
      thumbnail: 'https://images.unsplash.com/photo-1472396961693-142e6e269027?w=400',
      title: 'Himalayan Peaks',
      location: 'Ladakh, India',
      category: 'adventure'
    },
    {
      id: 4,
      src: 'https://images.unsplash.com/photo-1466442929976-97f336a657be?w=800',
      thumbnail: 'https://images.unsplash.com/photo-1466442929976-97f336a657be?w=400',
      title: 'Rajasthan Palace',
      location: 'Udaipur, Rajasthan',
      category: 'heritage'
    },
    {
      id: 5,
      src: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800',
      thumbnail: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400',
      title: 'Goa Beach Sunset',
      location: 'Goa, India',
      category: 'beach'
    },
    {
      id: 6,
      src: 'https://images.unsplash.com/photo-1433086966358-54859d0ed716?w=800',
      thumbnail: 'https://images.unsplash.com/photo-1433086966358-54859d0ed716?w=400',
      title: 'Kashmir Valley',
      location: 'Srinagar, Kashmir',
      category: 'nature'
    },
    {
      id: 7,
      src: 'https://images.unsplash.com/photo-1467269204594-9661b134dd2b?w=800',
      thumbnail: 'https://images.unsplash.com/photo-1467269204594-9661b134dd2b?w=400',
      title: 'Swiss Alps Adventure',
      location: 'Switzerland',
      category: 'adventure'
    },
    {
      id: 8,
      src: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=800',
      thumbnail: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=400',
      title: 'New York Skyline',
      location: 'New York, USA',
      category: 'international'
    },
    {
      id: 9,
      src: 'https://images.unsplash.com/photo-1494790108755-2616c06e8c5b?w=800',
      thumbnail: 'https://images.unsplash.com/photo-1494790108755-2616c06e8c5b?w=400',
      title: 'Wildlife Safari',
      location: 'Ranthambore, India',
      category: 'wildlife'
    },
    {
      id: 10,
      src: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800',
      thumbnail: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400',
      title: 'Tiger Spotting',
      location: 'Bandhavgarh, India',
      category: 'wildlife'
    },
    {
      id: 11,
      src: 'https://images.unsplash.com/photo-1521119989659-a83eee488004?w=800',
      thumbnail: 'https://images.unsplash.com/photo-1521119989659-a83eee488004?w=400',
      title: 'Romantic Beach',
      location: 'Maldives',
      category: 'beach'
    },
    {
      id: 12,
      src: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=800',
      thumbnail: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400',
      title: 'Corporate Event',
      location: 'Mumbai, India',
      category: 'corporate'
    }
  ];

  const categories = [
    { id: 'all', name: 'All Photos' },
    { id: 'heritage', name: 'Heritage' },
    { id: 'nature', name: 'Nature' },
    { id: 'adventure', name: 'Adventure' },
    { id: 'beach', name: 'Beaches' },
    { id: 'wildlife', name: 'Wildlife' },
    { id: 'international', name: 'International' },
    { id: 'corporate', name: 'Corporate' }
  ];

  const filteredImages = activeCategory === 'all' 
    ? images 
    : images.filter(img => img.category === activeCategory);

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-teal-600 to-green-600 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <Camera className="w-16 h-16 mx-auto mb-6" />
          <h1 className="text-5xl font-bold mb-6">Travel Gallery</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Explore stunning destinations through our lens and get inspired for your next journey
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

      {/* Image Gallery */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {filteredImages.map((image) => (
              <div
                key={image.id}
                className="group relative overflow-hidden rounded-lg cursor-pointer hover:shadow-xl transition-all duration-300"
                onClick={() => setSelectedImage(image)}
              >
                <img
                  src={image.thumbnail}
                  alt={image.title}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-all duration-300 flex items-end">
                  <div className="p-4 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    <h3 className="font-bold text-lg">{image.title}</h3>
                    <div className="flex items-center text-sm">
                      <MapPin className="w-4 h-4 mr-1" />
                      {image.location}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Image Modal */}
      {selectedImage && (
        <Dialog open={true} onOpenChange={() => setSelectedImage(null)}>
          <DialogContent className="max-w-4xl w-full p-0">
            <div className="relative">
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 z-10 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75 transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
              <img
                src={selectedImage.src}
                alt={selectedImage.title}
                className="w-full h-auto max-h-[80vh] object-contain"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-75 text-white p-6">
                <h3 className="text-2xl font-bold mb-2">{selectedImage.title}</h3>
                <div className="flex items-center">
                  <MapPin className="w-5 h-5 mr-2" />
                  <span className="text-lg">{selectedImage.location}</span>
                </div>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      )}

      <Footer />
    </div>
  );
};

export default Gallery;
