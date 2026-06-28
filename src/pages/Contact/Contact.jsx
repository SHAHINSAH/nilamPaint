export default function Contact() {
  return (
    <div className="max-w-4xl mx-auto p-10">
      <h1 className="text-4xl font-bold mb-6">
        Contact Us
      </h1>

      <form className="space-y-4">
        <input
          className="border p-3 w-full"
          placeholder="Name"
        />

        <input
          className="border p-3 w-full"
          placeholder="Email"
        />

        <textarea
          className="border p-3 w-full"
          rows="5"
          placeholder="Message"
        />

        <button className="bg-red-500 text-white px-6 py-3 rounded">
          Submit
        </button>
      </form>
    </div>
  );
}