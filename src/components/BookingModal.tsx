import { useEffect, useState, FormEvent } from "react";

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

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => {
      closeModal();
    }, 3000);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-6 bg-zinc-900/80 backdrop-blur-md transition-opacity">
      <div className="bg-white w-full max-w-2xl border border-zinc-200 shadow-2xl relative overflow-hidden">
        <button
          onClick={closeModal}
          className="absolute right-4 top-4 text-zinc-400 hover:text-zinc-900 transition-colors"
          aria-label="Close booking modal"
        >
          ×
        </button>

        {!isSubmitted ? (
          <form className="p-8 md:p-12 space-y-6" onSubmit={handleSubmit}>
            <div className="space-y-3">
              <p className="font-sans text-xs tracking-[0.3em] text-[#D4AF37] uppercase">Book Now</p>
              <h3 className="font-serif text-3xl text-zinc-900">Schedule an Appointment</h3>
              <p className="font-sans text-sm text-zinc-500 leading-relaxed">
                We&apos;ll confirm your booking within one business day.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                required
                className="border border-zinc-200 px-4 py-3 text-sm"
                placeholder="Full Name"
              />
              <input
                required
                type="email"
                className="border border-zinc-200 px-4 py-3 text-sm"
                placeholder="Email Address"
              />
              <input
                required
                className="border border-zinc-200 px-4 py-3 text-sm"
                placeholder="Phone Number"
              />
              <input className="border border-zinc-200 px-4 py-3 text-sm" placeholder="Preferred Date" />
            </div>

            <textarea
              className="w-full border border-zinc-200 px-4 py-3 text-sm min-h-28"
              placeholder="Tell us about your goals"
            />

            <button
              type="submit"
              className="w-full bg-zinc-900 text-[#D4AF37] py-3 uppercase tracking-[0.2em] text-xs hover:bg-zinc-800 transition-colors"
            >
              Submit Request
            </button>
          </form>
        ) : (
          <div className="p-12 text-center space-y-4">
            <h3 className="font-serif text-3xl text-zinc-900">Request Received</h3>
            <p className="font-sans text-sm text-zinc-500 leading-relaxed max-w-md mx-auto">
              Thank you for choosing Andrea&apos;s. Our concierge will reach out shortly to confirm your
              appointment details.
            </p>
            <button
              onClick={closeModal}
              className="mt-4 border border-zinc-900 px-6 py-2 text-sm uppercase tracking-[0.2em]"
            >
              Close
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
