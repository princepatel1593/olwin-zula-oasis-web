
import React from 'react';

const Reviews = () => {
  const reviews = [
    {
      name: 'Priya Sharma',
      location: 'Jubilee Hills, Hyderabad',
      rating: 5,
      review: 'Absolutely love my wooden swing! The craftsmanship is exceptional and it has become the favorite spot in our home. The installation was professional and hassle-free.',
      date: 'March 2024'
    },
    {
      name: 'Rajesh Kumar',
      location: 'Banjara Hills, Hyderabad',
      rating: 5,
      review: 'Outstanding quality and service. The team at Olwin Zula House understood exactly what we wanted and delivered beyond our expectations. Highly recommended!',
      date: 'February 2024'
    },
    {
      name: 'Anita Reddy',
      location: 'Gachibowli, Hyderabad',
      rating: 5,
      review: 'The acrylic swing is a perfect addition to our modern home. It\'s stylish, comfortable, and very well made. Great customer service throughout the process.',
      date: 'January 2024'
    },
    {
      name: 'Vikram Patel',
      location: 'Madhapur, Hyderabad',
      rating: 5,
      review: 'Exceptional work! The custom design they created for our outdoor space is simply beautiful. The swing is sturdy, comfortable, and looks amazing.',
      date: 'December 2023'
    },
    {
      name: 'Lakshmi Devi',
      location: 'Kondapur, Hyderabad',
      rating: 5,
      review: 'Very satisfied with the purchase. The quality of wood and craftsmanship is top-notch. It\'s become our favorite relaxation spot in the evening.',
      date: 'November 2023'
    },
    {
      name: 'Arun Verma',
      location: 'Hitech City, Hyderabad',
      rating: 5,
      review: 'Professional service from start to finish. The team was punctual, courteous, and delivered exactly what was promised. The swing is perfect for our balcony.',
      date: 'October 2023'
    }
  ];

  const stats = [
    { number: '500+', label: 'Happy Customers' },
    { number: '98%', label: 'Satisfaction Rate' },
    { number: '3+', label: 'Years Experience' },
    { number: '24/7', label: 'Support Available' }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-amber-50 to-orange-100 py-20">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl lg:text-6xl font-bold text-amber-900 mb-6">
              Customer Reviews
            </h1>
            <p className="text-xl text-gray-700 leading-relaxed">
              Don't just take our word for it. Here's what our satisfied customers have to say about their experience with Olwin Zula House.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            {stats.map((stat, index) => (
              <div key={index} className="p-6">
                <div className="text-4xl font-bold text-amber-600 mb-2">{stat.number}</div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-amber-900 mb-4">
              What Our Customers Say
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Real feedback from real customers who have transformed their spaces with our zula swings.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {reviews.map((review, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-200"
              >
                {/* Rating Stars */}
                <div className="flex mb-4">
                  {[...Array(review.rating)].map((_, starIndex) => (
                    <span key={starIndex} className="text-yellow-400 text-xl">★</span>
                  ))}
                </div>

                {/* Review Text */}
                <p className="text-gray-700 mb-6 leading-relaxed italic">
                  "{review.review}"
                </p>

                {/* Customer Info */}
                <div className="border-t pt-4">
                  <div className="font-semibold text-amber-900">{review.name}</div>
                  <div className="text-sm text-gray-600">{review.location}</div>
                  <div className="text-sm text-gray-500 mt-1">{review.date}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial Highlight */}
      <section className="py-20 bg-amber-600">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <div className="text-6xl text-amber-200 mb-6">"</div>
            <blockquote className="text-2xl lg:text-3xl text-white font-light leading-relaxed mb-8">
              The quality of craftsmanship and attention to detail at Olwin Zula House is unmatched. 
              Our swing has become the centerpiece of our home, and we couldn't be happier with our choice.
            </blockquote>
            <cite className="text-amber-200 text-lg">
              - Satisfied Customer from Hyderabad
            </cite>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-amber-900 mb-6">
            Join Our Happy Customers
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Experience the same quality and service that has made our customers so satisfied. 
            Contact us today to start your journey.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:7383446474" className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-3 rounded-full text-lg font-semibold transition-all duration-200 hover:scale-105 inline-block">
              Call Now: 7383446474
            </a>
            <a href="https://wa.me/917383446474" target="_blank" rel="noopener noreferrer" className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-full text-lg font-semibold transition-all duration-200 hover:scale-105 inline-block">
              WhatsApp Us
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Reviews;
