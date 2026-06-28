export default function ProductCategories() {
  const products = [
    {
      icon: "🎨",
      title: "Interior Paints",
      description: "Elegant finishes for beautiful indoor spaces.",
    },
    {
      icon: "🏠",
      title: "Exterior Paints",
      description: "Weather-resistant protection for exterior walls.",
    },
    {
      icon: "✨",
      title: "Luxury Emulsions",
      description: "Premium smooth finish with rich colour depth.",
    },
    {
      icon: "🌟",
      title: "Premium Emulsions",
      description: "Long-lasting beauty with easy maintenance.",
    },
    {
      icon: "🪵",
      title: "Wood Coatings",
      description: "Protect and enhance natural wood surfaces.",
    },
    {
      icon: "🛋️",
      title: "Wood Finishes",
      description: "Stylish finishes for furniture and interiors.",
    },
    {
      icon: "💧",
      title: "Waterproofing",
      description: "Keep your walls and roofs leak-free.",
    },
    {
      icon: "🛡️",
      title: "Wall Primers",
      description: "Strong foundation for a perfect paint finish.",
    },
    {
      icon: "🔩",
      title: "Metal Primers",
      description: "Rust protection and superior adhesion.",
    },
    {
      icon: "🎭",
      title: "Texture Paints",
      description: "Creative wall textures for unique designs.",
    },
    {
      icon: "🏆",
      title: "Designer Finishes",
      description: "Exclusive decorative finishes for luxury homes.",
    },
    {
      icon: "🎯",
      title: "Distempers",
      description: "Affordable and durable wall coating solutions.",
    },
    {
      icon: "🚪",
      title: "Enamels",
      description: "Glossy protection for doors and windows.",
    },
    {
      icon: "🏭",
      title: "Industrial Paints",
      description: "Heavy-duty coatings for industrial environments.",
    },
    {
      icon: "🖌️",
      title: "Paint Accessories",
      description: "Brushes, rollers and tools for perfect application.",
    },
  ];

  return (
    <section className="bg-gray-50 py-12 md:py-20">
      <div className="max-w-7xl mx-auto px-4">

        {/* Heading */}
        <div className="text-center mb-10">
          <span className="text-red-600 font-semibold uppercase tracking-wider">
            Our Categories
          </span>

          <h2 className="text-3xl md:text-5xl font-bold mt-2 text-gray-800">
            Explore Our Products
          </h2>

          <p className="text-gray-500 mt-3 max-w-2xl mx-auto">
            Premium paint solutions for homes, offices and commercial projects.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4 md:gap-6">

          {products.map((product) => (
            <div
              key={product.title}
              className="bg-white rounded-2xl p-4 md:p-6 shadow-md hover:shadow-xl hover:-translate-y-2 transition-all duration-300 cursor-pointer"
            >
              <div className="text-4xl mb-3">
                {product.icon}
              </div>

              <h3 className="font-bold text-gray-800 text-sm md:text-lg">
                {product.title}
              </h3>

              <p className="text-xs md:text-sm text-gray-500 mt-2">
                {product.description}
              </p>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}