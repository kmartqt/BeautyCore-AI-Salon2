import { Link } from "react-router";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function Hero() {
  return (
    <section className="relative w-full h-screen min-h-[700px] flex items-center justify-center overflow-hidden bg-zinc-900">
      {/* Background Image */}
      <div className="absolute inset-0 w-full h-full">
        
        
      </div>

      {/* Hero Content */}
      <div className="relative z-10 flex flex-col items-center text-center px-4 max-w-5xl mx-auto mt-20">
        <h2 className="font-sans text-xs md:text-sm tracking-[0.3em] text-[#D4AF37] uppercase mb-6">
          Aesthetic & Wellness Clinic
        </h2>
        <h1 className="font-serif text-5xl md:text-7xl lg:text-[6rem] tracking-[0.15em] font-light text-[#F9F6F0] mb-8 uppercase leading-tight">
          Andrea's
        </h1>
        <p className="font-sans text-sm md:text-base tracking-[0.1em] text-zinc-300 max-w-xl mx-auto font-light leading-relaxed">
          Experience the pinnacle of luxury grooming and holistic wellness in an atmosphere of refined elegance.
        </p>
        <div className="mt-12">
          <Link
            to="/services"
            className="inline-block border-b border-[#D4AF37]/50 pb-1 font-sans text-[11px] tracking-[0.3em] text-[#D4AF37] hover:text-[#F9F6F0] hover:border-[#F9F6F0] uppercase transition-all duration-300"
          >
            Discover Our Services
          </Link>
        </div>
      </div>
    </section>
  );
}
