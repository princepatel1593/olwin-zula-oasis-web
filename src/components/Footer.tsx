
import React from 'react';
import { Instagram, Phone, Mail, MapPin } from 'lucide-react';

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
      <div className="container mx-auto px-4 py-8 md:py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {/* Company Info */}
          <div className="text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start space-x-3 mb-4">
              <img 
                src="/lovable-uploads/cce0a9a4-8cf6-4fa9-b4dd-fbe623952af5.png" 
                alt="Olwin Zula House Logo" 
                className="h-8 w-8 md:h-10 md:w-10"
              />
              <div>
                <h3 className="text-lg md:text-xl font-bold">Olwin Zulahouse</h3>
                <p className="text-xs md:text-sm text-gray-300">Unique Zula Design</p>
              </div>
            </div>
            <p className="text-gray-300 text-xs md:text-sm leading-relaxed">
              Transforming spaces with unique Zula design and all types of Zula manufacturing and customization.
            </p>
          </div>

          {/* Quick Links */}
          <div className="text-center md:text-left">
            <h4 className="text-base md:text-lg font-semibold mb-4">Quick Links</h4>
            <div className="space-y-2 text-xs md:text-sm">
              <div><a href="/" className="text-gray-300 hover:text-white transition-colors">Home</a></div>
              <div><a href="/about" className="text-gray-300 hover:text-white transition-colors">About</a></div>
              <div><a href="/services" className="text-gray-300 hover:text-white transition-colors">Services</a></div>
              <div><a href="/products" className="text-gray-300 hover:text-white transition-colors">Products</a></div>
              <div><a href="/reviews" className="text-gray-300 hover:text-white transition-colors">Reviews</a></div>
              <div><a href="/contact" className="text-gray-300 hover:text-white transition-colors">Contact</a></div>
            </div>
          </div>

          {/* Our Services */}
          <div className="text-center md:text-left">
            <h4 className="text-base md:text-lg font-semibold mb-4">Our Services</h4>
            <div className="space-y-2 text-xs md:text-sm text-gray-300">
              <div>Custom Zula Swings</div>
              <div>Wooden Zula</div>
              <div>Acrylic Zula</div>
              <div>Zula Hammocks</div>
              <div>Zula Customization</div>
              <div>Installation</div>
            </div>
          </div>

          {/* Contact Info */}
          <div className="text-center md:text-left">
            <h4 className="text-base md:text-lg font-semibold mb-4">Contact Info</h4>
            
            {/* Location */}
            <div className="mb-4">
              <div className="flex items-start justify-center md:justify-start space-x-2 mb-2">
                <MapPin size={14} className="text-orange-400 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-gray-300 text-xs md:text-sm leading-relaxed">
                    Olwin zula house<br />
                    1st floor, opp. Green bawarchi hotel,<br />
                    srinagar colony main road, yusufguda,<br />
                    jublee hills, hyderabad
                  </p>
                </div>
              </div>
            </div>

            {/* Phone */}
            <div className="mb-4">
              <div className="flex items-center justify-center md:justify-start space-x-2">
                <Phone size={14} className="text-orange-400 flex-shrink-0" />
                <div className="text-gray-300 text-xs md:text-sm">
                  <div>+91 73834 46474</div>
                  <div>+91 98241 55520</div>
                </div>
              </div>
            </div>

            {/* Email */}
            <div className="mb-4">
              <div className="flex items-center justify-center md:justify-start space-x-2">
                <Mail size={14} className="text-orange-400 flex-shrink-0" />
                <a
                  href="mailto:olwinzulahouse.hyderabad@gmail.com"
                  className="text-gray-300 hover:text-white transition-colors text-xs md:text-sm break-all"
                >
                  olwinzulahouse.hyderabad@gmail.com
                </a>
              </div>
            </div>

            {/* Instagram */}
            <div>
              <div className="flex items-center justify-center md:justify-start space-x-2">
                <Instagram size={14} className="text-orange-400" />
                <a
                  href="https://www.instagram.com/olwin_zulahouse?igsh=cWR1OXU4eTlydmp1"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-white transition-colors text-xs md:text-sm"
                >
                  Follow us on Instagram
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Map Section */}
        <div className="mt-8 md:mt-12">
          <h4 className="text-lg md:text-xl font-semibold mb-4 text-center md:text-left">Find Us</h4>
          <div className="w-full h-60 md:h-80 bg-white rounded-lg shadow-lg overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.2616825!2d78.39616931491536!3d17.442508587965757!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb9158edcaaaaa%3A0xaaaa!2sOlwin%20zula%20house%2C%201st%20floor%2C%20opp.%20Green%20bawarchi%20hotel%2C%20srinagar%20colony%20main%20road%2C%20yusufguda%2C%20jublee%20hills%2C%20hyderabad!5e0!3m2!1sen!2sin!4v1608000000000!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Olwin Zula House Location - 1st floor, opp. Green bawarchi hotel, srinagar colony main road, yusufguda, jublee hills, hyderabad"
            ></iframe>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-6 md:mt-8 pt-6 md:pt-8 text-center">
          <p className="text-gray-400 text-xs md:text-sm">
            © 2025 Olwin Zula House. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
