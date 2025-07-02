
import React from 'react';
import { Instagram, Phone, Mail, MapPin, Clock } from 'lucide-react';

const Footer = () => {
  const handlePhoneClick = (number: string, type: 'call' | 'whatsapp') => {
    if (type === 'call') {
      window.open(`tel:${number}`, '_self');
    } else {
      window.open(`https://wa.me/91${number}`, '_blank');
    }
  };

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <img 
                src="/lovable-uploads/cce0a9a4-8cf6-4fa9-b4dd-fbe623952af5.png" 
                alt="Olwin Zula House Logo" 
                className="h-10 w-10"
              />
              <h3 className="text-2xl font-bold">Olwin Zula House</h3>
            </div>
            <p className="text-gray-300 mb-4">
              Transforming Spaces with Unique Zula Design
            </p>
            <p className="text-gray-300 mb-6">
              Crafting premium wooden and acrylic zula swings for your comfort and style.
            </p>

            {/* Why Choose Us */}
            <div className="mb-6">
              <h4 className="text-lg font-semibold mb-3">Why Choose Olwin Zulahouse?</h4>
              <div className="space-y-2 text-sm text-gray-300">
                <div className="flex items-center space-x-2">
                  <span className="text-orange-400">✓</span>
                  <span>Free consultation and design advice</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-orange-400">✓</span>
                  <span>Custom manufacturing capabilities</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-orange-400">✓</span>
                  <span>Premium quality materials</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-orange-400">✓</span>
                  <span>Professional installation service</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-orange-400">✓</span>
                  <span>1-year warranty on all products</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-orange-400">✓</span>
                  <span>Competitive pricing</span>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Information */}
          <div>
            <h4 className="text-xl font-semibold mb-6">Get in Touch</h4>
            
            {/* Location */}
            <div className="mb-6">
              <div className="flex items-start space-x-3 mb-2">
                <MapPin size={20} className="text-orange-400 mt-1 flex-shrink-0" />
                <div>
                  <h5 className="font-medium text-white mb-1">Our Location</h5>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    Shrinagar Colony Road,<br />
                    Jubilee Hills, Hyderabad<br />
                    Telangana, India
                  </p>
                </div>
              </div>
            </div>

            {/* Phone */}
            <div className="mb-6">
              <div className="flex items-start space-x-3 mb-2">
                <Phone size={20} className="text-orange-400 mt-1 flex-shrink-0" />
                <div>
                  <h5 className="font-medium text-white mb-1">Phone</h5>
                  <button
                    onClick={() => handlePhoneClick('9624127464', 'call')}
                    className="text-gray-300 hover:text-white transition-colors duration-200 text-sm"
                  >
                    +91 96241 27464
                  </button>
                  <p className="text-gray-400 text-xs mt-1">Available 9 AM - 7 PM</p>
                </div>
              </div>
            </div>

            {/* Email */}
            <div className="mb-6">
              <div className="flex items-start space-x-3 mb-2">
                <Mail size={20} className="text-orange-400 mt-1 flex-shrink-0" />
                <div>
                  <h5 className="font-medium text-white mb-1">Email</h5>
                  <a
                    href="mailto:olwin.zula@gmail.com"
                    className="text-gray-300 hover:text-white transition-colors duration-200 text-sm"
                  >
                    olwin.zula@gmail.com
                  </a>
                  <p className="text-gray-400 text-xs mt-1">We'll respond within 24 hours</p>
                </div>
              </div>
            </div>

            {/* Business Hours */}
            <div className="mb-6">
              <div className="flex items-start space-x-3 mb-2">
                <Clock size={20} className="text-orange-400 mt-1 flex-shrink-0" />
                <div>
                  <h5 className="font-medium text-white mb-2">Business Hours</h5>
                  <div className="text-gray-300 text-sm space-y-1">
                    <p>Monday - Saturday: 9:00 AM - 7:00 PM</p>
                    <p>Sunday: 10:00 AM - 5:00 PM</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Instagram */}
            <div>
              <div className="flex items-center space-x-3">
                <Instagram size={20} className="text-orange-400" />
                <a
                  href="https://www.instagram.com/olwin_zulahouse?igsh=cWR1OXU4eTlydmp1"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-white transition-colors duration-200 text-sm"
                >
                  Follow us on Instagram
                </a>
              </div>
            </div>
          </div>

          {/* Map */}
          <div>
            <h4 className="text-xl font-semibold mb-4">Find Us</h4>
            <div className="bg-white p-2 rounded-lg shadow-lg">
              <div className="aspect-square h-80">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.6558937157665!2d78.41554731437!3d17.4273377040359!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb99daeaeeeea9%3A0x19e3a36b9b619fb0!2sYusufguda%2C%20Hyderabad%2C%20Telangana!5e0!3m2!1sen!2sin!4v1640000000000!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Olwin Zula House Location"
                  className="rounded"
                ></iframe>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            © 2024 Olwin Zula House. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
