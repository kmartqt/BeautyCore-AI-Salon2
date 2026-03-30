export function Footer() {
  return (
    <footer className="bg-[#0F0F0F] text-[#F9F6F0] py-16 md:py-20 px-6 md:px-12 mt-24">
      <div className="max-w-[1600px] mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-16">
        <div className="space-y-4">
          <h3 className="font-serif text-2xl tracking-[0.1em] uppercase">Andrea&apos;s</h3>
          <p className="font-sans text-sm text-zinc-400 leading-relaxed">
            Aesthetic &amp; Wellness Clinic offering bespoke treatments and luxury experiences.
          </p>
        </div>

        <div className="space-y-4">
          <h4 className="font-sans text-xs tracking-[0.3em] text-[#D4AF37] uppercase">Visit</h4>
          <p className="font-sans text-sm text-zinc-400 leading-relaxed">
            123 Luxury Avenue, Suite 400
            <br />
            Makati City, Metro Manila 1226
            <br />
            Philippines
          </p>
        </div>

        <div className="space-y-4">
          <h4 className="font-sans text-xs tracking-[0.3em] text-[#D4AF37] uppercase">Contact</h4>
          <p className="font-sans text-sm text-zinc-400 leading-relaxed">
            concierge@andreasclinic.com
            <br />
            +63 (2) 8123 4567
            <br />
            +63 917 123 4567
          </p>
        </div>

        <div className="space-y-4">
          <h4 className="font-sans text-xs tracking-[0.3em] text-[#D4AF37] uppercase">Hours</h4>
          <p className="font-sans text-sm text-zinc-400 leading-relaxed">
            Monday - Saturday: 10:00 AM - 8:00 PM
            <br />
            Sunday: Closed
          </p>
        </div>
      </div>
    </footer>
  );
}
