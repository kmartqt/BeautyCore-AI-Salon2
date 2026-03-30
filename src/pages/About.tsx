import { ImageWithFallback } from "../components/ImageWithFallback";

export function About() {
  return (
    <div className="w-full bg-[#F9F6F0] min-h-screen text-zinc-900 pt-24">
      <div className="w-full h-[60vh] min-h-[500px] relative bg-zinc-900 flex items-center justify-center overflow-hidden">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1735013531564-a419dc5f31ea"
          alt="Clinic Interior"
          className="absolute inset-0 w-full h-full object-cover opacity-50 mix-blend-overlay"
        />
        <div className="relative z-10 text-center px-4 max-w-3xl mx-auto">
          <h1 className="font-serif text-4xl md:text-6xl tracking-[0.15em] text-[#F9F6F0] uppercase font-light mb-6">
            Our Philosophy
          </h1>
          <p className="font-sans text-xs md:text-sm tracking-[0.3em] text-[#D4AF37] uppercase leading-relaxed">
            Where advanced aesthetics meets holistic wellness
          </p>
        </div>
      </div>

      <section className="max-w-[1600px] mx-auto px-6 md:px-12 py-24 md:py-32">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 lg:gap-24 items-center">
          <div className="relative aspect-[4/5] w-full max-w-md mx-auto md:max-w-none shadow-xl">
            <div className="absolute -bottom-8 -right-8 w-48 h-48 bg-[#D4AF37]/10 -z-10 hidden md:block" />
            <div className="absolute -top-8 -left-8 w-32 h-32 border border-[#D4AF37]/30 -z-10 hidden md:block" />
          </div>

          <div className="flex flex-col">
            <h2 className="font-sans text-xs tracking-[0.3em] text-[#D4AF37] uppercase mb-4">The Visionary</h2>
            <h3 className="font-serif text-3xl md:text-5xl font-light text-zinc-900 mb-8 uppercase tracking-wide">Meet Andrea</h3>
            <div className="font-sans text-sm text-zinc-600 leading-relaxed space-y-6">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
                aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis
                aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
                aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis
                aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
                aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis
                aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
            </div>

            <div className="mt-12 pt-12 border-t border-zinc-200">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/f/fa/Signature_of_Andrea.svg"
                alt="Andrea's Signature"
                className="h-12 opacity-60 mix-blend-multiply"
                onError={(e) => (e.currentTarget.style.display = "none")}
              />
              <p className="font-serif italic text-zinc-500 mt-4">Name, Founder &amp; Lead Specialist</p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-zinc-900 text-[#F9F6F0] py-24 md:py-32">
        <div className="max-w-[1600px] mx-auto px-6 md:px-12">
          <div className="text-center mb-20">
            <h2 className="font-serif text-3xl md:text-5xl tracking-[0.15em] font-light uppercase mb-6">Our Core Pillars</h2>
            <div className="w-12 h-[1px] bg-[#D4AF37] mx-auto" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16">
            {[
              {
                title: "Precision",
                desc: "We employ the most advanced, globally recognized aesthetic technologies and protocols. Every treatment plan is meticulously tailored to your unique anatomical structure and concerns.",
                number: "01",
              },
              {
                title: "Purity",
                desc: "We partner exclusively with pharmaceutical-grade, clean-clinical brands. Efficacy is our priority, but we never compromise on the safety and integrity of your skin barrier.",
                number: "02",
              },
              {
                title: "Tranquility",
                desc: "True wellness radiates from within. Our clinic environment is engineered to down-regulate your nervous system the moment you step through our doors.",
                number: "03",
              },
            ].map((pillar, idx) => (
              <div key={idx} className="relative p-8 border border-white/10 hover:border-[#D4AF37]/50 transition-colors duration-500 group">
                <div className="absolute top-6 right-6 text-xs tracking-[0.3em] text-[#D4AF37] uppercase">{pillar.number}</div>
                <h3 className="font-serif text-2xl mb-4">{pillar.title}</h3>
                <p className="font-sans text-sm text-zinc-300 leading-relaxed">{pillar.desc}</p>
                <div className="mt-6 h-[1px] w-16 bg-[#D4AF37]" />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
