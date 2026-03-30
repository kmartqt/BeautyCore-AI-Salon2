import { Link } from "react-router";
import { ImageWithFallback } from "./figma/ImageWithFallback";

const services = [
  {
    title: "SPA",
    image: "https://images.unsplash.com/photo-1633526543913-d30e3c230d1f",
  },
  {
    title: "NAILS",
    image: "https://images.unsplash.com/photo-1599316329891-19df7fa9580d",
  },
  {
    title: "HAIR",
    image: "https://images.unsplash.com/photo-1700493380704-8cd817fa8df8",
  },
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
              <div className="absolute inset-0 bg-zinc-900/40 group-hover:bg-zinc-900/60 transition-colors duration-500" />
              
              <div className="absolute inset-0 flex flex-col items-center justify-center p-8">
                <h3 className="font-serif text-3xl md:text-4xl lg:text-5xl tracking-[0.15em] font-light text-[#F9F6F0] mb-8 uppercase drop-shadow-md">
                  {service.title}
                </h3>
                <Link to={`/services#${service.title.toLowerCase()}`} className="bg-[#F9F6F0] text-zinc-900 px-10 py-3.5 font-sans text-[10px] tracking-[0.25em] uppercase hover:bg-[#D4AF37] hover:text-[#F9F6F0] transition-all duration-300">
                  More
                </Link>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-24 text-center">
            <p className="font-serif text-xl md:text-2xl text-zinc-500 font-light italic mb-8">
                "Self-care is not an indulgence, it's a necessity."
            </p>
            <a
                href="#book"
                className="inline-block bg-zinc-900 text-[#F9F6F0] px-12 py-4 font-sans text-xs tracking-[0.2em] uppercase hover:bg-[#D4AF37] transition-colors duration-300"
            >
                Book Your Appointment
            </a>
        </div>
      </div>
    </section>
  );
}
