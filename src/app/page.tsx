import Image from "next/image";
import Link from "next/link";
import { Phone, MapPin, Clock } from "lucide-react";

export default function Home() {
  const services = [
    {
      title: "Haircuts",
      description: "Professional haircuts for all hair types and styles",
      image: "https://images.unsplash.com/photo-1562322140-8baeececf3df?w=800&auto=format&fit=crop&q=60",
    },
    {
      title: "Hair Coloring",
      description: "Expert color services including highlights, balayage, and more",
      image: "https://images.unsplash.com/photo-1560869713-7d0a29430803?w=800&auto=format&fit=crop&q=60",
    },
    {
      title: "Styling",
      description: "Special occasion styling and everyday looks",
      image: "https://images.unsplash.com/photo-1560869713-7d0a29430803?w=800&auto=format&fit=crop&q=60",
    },
  ];

  const testimonials = [
    {
      name: "Sarah M.",
      text: "Amazing experience! The staff is professional and the results are always perfect.",
      rating: 5,
    },
    {
      name: "John D.",
      text: "Best hair salon in Fredericksburg. I always leave feeling confident and stylish.",
      rating: 5,
    },
    {
      name: "Emily R.",
      text: "Cori and her team are incredibly talented. Highly recommend!",
      rating: 5,
    },
  ];

  return (
    <div className="space-y-20">
      {/* Hero Section */}
      <section className="relative h-[80vh] flex items-center justify-center">
        <Image
          src="https://images.unsplash.com/photo-1613395877344-13d4a8e0d49e?w=1600&auto=format&fit=crop&q=60"
          alt="Woman with beautiful hairstyle"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/50 z-10" />
        <div className="relative z-20 text-center text-white px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Welcome to Cori Lee Hair Studio
          </h1>
          <p className="text-xl md:text-2xl mb-8">
            Where Style Meets Professionalism
          </p>
          <Link
            href="/contact"
            className="bg-white text-gray-900 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors"
          >
            Book Now
          </Link>
        </div>
      </section>

      {/* Services Preview */}
      <section className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg overflow-hidden"
            >
              <div className="relative h-48">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-8">
          <Link
            href="/services"
            className="inline-block bg-gray-900 text-white px-6 py-2 rounded-full hover:bg-gray-800 transition-colors"
          >
            View All Services
          </Link>
        </div>
      </section>

      {/* Contact Info */}
      <section className="bg-gray-100 py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="flex flex-col items-center">
              <Phone className="h-8 w-8 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Call Us</h3>
              <a href="tel:+15402879392" className="text-gray-600 hover:text-gray-900">
                (540) 287-9392
              </a>
            </div>
            <div className="flex flex-col items-center">
              <MapPin className="h-8 w-8 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Location</h3>
              <p className="text-gray-600">Fredericksburg, VA</p>
            </div>
            <div className="flex flex-col items-center">
              <Clock className="h-8 w-8 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Hours</h3>
              <p className="text-gray-600">By Appointment</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">What Our Clients Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-lg"
            >
              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <span key={i} className="text-yellow-400">★</span>
                ))}
              </div>
              <p className="text-gray-600 mb-4">{testimonial.text}</p>
              <p className="font-semibold">{testimonial.name}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
