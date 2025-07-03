
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { Phone, Mail, MapPin, Clock, Instagram } from 'lucide-react';

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    console.log('Form submitted:', formData);
    
    toast({
      title: "Message Sent!",
      description: "Thank you for contacting us. We'll get back to you soon.",
    });

    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: ''
    });
  };

  const handlePhoneClick = (number: string) => {
    window.open(`tel:${number}`, '_self');
  };

  const handleWhatsAppClick = () => {
    window.open(`https://wa.me/917383446474`, '_blank');
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-amber-50 to-orange-100 py-20">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl lg:text-6xl font-bold text-amber-900 mb-6">Contact Us</h1>
            <p className="text-xl text-gray-700 leading-relaxed">
              Ready to transform your space? Get in touch with us for a personalized quote and consultation.
            </p>
          </div>
        </div>
      </section>

      {/* Join Our Happy Customers Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6" style={{ color: '#EA580C' }}>
            Join Our Happy Customers
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto" style={{ color: '#EA580C' }}>
            Experience the same quality and service that has made our customers so satisfied. Contact us today to start your journey.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-6">
            <button
              onClick={() => handlePhoneClick('7383446474')}
              className="text-lg font-semibold transition-colors duration-200 hover:underline"
              style={{ color: '#EA580C' }}
            >
              Call Now: 7383446474
            </button>
            <button
              onClick={handleWhatsAppClick}
              className="text-lg font-semibold transition-colors duration-200 hover:underline"
              style={{ color: '#EA580C' }}
            >
              WhatsApp Us
            </button>
          </div>
        </div>
      </section>

      {/* Contact Form & Information */}
      <section className="py-20 bg-white" id="get-in-touch">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form - Left Side */}
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h2 className="text-3xl font-bold text-amber-900 mb-8">Send us a Message</h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <Input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full"
                      placeholder="Your full name"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number *
                    </label>
                    <Input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      required
                      className="w-full"
                      placeholder="Your phone number"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <Input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full"
                    placeholder="Your email address"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                    Subject
                  </label>
                  <Input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    className="w-full"
                    placeholder="What's this about?"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message *
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    className="w-full h-32"
                    placeholder="Tell us about your requirements..."
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full bg-amber-600 hover:bg-amber-700 text-white py-3 rounded-lg text-lg font-semibold transition-all duration-200 hover:scale-105"
                >
                  Send Message
                </Button>
              </form>
            </div>

            {/* Get In Touch - Right Side */}
            <div>
              <h2 className="text-3xl font-bold text-amber-900 mb-8">Get In Touch</h2>
              
              {/* Location */}
              <div className="mb-8">
                <div className="flex items-start space-x-4">
                  <MapPin size={24} className="text-amber-600 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">Our Location</h3>
                    <address className="text-gray-700 leading-relaxed not-italic">
                      Olwin zula house<br />
                      1st floor, opp. Green bawarchi hotel,<br />
                      srinagar colony main road, yusufguda,<br />
                      jublee hills, hyderabad<br />
                      Telangana, India
                    </address>
                  </div>
                </div>
              </div>

              {/* Phone */}
              <div className="mb-8">
                <div className="flex items-start space-x-4">
                  <Phone size={24} className="text-amber-600 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">Phone</h3>
                    <div className="space-y-1">
                      <button
                        onClick={() => handlePhoneClick('+917383446474')}
                        className="text-amber-600 hover:text-amber-700 text-lg transition-colors duration-200 font-medium block"
                      >
                        +91 73834 46474
                      </button>
                      <button
                        onClick={() => handlePhoneClick('+919824155520')}
                        className="text-amber-600 hover:text-amber-700 text-lg transition-colors duration-200 font-medium block"
                      >
                        +91 98241 55520
                      </button>
                    </div>
                    <p className="text-gray-600 text-sm mt-1">Available 9 AM - 7 PM</p>
                  </div>
                </div>
              </div>

              {/* Email */}
              <div className="mb-8">
                <div className="flex items-start space-x-4">
                  <Mail size={24} className="text-amber-600 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">Email</h3>
                    <a
                      href="mailto:olwinzulahouse.hyderabad@gmail.com"
                      className="text-amber-600 hover:text-amber-700 text-lg transition-colors duration-200"
                    >
                      olwinzulahouse.hyderabad@gmail.com
                    </a>
                    <p className="text-gray-600 text-sm mt-1">We'll respond within 24 hours</p>
                  </div>
                </div>
              </div>

              {/* Business Hours */}
              <div className="mb-8">
                <div className="flex items-start space-x-4">
                  <Clock size={24} className="text-amber-600 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">Business Hours</h3>
                    <div className="text-gray-700 space-y-1">
                      <p>Monday - Saturday: 9:00 AM - 7:00 PM</p>
                      <p>Sunday: 10:00 AM - 5:00 PM</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Social Media */}
              <div>
                <div className="flex items-start space-x-4">
                  <Instagram size={24} className="text-amber-600 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">Follow Us</h3>
                    <a
                      href="https://www.instagram.com/olwin_zulahouse?igsh=cWR1OXU4eTlydmp1"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-amber-600 hover:text-amber-700 transition-colors duration-200"
                    >
                      Follow us on Instagram
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
