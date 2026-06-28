import { Link } from "react-router-dom";
import { products } from "../../data/products";

export default function Products() {
  return (
    <section className="bg-gray-50 min-h-screen py-10">
      <div className="max-w-7xl mx-auto px-4 md:px-6">

        {/* Heading */}
        <div className="text-center mb-10">
          <h1 className="text-3xl md:text-5xl font-bold text-gray-800">
            Our Products
          </h1>

          <p className="text-gray-500 mt-3">
            Explore premium paints, primers, waterproofing and wood finishes.
          </p>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 md:gap-8">

          {products.map((product) => (
            <Link
              key={product.id}
              to={`/products/${product.id}`}
              className="group"
            >
              <div className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition duration-300 hover:-translate-y-2">

                {/* Product Image */}
                <div className="overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-40 md:h-56 object-cover group-hover:scale-110 transition duration-500"
                  />
                </div>

                {/* Product Info */}
                <div className="p-4">

                  <span className="text-xs bg-red-100 text-red-600 px-2 py-1 rounded-full">
                    {product.category}
                  </span>

                  <h2 className="text-sm md:text-xl font-bold mt-3 text-gray-800 line-clamp-2">
                    {product.name}
                  </h2>

                  <p className="text-gray-500 text-xs md:text-sm mt-2 line-clamp-2">
                    {product.description}
                  </p>

                  <div className="mt-4 flex items-center justify-between">

                    <span className="text-lg md:text-2xl font-bold text-red-600">
                      ₹{product.price}
                    </span>

                    <button className="bg-red-600 text-white px-3 md:px-4 py-2 rounded-lg text-xs md:text-sm hover:bg-red-700">
                      View
                    </button>

                  </div>

                </div>

              </div>
            </Link>
          ))}

        </div>
      </div>
    </section>
  );
}