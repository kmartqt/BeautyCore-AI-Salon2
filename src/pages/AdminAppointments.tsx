import { useState } from "react";
import { Search, Plus, Filter, MoreHorizontal, X } from "lucide-react";

const appointmentsData = [
  { id: 1, date: "2026-03-30", time: "09:00 AM", client: "Eleanor Vance", service: "Signature Gold Facial", stylist: "Sarah J.", status: "In Progress", amount: "₱4,500" },
  { id: 2, date: "2026-03-30", time: "10:30 AM", client: "Victoria Sterling", service: "Botox Consultation", stylist: "Dr. Andrea", status: "Waiting", amount: "₱2,000" },
  { id: 3, date: "2026-03-30", time: "11:00 AM", client: "Claire Dunphy", service: "Microneedling", stylist: "Maria C.", status: "Scheduled", amount: "₱6,500" },
  { id: 4, date: "2026-03-30", time: "01:00 PM", client: "Samantha Jones", service: "Laser Hair Removal", stylist: "Jessica T.", status: "Scheduled", amount: "₱8,000" },
  { id: 5, date: "2026-03-31", time: "09:00 AM", client: "Diana Prince", service: "Hydrafacial", stylist: "Sarah J.", status: "Scheduled", amount: "₱5,500" },
  { id: 6, date: "2026-03-31", time: "11:30 AM", client: "Carrie Bradshaw", service: "Dermal Fillers", stylist: "Dr. Andrea", status: "Scheduled", amount: "₱15,000" },
  { id: 7, date: "2026-04-01", time: "02:00 PM", client: "Miranda Hobbs", service: "Chemical Peel", stylist: "Maria C.", status: "Scheduled", amount: "₱7,000" },
];

export function AdminAppointments() {
  const [showForm, setShowForm] = useState(false);

  return (
    <div className="max-w-6xl mx-auto space-y-8 h-full flex flex-col relative">
      <div className="flex items-end justify-between shrink-0">
        <div>
          <h1 className="font-serif text-3xl text-[#1C1C1C] mb-2">Appointments</h1>
          <p className="text-sm text-[#8C8A84]">Manage your clinic&apos;s upcoming bookings and schedule.</p>
        </div>
        <button
          onClick={() => setShowForm(true)}
          className="px-4 py-2 bg-[#1C1C1C] text-[#C4A47C] text-sm hover:bg-[#2A2A2A] transition-colors rounded-none flex items-center gap-2"
        >
          <Plus size={16} />
          New Appointment
        </button>
      </div>

      <div className="flex flex-col sm:flex-row justify-between items-center gap-4 bg-white border border-[#E8E6E1] p-4 shrink-0">
        <div className="relative w-full sm:w-96">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#8C8A84]" size={16} />
          <input
            type="text"
            placeholder="Search appointments..."
            className="w-full pl-10 pr-4 py-2 text-sm border border-[#E8E6E1] bg-[#FAFAF9] focus:outline-none focus:border-[#C4A47C] transition-colors rounded-none"
          />
        </div>
        <div className="flex items-center gap-3 w-full sm:w-auto">
          <button className="flex items-center gap-2 px-4 py-2 border border-[#E8E6E1] text-sm text-[#1C1C1C] bg-white hover:bg-[#F5F5F0] transition-colors rounded-none whitespace-nowrap">
            <Filter size={16} />
            Filter
          </button>
        </div>
      </div>

      <div className="bg-white border border-[#E8E6E1] flex-1 overflow-hidden flex flex-col">
        <div className="overflow-x-auto overflow-y-auto flex-1">
          <table className="w-full text-sm text-left">
            <thead className="text-xs text-[#8C8A84] uppercase tracking-wider border-b border-[#E8E6E1]">
              <tr>
                <th className="px-6 py-4 font-medium">Date</th>
                <th className="px-6 py-4 font-medium">Time</th>
                <th className="px-6 py-4 font-medium">Client</th>
                <th className="px-6 py-4 font-medium">Service</th>
                <th className="px-6 py-4 font-medium">Provider</th>
                <th className="px-6 py-4 font-medium">Status</th>
                <th className="px-6 py-4 font-medium text-right">Amount</th>
                <th className="px-6 py-4 font-medium text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#E8E6E1]">
              {appointmentsData.map((apt) => (
                <tr key={apt.id} className="hover:bg-[#FAFAF9] transition-colors">
                  <td className="px-6 py-4 whitespace-nowrap text-[#1C1C1C]">{apt.date}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-[#1C1C1C]">{apt.time}</td>
                  <td className="px-6 py-4 whitespace-nowrap font-medium text-[#1C1C1C]">{apt.client}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-[#8C8A84]">{apt.service}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-[#8C8A84]">{apt.stylist}</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="px-2.5 py-1 bg-[#FCF7ED] text-[#C4A47C] uppercase tracking-[0.2em] text-[11px]">
                      {apt.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-right text-[#1C1C1C]">{apt.amount}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-right">
                    <button className="text-[#8C8A84] hover:text-[#1C1C1C] transition-colors p-2">
                      <MoreHorizontal size={18} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {showForm && (
        <div className="fixed inset-0 bg-[#1C1C1C]/40 backdrop-blur-sm flex items-center justify-center z-50">
          <div className="bg-white w-full max-w-lg shadow-2xl overflow-hidden border border-[#E8E6E1]">
            <div className="flex items-center justify-between p-6 border-b border-[#E8E6E1] bg-[#FAFAF9]">
              <h2 className="font-serif text-xl text-[#1C1C1C]">New Appointment</h2>
              <button onClick={() => setShowForm(false)} className="text-[#8C8A84] hover:text-[#1C1C1C] transition-colors">
                <X size={20} />
              </button>
            </div>

            <form className="p-6 space-y-6" onSubmit={(e) => { e.preventDefault(); setShowForm(false); }}>
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-medium text-[#8C8A84] uppercase tracking-wider mb-2">Client Name</label>
                    <input className="w-full px-4 py-2 border border-[#E8E6E1] focus:outline-none focus:border-[#C4A47C] bg-white text-sm transition-colors" />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-[#8C8A84] uppercase tracking-wider mb-2">Service</label>
                    <input className="w-full px-4 py-2 border border-[#E8E6E1] focus:outline-none focus:border-[#C4A47C] bg-white text-sm transition-colors" />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-medium text-[#8C8A84] uppercase tracking-wider mb-2">Date</label>
                    <input type="date" className="w-full px-4 py-2 border border-[#E8E6E1] focus:outline-none focus:border-[#C4A47C] bg-white text-sm transition-colors" />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-[#8C8A84] uppercase tracking-wider mb-2">Time</label>
                    <input type="time" className="w-full px-4 py-2 border border-[#E8E6E1] focus:outline-none focus:border-[#C4A47C] bg-white text-sm transition-colors" />
                  </div>
                </div>
              </div>

              <div className="flex justify-end gap-3">
                <button type="button" onClick={() => setShowForm(false)} className="px-4 py-2 border border-[#E8E6E1] text-sm text-[#1C1C1C] bg-white hover:bg-[#F5F5F0] transition-colors rounded-none">
                  Cancel
                </button>
                <button type="submit" className="px-4 py-2 bg-[#1C1C1C] text-[#C4A47C] text-sm hover:bg-[#2A2A2A] transition-colors rounded-none">
                  Save
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
