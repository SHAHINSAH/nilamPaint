export default function ColorHero({ activeTab }) {
  const heroData = {
    Reds: {
      title: "Bold & Passionate Reds",
      description: "Add energy and elegance to your home.",
      gradient: "from-red-700 to-red-500",
      button: "bg-red-600",
    },

    Oranges: {
      title: "Warm & Cheerful Oranges",
      description: "Create welcoming and vibrant spaces.",
      gradient: "from-orange-700 to-orange-500",
      button: "bg-orange-600",
    },

    Yellows: {
      title: "Bright & Happy Yellows",
      description: "Sunshine inspired shades for modern homes.",
      gradient: "from-yellow-600 to-yellow-400",
      button: "bg-yellow-500",
    },

    Greens: {
      title: "Natural & Refreshing Greens",
      description: "Bring nature into your home.",
      gradient: "from-green-700 to-green-500",
      button: "bg-green-600",
    },

    Blues: {
      title: "Elegant & Peaceful Blues",
      description: "Calming colours for beautiful spaces.",
      gradient: "from-blue-700 to-blue-500",
      button: "bg-blue-600",
    },

    Violets: {
      title: "Royal & Creative Violets",
      description: "Luxury shades for premium interiors.",
      gradient: "from-purple-700 to-purple-500",
      button: "bg-purple-600",
    },

    Earthtones: {
      title: "Comfortable Earth Tones",
      description: "Inspired by nature and timeless beauty.",
      gradient: "from-amber-700 to-amber-500",
      button: "bg-amber-700",
    },

    Neutrals: {
      title: "Minimal & Elegant Neutrals",
      description: "Simple and sophisticated colours.",
      gradient: "from-slate-700 to-slate-400",
      button: "bg-slate-700",
    },
  };

  const data = heroData[activeTab];

  return (
    <section
      className={`relative overflow-hidden rounded-3xl bg-gradient-to-br ${data.gradient} mb-8`}
    >
      {/* Decorative circles */}

      <div className="absolute -top-16 -right-16 h-40 w-40 rounded-full bg-white/10"></div>

      <div className="absolute bottom-0 -left-12 h-28 w-28 rounded-full bg-white/10"></div>

      <div className="relative z-10 p-6 md:p-14 text-white">

        <span className="inline-block bg-white/20 px-4 py-2 rounded-full text-sm">
          Nilam Colour Studio
        </span>

        <h1 className="mt-6 text-4xl md:text-6xl font-bold leading-tight max-w-3xl">
          {data.title}
        </h1>

        <p className="mt-5 text-base md:text-xl text-white/90 max-w-2xl">
          {data.description}
        </p>

        <button
          className={`${data.button} mt-8 px-8 py-4 rounded-2xl font-semibold shadow-lg hover:scale-105 transition`}
        >
          Explore Shades
        </button>

      </div>
    </section>
  );
}