export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <picture>
        {/* Mobile Banner */}
        <source
          media="(max-width: 768px)"
          srcSet="/images/hero-mobile-banner.png"
        />

        {/* Desktop Banner */}
        <img
          src="/images/hero-banner.png"
          alt="Nilam Color World"
          className="w-full h-auto object-cover"
        />
      </picture>
    </section>
  );
}