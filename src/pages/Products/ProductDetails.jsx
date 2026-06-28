import { useParams, Link } from "react-router-dom";
import { products } from "../../data/products";

export default function ProductDetails() {
  const { id } = useParams();

  const product = products.find(
    (item) => item.id === Number(id)
  );

  if (!product) {
    return (
      <div className="text-center py-20">
        <h1 className="text-3xl font-bold">
          Product Not Found
        </h1>
      </div>
    );
  }

  return (
    <section className="bg-gray-50 min-h-screen py-10">
      <div className="max-w-7xl mx-auto px-4">

        {/* Back Button */}
        <Link
          to="/products"
          className="inline-block mb-8 text-red-600 font-medium"
        >
          ← Back to Products
        </Link>

        <div className="bg-white rounded-3xl shadow-lg overflow-hidden">

          <div className="grid md:grid-cols-2 gap-8">

            {/* Image */}
            <div className="p-6">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-[300px] md:h-[500px] object-cover rounded-2xl"
              />
            </div>

            {/* Details */}
            <div className="p-6 md:p-10 flex flex-col justify-center">

              <span className="inline-block bg-red-100 text-red-600 px-3 py-1 rounded-full text-sm mb-4 w-fit">
                {product.category}
              </span>

              <h1 className="text-3xl md:text-5xl font-bold text-gray-800">
                {product.name}
              </h1>

              <p className="text-gray-600 mt-5 text-lg">
                {product.description}
              </p>

              <h2 className="text-4xl font-bold text-red-600 mt-6">
                ₹{product.price}
              </h2>

              {/* Features */}
              <div className="mt-8">
                <h3 className="font-bold text-xl mb-3">
                  Product Highlights
                </h3>

                <ul className="space-y-2 text-gray-600">
                  <li>✓ Premium Quality Finish</li>
                  <li>✓ Long Lasting Protection</li>
                  <li>✓ Easy Application</li>
                  <li>✓ Smooth & Elegant Look</li>
                  <li>✓ Suitable For Modern Homes</li>
                </ul>
              </div>

              {/* Buttons */}
              <div className="mt-8 flex flex-col sm:flex-row gap-4">

                <a
                  href={`https://wa.me/919576321825?text=Hi, I'm interested in ${product.name}`}
                  target="_blank"
                  rel="noreferrer"
                  className="bg-green-600 text-white text-center px-6 py-4 rounded-xl font-semibold hover:bg-green-700"
                >
                  Get Quote on WhatsApp
                </a>

                <button className="bg-red-600 text-white px-6 py-4 rounded-xl font-semibold hover:bg-red-700">
                  Contact Store
                </button>

              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}