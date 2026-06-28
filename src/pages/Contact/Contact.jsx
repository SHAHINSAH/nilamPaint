export default function Contact() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-12">

      <div className="text-center mb-10">
        <h1 className="text-3xl md:text-5xl font-bold">
          Contact Us
        </h1>

        <p className="text-gray-500 mt-3">
          Get in touch for paints, putty, primers and waterproofing solutions.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-10">

        {/* Contact Info */}
        <div className="bg-white p-6 rounded-2xl shadow-lg">

          <h2 className="text-2xl font-bold mb-6">
            Reach Us
          </h2>

          <div className="space-y-4">

            <a
              href="tel:+919576321825"
              className="flex items-center gap-3 p-4 rounded-xl bg-blue-50 hover:bg-blue-100"
            >
              📞 +91 95763 21825
            </a>

            <a
              href="mailto:krnikhil1512000@gmail.com?subject=Paint Inquiry"
              className="flex items-center gap-3 p-4 rounded-xl bg-red-50 hover:bg-red-100"
            >
              📧 krnikhil1512000@gmail.com
            </a>

            <a
              href="https://wa.me/919576321825?text=Hi, I'm interested in your paint products."
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-3 p-4 rounded-xl bg-green-50 hover:bg-green-100"
            >
              💬 Chat on WhatsApp
            </a>

          </div>

        </div>

        {/* Contact Form */}
        <div className="bg-white p-6 rounded-2xl shadow-lg">

          <form className="space-y-4">

            <input
              type="text"
              placeholder="Your Name"
              className="w-full border rounded-xl p-3"
            />

            <input
              type="email"
              placeholder="Your Email"
              className="w-full border rounded-xl p-3"
            />

            <input
              type="tel"
              placeholder="Phone Number"
              className="w-full border rounded-xl p-3"
            />

            <textarea
              rows="5"
              placeholder="Your Message"
              className="w-full border rounded-xl p-3"
            />

            <button
              type="submit"
              className="w-full bg-red-600 hover:bg-red-700 text-white py-3 rounded-xl font-semibold"
            >
              Send Message
            </button>

          </form>

        </div>

      </div>
    </div>
  );
}