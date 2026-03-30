import React from "react";
import { MoreHorizontal } from "lucide-react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

const revenueData = [
  { day: "Mon", revenue: 4200 },
  { day: "Tue", revenue: 3800 },
  { day: "Wed", revenue: 5100 },
  { day: "Thu", revenue: 4800 },
  { day: "Fri", revenue: 7200 },
  { day: "Sat", revenue: 8900 },
  { day: "Sun", revenue: 6500 },
];

const appointmentsData = [
  { id: 1, time: "09:00 AM", client: "Eleanor Vance", service: "Signature Gold Facial", stylist: "Sarah J.", status: "In Progress" },
  { id: 2, time: "10:30 AM", client: "Victoria Sterling", service: "Botox Consultation", stylist: "Dr. Andrea", status: "Waiting" },
  { id: 3, time: "11:00 AM", client: "Claire Dunphy", service: "Microneedling", stylist: "Maria C.", status: "Scheduled" },
  { id: 4, time: "01:00 PM", client: "Samantha Jones", service: "Laser Hair Removal", stylist: "Jessica T.", status: "Scheduled" },
];

export function AdminDashboard() {
  return (
    <div className="max-w-6xl mx-auto space-y-8">
      <div className="flex items-end justify-between">
        <div>
          <h1 className="font-serif text-3xl text-[#1C1C1C] mb-2">Dashboard</h1>
          <p className="text-sm text-[#8C8A84]">Here's what's happening at Andrea's Aesthetic &amp; Wellness Clinic today.</p>
        </div>
        <div className="flex gap-4">
          <button className="px-4 py-2 border border-[#E8E6E1] text-sm text-[#1C1C1C] bg-white hover:bg-[#F5F5F0] transition-colors rounded-none">
            Export Report
          </button>
          <button className="px-4 py-2 bg-[#1C1C1C] text-[#C4A47C] text-sm hover:bg-[#2A2A2A] transition-colors rounded-none">
            New Booking
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <MetricCard title="Today's Revenue" value="₱85,400" trend="+12%" />
        <MetricCard title="Appointments" value="24" trend="Stable" />
        <MetricCard title="New Clients" value="6" trend="+2" />
      </div>

      <div className="bg-white border border-[#E8E6E1] p-6">
        <div className="flex items-center justify-between mb-6">
          <h3 className="font-serif text-xl text-[#1C1C1C]">Today's Appointments</h3>
          <button className="text-sm text-[#C4A47C] hover:text-[#1C1C1C] transition-colors">View full schedule</button>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-sm text-left">
            <thead className="text-xs text-[#8C8A84] uppercase tracking-wider border-b border-[#E8E6E1]">
              <tr>
                <th className="px-4 py-3 font-medium">Time</th>
                <th className="px-4 py-3 font-medium">Client</th>
                <th className="px-4 py-3 font-medium">Service</th>
                <th className="px-4 py-3 font-medium">Stylist</th>
                <th className="px-4 py-3 font-medium">Status</th>
                <th className="px-4 py-3 font-medium text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#E8E6E1]">
              {appointmentsData.map((apt) => (
                <tr key={apt.id} className="hover:bg-[#FAFAF9] transition-colors">
                  <td className="px-4 py-3 whitespace-nowrap text-[#1C1C1C]">{apt.time}</td>
                  <td className="px-4 py-3 whitespace-nowrap text-[#1C1C1C]">{apt.client}</td>
                  <td className="px-4 py-3 whitespace-nowrap text-[#1C1C1C]">{apt.service}</td>
                  <td className="px-4 py-3 whitespace-nowrap text-[#1C1C1C]">{apt.stylist}</td>
                  <td className="px-4 py-3 whitespace-nowrap">
                    <span className="px-2.5 py-1 bg-[#FCF7ED] text-[#C4A47C] uppercase tracking-[0.2em] text-[11px]">
                      {apt.status}
                    </span>
                  </td>
                  <td className="px-4 py-3 whitespace-nowrap text-right">
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

      <div className="bg-white border border-[#E8E6E1] p-6">
        <div className="flex items-center justify-between mb-6">
          <h3 className="font-serif text-xl text-[#1C1C1C]">Weekly Revenue</h3>
          <span className="text-sm text-[#8C8A84]">Average ₱6,600 / day</span>
        </div>
        <div className="h-64">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={revenueData}>
              <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#E8E6E1" />
              <XAxis dataKey="day" tickLine={false} axisLine={{ stroke: "#E8E6E1" }} />
              <YAxis tickLine={false} axisLine={{ stroke: "#E8E6E1" }} />
              <Tooltip />
              <Line type="monotone" dataKey="revenue" stroke="#C4A47C" strokeWidth={3} dot={false} />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}

function MetricCard({ title, value, trend }: { title: string; value: string; trend: string }) {
  return (
    <div className="bg-white border border-[#E8E6E1] p-6">
      <p className="text-xs text-[#8C8A84] uppercase tracking-wider mb-2">{title}</p>
      <div className="flex items-baseline gap-2">
        <span className="font-serif text-3xl text-[#1C1C1C]">{value}</span>
        <span className="text-sm text-[#C4A47C]">{trend}</span>
      </div>
    </div>
  );
}
