import React, { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useToast } from '@/hooks/use-toast';
interface EnquiryModalProps {
  onClose: () => void;
}
const EnquiryModal: React.FC<EnquiryModalProps> = ({
  onClose
}) => {
  const {
    toast
  } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    destination: '',
    travelDate: '',
    travelers: '',
    budget: '',
    message: ''
  });
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Enquiry submitted:', formData);
    toast({
      title: "Enquiry Sent!",
      description: "We'll get back to you within 24 hours."
    });
    onClose();
  };
  const handleChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };
  return <Dialog open={true} onOpenChange={onClose}>
      <DialogContent className="max-w-md h-[100vh]">
        <DialogHeader>
          <DialogTitle>Send Travel Enquiry</DialogTitle>
        </DialogHeader>
        
        <form onSubmit={handleSubmit} className="">
          <div>
            <Label htmlFor="name" className="text-xs ">Full Name *</Label>
            <Input id="name" value={formData.name} onChange={e => handleChange('name', e.target.value)} required className="outline-none" />
          </div>
          
          <div>
            <Label htmlFor="email" className="text-xs ">Email *</Label>
            <Input id="email" type="email" value={formData.email} onChange={e => handleChange('email', e.target.value)} required />
          </div>
          
          <div>
            <Label htmlFor="phone" className="text-xs ">Phone Number *</Label>
            <Input id="phone" value={formData.phone} onChange={e => handleChange('phone', e.target.value)} required />
          </div>
          
          <div>
            <Label htmlFor="destination" className="text-xs ">Preferred Destination</Label>
            <Input id="destination" value={formData.destination} onChange={e => handleChange('destination', e.target.value)} />
          </div>
          
          <div>
            <Label htmlFor="travelDate" className="text-xs ">Travel Date</Label>
            <Input id="travelDate" type="date" value={formData.travelDate} onChange={e => handleChange('travelDate', e.target.value)} />
          </div>
          
          <div>
            <Label htmlFor="travelers" className="text-xs ">Number of Travelers</Label>
            <Select onValueChange={value => handleChange('travelers', value)}>
              <SelectTrigger>
                <SelectValue placeholder="Select travelers" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="1">1 Person</SelectItem>
                <SelectItem value="2">2 People</SelectItem>
                <SelectItem value="3-5">3-5 People</SelectItem>
                <SelectItem value="6+">6+ People</SelectItem>
              </SelectContent>
            </Select>
          </div>
          
          <div>
            <Label htmlFor="budget" className="text-xs ">Budget Range</Label>
            <Select onValueChange={value => handleChange('budget', value)}>
              <SelectTrigger>
                <SelectValue placeholder="Select budget" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="under-25k">Under ₹25,000</SelectItem>
                <SelectItem value="25k-50k">₹25,000 - ₹50,000</SelectItem>
                <SelectItem value="50k-100k">₹50,000 - ₹1,00,000</SelectItem>
                <SelectItem value="100k-200k">₹1,00,000 - ₹2,00,000</SelectItem>
                <SelectItem value="above-200k">Above ₹2,00,000</SelectItem>
              </SelectContent>
            </Select>
          </div>
          
          <div>
            <Label htmlFor="message">Additional Requirements</Label>
            <Textarea id="message" value={formData.message} onChange={e => handleChange('message', e.target.value)} placeholder="Tell us about your travel preferences..." />
          </div>
          
          <div className="flex space-x-2 pt-4">
            <Button type="button" variant="outline" onClick={onClose} className="flex-1">
              Cancel
            </Button>
            <Button type="submit" className="flex-1 bg-gradient-to-r from-blue-600 to-orange-500">
              Send Enquiry
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>;
};
export default EnquiryModal;