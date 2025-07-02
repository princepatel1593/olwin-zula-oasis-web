
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';

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
    
    // Here you would typically send the form data to your backend
    console.log('Form submitted:', formData);
    
    toast({
      title: "Message Sent!",
      description: "Thank you for contacting us. We'll get back to you soon.",
    });

    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: ''
    });
  };

  const handlePhoneClick = (number: string, type: 'call' | 'whatsapp') => {
    if (type === 'call') {
      window.open(`tel:${number}`, '_self');
    } else {
      window.open(`https://wa.me/91${number}`, '_blank');
    }
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

      {/* Contact Information & Form */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-bold text-amber-900 mb-8">Get In Touch</h2>
              
              {/* Phone Numbers */}
              <div className="mb-8">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">Phone Numbers</h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-4">
                    <div className="flex-1">
                      <p className="text-gray-600">Primary Contact:</p>
                      <p className="text-lg font-semibold text-amber-900">7383446474</p>
                    </div>
                    <div className="flex space-x-2">
                      <Button
                        onClick={() => handlePhoneClick('7383446474', 'call')}
                        className="bg-amber-600 hover:bg-amber-700 text-white px-4 py-2 rounded-lg"
                      >
                        📞 Call
                      </Button>
                      <Button
                        onClick={() => handlePhoneClick('7383446474', 'whatsapp')}
                        className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg"
                      >
                        💬 WhatsApp
                      </Button>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4">
                    <div className="flex-1">
                      <p className="text-gray-600">Secondary Contact:</p>
                      <p className="text-lg font-semibold text-amber-900">9824155520</p>
                    </div>
                    <div className="flex space-x-2">
                      <Button
                        onClick={() => handlePhoneClick('9824155520', 'call')}
                        className="bg-amber-600 hover:bg-amber-700 text-white px-4 py-2 rounded-lg"
                      >
                        📞 Call
                      </Button>
                      <Button
                        onClick={() => handlePhoneClick('9824155520', 'whatsapp')}
                        className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg"
                      >
                        💬 WhatsApp
                      </Button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Email */}
              <div className="mb-8">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">Email</h3>
                <a
                  href="mailto:olwinzulahouse.hyderabad@gmail.com"
                  className="text-amber-600 hover:text-amber-700 text-lg transition-colors duration-200"
                >
                  olwinzulahouse.hyderabad@gmail.com
                </a>
              </div>

              {/* Address */}
              <div className="mb-8">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">Visit Our Showroom</h3>
                <address className="text-gray-700 leading-relaxed not-italic">
                  1st floor, opp. Green bawarchi hotel,<br />
                  Srinagar Colony Main Road,<br />
                  Yusufguda, Jubilee Hills,<br />
                  Hyderabad
                </address>
              </div>

              {/* Social Media */}
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-4">Follow Us</h3>
                <a
                  href="https://www.instagram.com/olwin_zulahouse?igsh=cWR1OXU4eTlydmp1"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-2 text-amber-600 hover:text-amber-700 transition-colors duration-200"
                >
                  <span>📷</span>
                  <span>Follow us on Instagram</span>
                </a>
              </div>
            </div>

            {/* Contact Form */}
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
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-amber-900 mb-4">Find Us</h2>
            <p className="text-xl text-gray-600">Visit our showroom in Jubilee Hills, Hyderabad</p>
          </div>
          
          <div className="bg-white p-4 rounded-lg shadow-lg">
            <div className="aspect-video">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.6558937157665!2d78.41554731437!3d17.4273377040359!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb99daeaeeeea9%3A0x19e3a36b9b619fb0!2sYusufguda%2C%20Hyderabad%2C%20Telangana!5e0!3m2!1sen!2sin!4v1640000000000!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Olwin Zula House Location"
                className="rounded-lg"
              ></iframe>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
