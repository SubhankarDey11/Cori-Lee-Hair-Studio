import Image from 'next/image';
import Link from 'next/link';

export default function Services() {
  const services = [
    {
      category: 'Haircuts',
      items: [
        {
          name: 'Women\'s Haircut',
          price: '$45-65',
          description: 'Custom cut and style consultation included',
        },
        {
          name: 'Men\'s Haircut',
          price: '$30-45',
          description: 'Includes neck shave and style',
        },
        {
          name: 'Children\'s Haircut (12 & under)',
          price: '$25-35',
          description: 'For children 12 years and younger',
        },
      ],
    },
    {
      category: 'Color Services',
      items: [
        {
          name: 'Full Color',
          price: '$75-95',
          description: 'Single process color application',
        },
        {
          name: 'Highlights',
          price: '$85-120',
          description: 'Partial or full highlights',
        },
        {
          name: 'Balayage',
          price: '$120-180',
          description: 'Hand-painted highlights for a natural look',
        },
        {
          name: 'Color Correction',
          price: 'Starting at $150',
          description: 'Consultation required',
        },
      ],
    },
    {
      category: 'Styling',
      items: [
        {
          name: 'Blow Dry & Style',
          price: '$35-55',
          description: 'Includes wash and styling',
        },
        {
          name: 'Updo',
          price: '$65-95',
          description: 'Perfect for special occasions',
        },
        {
          name: 'Bridal Styling',
          price: 'Starting at $150',
          description: 'Includes consultation and trial',
        },
      ],
    },
    {
      category: 'Treatments',
      items: [
        {
          name: 'Deep Conditioning',
          price: '$25-45',
          description: 'Intensive hair treatment',
        },
        {
          name: 'Keratin Treatment',
          price: '$200-300',
          description: 'Smoothing treatment lasting 3-5 months',
        },
        {
          name: 'Scalp Treatment',
          price: '$35-55',
          description: 'Therapeutic scalp massage and treatment',
        },
      ],
    },
  ];

  return (
    <div className="space-y-20">
      {/* Hero Section */}
      <section className="relative h-[50vh] flex items-center justify-center">
        <Image
          src="https://images.unsplash.com/photo-1613395877344-13d4a8e0d49e?w=1600&auto=format&fit=crop&q=60"
          alt="Woman with beautiful hairstyle"
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
        {services.map((category, index) => (
          <div key={index} className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-8">
              {category.category}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {category.items.map((service, serviceIndex) => (
                <div
                  key={serviceIndex}
                  className="bg-white rounded-lg shadow-lg p-6"
                >
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-xl font-semibold">{service.name}</h3>
                    <span className="text-gray-600 font-medium">
                      {service.price}
                    </span>
                  </div>
                  <p className="text-gray-600">{service.description}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </section>

      {/* Booking CTA */}
      <section className="bg-gray-100 py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Book?</h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Contact us to schedule your appointment or to learn more about our
            services. We're here to help you achieve your desired look.
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