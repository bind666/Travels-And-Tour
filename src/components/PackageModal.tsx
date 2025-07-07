
import React, { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { MapPin, Calendar, Users, Star, Clock, CheckCircle } from 'lucide-react';
import EnquiryModal from '@/components/EnquiryModal';

interface Package {
  id: number;
  name: string;
  destination?: string;
  countries?: string;
  duration: string;
  price: string;
  originalPrice: string;
  image: string;
  rating: number;
  reviews?: number;
  highlights: string[];
  inclusions?: string[];
  itinerary?: string[];
}

interface PackageModalProps {
  package: Package;
  onClose: () => void;
}

const PackageModal: React.FC<PackageModalProps> = ({ package: pkg, onClose }) => {
  const [showEnquiry, setShowEnquiry] = useState(false);

  const handleBookNow = () => {
    setShowEnquiry(true);
  };

  const handleSendEnquiry = () => {
    setShowEnquiry(true);
  };

  return (
    <>
      <Dialog open={true} onOpenChange={onClose}>
        <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold">{pkg.name}</DialogTitle>
          </DialogHeader>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <img
                src={pkg.image}
                alt={pkg.name}
                className="w-full h-64 object-cover rounded-lg mb-4"
              />
              
              <div className="space-y-3">
                <div className="flex items-center text-gray-600">
                  <MapPin className="w-4 h-4 mr-2" />
                  <span>{pkg.destination || pkg.countries}</span>
                </div>
                <div className="flex items-center text-gray-600">
                  <Calendar className="w-4 h-4 mr-2" />
                  <span>{pkg.duration}</span>
                </div>
                <div className="flex items-center text-gray-600">
                  <Star className="w-4 h-4 mr-2 text-yellow-400" />
                  <span>{pkg.rating}</span>
                  {pkg.reviews && <span className="ml-1">({pkg.reviews} reviews)</span>}
                </div>
              </div>
            </div>
            
            <div>
              <div className="mb-6">
                <h3 className="text-lg font-semibold mb-3">Highlights</h3>
                <div className="flex flex-wrap gap-2">
                  {pkg.highlights.map((highlight, index) => (
                    <Badge key={index} variant="secondary">
                      {highlight}
                    </Badge>
                  ))}
                </div>
              </div>
              
              {pkg.inclusions && (
                <div className="mb-6">
                  <h3 className="text-lg font-semibold mb-3">Inclusions</h3>
                  <div className="space-y-2">
                    {pkg.inclusions.map((inclusion, index) => (
                      <div key={index} className="flex items-center">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                        <span className="text-sm">{inclusion}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
              
              {pkg.itinerary && (
                <div className="mb-6">
                  <h3 className="text-lg font-semibold mb-3">Itinerary</h3>
                  <div className="space-y-2">
                    {pkg.itinerary.map((day, index) => (
                      <div key={index} className="flex items-start">
                        <Clock className="w-4 h-4 text-blue-500 mr-2 mt-0.5" />
                        <span className="text-sm">{day}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
              
              <div className="border-t pt-4">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <span className="text-3xl font-bold text-green-600">{pkg.price}</span>
                    <span className="text-lg text-gray-500 line-through ml-2">{pkg.originalPrice}</span>
                    <p className="text-sm text-gray-500">per person</p>
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Button 
                    className="w-full bg-gradient-to-r from-blue-600 to-orange-500 hover:from-blue-700 hover:to-orange-600"
                    onClick={handleBookNow}
                  >
                    Book Now
                  </Button>
                  <Button 
                    variant="outline" 
                    className="w-full"
                    onClick={handleSendEnquiry}
                  >
                    Send Enquiry
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </DialogContent>
      </Dialog>

      {showEnquiry && (
        <EnquiryModal onClose={() => setShowEnquiry(false)} />
      )}
    </>
  );
};

export default PackageModal;
