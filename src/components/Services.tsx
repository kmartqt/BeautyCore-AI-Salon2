import { Link } from "react-router-dom";
import { ImageWithFallback } from "./ImageWithFallback";

const services = [
  { title: "SPA", image: "https://images.unsplash.com/photo-1633526543913-d30e3c230d1f" },
  { title: "NAILS", image: "https://images.unsplash.com/photo-1599316329891-19df7fa9580d" },
  { title: "HAIR", image: "https://images.unsplash.com/photo-1700493380704-8cd817fa8df8" },
];

export function Services() {
  return (
    <section id="services" className="w-full py-32 bg-[#F9F6F0] text-zinc-900">
      <div className="max-w-[1600px] mx-auto px-6 md:px-12">
        <div className="text-center mb-24">
          <h2 className="font-serif text-3xl md:text-5xl tracking-[0.15em] font-light uppercase mb-6 text-zinc-900">
            Services We Offer
          </h2>
          <div className="w-12 h-[1px] bg-[#D4AF37] mx-auto" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative aspect-[4/5] overflow-hidden bg-zinc-200 cursor-pointer shadow-lg"
            >
              <ImageWithFallback
                src={service.image}
                alt={service.title}
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-transparent opacity-60" />
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <h3 className="font-serif text-3xl tracking-[0.15em] text-white uppercase mb-2">
                  {service.title}
                </h3>
                <Link
                  to={`/services#${service.title.toLowerCase()}`}
                  className="inline-block text-sm text-[#D4AF37] tracking-[0.3em] uppercase hover:text-white"
                >
                  Explore
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
