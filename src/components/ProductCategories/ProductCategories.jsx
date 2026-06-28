export default function ProductCategories() {
  const categories = [
    {
      title: "Interior Paints",
      image: "/images/interior-paint.png",
      count: "50+ Products",
    },
    {
      title: "Exterior Paints",
      image: "/images/exterior-paint.png",
      count: "35+ Products",
    },
    {
      title: "Putty & Primer",
      image: "/images/putty-primer.png",
      count: "20+ Products",
    },
    {
      title: "Waterproofing",
      image: "/images/waterproofing.png",
      count: "25+ Products",
    },
    {
      title: "Wood Coatings",
      image: "/images/wood-coating.png",
      count: "15+ Products",
    },
    {
      title: "Texture Paints",
      image: "/images/texture-paint.png",
      count: "18+ Products",
    },
    {
      title: "Designer Finishes",
      image: "/images/designer-finish.png",
      count: "12+ Products",
    },
    {
      title: "Paint Accessories",
      image: "/images/accessories.png",
      count: "30+ Products",
    },
  ];

  return (
    <section className="py-14 md:py-20 bg-linear-to-b from-white to-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">

        {/* Heading */}
        <div className="text-center mb-10">
          <span className="text-red-600 font-semibold tracking-widest uppercase">
            Product Categories
          </span>

          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mt-2">
            Explore Our Products
          </h2>

          <p className="text-gray-500 mt-4 max-w-2xl mx-auto">
            Complete painting solutions including paints,
            primers, putty, waterproofing and accessories.
          </p>
        </div>

        {/* Mobile Scroll */}
        <div className="md:hidden flex gap-4 overflow-x-auto pb-4 scrollbar-hide">

          {categories.map((item) => (
            <div
              key={item.title}
              className="min-w-65 bg-white rounded-3xl shadow-lg overflow-hidden"
            >
              <img
                src={item.image}
                alt={item.title}
                className="h-44 w-full object-cover"
              />

              <div className="p-5">
                <h3 className="font-bold text-lg text-gray-800">
                  {item.title}
                </h3>

                <p className="text-sm text-gray-500 mt-1">
                  {item.count}
                </p>

                <button className="mt-4 bg-red-600 text-white px-4 py-2 rounded-xl w-full">
                  View Products
                </button>
              </div>
            </div>
          ))}

        </div>

        {/* Desktop Grid */}
        <div className="hidden md:grid grid-cols-2 lg:grid-cols-4 gap-8">

          {categories.map((item) => (
            <div
              key={item.title}
              className="group bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition duration-500"
            >
              <div className="overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="h-60 w-full object-cover group-hover:scale-110 transition duration-700"
                />
              </div>

              <div className="p-6">
                <h3 className="font-bold text-xl text-gray-800">
                  {item.title}
                </h3>

                <p className="text-gray-500 mt-2">
                  {item.count}
                </p>

                <button className="mt-5 w-full bg-red-600 hover:bg-red-700 text-white py-3 rounded-xl font-medium">
                  View Products
                </button>
              </div>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}