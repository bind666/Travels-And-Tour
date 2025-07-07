
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowRight, Calendar, User } from 'lucide-react';
import { Link } from 'react-router-dom';

const TravelInspirations = () => {
  const articles = [
    {
      id: 1,
      title: 'Ultimate Guide to Backpacking in Himachal Pradesh',
      excerpt: 'Discover the best routes, hidden gems, and essential tips for an unforgettable backpacking adventure.',
      image: 'https://images.unsplash.com/photo-1472396961693-142e6e269027?w=400',
      author: 'Rahul Sharma',
      date: '2024-01-15',
      readTime: '8 min read'
    },
    {
      id: 2,
      title: 'Kerala Backwaters: A Photography Guide',
      excerpt: 'Capture the serene beauty of Kerala backwaters with our comprehensive photography guide.',
      image: 'https://images.unsplash.com/photo-1426604966848-d7adac402bff?w=400',
      author: 'Priya Nair',
      date: '2024-01-12',
      readTime: '6 min read'
    },
    {
      id: 3,
      title: 'Top 10 Street Foods to Try in Delhi',
      excerpt: 'Explore Delhi\'s vibrant street food scene with our curated list of must-try dishes.',
      image: 'https://images.unsplash.com/photo-1500375592092-40eb2168fd21?w=400',
      author: 'Amit Kumar',
      date: '2024-01-10',
      readTime: '5 min read'
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Travel Inspirations</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Get inspired with our latest travel stories, tips, and destination guides
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {articles.map((article) => (
            <Card key={article.id} className="overflow-hidden hover:shadow-xl transition-shadow cursor-pointer">
              <img
                src={article.image}
                alt={article.title}
                className="w-full h-48 object-cover"
              />
              <CardContent className="p-6">
                <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
                  <div className="flex items-center">
                    <Calendar className="w-4 h-4 mr-1" />
                    {new Date(article.date).toLocaleDateString()}
                  </div>
                  <span>{article.readTime}</span>
                </div>
                
                <h3 className="text-xl font-bold mb-3 hover:text-blue-600 transition-colors">
                  {article.title}
                </h3>
                
                <p className="text-gray-600 mb-4 line-clamp-3">
                  {article.excerpt}
                </p>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center text-sm text-gray-600">
                    <User className="w-4 h-4 mr-1" />
                    {article.author}
                  </div>
                  <Link to="/blog">
                    <Button variant="ghost" size="sm">
                      Read More
                      <ArrowRight className="w-4 h-4 ml-1" />
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Link to="/blog">
            <Button size="lg" className="bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700">
              View All Articles
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default TravelInspirations;
