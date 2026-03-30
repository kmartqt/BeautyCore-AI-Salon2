import { Outlet } from "react-router";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { BookingModal } from "./BookingModal";

export function Layout() {
  return (
    <div className="min-h-screen flex flex-col bg-zinc-900 font-sans selection:bg-[#D4AF37] selection:text-white">
      <Header />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
      <BookingModal />
    </div>
  );
}
