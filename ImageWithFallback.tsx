import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 w-full bg-zinc-900/60 backdrop-blur-md border-b border-white/5 transition-all duration-300">
      <div className="max-w-[1600px] mx-auto px-6 md:px-12 flex items-center justify-between h-24">
        <div className="flex flex-col cursor-pointer">
          <Link to="/" className="font-serif text-3xl tracking-[0.2em] text-[#F9F6F0] uppercase hover:text-[#D4AF37] transition-colors">
            Andrea's
          </Link>
          <span className="font-sans text-[10px] tracking-[0.3em] text-[#D4AF37] mt-1 uppercase">
            Aesthetic & Wellness Clinic
          </span>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center space-x-12">
          {["Spa", "Nails", "Hair", "Packages"].map((item) => (
            <Link
              key={item}
              to={`/services#${item.toLowerCase()}`}
              className="font-sans text-xs tracking-[0.2em] text-zinc-300 hover:text-[#D4AF37] uppercase transition-colors"
            >
              {item}
            </Link>
          ))}
          {["About"].map((item) => (
            <Link
              key={item}
              to={`/about`}
              className="font-sans text-xs tracking-[0.2em] text-zinc-300 hover:text-[#D4AF37] uppercase transition-colors"
            >
              {item}
            </Link>
          ))}
          <Link
            to="/contact"
            className="font-sans text-xs tracking-[0.2em] text-zinc-300 hover:text-[#D4AF37] uppercase transition-colors"
          >
            Contact
          </Link>
        </nav>

        <div className="hidden lg:flex items-center">
          <a
            href="#book"
            className="font-sans text-xs tracking-[0.15em] text-[#D4AF37] hover:text-[#F9F6F0] uppercase font-medium transition-colors border border-[#D4AF37] px-6 py-2.5 hover:bg-[#D4AF37] hover:bg-opacity-20"
          >
            Book Now
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          className="lg:hidden text-[#F9F6F0] p-2"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={28} strokeWidth={1.5} /> : <Menu size={28} strokeWidth={1.5} />}
        </button>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="lg:hidden absolute top-24 left-0 w-full bg-zinc-900/95 backdrop-blur-lg border-b border-white/10 py-8 px-6 flex flex-col space-y-8 shadow-2xl">
          {["Spa", "Nails", "Hair", "Packages"].map((item) => (
            <Link
              key={item}
              to={`/services#${item.toLowerCase()}`}
              className="font-sans text-sm tracking-[0.25em] text-[#F9F6F0] uppercase text-center"
              onClick={() => setIsOpen(false)}
            >
              {item}
            </Link>
          ))}
          {["About"].map((item) => (
            <Link
              key={item}
              to={`/about`}
              className="font-sans text-sm tracking-[0.25em] text-[#F9F6F0] uppercase text-center"
              onClick={() => setIsOpen(false)}
            >
              {item}
            </Link>
          ))}
          <Link
            to="/contact"
            className="font-sans text-sm tracking-[0.25em] text-[#F9F6F0] uppercase text-center"
            onClick={() => setIsOpen(false)}
          >
            Contact
          </Link>
          <div className="pt-6 border-t border-white/10 flex justify-center">
            <a
              href="#book"
              className="font-sans text-sm tracking-[0.2em] text-zinc-900 bg-[#D4AF37] px-8 py-3 uppercase"
              onClick={() => setIsOpen(false)}
            >
              Book Now
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
