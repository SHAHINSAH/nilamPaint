import { useState } from "react";

export default function ColorPalette() {
  const categories = [
    "Reds",
    "Oranges",
    "Yellows",
    "Greens",
    "Blues",
    "Purples",
    "Neutrals",
  ];

  const colors = [
    {
      name: "Ruby Red",
      code: "NCW101",
      hex: "#D62828",
      category: "Reds",
    },

    {
      name: "Sunset Orange",
      code: "NCW102",
      hex: "#F77F00",
      category: "Oranges",
    },

    {
      name: "Golden Yellow",
      code: "NCW103",
      hex: "#FFC300",
      category: "Yellows",
    },

    {
      name: "Mint Green",
      code: "NCW104",
      hex: "#2ECC71",
      category: "Greens",
    },

    {
      name: "Ocean Blue",
      code: "NCW105",
      hex: "#2980B9",
      category: "Blues",
    },

    {
      name: "Royal Purple",
      code: "NCW106",
      hex: "#8E44AD",
      category: "Purples",
    },

    {
      name: "Cream White",
      code: "NCW107",
      hex: "#F5F5DC",
      category: "Neutrals",
    },

    {
      name: "Soft Pink",
      code: "NCW108",
      hex: "#E8B4BC",
      category: "Reds",
    },

    {
      name: "Peach Glow",
      code: "NCW109",
      hex: "#FFB38A",
      category: "Oranges",
    },

    {
      name: "Sky Blue",
      code: "NCW110",
      hex: "#85C1E9",
      category: "Blues",
    },
  ];

  const [active, setActive] = useState("Reds");
  const [search, setSearch] = useState("");

  const filtered = colors.filter(
    (item) =>
      item.category === active &&
      (
        item.name.toLowerCase().includes(search.toLowerCase()) ||
        item.code.toLowerCase().includes(search.toLowerCase())
      )
  );

  return (
    <section className="bg-gray-50 py-12">

      <div className="max-w-7xl mx-auto px-4">

        <h2 className="text-3xl md:text-5xl font-bold text-center mb-10">
          Colour Catalogue
        </h2>

        {/* Search */}

        <div className="mb-6">

          <input
            type="text"
            placeholder="Enter shade name/code"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full border rounded-xl p-4"
          />

        </div>

        {/* Categories */}

        <div className="flex overflow-x-auto gap-3 pb-4 mb-8">

          {categories.map((item) => (

            <button
              key={item}
              onClick={() => setActive(item)}
              className={`px-5 py-3 rounded-xl whitespace-nowrap font-medium

              ${
                active === item
                  ? "bg-red-600 text-white"
                  : "bg-white shadow"
              }`}
            >
              {item}
            </button>

          ))}

        </div>

        {/* Color Grid */}

        <div className="grid grid-cols-2 md:grid-cols-5 lg:grid-cols-6 gap-5">

          {filtered.map((color) => (

            <div
              key={color.code}
              className="bg-white rounded-2xl shadow hover:shadow-xl p-3 transition"
            >

              <div
                className="h-28 rounded-xl"
                style={{
                  backgroundColor: color.hex,
                }}
              />

              <div className="mt-3">

                <h3 className="font-semibold truncate">
                  {color.name}
                </h3>

                <p className="text-gray-500 text-sm">
                  {color.code}
                </p>

              </div>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}