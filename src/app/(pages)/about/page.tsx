import Image from 'next/image';

export default function About() {
  const team = [
    {
      name: 'Cori Lee',
      role: 'Owner & Master Stylist',
      bio: 'With over 15 years of experience, Cori brings passion and expertise to every client.',
      image: 'https://images.unsplash.com/photo-1580618672591-eb180b1a973f?w=800&auto=format&fit=crop&q=60',
    },
    {
      name: 'Sarah Johnson',
      role: 'Senior Stylist',
      bio: 'Specializing in color and highlights, Sarah creates beautiful, natural-looking results.',
     image: 'https://images.unsplash.com/photo-1580618672591-eb180b1a973f?w=800&auto=format&fit=crop&q=60',
    },
    {
      name: 'Mike Thompson',
      role: 'Stylist',
      bio: 'Mike excels in men\'s cuts and contemporary styling techniques.',
      image: 'https://images.unsplash.com/photo-1580618672591-eb180b1a973f?w=800&auto=format&fit=crop&q=60',
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
          <h1 className="text-4xl md:text-6xl font-bold mb-4">About Us</h1>
          <p className="text-xl md:text-2xl">
            Your Trusted Hair Care Partner in Fredericksburg
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Our Story</h2>
          <p className="text-gray-600 mb-6">
            At Cori Lee Hair Studio, we&apos;re not just about creating beautiful hairstyles – we&apos;re about crafting confidence and self-expression through the art of hair design.
          </p>
          <p className="text-gray-600">
            We believe that great hair is more than just a style - it&apos;s a
            reflection of your personality and confidence. That&apos;s why we take the
            time to understand your needs and work with you to achieve the look
            you want.
          </p>
        </div>
      </section>

      {/* Our Team */}
      <section className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Meet Our Team</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {team.map((member, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg overflow-hidden"
            >
              <div className="relative h-64">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
                <p className="text-gray-600 font-medium mb-2">{member.role}</p>
                <p className="text-gray-600">{member.bio}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Our Values */}
      <section className="bg-gray-100 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <h3 className="text-xl font-semibold mb-4">Quality</h3>
              <p className="text-gray-600">
                We use only the highest quality products and stay up-to-date with
                the latest techniques and trends.
              </p>
            </div>
            <div className="text-center">
              <h3 className="text-xl font-semibold mb-4">Professionalism</h3>
              <p className="text-gray-600">
                Our team maintains the highest standards of professionalism and
                customer service.
              </p>
            </div>
            <div className="text-center">
              <h3 className="text-xl font-semibold mb-4">Satisfaction</h3>
              <p className="text-gray-600">
                Your satisfaction is our top priority. We work with you to ensure
                you love your look.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
} 