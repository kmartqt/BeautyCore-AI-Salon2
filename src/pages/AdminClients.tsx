import { useState } from "react";
import { Search, Plus, Filter, MoreHorizontal, Mail, Phone, X } from "lucide-react";

const clientsData = [
  { id: 1, name: "Eleanor Vance", email: "eleanor.v@example.com", phone: "+63 917 123 4567", totalSpend: "₱42,500", lastVisit: "2026-03-30", visits: 8, status: "VIP" },
  { id: 2, name: "Victoria Sterling", email: "v.sterling@example.com", phone: "+63 918 234 5678", totalSpend: "₱12,000", lastVisit: "2026-03-15", visits: 3, status: "Active" },
  { id: 3, name: "Claire Dunphy", email: "claire.d@example.com", phone: "+63 919 345 6789", totalSpend: "₱85,000", lastVisit: "2026-03-10", visits: 15, status: "VIP" },
  { id: 4, name: "Samantha Jones", email: "sam.jones@example.com", phone: "+63 920 456 7890", totalSpend: "₱8,000", lastVisit: "2026-02-28", visits: 1, status: "New" },
  { id: 5, name: "Diana Prince", email: "diana.p@example.com", phone: "+63 921 567 8901", totalSpend: "₱28,500", lastVisit: "2026-03-05", visits: 5, status: "Active" },
  { id: 6, name: "Carrie Bradshaw", email: "carrie.b@example.com", phone: "+63 922 678 9012", totalSpend: "₱115,000", lastVisit: "2026-03-20", visits: 22, status: "VIP" },
];

export function AdminClients() {
  const [showForm, setShowForm] = useState(false);

  return (
    <div className="max-w-6xl mx-auto space-y-8 h-full flex flex-col relative">
      <div className="flex items-end justify-between shrink-0">
        <div>
          <h1 className="font-serif text-3xl text-[#1C1C1C] mb-2">Client CRM</h1>
          <p className="text-sm text-[#8C8A84]">Manage your client relationships, history, and contact details.</p>
        </div>
        <div className="flex gap-4">
          <button className="px-4 py-2 border border-[#E8E6E1] text-sm text-[#1C1C1C] bg-white hover:bg-[#F5F5F0] transition-colors rounded-none">
            Export CSV
          </button>
          <button
            onClick={() => setShowForm(true)}
            className="px-4 py-2 bg-[#1C1C1C] text-[#C4A47C] text-sm hover:bg-[#2A2A2A] transition-colors rounded-none flex items-center gap-2"
          >
            <Plus size={16} />
            Add Client
          </button>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row justify-between items-center gap-4 bg-white border border-[#E8E6E1] p-4 shrink-0">
        <div className="relative w-full sm:w-96">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#8C8A84]" size={16} />
          <input
            type="text"
            placeholder="Search clients..."
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
                <th className="px-6 py-4 font-medium">Name</th>
                <th className="px-6 py-4 font-medium">Email</th>
                <th className="px-6 py-4 font-medium">Phone</th>
                <th className="px-6 py-4 font-medium">Total Spend</th>
                <th className="px-6 py-4 font-medium">Last Visit</th>
                <th className="px-6 py-4 font-medium">Visits</th>
                <th className="px-6 py-4 font-medium">Status</th>
                <th className="px-6 py-4 font-medium text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#E8E6E1]">
              {clientsData.map((client) => (
                <tr key={client.id} className="hover:bg-[#FAFAF9] transition-colors">
                  <td className="px-6 py-4 whitespace-nowrap font-medium text-[#1C1C1C]">{client.name}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-[#8C8A84] flex items-center gap-2">
                    <Mail size={14} /> {client.email}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-[#8C8A84] flex items-center gap-2">
                    <Phone size={14} /> {client.phone}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-[#1C1C1C]">{client.totalSpend}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-[#8C8A84]">{client.lastVisit}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-[#8C8A84]">{client.visits}</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`px-2.5 py-1 uppercase tracking-[0.2em] text-[11px] ${client.status === "VIP" ? "bg-[#F5F5F0] text-[#1C1C1C]" : "bg-[#FCF7ED] text-[#C4A47C]"}`}>
                      {client.status}
                    </span>
                  </td>
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
              <h2 className="font-serif text-xl text-[#1C1C1C]">Add New Client</h2>
              <button onClick={() => setShowForm(false)} className="text-[#8C8A84] hover:text-[#1C1C1C] transition-colors">
                <X size={20} />
              </button>
            </div>

            <form className="p-6 space-y-6" onSubmit={(e) => { e.preventDefault(); setShowForm(false); }}>
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-medium text-[#8C8A84] uppercase tracking-wider mb-2">Full Name</label>
                    <input className="w-full px-4 py-2 border border-[#E8E6E1] focus:outline-none focus:border-[#C4A47C] bg-white text-sm transition-colors" />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-[#8C8A84] uppercase tracking-wider mb-2">Email</label>
                    <input type="email" className="w-full px-4 py-2 border border-[#E8E6E1] focus:outline-none focus:border-[#C4A47C] bg-white text-sm transition-colors" />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-medium text-[#8C8A84] uppercase tracking-wider mb-2">Phone</label>
                    <input className="w-full px-4 py-2 border border-[#E8E6E1] focus:outline-none focus:border-[#C4A47C] bg-white text-sm transition-colors" />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-[#8C8A84] uppercase tracking-wider mb-2">Status</label>
                    <select className="w-full px-4 py-2 border border-[#E8E6E1] focus:outline-none focus:border-[#C4A47C] bg-white text-sm transition-colors text-[#1C1C1C]">
                      <option value="Active">Active</option>
                      <option value="VIP">VIP</option>
                      <option value="New">New</option>
                    </select>
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
