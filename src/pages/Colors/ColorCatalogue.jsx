import { useState } from "react";
import { colorData } from "../../data/colorData";
import ColorHero from "../../components/Colors/ColorHero";
import { FaSearch, FaFilter, FaTimes } from "react-icons/fa";

export default function ColorCatalogue() {
  const tabs = [
    "Reds",
    "Oranges",
    "Yellows",
    "Greens",
    "Blues",
    "Violets",
    "Earthtones",
    "Neutrals",
  ];

  const filterOptions = [
    "Cool",
    "Dark",
    "Earthtones",
    "Light",
    "Neutrals",
    "Pastel",
    "Vibrant",
    "Warm",
  ];

  const [activeTab, setActiveTab] = useState("Reds");

  const [search, setSearch] = useState("");

  const [showFilter, setShowFilter] =
    useState(false);

  const filteredColors = colorData.filter(
    (item) =>
      item.tab === activeTab &&
      (
        item.name
          .toLowerCase()
          .includes(search.toLowerCase()) ||

        item.code
          .toLowerCase()
          .includes(search.toLowerCase())
      )
  );

  return (
    <section className="bg-[#f6f6f6] min-h-screen py-8">
      <ColorHero activeTab={activeTab} />

      <div className="max-w-7xl mx-auto px-4">

        {/* Search */}

        <div className="flex justify-end mb-6">

          <div className="relative w-full md:w-96">

            <input
              type="text"

              placeholder="Enter Shade name/code"

              value={search}

              onChange={(e) =>
                setSearch(e.target.value)
              }

              className="w-full border border-gray-300 rounded-lg px-5 py-4 pr-14 bg-white"
            />

            <FaSearch className="absolute top-5 right-5 text-gray-400" />

          </div>

        </div>

        {/* Tabs */}

        <div className="overflow-x-auto mb-8">

          <div className="flex w-max bg-white shadow">

            {tabs.map((tab) => (

              <button
                key={tab}

                onClick={() =>
                  setActiveTab(tab)
                }

                className={`px-6 md:px-10 py-4 whitespace-nowrap border-r

                ${activeTab === tab
                    ? "bg-red-600 text-white"
                    : "bg-white"
                  }`}
              >

                {tab}

              </button>

            ))}

          </div>

        </div>

        {/* Mobile Filter Button */}

        <button

          onClick={() =>
            setShowFilter(true)
          }

          className="md:hidden fixed bottom-5 left-5 z-50 bg-white px-6 py-3 rounded-full shadow-lg flex items-center gap-3"
        >

          <FaFilter />

          FILTER

        </button>

        {/* Main */}

        <div className="flex gap-8">

          {/* Desktop Filter */}

          <div className="hidden md:block w-80">

            <div className="bg-white rounded-3xl p-8 shadow">

              <h2 className="tracking-[10px] text-2xl mb-10">
                FILTER
              </h2>

              <h3 className="font-semibold text-xl mb-8">
                Colour Type
              </h3>

              <div className="space-y-5">

                {filterOptions.map(
                  (item) => (

                    <label
                      key={item}

                      className="flex items-center gap-4"
                    >

                      <input
                        type="checkbox"
                      />

                      {item}

                    </label>

                  )
                )}

              </div>

            </div>

          </div>

          {/* Grid */}

          <div className="flex-1">

            <div className="grid grid-cols-2 md:grid-cols-5 gap-5">

              {filteredColors.map(
                (color) => (

                  <div
                    key={color.code}

                    className="cursor-pointer"
                  >

                    <div

                      className="h-32 md:h-56 rounded-xl hover:scale-105 transition"

                      style={{
                        backgroundColor:
                          color.hex,
                      }}
                    />

                    <h3 className="font-bold mt-3 truncate">

                      {color.name}

                    </h3>

                    <p className="text-gray-500">

                      {color.code}

                    </p>

                  </div>

                )
              )}

            </div>

          </div>

        </div>

      </div>

      {/* Mobile Filter Drawer */}

      {showFilter && (

        <div className="fixed inset-0 bg-white z-50 md:hidden">

          <div className="p-6">

            <div className="flex justify-between items-center mb-10">

              <div className="tracking-[6px] text-xl">

                FILTER

              </div>

              <button

                onClick={() =>
                  setShowFilter(false)
                }

              >

                <FaTimes size={22} />

              </button>

            </div>

            <h3 className="font-semibold text-xl mb-8">

              Colour Type

            </h3>

            <div className="space-y-5">

              {filterOptions.map(
                (item) => (

                  <label
                    key={item}

                    className="flex items-center gap-4"
                  >

                    <input
                      type="checkbox"
                    />

                    {item}

                  </label>

                )
              )}

            </div>

          </div>

          <div className="absolute bottom-0 left-0 right-0 flex border-t">

            <button

              onClick={() =>
                setShowFilter(false)
              }

              className="w-1/2 py-5 border-r"
            >

              CLOSE

            </button>

            <button

              onClick={() =>
                setShowFilter(false)
              }

              className="w-1/2 py-5 text-red-600"
            >

              APPLY

            </button>

          </div>

        </div>

      )}

    </section>
  );
}