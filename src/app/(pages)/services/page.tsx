import Image from 'next/image';
import Link from 'next/link';

export default function Services() {
  const services = [
    {
      category: 'Haircuts',
      items: [
        { name: 'Women\'s Cut', price: '$45-65', description: 'Custom cut and style consultation' },
        { name: 'Men\'s Cut', price: '$30-45', description: 'Classic or contemporary styling' },
        { name: 'Children\'s Cut', price: '$25-35', description: 'Ages 12 and under' },
      ],
    },
    {
      category: 'Color Services',
      items: [
        { name: 'Full Color', price: '$75-95', description: 'Single process color application' },
        { name: 'Highlights', price: '$85-120', description: 'Partial or full highlights' },
        { name: 'Balayage', price: '$120-160', description: 'Hand-painted highlights for natural look' },
        { name: 'Color Correction', price: 'Starting at $150', description: 'Custom color correction service' },
      ],
    },
    {
      category: 'Styling',
      items: [
        { name: 'Blow Dry', price: '$35-55', description: 'Professional styling and finishing' },
        { name: 'Updo', price: '$65-95', description: 'Special occasion styling' },
        { name: 'Bridal Styling', price: 'Starting at $150', description: 'Complete bridal package available' },
      ],
    },
    {
      category: 'Treatments',
      items: [
        { name: 'Deep Conditioning', price: '$25-45', description: 'Intensive moisture treatment' },
        { name: 'Keratin Treatment', price: '$150-250', description: 'Smoothing and frizz control' },
        { name: 'Scalp Treatment', price: '$35-55', description: 'Therapeutic scalp care' },
      ],
    },
  ];

  return (
    <div className="space-y-20">
      {/* Hero Section */}
      <section className="relative h-[50vh] flex items-center justify-center">
        <Image
          src="https://images.unsplash.com/photo-1560066984-138dadb4c035?w=1600&auto=format&fit=crop&q=60"
          alt="Stylist working on client's hair"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/50 z-10" />
        <div className="relative z-20 text-center text-white px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Our Services</h1>
          <p className="text-xl md:text-2xl">
            Professional Hair Care Services
          </p>
        </div>
      </section>

      {/* Services List */}
      <section className="container mx-auto px-4">
        <div className="space-y-16">
          {services.map((category, index) => (
            <div key={index} className="space-y-8">
              <h2 className="text-3xl font-bold text-center">{category.category}</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {category.items.map((service, serviceIndex) => (
                  <div
                    key={serviceIndex}
                    className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow"
                  >
                    <div className="flex justify-between items-start mb-4">
                      <h3 className="text-xl font-semibold">{service.name}</h3>
                      <span className="text-gray-600 font-medium">{service.price}</span>
                    </div>
                    <p className="text-gray-600">{service.description}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Additional Information */}
      <section className="bg-gray-100 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">What to Expect</h2>
            <p className="text-gray-600 mb-8">
              At Cori Lee Hair Studio, we believe in providing personalized service to each client. 
              Your stylist will take the time to understand your needs and preferences, ensuring you 
              leave our salon feeling confident and beautiful.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-4">Consultation</h3>
                <p className="text-gray-600">
                  We begin with a thorough consultation to understand your desired look and hair history.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4">Quality Products</h3>
                <p className="text-gray-600">
                  We use only premium products to ensure the best results for your hair.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4">Expert Care</h3>
                <p className="text-gray-600">
                  Our experienced stylists are trained in the latest techniques and trends.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Booking CTA */}
      <section className="bg-gray-100 py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Book?</h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Contact us to schedule your appointment or to learn more about our
            services. We&apos;re here to help you achieve your desired look.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-gray-900 text-white px-8 py-3 rounded-full font-semibold hover:bg-gray-800 transition-colors"
          >
            Book Now
          </Link>
        </div>
      </section>
    </div>
  );
}