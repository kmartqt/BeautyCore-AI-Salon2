export function Footer() {
  return (
    <footer className="w-full bg-zinc-900 text-[#F9F6F0] pt-24 pb-12">
      <div className="max-w-[1600px] mx-auto px-6 md:px-12 flex flex-col items-center text-center">
        <div className="mb-12">
          <h2 className="font-serif text-4xl tracking-[0.2em] font-light mb-3 uppercase">Andrea's</h2>
          <p className="font-sans text-[10px] tracking-[0.3em] text-[#D4AF37] uppercase">Aesthetic & Wellness Clinic • Est. 2026</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-24 mb-16 w-full max-w-4xl">
          <div className="flex flex-col gap-3">
            <span className="font-sans text-[10px] tracking-[0.25em] uppercase text-zinc-500 mb-2">Location</span>
            <p className="font-serif font-light text-zinc-300 text-sm md:text-base tracking-wide">4X85+437 Brgy, Guerra Building, Gov Panotes Ave, Barangay VIII<br/></p>
          </div>
          <div className="flex flex-col gap-3">
            <span className="font-sans text-[10px] tracking-[0.25em] uppercase text-zinc-500 mb-2">Contact</span>
            <p className="font-serif font-light text-zinc-300 text-sm md:text-base tracking-wide">+1 (212) 555-0199<br/>hello@andreasclinic.com</p>
          </div>
          <div className="flex flex-col gap-3">
            <span className="font-sans text-[10px] tracking-[0.25em] uppercase text-zinc-500 mb-2">Hours</span>
            <p className="font-serif font-light text-zinc-300 text-sm md:text-base tracking-wide">Mon-Sat: 9AM - 8PM<br/>Sun: 10AM - 6PM</p>
          </div>
        </div>
        
        <div className="w-full h-[1px] bg-white/10 mb-8" />
        
        <div className="flex flex-col md:flex-row justify-between w-full items-center gap-4">
            <p className="font-sans text-[10px] tracking-[0.1em] text-zinc-500">
            © {new Date().getFullYear()} Andrea's Aesthetic & Wellness Clinic. All rights reserved.
            </p>
            <div className="flex gap-6">
                {["Instagram", "Facebook", "Twitter"].map(social => (
                    <a key={social} href="#" className="font-sans text-[10px] tracking-[0.15em] uppercase text-zinc-500 hover:text-[#D4AF37] transition-colors">
                        {social}
                    </a>
                ))}
            </div>
        </div>
      </div>
    </footer>
  );
}
