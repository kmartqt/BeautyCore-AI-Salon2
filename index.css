import { MapPin, Phone, Mail, Clock, ArrowRight } from "lucide-react";
import { Link } from "react-router";

export function Contact() {
  return (
    <div className="pt-24 pb-20 px-6 md:px-12 max-w-[1600px] mx-auto min-h-screen flex flex-col">
      <div className="mb-16 md:mb-24 flex-shrink-0 pt-16">
        <h1 className="font-serif text-4xl md:text-6xl text-[#F9F6F0] tracking-wide mb-6">Contact Us</h1>
        <p className="font-sans text-zinc-400 max-w-2xl leading-relaxed tracking-wide">
          Whether you're looking to book a consultation, inquire about our treatments, or simply learn more about Andrea's Aesthetic & Wellness Clinic, we're here to assist you.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 md:gap-24 flex-1">
        {/* Contact Information */}
        <div className="space-y-12">
          <div className="space-y-8">
            <h2 className="font-serif text-2xl text-[#D4AF37] tracking-wider uppercase">Get in Touch</h2>
            
            <div className="flex items-start space-x-6 group">
              <div className="p-4 bg-zinc-800/50 rounded-full text-[#D4AF37] group-hover:bg-[#D4AF37] group-hover:text-zinc-900 transition-colors">
                <MapPin size={24} strokeWidth={1.5} />
              </div>
              <div>
                <h3 className="font-sans text-sm tracking-[0.2em] text-[#F9F6F0] uppercase mb-2">Location</h3>
                <p className="font-sans text-zinc-400 leading-relaxed">
                  123 Luxury Avenue, Suite 400<br />
                  Makati City, Metro Manila 1226<br />
                  Philippines
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-6 group">
              <div className="p-4 bg-zinc-800/50 rounded-full text-[#D4AF37] group-hover:bg-[#D4AF37] group-hover:text-zinc-900 transition-colors">
                <Phone size={24} strokeWidth={1.5} />
              </div>
              <div>
                <h3 className="font-sans text-sm tracking-[0.2em] text-[#F9F6F0] uppercase mb-2">Phone</h3>
                <p className="font-sans text-zinc-400 leading-relaxed">
                  +63 (2) 8123 4567<br />
                  +63 917 123 4567
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-6 group">
              <div className="p-4 bg-zinc-800/50 rounded-full text-[#D4AF37] group-hover:bg-[#D4AF37] group-hover:text-zinc-900 transition-colors">
                <Mail size={24} strokeWidth={1.5} />
              </div>
              <div>
                <h3 className="font-sans text-sm tracking-[0.2em] text-[#F9F6F0] uppercase mb-2">Email</h3>
                <p className="font-sans text-zinc-400 leading-relaxed">
                  concierge@andreasclinic.com<br />
                  bookings@andreasclinic.com
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-6 group">
              <div className="p-4 bg-zinc-800/50 rounded-full text-[#D4AF37] group-hover:bg-[#D4AF37] group-hover:text-zinc-900 transition-colors">
                <Clock size={24} strokeWidth={1.5} />
              </div>
              <div>
                <h3 className="font-sans text-sm tracking-[0.2em] text-[#F9F6F0] uppercase mb-2">Hours</h3>
                <p className="font-sans text-zinc-400 leading-relaxed">
                  Monday - Saturday: 10:00 AM - 8:00 PM<br />
                  Sunday: Closed
                </p>
              </div>
            </div>
          </div>
          
          {/* Admin Access Section inside Contact */}
          <div className="pt-12 border-t border-white/10">
            <h3 className="font-sans text-sm tracking-[0.2em] text-[#F9F6F0] uppercase mb-4">Staff & Partners</h3>
            <p className="font-sans text-sm text-zinc-500 mb-6 max-w-md">
              Authorized personnel and clinic administrators can access the dashboard management system below.
            </p>
            <Link 
              to="/admin" 
              className="inline-flex items-center space-x-3 text-[#D4AF37] hover:text-[#F9F6F0] font-sans text-xs tracking-[0.2em] uppercase transition-colors group"
            >
              <span>Access Admin Dashboard</span>
              <ArrowRight size={16} className="transform group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>

        {/* Contact Form */}
        <div className="bg-zinc-800/30 p-8 md:p-12 border border-white/5 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#D4AF37]/5 rounded-full blur-3xl" />
          
          <h2 className="font-serif text-2xl text-[#F9F6F0] mb-8 relative z-10">Send an Inquiry</h2>
          
          <form className="space-y-6 relative z-10" onSubmit={(e) => e.preventDefault()}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="font-sans text-xs tracking-[0.1em] text-zinc-400 uppercase">First Name</label>
                <input 
                  type="text" 
                  className="w-full bg-zinc-900/50 border border-white/10 p-4 text-[#F9F6F0] focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37] outline-none transition-all font-sans"
                  placeholder="Jane"
                />
              </div>
              <div className="space-y-2">
                <label className="font-sans text-xs tracking-[0.1em] text-zinc-400 uppercase">Last Name</label>
                <input 
                  type="text" 
                  className="w-full bg-zinc-900/50 border border-white/10 p-4 text-[#F9F6F0] focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37] outline-none transition-all font-sans"
                  placeholder="Doe"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="font-sans text-xs tracking-[0.1em] text-zinc-400 uppercase">Email Address</label>
              <input 
                type="email" 
                className="w-full bg-zinc-900/50 border border-white/10 p-4 text-[#F9F6F0] focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37] outline-none transition-all font-sans"
                placeholder="jane@example.com"
              />
            </div>

            <div className="space-y-2">
              <label className="font-sans text-xs tracking-[0.1em] text-zinc-400 uppercase">Message</label>
              <textarea 
                className="w-full bg-zinc-900/50 border border-white/10 p-4 text-[#F9F6F0] focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37] outline-none transition-all font-sans min-h-[160px] resize-none"
                placeholder="How can we help you?"
              ></textarea>
            </div>

            <button 
              type="submit"
              className="w-full bg-[#D4AF37] text-zinc-900 font-sans text-xs tracking-[0.2em] uppercase py-4 hover:bg-[#F9F6F0] transition-colors mt-4"
            >
              Submit Inquiry
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}