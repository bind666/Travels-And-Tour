import React, { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Building2, Users, Calendar, MapPin, CheckCircle, Phone } from 'lucide-react';
import EnquiryModal from '@/components/EnquiryModal';
const MICE = () => {
  const [showEnquiry, setShowEnquiry] = useState(false);
  const services = [{
    id: 1,
    title: 'Corporate Meetings',
    description: 'Professional meeting venues with state-of-the-art facilities',
    icon: Building2,
    features: ['Conference Rooms', 'Audio/Visual Equipment', 'Catering Services', 'Wi-Fi & Tech Support']
  }, {
    id: 2,
    title: 'Incentive Travel',
    description: 'Reward your team with memorable incentive trips',
    icon: Users,
    features: ['Team Building Activities', 'Luxury Accommodations', 'Unique Experiences', 'Performance Rewards']
  }, {
    id: 3,
    title: 'Conferences & Events',
    description: 'Large-scale conference and event management',
    icon: Calendar,
    features: ['Event Planning', 'Venue Management', 'Registration Services', 'Technical Support']
  }, {
    id: 4,
    title: 'Exhibitions',
    description: 'Complete exhibition and trade show solutions',
    icon: MapPin,
    features: ['Booth Design', 'Logistics Management', 'Promotional Support', 'Networking Events']
  }];
  const destinations = [{
    id: 1,
    name: 'Goa Corporate Retreat',
    description: 'Beach resort venues perfect for corporate events',
    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400',
    capacity: '50-500 people',
    facilities: ['Conference halls', 'Team building activities', 'Beach venues', 'Gala dinner setups']
  }, {
    id: 2,
    name: 'Kerala Business Tours',
    description: 'Unique backwater venues for corporate meetings',
    image: 'https://images.unsplash.com/photo-1426604966848-d7adac402bff?w=400',
    capacity: '20-200 people',
    facilities: ['Houseboat meetings', 'Resort conferences', 'Cultural programs', 'Ayurveda sessions']
  }, {
    id: 3,
    name: 'Rajasthan Royal Events',
    description: 'Palace venues for premium corporate experiences',
    image: 'https://images.unsplash.com/photo-1466442929976-97f336a657be?w=400',
    capacity: '30-300 people',
    facilities: ['Palace venues', 'Royal dining', 'Cultural entertainment', 'Heritage tours']
  }, {
    id: 4,
    name: 'Hill Station Conferences',
    description: 'Mountain retreats for focused business meetings',
    image: 'https://images.unsplash.com/photo-1472396961693-142e6e269027?w=400',
    capacity: '25-150 people',
    facilities: ['Mountain resorts', 'Adventure activities', 'Peaceful environment', 'Team challenges']
  }];
  return <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-purple-600 to-blue-600 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6">MICE & Corporate Travel</h1>
          <p className="text-xl max-w-3xl mx-auto mb-8">
            Professional corporate travel solutions for meetings, incentives, conferences, and exhibitions
          </p>
          <Button size="lg" className="bg-white text-purple-600 hover:bg-gray-100" onClick={() => setShowEnquiry(true)}>
            Get Quote
          </Button>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Our MICE Services</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Comprehensive corporate travel and event management solutions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map(service => {
            const IconComponent = service.icon;
            return <Card key={service.id} className="text-center hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="w-16 h-16 mx-auto mb-4 bg-purple-100 rounded-full flex items-center justify-center">
                      <IconComponent className="w-8 h-8 text-purple-600" />
                    </div>
                    <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                    <p className="text-gray-600 mb-4">{service.description}</p>
                    <ul className="space-y-2">
                      {service.features.map((feature, index) => <li key={index} className="flex items-center text-sm">
                          <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                          {feature}
                        </li>)}
                    </ul>
                  </CardContent>
                </Card>;
          })}
          </div>
        </div>
      </section>

      {/* Destinations Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Corporate Destinations</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Premium venues and destinations for your corporate events
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {destinations.map(destination => <Card key={destination.id} className="overflow-hidden hover:shadow-xl transition-shadow">
                <img src={destination.image} alt={destination.name} className="w-full h-48 object-cover" />
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-2">{destination.name}</h3>
                  <p className="text-gray-600 mb-3">{destination.description}</p>
                  <div className="flex items-center text-sm text-gray-500 mb-4">
                    <Users className="w-4 h-4 mr-1" />
                    <span>{destination.capacity}</span>
                  </div>
                  <div className="space-y-1 mb-4">
                    {destination.facilities.slice(0, 3).map((facility, index) => <div key={index} className="flex items-center text-sm">
                        <CheckCircle className="w-3 h-3 text-green-500 mr-2" />
                        {facility}
                      </div>)}
                  </div>
                  <Button className="w-full" onClick={() => setShowEnquiry(true)}>
                    Get Quote
                  </Button>
                </CardContent>
              </Card>)}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Why Choose Om Tours for MICE</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-blue-100 rounded-full flex items-center justify-center">
                <CheckCircle className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold mb-2">Professional Expertise</h3>
              <p className="text-gray-600">15+ years of experience in corporate travel and event management</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-green-100 rounded-full flex items-center justify-center">
                <Users className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-bold mb-2">Dedicated Support</h3>
              <p className="text-gray-600">24/7 support team to ensure smooth execution of your events</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-purple-100 rounded-full flex items-center justify-center">
                <Building2 className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold mb-2">Custom Solutions</h3>
              <p className="text-gray-600">Tailored packages to meet your specific corporate requirements</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-purple-600 to-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Plan Your Corporate Event?</h2>
          <p className="text-xl mb-8">Contact our MICE specialists for a customized proposal</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-purple-600 hover:bg-gray-100" onClick={() => setShowEnquiry(true)}>
              Send Enquiry
            </Button>
            <Button size="lg" variant="outline" className="border-white hover:bg-white text-zinc-950">
              <Phone className="w-4 h-4 mr-2" />
              Call Now: +91 98765 43210
            </Button>
          </div>
        </div>
      </section>

      <Footer />
      
      {showEnquiry && <EnquiryModal onClose={() => setShowEnquiry(false)} />}
    </div>;
};
export default MICE;