import { useState } from "react";

export default function PaintCalculator() {
  const [length, setLength] = useState("");
  const [width, setWidth] = useState("");
  const [coats, setCoats] = useState(2);
  const [result, setResult] = useState(null);

  const calculatePaint = () => {
    const area = length * width;
    const litres = ((area * coats) / 100).toFixed(2);

    setResult({
      area,
      litres,
      estimatedCost: Math.round(litres * 350),
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-red-500 to-orange-400 py-16">
      <div className="max-w-4xl mx-auto bg-white rounded-3xl shadow-2xl p-10">

        <h1 className="text-5xl font-bold text-center text-gray-800 mb-4">
          Paint Cost Calculator
        </h1>

        <p className="text-center text-gray-500 mb-10">
          Calculate paint quantity and estimated cost instantly.
        </p>

        <div className="grid md:grid-cols-2 gap-6">

          <div>
            <label className="block mb-2 font-semibold">
              Wall Length (ft)
            </label>

            <input
              type="number"
              value={length}
              onChange={(e) => setLength(e.target.value)}
              className="w-full border rounded-lg p-4"
              placeholder="Enter length"
            />
          </div>

          <div>
            <label className="block mb-2 font-semibold">
              Wall Width (ft)
            </label>

            <input
              type="number"
              value={width}
              onChange={(e) => setWidth(e.target.value)}
              className="w-full border rounded-lg p-4"
              placeholder="Enter width"
            />
          </div>

          <div>
            <label className="block mb-2 font-semibold">
              Number of Coats
            </label>

            <select
              value={coats}
              onChange={(e) => setCoats(Number(e.target.value))}
              className="w-full border rounded-lg p-4"
            >
              <option value={1}>1 Coat</option>
              <option value={2}>2 Coats</option>
              <option value={3}>3 Coats</option>
            </select>
          </div>

        </div>

        <button
          onClick={calculatePaint}
          className="w-full mt-8 bg-red-600 hover:bg-red-700 text-white py-4 rounded-xl text-lg font-semibold"
        >
          Calculate
        </button>

        {result && (
          <div className="mt-10 bg-gray-100 rounded-2xl p-8">
            <h2 className="text-3xl font-bold mb-6">
              Calculation Result
            </h2>

            <div className="grid md:grid-cols-3 gap-5">

              <div className="bg-white p-5 rounded-xl shadow">
                <h3 className="font-semibold text-gray-500">
                  Area
                </h3>
                <p className="text-2xl font-bold">
                  {result.area} sq.ft
                </p>
              </div>

              <div className="bg-white p-5 rounded-xl shadow">
                <h3 className="font-semibold text-gray-500">
                  Paint Needed
                </h3>
                <p className="text-2xl font-bold">
                  {result.litres} L
                </p>
              </div>

              <div className="bg-white p-5 rounded-xl shadow">
                <h3 className="font-semibold text-gray-500">
                  Estimated Cost
                </h3>
                <p className="text-2xl font-bold text-green-600">
                  ₹{result.estimatedCost}
                </p>
              </div>

            </div>
          </div>
        )}
      </div>
    </div>
  );
}