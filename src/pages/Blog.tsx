import React, { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Calendar, MapPin, User, Search, Tag, ArrowRight } from 'lucide-react';
import ArticleModal from '@/components/ArticleModal';

const Blog = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedArticle, setSelectedArticle] = useState(null);

  const blogPosts = [
    {
      id: 1,
      title: 'Ultimate Guide to Backpacking in Himachal Pradesh',
      excerpt: 'Discover the best routes, hidden gems, and essential tips for an unforgettable backpacking adventure in the mountains of Himachal Pradesh.',
      content: `Himachal Pradesh offers some of the most spectacular backpacking experiences in India. From the snow-capped peaks of the Himalayas to lush green valleys, this northern state is a paradise for adventure seekers.

Planning Your Route:
Start your journey in Manali, the gateway to numerous trekking routes. Popular trails include the Hampta Pass trek, Beas Kund trek, and the challenging Pin Parvati Pass. Each offers unique landscapes and experiences.

Essential Gear:
- Quality trekking boots
- Weather-appropriate clothing
- Reliable backpack (40-60L)
- First aid kit
- Navigation tools

Best Time to Visit:
March to June and September to November offer the best weather conditions for backpacking. Avoid monsoon season (July-August) due to landslide risks.

Budget Tips:
- Stay in local guesthouses and homestays
- Cook your own meals when possible
- Use public transportation
- Join group treks to share costs

Safety Considerations:
Always inform someone about your trekking plans, carry emergency supplies, and consider hiring local guides for unfamiliar routes.`,
      image: 'https://images.unsplash.com/photo-1472396961693-142e6e269027?w=400',
      author: 'Rahul Sharma',
      date: '2024-01-15',
      category: 'Adventure',
      tags: ['Himachal', 'Backpacking', 'Mountains', 'Adventure'],
      readTime: '8 min read'
    },
    {
      id: 2,
      title: 'Kerala Backwaters: A Photography Guide',
      excerpt: 'Capture the serene beauty of Kerala backwaters with our comprehensive photography guide featuring best spots and techniques.',
      content: `Kerala's backwaters offer endless opportunities for stunning photography. From traditional houseboats to exotic wildlife, every frame tells a story.

Best Photography Spots:
- Alleppey: Famous for houseboat photography
- Kumarakom: Bird sanctuary and sunset shots
- Kollam: Chinese fishing nets and local life
- Kottayam: Rubber plantations and spice gardens

Golden Hour Magic:
The early morning and late afternoon light creates magical reflections on the water. Plan your boat rides during these times for the best shots.

Essential Equipment:
- DSLR or mirrorless camera
- Wide-angle lens for landscapes
- Telephoto lens for wildlife
- Waterproof housing
- Polarizing filter to reduce glare

Composition Tips:
- Use leading lines created by waterways
- Include traditional boats for scale
- Capture reflections for dramatic effect
- Focus on local life and culture

Post-Processing:
Enhance the natural colors of the backwaters while maintaining authenticity. Increase vibrance slightly and adjust shadows to bring out details.`,
      image: 'https://images.unsplash.com/photo-1426604966848-d7adac402bff?w=400',
      author: 'Priya Nair',
      date: '2024-01-12',
      category: 'Photography',
      tags: ['Kerala', 'Photography', 'Backwaters', 'Nature'],
      readTime: '6 min read'
    },
    {
      id: 3,
      title: 'Top 10 Street Foods to Try in Delhi',
      excerpt: 'Explore Delhi\'s vibrant street food scene with our curated list of must-try dishes and the best places to find them.',
      content: `Delhi's street food scene is legendary, offering flavors that represent the soul of India. Here's your guide to the best street food experiences.

Must-Try Foods:
1. Chole Bhature - Spicy chickpeas with fried bread
2. Gol Gappa - Crispy shells filled with tangy water
3. Aloo Tikki - Spiced potato patties
4. Paranthe Wali Gali - Stuffed flatbreads
5. Dahi Bhalla - Lentil dumplings in yogurt
6. Kulfi - Traditional ice cream
7. Jalebi - Sweet spiral treats
8. Chaat - Savory snack mix
9. Kebabs - Grilled meat specialties
10. Lassi - Refreshing yogurt drink

Best Locations:
- Chandni Chowk: Historic food hub
- Connaught Place: Modern street food
- Karim's: Authentic Mughlai cuisine
- India Gate: Evening food stalls
- Sarojini Nagar: Budget-friendly options

Food Safety Tips:
- Choose busy stalls with high turnover
- Avoid uncooked vegetables
- Drink bottled water
- Start with mild spices if you're not used to Indian food

Cultural Experience:
Street food in Delhi is more than just eating - it's about experiencing local culture, meeting people, and understanding the city's diverse heritage.`,
      image: 'https://images.unsplash.com/photo-1500375592092-40eb2168fd21?w=400',
      author: 'Amit Kumar',
      date: '2024-01-10',
      category: 'Food & Culture',
      tags: ['Delhi', 'Food', 'Street Food', 'Culture'],
      readTime: '5 min read'
    },
    {
      id: 4,
      title: 'Rajasthan Palace Hotels: Royal Experience Guide',
      excerpt: 'Experience royal luxury in Rajasthan\'s palace hotels. Our guide covers the best heritage properties and what makes them special.',
      content: `Stay like royalty in Rajasthan's magnificent palace hotels, where history meets luxury in the most spectacular way.

Top Palace Hotels:
- Taj Lake Palace, Udaipur: Floating marble palace
- Umaid Bhawan Palace, Jodhpur: Art Deco masterpiece
- Rambagh Palace, Jaipur: Former royal residence
- Samode Palace, Samode: 475-year-old heritage hotel
- Neemrana Fort Palace: Medieval fortress hotel

What to Expect:
Royal suites with period furniture, traditional Rajasthani architecture, courtyards with fountains, heritage dining experiences, and personalized butler service.

Activities:
- Palace tours with historians
- Traditional puppet shows
- Royal dining experiences
- Heritage walks
- Cultural performances

Booking Tips:
- Book well in advance, especially during peak season
- Consider heritage suites for the full experience
- Ask about package deals including meals and activities
- Check for seasonal offers

Cultural Immersion:
These palaces offer more than luxury accommodation - they're living museums that provide insight into Rajasthan's royal heritage and architectural brilliance.`,
      image: 'https://images.unsplash.com/photo-1466442929976-97f336a657be?w=400',
      author: 'Meera Singh',
      date: '2024-01-08',
      category: 'Luxury',
      tags: ['Rajasthan', 'Luxury', 'Heritage', 'Palaces'],
      readTime: '7 min read'
    },
    {
      id: 5,
      title: 'Goa Beyond Beaches: Hidden Cultural Gems',
      excerpt: 'Discover Goa\'s rich cultural heritage beyond its famous beaches. Explore temples, museums, and traditional villages.',
      content: `While Goa is famous for its beaches, the state offers incredible cultural experiences that many visitors miss.

Cultural Attractions:
- Old Goa: UNESCO World Heritage churches
- Ancestral Goa: Traditional village life museum
- Goa State Museum: Art and cultural artifacts
- Shantadurga Temple: Beautiful Hindu architecture
- Latin Quarter, Panaji: Portuguese colonial architecture

Hidden Villages:
- Divar Island: Peaceful rural life
- Chorao Island: Bird watching and traditional houses
- Aldona: Heritage homes and quiet lanes
- Loutolim: Colonial mansions and gardens

Art and Craft:
Visit local artisan workshops, pottery centers, and traditional cashew distilleries. Learn about Goa's unique blend of Indian and Portuguese influences.

Festivals:
Experience local festivals like Carnival, Shigmo, and various church feasts that showcase Goa's multicultural heritage.

Food Culture:
Try authentic Goan cuisine beyond beach shacks - visit family-run restaurants and spice plantations for traditional cooking demonstrations.`,
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400',
      author: 'Carlos D\'Souza',
      date: '2024-01-05',
      category: 'Culture',
      tags: ['Goa', 'Culture', 'Heritage', 'Off-beat'],
      readTime: '6 min read'
    },
    {
      id: 6,
      title: 'Budget Travel Tips for Students in India',
      excerpt: 'Comprehensive guide for student travelers covering budget accommodations, cheap eats, and free attractions across India.',
      content: `Traveling on a student budget doesn't mean compromising on experiences. Here's how to explore India affordably.

Accommodation Tips:
- Youth hostels and backpacker accommodations
- Dormitory beds in cities
- Homestays for cultural immersion
- Couchsurfing for free accommodation
- Student discounts at heritage hotels

Transportation:
- Indian Railways: Book in advance for better prices
- State-run buses for budget travel
- Shared cabs and auto-rickshaws
- Local trains in major cities
- Student concessions on various transport modes

Food on a Budget:
- Street food for authentic local flavors
- Railway station meals
- Local dhabas (roadside restaurants)
- Cooking facilities in hostels
- Free meals at gurudwaras and temples

Free Attractions:
- Government museums (many free on certain days)
- Public parks and gardens
- Beaches and natural attractions
- Religious sites and temples
- Local markets and bazaars

Money-Saving Hacks:
- Travel during off-season
- Group bookings for discounts
- Student ID cards for museum entries
- Negotiate prices at local markets
- Use apps for best deals on accommodation`,
      image: 'https://images.unsplash.com/photo-1433086966358-54859d0ed716?w=400',
      author: 'Sneha Patel',
      date: '2024-01-03',
      category: 'Budget Travel',
      tags: ['Budget', 'Students', 'Travel Tips', 'India'],
      readTime: '9 min read'
    }
  ];

  const categories = [
    'all', 'Adventure', 'Photography', 'Food & Culture', 'Luxury', 'Culture', 'Budget Travel'
  ];

  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesCategory = selectedCategory === 'all' || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const featuredPost = blogPosts[0];

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-green-600 to-blue-600 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6">Travel Blog</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Discover travel stories, guides, and insider tips for your next adventure
          </p>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="py-8 bg-white shadow-sm">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <Input
                placeholder="Search articles..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={selectedCategory === category ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedCategory(category)}
                >
                  {category === 'all' ? 'All Categories' : category}
                </Button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Featured Post */}
      {selectedCategory === 'all' && !searchTerm && (
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Featured Article</h2>
            <Card className="overflow-hidden max-w-4xl mx-auto hover:shadow-xl transition-shadow">
              <div className="md:flex">
                <div className="md:w-1/2">
                  <img
                    src={featuredPost.image}
                    alt={featuredPost.title}
                    className="w-full h-64 md:h-full object-cover"
                  />
                </div>
                <CardContent className="md:w-1/2 p-8">
                  <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
                    <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded">
                      {featuredPost.category}
                    </span>
                    <div className="flex items-center">
                      <Calendar className="w-4 h-4 mr-1" />
                      {new Date(featuredPost.date).toLocaleDateString()}
                    </div>
                    <span>{featuredPost.readTime}</span>
                  </div>
                  <h3 className="text-2xl font-bold mb-4">{featuredPost.title}</h3>
                  <p className="text-gray-600 mb-6">{featuredPost.excerpt}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <User className="w-4 h-4 mr-2 text-gray-400" />
                      <span className="text-sm text-gray-600">By {featuredPost.author}</span>
                    </div>
                    <Button onClick={() => setSelectedArticle(featuredPost)}>
                      Read More
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </div>
                </CardContent>
              </div>
            </Card>
          </div>
        </section>
      )}

      {/* Blog Posts Grid */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            {searchTerm ? `Search Results for "${searchTerm}"` : 'Latest Articles'}
          </h2>
          
          {filteredPosts.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-xl text-gray-600">No articles found matching your criteria.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.map((post) => (
                <Card key={post.id} className="overflow-hidden hover:shadow-xl transition-shadow cursor-pointer">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-48 object-cover"
                  />
                  <CardContent className="p-6">
                    <div className="flex items-center gap-2 text-sm text-gray-500 mb-3">
                      <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs">
                        {post.category}
                      </span>
                      <div className="flex items-center">
                        <Calendar className="w-3 h-3 mr-1" />
                        {new Date(post.date).toLocaleDateString()}
                      </div>
                      <span>{post.readTime}</span>
                    </div>
                    
                    <h3 className="text-lg font-bold mb-3 hover:text-blue-600 transition-colors">
                      {post.title}
                    </h3>
                    
                    <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                      {post.excerpt}
                    </p>
                    
                    <div className="flex flex-wrap gap-1 mb-4">
                      {post.tags.slice(0, 3).map((tag, index) => (
                        <span key={index} className="inline-flex items-center text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded">
                          <Tag className="w-3 h-3 mr-1" />
                          {tag}
                        </span>
                      ))}
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center text-sm text-gray-600">
                        <User className="w-4 h-4 mr-1" />
                        {post.author}
                      </div>
                      <Button variant="ghost" size="sm" onClick={() => setSelectedArticle(post)}>
                        Read More
                        <ArrowRight className="w-4 h-4 ml-1" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </div>
      </section>

      <Footer />
      
      <ArticleModal 
        article={selectedArticle} 
        onClose={() => setSelectedArticle(null)} 
      />
    </div>
  );
};

export default Blog;
