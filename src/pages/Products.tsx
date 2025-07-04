
import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const Products = () => {
  const products = [
    {
      id: 1,
      name: 'Premium Wooden Zula Swing (Single)',
      category: 'Wooden',
      image: '/lovable-uploads/c193be04-623e-4a3a-9c86-318989da1ee6.png',
      description: 'Handcrafted wooden swing with premium cushioning and traditional design.',
      features: ['Premium wood construction', 'Weather-resistant finish', 'Comfortable cushioning', 'Traditional design'],
      price: '₹44,000 - ₹50,000'
    },
    {
      id: 2,
      name: 'Luxury Wooden Double Seater',
      category: 'Wooden',
      image: '/lovable-uploads/5e1c33e2-a9ba-426c-91b2-96f6da933410.png',
      description: 'Spacious double seater wooden swing with premium materials and comfort.',
      features: ['Double seater design', 'Premium wood materials', 'Enhanced comfort', 'Sturdy construction'],
      price: '₹89,000 - ₹92,000'
    },
    {
      id: 3,
      name: 'Traditional Wooden Swing',
      category: 'Wooden',
      image: '/lovable-uploads/0b7dcc70-4020-48ef-b73c-d22d5be7efa5.png',
      description: 'Classic traditional wooden swing with authentic craftsmanship.',
      features: ['Traditional craftsmanship', 'Authentic design', 'Durable construction', 'Classic appeal'],
      price: '₹40,000 - ₹45,000'
    },
    {
      id: 4,
      name: 'Premium Wooden Hanging Swing',
      category: 'Wooden',
      image: '/lovable-uploads/4d7ac444-84e3-420b-b198-924166203276.png',
      description: 'Elegant wooden hanging swing with rope suspension and premium finish.',
      features: ['Rope suspension system', 'Premium wood finish', 'Indoor/outdoor use', 'Luxury craftsmanship'],
      price: '₹65,000 - ₹70,000'
    },
    {
      id: 5,
      name: 'Modern Acrylic Zula Chair',
      category: 'Acrylic',
      image: '/lovable-uploads/c1717f72-d605-4218-8342-a4804c6dcdc3.png',
      description: 'Contemporary acrylic swing chair perfect for modern homes and offices.',
      features: ['Modern ergonomic design', 'High-quality acrylic', 'Adjustable comfort', 'Space-saving design'],
      price: '₹25,000 - ₹27,000'
    },
    {
      id: 6,
      name: 'Designer Acrylic Swing',
      category: 'Acrylic',
      image: '/lovable-uploads/f2ff2ad8-f6dc-4be1-9f87-7f2bc61c93aa.png',
      description: 'Modern acrylic swing with unique design elements and comfort.',
      features: ['Designer acrylic construction', 'Modern aesthetic', 'Single person design', 'Easy maintenance'],
      price: '₹40,000 - ₹44,000'
    },
    {
      id: 7,
      name: 'Contemporary Acrylic Swing',
      category: 'Acrylic',
      image: '/lovable-uploads/93138346-b9fb-4d1a-bb07-19addb3d8726.png',
      description: 'Elegant acrylic swing with contemporary design and comfort.',
      features: ['Contemporary design', 'Premium acrylic', 'Enhanced comfort', 'Modern styling'],
      price: '₹40,000 - ₹42,000'
    },
    {
      id: 8,
      name: 'Luxury Acrylic Designer Swing',
      category: 'Acrylic',
      image: '/lovable-uploads/4536c53b-fc36-421c-84b2-90bc99eb6cf4.png',
      description: 'Premium acrylic swing with luxury design and superior comfort.',
      features: ['Luxury design', 'Premium materials', 'Superior comfort', 'Modern construction'],
      price: '₹50,000 - ₹55,000'
    },
    {
      id: 9,
      name: 'Clear Acrylic Swing',
      category: 'Acrylic',
      image: '/lovable-uploads/716bf613-7ba0-4e9c-97d7-3073d9d31ea8.png',
      description: 'Crystal clear acrylic swing with minimalist design.',
      features: ['Crystal clear acrylic', 'Minimalist design', 'Unique styling', 'Versatile placement'],
      price: '₹35,000 - ₹40,000'
    },
    {
      id: 10,
      name: 'Transparent Acrylic Swing',
      category: 'Acrylic',
      image: '/lovable-uploads/745edff1-262d-43f6-a253-4ffaa9ab25a0.png',
      description: 'Transparent acrylic swing with contemporary design.',
      features: ['Transparent acrylic', 'Contemporary design', 'Modern styling', 'Easy maintenance'],
      price: '₹38,000 - ₹42,000'
    },
    {
      id: 11,
      name: 'Premium Acrylic Swing',
      category: 'Acrylic',
      image: '/lovable-uploads/7015a7e0-bafc-484e-8e9e-430e546f8568.png',
      description: 'Premium acrylic swing with elegant design and superior finish.',
      features: ['Premium acrylic construction', 'Elegant design', 'Superior finish', 'Comfortable seating'],
      price: '₹45,000 - ₹50,000'
    },
    {
      id: 12,
      name: 'Designer Acrylic Swing Chair',
      category: 'Acrylic',
      image: '/lovable-uploads/1875ab75-dcc1-4fee-82be-1743b994b122.png',
      description: 'Beautiful designer acrylic swing with artistic patterns.',
      features: ['Designer patterns', 'Artistic details', 'Premium acrylic', 'Modern design'],
      price: '₹42,000 - ₹47,000'
    },
    {
      id: 13,
      name: 'Classic Acrylic Swing',
      category: 'Acrylic',
      image: '/lovable-uploads/534102ae-b531-4524-bf01-0d6668636531.png',
      description: 'Classic acrylic swing with timeless appeal and modern comfort.',
      features: ['Timeless design', 'Modern comfort', 'Durable construction', 'Classic appeal'],
      price: '₹40,000 - ₹45,000'
    }
  ];

  const categories = ['All', 'Wooden', 'Acrylic'];
  const [selectedCategory, setSelectedCategory] = React.useState('All');

  const filteredProducts = selectedCategory === 'All' 
    ? products 
    : products.filter(product => product.category === selectedCategory);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-amber-50 to-orange-100 py-20">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl lg:text-6xl font-bold text-amber-900 mb-6">
              Our Products
            </h1>
            <p className="text-xl text-gray-700 leading-relaxed">
              Discover our premium collection of wooden and acrylic zula swings, 
              each piece carefully crafted to provide comfort and elegance.
            </p>
          </div>
        </div>
      </section>

      {/* Product Categories */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="flex justify-center mb-12">
            <div className="flex space-x-4 bg-white rounded-full p-2 shadow-lg">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-6 py-3 rounded-full font-semibold transition-all duration-200 ${
                    selectedCategory === category
                      ? 'bg-amber-600 text-white shadow-md'
                      : 'text-amber-600 hover:bg-amber-50'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          {/* Products Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {filteredProducts.map((product) => (
              <div
                key={product.id}
                className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-2xl hover:scale-105 transition-all duration-300 transform flex flex-col"
              >
                <div className="h-56 sm:h-64 overflow-hidden bg-gray-100 flex-shrink-0">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-contain hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <div className="p-4 sm:p-6 flex flex-col flex-grow">
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="text-lg sm:text-xl font-semibold text-amber-900 line-clamp-2">{product.name}</h3>
                    <span className="bg-amber-100 text-amber-800 px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-medium flex-shrink-0 ml-2">
                      {product.category}
                    </span>
                  </div>
                  <p className="text-gray-600 mb-4 text-sm sm:text-base flex-grow">{product.description}</p>
                  
                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-800 mb-2 text-sm sm:text-base">Features:</h4>
                    <ul className="text-xs sm:text-sm text-gray-600 space-y-1">
                      {product.features.map((feature, index) => (
                        <li key={index} className="flex items-center">
                          <span className="text-amber-600 mr-2">•</span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mb-4">
                    <p className="text-xl sm:text-2xl font-bold text-amber-600">{product.price}</p>
                  </div>

                  <div className="mt-auto">
                    <Link to="/contact#get-in-touch" onClick={() => {
                      setTimeout(() => {
                        const element = document.getElementById('get-in-touch');
                        if (element) {
                          element.scrollIntoView({ behavior: 'smooth' });
                        }
                      }, 100);
                    }}>
                      <Button className="w-full bg-amber-600 hover:bg-amber-700 text-white py-2 sm:py-3 rounded-lg transition-all duration-300 hover:scale-105 text-sm sm:text-base">
                        Get Quote
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-amber-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            Custom Designs Available
          </h2>
          <p className="text-xl text-amber-100 mb-8 max-w-2xl mx-auto">
            Don't see exactly what you're looking for? We specialize in custom designs tailored to your specific requirements.
          </p>
          <Link to="/contact" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            <Button className="bg-white text-amber-600 hover:bg-gray-100 px-8 py-3 rounded-full text-lg font-semibold transition-all duration-200 hover:scale-105">
              Discuss Custom Design
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Products;
