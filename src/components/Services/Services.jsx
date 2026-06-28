export default function Services() {
  const services = [
    {
      icon: "🏠",
      title: "Home Painting",
      desc: "Professional interior and exterior painting services.",
    },
    {
      icon: "🎨",
      title: "Colour Consultation",
      desc: "Expert guidance to choose the perfect colour combination.",
    },
    {
      icon: "💧",
      title: "Waterproofing",
      desc: "Protect walls, roofs and basements from leakage.",
    },
    {
      icon: "✨",
      title: "Texture Painting",
      desc: "Designer wall textures for a premium look.",
    },
    {
      icon: "🪵",
      title: "Wood Finishing",
      desc: "Premium polish and protective coating for wood.",
    },
    {
      icon: "🛡️",
      title: "Wall Protection",
      desc: "Long-lasting protection against stains and weather.",
    },
    {
      icon: "🏢",
      title: "Commercial Painting",
      desc: "Painting solutions for offices, shops and industries.",
    },
    {
      icon: "🔨",
      title: "Surface Preparation",
      desc: "Putty, primer and crack repair before painting.",
    },
    {
      icon: "🌈",
      title: "Custom Shade Matching",
      desc: "Get paint shades matched to your preferences.",
    },
    {
      icon: "🚿",
      title: "Bathroom Waterproofing",
      desc: "Advanced waterproofing for bathrooms and kitchens.",
    },
    {
      icon: "🏗️",
      title: "New Construction Painting",
      desc: "Complete painting solutions for new projects.",
    },
    {
      icon: "🔄",
      title: "Repainting Services",
      desc: "Refresh old walls with modern colours and finishes.",
    },
  ];

  return (
    <section className="bg-gray-50 py-12 md:py-20">
      <div className="max-w-7xl mx-auto px-4">

        {/* Heading */}
        <div className="text-center mb-12">
          <span className="text-red-600 font-semibold uppercase tracking-wider">
            What We Offer
          </span>

          <h2 className="text-3xl md:text-5xl font-bold mt-2 text-gray-800">
            Our Services
          </h2>

          <p className="text-gray-500 mt-3 max-w-2xl mx-auto">
            Complete painting and coating solutions for homes,
            offices and commercial projects.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">

          {services.map((service) => (
            <div
              key={service.title}
              className="bg-white rounded-2xl p-5 md:p-6 shadow-md hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
            >
              <div className="text-4xl mb-3">
                {service.icon}
              </div>

              <h3 className="font-bold text-gray-800 text-sm md:text-lg">
                {service.title}
              </h3>

              <p className="text-xs md:text-sm text-gray-500 mt-2">
                {service.desc}
              </p>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}