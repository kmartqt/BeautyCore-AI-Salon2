import { useState, useEffect } from "react";
import { X } from "lucide-react";

export function BookingModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    const handleHashChange = () => {
      if (window.location.hash === "#book") {
        setIsOpen(true);
        setIsSubmitted(false);
      } else {
        setIsOpen(false);
      }
    };

    handleHashChange();
    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  const closeModal = () => {
    window.history.pushState(null, "", window.location.pathname + window.location.search);
    setIsOpen(false);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Frontend-only simulation of a successful booking
    setIsSubmitted(true);
    setTimeout(() => {
      closeModal();
    }, 3000);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-6 bg-zinc-900/80 backdrop-blur-md transition-opacity">
      <div className="relative w-full max-w-2xl bg-[#F9F6F0] shadow-2xl overflow-hidden flex flex-col max-h-[90vh]">
        {/* Header */}
        <div className="flex justify-between items-center p-6 md:p-8 border-b border-zinc-200 bg-white">
          <div>
            <h2 className="font-serif text-2xl md:text-3xl text-zinc-900 tracking-wide">Request an Appointment</h2>
            <p className="font-sans text-xs tracking-[0.2em] text-[#D4AF37] uppercase mt-2">Andrea's Clinic</p>
          </div>
          <button 
            onClick={closeModal}
            className="text-zinc-400 hover:text-zinc-900 transition-colors"
          >
            <X size={24} strokeWidth={1.5} />
          </button>
        </div>

        {/* Body */}
        <div className="p-6 md:p-8 overflow-y-auto">
          {isSubmitted ? (
            <div className="flex flex-col items-center justify-center py-12 text-center">
              <div className="w-16 h-16 rounded-full bg-[#D4AF37]/20 flex items-center justify-center mb-6">
                <div className="w-8 h-8 rounded-full bg-[#D4AF37] animate-pulse" />
              </div>
              <h3 className="font-serif text-2xl text-zinc-900 mb-4">Request Received</h3>
              <p className="font-sans text-sm text-zinc-600 max-w-md leading-relaxed">
                Thank you for choosing Andrea's Aesthetic & Wellness Clinic. Our concierge team will contact you shortly to confirm your appointment time.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="font-sans text-xs tracking-[0.1em] text-zinc-500 uppercase">First Name</label>
                  <input required type="text" className="w-full bg-white border border-zinc-200 p-3 font-sans text-sm text-zinc-900 focus:outline-none focus:border-[#D4AF37] transition-colors" placeholder="Jane" />
                </div>
                <div className="space-y-2">
                  <label className="font-sans text-xs tracking-[0.1em] text-zinc-500 uppercase">Last Name</label>
                  <input required type="text" className="w-full bg-white border border-zinc-200 p-3 font-sans text-sm text-zinc-900 focus:outline-none focus:border-[#D4AF37] transition-colors" placeholder="Doe" />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="font-sans text-xs tracking-[0.1em] text-zinc-500 uppercase">Email Address</label>
                  <input required type="email" className="w-full bg-white border border-zinc-200 p-3 font-sans text-sm text-zinc-900 focus:outline-none focus:border-[#D4AF37] transition-colors" placeholder="jane@example.com" />
                </div>
                <div className="space-y-2">
                  <label className="font-sans text-xs tracking-[0.1em] text-zinc-500 uppercase">Phone Number</label>
                  <input required type="tel" className="w-full bg-white border border-zinc-200 p-3 font-sans text-sm text-zinc-900 focus:outline-none focus:border-[#D4AF37] transition-colors" placeholder="+63 900 000 0000" />
                </div>
              </div>

              <div className="space-y-2">
                <label className="font-sans text-xs tracking-[0.1em] text-zinc-500 uppercase">Primary Service of Interest</label>
                <select className="w-full bg-white border border-zinc-200 p-3 font-sans text-sm text-zinc-900 focus:outline-none focus:border-[#D4AF37] transition-colors">
                  <option value="">Select a category...</option>
                  <option value="spa">Japanese Head Spa</option>
                  <option value="hair">Hair Design & Color</option>
                  <option value="face">Face & Laser Treatments</option>
                  <option value="nails">Nail Studio</option>
                  <option value="massage">Massage Therapy</option>
                </select>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="font-sans text-xs tracking-[0.1em] text-zinc-500 uppercase">Preferred Date</label>
                  <input required type="date" className="w-full bg-white border border-zinc-200 p-3 font-sans text-sm text-zinc-900 focus:outline-none focus:border-[#D4AF37] transition-colors" />
                </div>
                <div className="space-y-2">
                  <label className="font-sans text-xs tracking-[0.1em] text-zinc-500 uppercase">Preferred Time</label>
                  <select required className="w-full bg-white border border-zinc-200 p-3 font-sans text-sm text-zinc-900 focus:outline-none focus:border-[#D4AF37] transition-colors">
                    <option value="">Select a time...</option>
                    <option value="morning">Morning (9AM - 12PM)</option>
                    <option value="afternoon">Afternoon (12PM - 4PM)</option>
                    <option value="evening">Evening (4PM - 8PM)</option>
                  </select>
                </div>
              </div>

              <button type="submit" className="w-full bg-zinc-900 text-[#F9F6F0] py-4 font-sans text-xs tracking-[0.2em] uppercase hover:bg-[#D4AF37] transition-colors duration-300 mt-4">
                Submit Request
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
