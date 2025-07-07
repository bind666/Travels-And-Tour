
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Star, Quote } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: 'Priya Sharma',
      location: 'Mumbai',
      rating: 5,
      text: 'Om Tours made our Kerala trip absolutely magical! The houseboat experience and the attention to detail were exceptional. Highly recommended!',
      image: 'https://images.unsplash.com/photo-1494790108755-2616c06e8c5b?w=400'
    },
    {
      id: 2,
      name: 'Rajesh Gupta',
      location: 'Delhi',
      rating: 5,
      text: 'Amazing service for our Golden Triangle tour. The guides were knowledgeable and the entire trip was well-organized. Will definitely book again!',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400'
    },
    {
      id: 3,
      name: 'Anjali & Vikram',
      location: 'Bangalore',
      rating: 5,
      text: 'Perfect honeymoon package to Goa! The resort was beautiful and the romantic dinner arrangements were beyond our expectations.',
      image: 'https://images.unsplash.com/photo-1521119989659-a83eee488004?w=400'
    },
    {
      id: 4,
      name: 'Dr. Mehta',
      location: 'Ahmedabad',
      rating: 5,
      text: 'Excellent corporate travel services. They handled our team retreat to Manali perfectly - from transport to accommodation, everything was seamless.',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400'
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">What Our Travelers Say</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Don't just take our word for it - read what our satisfied customers have to say about their experiences
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.id} className="hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <Quote className="w-8 h-8 text-blue-400 mr-2" />
                  <div className="flex text-yellow-400">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                </div>
                
                <p className="text-gray-600 mb-4 italic">"{testimonial.text}"</p>
                
                <div className="flex items-center">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover mr-3"
                  />
                  <div>
                    <h4 className="font-semibold text-gray-800">{testimonial.name}</h4>
                    <p className="text-sm text-gray-500">{testimonial.location}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
