import React, { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Star, Quote, ThumbsUp, Calendar, MapPin } from 'lucide-react';
import EnquiryModal from '@/components/EnquiryModal';
const TestimonialsPage = () => {
  const [showEnquiry, setShowEnquiry] = useState(false);
  const [activeCategory, setActiveCategory] = useState('all');
  const testimonials = [{
    id: 1,
    name: 'Priya & Rohit Sharma',
    location: 'Mumbai',
    rating: 5,
    date: '2024-01-15',
    category: 'honeymoon',
    package: 'Kerala Honeymoon Package',
    text: 'Our honeymoon in Kerala was absolutely magical! The houseboat experience in Alleppey was beyond our expectations. Om Tours took care of every detail, from romantic dinners to couple spa sessions. The tea plantation visit in Munnar was breathtaking. Thank you for making our honeymoon so special!',
    image: 'https://images.unsplash.com/photo-1494790108755-2616c06e8c5b?w=400',
    verified: true
  }, {
    id: 2,
    name: 'Rajesh Gupta Family',
    location: 'Delhi',
    rating: 5,
    date: '2024-01-12',
    category: 'family',
    package: 'Golden Triangle Tour',
    text: 'Amazing family trip! Our kids were fascinated by the Taj Mahal and the guides were excellent in explaining the history. The arrangements were perfect - comfortable hotels, timely transfers, and delicious food. Om Tours made our family vacation stress-free and memorable.',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400',
    verified: true
  }, {
    id: 3,
    name: 'Anjali & Vikram',
    location: 'Bangalore',
    rating: 5,
    date: '2024-01-10',
    category: 'luxury',
    package: 'Rajasthan Royal Experience',
    text: 'The palace hotels in Rajasthan were absolutely stunning! We felt like royalty throughout our trip. The cultural performances, camel safari in Jaisalmer, and the romantic dinner at City Palace in Udaipur were highlights. Exceptional service and attention to detail.',
    image: 'https://images.unsplash.com/photo-1521119989659-a83eee488004?w=400',
    verified: true
  }, {
    id: 4,
    name: 'Dr. Mehta & Team',
    location: 'Ahmedabad',
    rating: 5,
    date: '2024-01-08',
    category: 'corporate',
    package: 'Corporate Retreat - Goa',
    text: 'Excellent corporate travel services! They handled our team retreat to Goa perfectly. The team building activities were engaging, the conference facilities were top-notch, and the gala dinner by the beach was spectacular. Our entire team loved the experience.',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400',
    verified: true
  }, {
    id: 5,
    name: 'Suresh & Kavita',
    location: 'Chennai',
    rating: 5,
    date: '2024-01-05',
    category: 'adventure',
    package: 'Ladakh Adventure Tour',
    text: 'What an incredible adventure! The bike ride through the highest motorable roads, camping under the stars at Pangong Lake, and visiting ancient monasteries - everything was perfectly organized. The guides were experienced and safety was their top priority.',
    image: 'https://images.unsplash.com/photo-1433086966358-54859d0ed716?w=400',
    verified: true
  }, {
    id: 6,
    name: 'Mrs. Patel',
    location: 'Pune',
    rating: 5,
    date: '2024-01-03',
    category: 'wildlife',
    package: 'Tiger Safari - Ranthambore',
    text: 'Amazing wildlife experience! We spotted tigers on our very first safari and the naturalist was extremely knowledgeable. The resort was comfortable and the food was excellent. Perfect arrangement for nature lovers. Highly recommended!',
    image: 'https://images.unsplash.com/photo-1584464491033-06628f3a6b7b?w=400',
    verified: true
  }, {
    id: 7,
    name: 'Kumar Family',
    location: 'Hyderabad',
    rating: 4,
    date: '2024-01-01',
    category: 'international',
    package: 'Europe Grand Tour',
    text: 'Wonderful European adventure! Visiting Paris, Rome, and Switzerland was a dream come true. The itinerary was well-planned, hotels were comfortable, and the local guides were fantastic. Only minor issue was some rushed sightseeing, but overall excellent experience.',
    image: 'https://images.unsplash.com/photo-1467269204594-9661b134dd2b?w=400',
    verified: true
  }, {
    id: 8,
    name: 'Deepak & Friends',
    location: 'Kolkata',
    rating: 5,
    date: '2023-12-28',
    category: 'adventure',
    package: 'Manali Adventure Package',
    text: 'Epic adventure trip with friends! River rafting, paragliding, and trekking were so well organized. The stay at the mountain resort was cozy and the bonfire nights were memorable. Great value for money and excellent coordination.',
    image: 'https://images.unsplash.com/photo-1472396961693-142e6e269027?w=400',
    verified: true
  }];
  const categories = [{
    id: 'all',
    name: 'All Reviews'
  }, {
    id: 'honeymoon',
    name: 'Honeymoon'
  }, {
    id: 'family',
    name: 'Family'
  }, {
    id: 'luxury',
    name: 'Luxury'
  }, {
    id: 'corporate',
    name: 'Corporate'
  }, {
    id: 'adventure',
    name: 'Adventure'
  }, {
    id: 'wildlife',
    name: 'Wildlife'
  }, {
    id: 'international',
    name: 'International'
  }];
  const filteredTestimonials = activeCategory === 'all' ? testimonials : testimonials.filter(testimonial => testimonial.category === activeCategory);
  const averageRating = testimonials.reduce((sum, t) => sum + t.rating, 0) / testimonials.length;
  return <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-yellow-500 to-orange-500 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <Quote className="w-16 h-16 mx-auto mb-6" />
          <h1 className="text-5xl font-bold mb-6">What Our Travelers Say</h1>
          <p className="text-xl max-w-3xl mx-auto mb-8">
            Read genuine reviews from our satisfied customers who have experienced unforgettable journeys with us
          </p>
          <div className="flex justify-center items-center gap-4">
            <div className="flex items-center">
              <div className="flex text-yellow-300">
                {[...Array(5)].map((_, i) => <Star key={i} className="w-6 h-6 fill-current" />)}
              </div>
              <span className="ml-2 text-2xl font-bold">{averageRating.toFixed(1)}</span>
            </div>
            <span className="text-lg">Based on {testimonials.length} reviews</span>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-blue-600 mb-2">500+</div>
              <div className="text-gray-600">Happy Customers</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-green-600 mb-2">4.8</div>
              <div className="text-gray-600">Average Rating</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-orange-600 mb-2">98%</div>
              <div className="text-gray-600">Satisfaction Rate</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-purple-600 mb-2">15+</div>
              <div className="text-gray-600">Years Experience</div>
            </div>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 bg-gray-50 border-b">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map(category => <Button key={category.id} variant={activeCategory === category.id ? "default" : "outline"} onClick={() => setActiveCategory(category.id)} className="px-6 py-2">
                {category.name}
              </Button>)}
          </div>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredTestimonials.map(testimonial => <Card key={testimonial.id} className="hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex text-yellow-400">
                      {[...Array(testimonial.rating)].map((_, i) => <Star key={i} className="w-4 h-4 fill-current" />)}
                    </div>
                    {testimonial.verified && <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">
                        Verified
                      </span>}
                  </div>
                  
                  <Quote className="w-8 h-8 text-blue-400 mb-3" />
                  
                  <p className="text-gray-700 mb-4 italic">"{testimonial.text}"</p>
                  
                  <div className="border-t pt-4">
                    <div className="flex items-center mb-2">
                      <img src={testimonial.image} alt={testimonial.name} className="w-12 h-12 rounded-full object-cover mr-3" />
                      <div>
                        <h4 className="font-semibold text-gray-800">{testimonial.name}</h4>
                        <div className="flex items-center text-sm text-gray-500">
                          <MapPin className="w-3 h-3 mr-1" />
                          {testimonial.location}
                        </div>
                      </div>
                    </div>
                    
                    <div className="text-sm text-gray-600 mt-2">
                      <div className="font-medium">{testimonial.package}</div>
                      <div className="flex items-center mt-1">
                        <Calendar className="w-3 h-3 mr-1" />
                        {new Date(testimonial.date).toLocaleDateString()}
                      </div>
                    </div>
                  </div>
                  
                  <Button variant="ghost" size="sm" className="mt-4 w-full">
                    <ThumbsUp className="w-4 h-4 mr-2" />
                    Helpful Review
                  </Button>
                </CardContent>
              </Card>)}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Create Your Own Story?</h2>
          <p className="text-xl mb-8">Join hundreds of satisfied travelers and experience the difference</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100" onClick={() => setShowEnquiry(true)}>
              Plan Your Trip
            </Button>
            <Button size="lg" variant="outline" className="border-white hover:bg-white text-zinc-950">
              View Packages
            </Button>
          </div>
        </div>
      </section>

      <Footer />
      
      {showEnquiry && <EnquiryModal onClose={() => setShowEnquiry(false)} />}
    </div>;
};
export default TestimonialsPage;