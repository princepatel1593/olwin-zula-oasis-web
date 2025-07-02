
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
    <footer className="bg-amber-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-2xl font-bold mb-4">Olwin Zula House</h3>
            <p className="text-amber-200 mb-4">
              Crafting premium wooden and acrylic zula swings for your comfort and style.
            </p>
            <a
              href="https://www.instagram.com/olwin_zulahouse?igsh=cWR1OXU4eTlydmp1"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 text-amber-200 hover:text-white transition-colors duration-200"
            >
              <Instagram size={20} />
              <span>Follow us on Instagram</span>
            </a>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-xl font-semibold mb-4">Contact Us</h4>
            <div className="space-y-3">
              <div>
                <p className="text-amber-200 mb-2">Phone Numbers:</p>
                <div className="space-y-2">
                  <div className="flex space-x-4">
                    <button
                      onClick={() => handlePhoneClick('7383446474', 'call')}
                      className="text-white hover:text-amber-200 transition-colors duration-200 underline"
                    >
                      📞 7383446474
                    </button>
                    <button
                      onClick={() => handlePhoneClick('7383446474', 'whatsapp')}
                      className="text-green-400 hover:text-green-300 transition-colors duration-200"
                    >
                      💬 WhatsApp
                    </button>
                  </div>
                  <div className="flex space-x-4">
                    <button
                      onClick={() => handlePhoneClick('9824155520', 'call')}
                      className="text-white hover:text-amber-200 transition-colors duration-200 underline"
                    >
                      📞 9824155520
                    </button>
                    <button
                      onClick={() => handlePhoneClick('9824155520', 'whatsapp')}
                      className="text-green-400 hover:text-green-300 transition-colors duration-200"
                    >
                      💬 WhatsApp
                    </button>
                  </div>
                </div>
              </div>
              <div>
                <p className="text-amber-200">Email:</p>
                <a href="mailto:olwinzulahouse.hyderabad@gmail.com" className="text-white hover:text-amber-200 transition-colors duration-200">
                  olwinzulahouse.hyderabad@gmail.com
                </a>
              </div>
            </div>
          </div>

          {/* Location */}
          <div>
            <h4 className="text-xl font-semibold mb-4">Location</h4>
            <p className="text-amber-200">
              1st floor, opp. Green bawarchi hotel,<br />
              Srinagar Colony Main Road,<br />
              Yusufguda, Jubilee Hills,<br />
              Hyderabad
            </p>
          </div>
        </div>

        <div className="border-t border-amber-800 mt-8 pt-8 text-center">
          <p className="text-amber-200">
            © 2024 Olwin Zula House. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
