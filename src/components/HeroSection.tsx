import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { MapPin, Calendar, Star, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
interface HeroSectionProps {
  onEnquireClick?: () => void;
}
const HeroSection: React.FC<HeroSectionProps> = ({
  onEnquireClick
}) => {
  const featuredDestinations = [{
    name: 'Goa Beach Paradise',
    location: 'Goa, India',
    price: '₹25,000',
    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400',
    rating: 4.8,
    duration: '5 Days'
  }, {
    name: 'Kashmir Valley Tour',
    location: 'Srinagar, Kashmir',
    price: '₹35,000',
    image: 'https://images.unsplash.com/photo-1433086966358-54859d0ed716?w=400',
    rating: 4.9,
    duration: '6 Days'
  }, {
    name: 'Rajasthan Heritage',
    location: 'Jaipur, Rajasthan',
    price: '₹45,000',
    image: 'https://images.unsplash.com/photo-1466442929976-97f336a657be?w=400',
    rating: 4.7,
    duration: '7 Days'
  }];
  return <section className="relative h-screen bg-cover bg-center" style={{
    backgroundImage: 'url(https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=1920)'
  }}>
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      <div className="relative container mx-auto px-4 h-full">
        <div className="flex items-center h-full">
          <div className="w-full lg:w-1/2 text-white">
            <h1 className="text-5xl lg:text-6xl font-bold mb-6">
              Discover Your Next
              <span className="text-orange-400"> Adventure</span>
            </h1>
            <p className="text-xl mb-8 max-w-lg">
              From exotic beaches to majestic mountains, create unforgettable memories with our carefully crafted travel experiences.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/packages">
                <Button size="lg" className="bg-gradient-to-r from-blue-600 to-orange-500 hover:from-blue-700 hover:to-orange-600">
                  View All Packages
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
              <Button size="lg" variant="outline" onClick={onEnquireClick} className="border-white bg-zinc-300 hover:bg-zinc-400 text-zinc-950">
                Enquire Now
              </Button>
            </div>
          </div>
        </div>

        {/* Featured Destinations Cards */}
        <div className="absolute bottom-8 left-4 right-4">
          
        </div>
      </div>
    </section>;
};
export default HeroSection;