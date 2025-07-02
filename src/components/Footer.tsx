
import React from 'react';
import { Instagram } from 'lucide-react';

const Footer = () => {
  const handlePhoneClick = (number: string, type: 'call' | 'whatsapp') => {
    if (type === 'call') {
      window.open(`tel:${number}`, '_self');
    } else {
      window.open(`https://wa.me/91${number}`, '_blank');
    }
  };

  return (
    <footer className="bg-orange-600 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
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
            <p className="text-orange-100 mb-4">
              Transforming Spaces with Unique Zula Design
            </p>
            <p className="text-orange-100 mb-4">
              Crafting premium wooden and acrylic zula swings for your comfort and style.
            </p>
            <a
              href="https://www.instagram.com/olwin_zulahouse?igsh=cWR1OXU4eTlydmp1"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 text-orange-100 hover:text-white transition-colors duration-200"
            >
              <Instagram size={20} />
              <span>Follow us on Instagram</span>
            </a>
          </div>

          {/* Business Hours */}
          <div>
            <h4 className="text-xl font-semibold mb-4">Business Hours</h4>
            <div className="space-y-2 text-orange-100">
              <div>
                <p className="font-medium">Monday - Saturday</p>
                <p>9:00 AM - 7:00 PM</p>
              </div>
              <div>
                <p className="font-medium">Sunday</p>
                <p>10:00 AM - 5:00 PM</p>
              </div>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-xl font-semibold mb-4">Contact Us</h4>
            <div className="space-y-3">
              <div>
                <p className="text-orange-100 mb-2">Phone Numbers:</p>
                <div className="space-y-2">
                  <div className="flex flex-col space-y-1">
                    <button
                      onClick={() => handlePhoneClick('7383446474', 'call')}
                      className="text-white hover:text-orange-100 transition-colors duration-200 underline text-left"
                    >
                      📞 7383446474
                    </button>
                    <button
                      onClick={() => handlePhoneClick('7383446474', 'whatsapp')}
                      className="text-green-200 hover:text-green-100 transition-colors duration-200 text-left"
                    >
                      💬 WhatsApp
                    </button>
                  </div>
                  <div className="flex flex-col space-y-1">
                    <button
                      onClick={() => handlePhoneClick('9824155520', 'call')}
                      className="text-white hover:text-orange-100 transition-colors duration-200 underline text-left"
                    >
                      📞 9824155520
                    </button>
                    <button
                      onClick={() => handlePhoneClick('9824155520', 'whatsapp')}
                      className="text-green-200 hover:text-green-100 transition-colors duration-200 text-left"
                    >
                      💬 WhatsApp
                    </button>
                  </div>
                </div>
              </div>
              <div>
                <p className="text-orange-100">Email:</p>
                <a href="mailto:olwinzulahouse.hyderabad@gmail.com" className="text-white hover:text-orange-100 transition-colors duration-200">
                  olwinzulahouse.hyderabad@gmail.com
                </a>
              </div>
            </div>
          </div>

          {/* Location */}
          <div>
            <h4 className="text-xl font-semibold mb-4">Location</h4>
            <p className="text-orange-100">
              1st floor, opp. Green bawarchi hotel,<br />
              Srinagar Colony Main Road,<br />
              Yusufguda, Jubilee Hills,<br />
              Hyderabad
            </p>
            
            {/* Map in Footer */}
            <div className="mt-6">
              <div className="bg-white p-2 rounded-lg shadow-lg">
                <div className="aspect-video h-32">
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
        </div>

        <div className="border-t border-orange-500 mt-8 pt-8 text-center">
          <p className="text-orange-100">
            © 2024 Olwin Zula House. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
