import React from 'react';
import {
  MoreHorizontal
} from 'lucide-react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer
} from 'recharts';

// Mock Data
const revenueData = [
  { day: 'Mon', revenue: 4200 },
  { day: 'Tue', revenue: 3800 },
  { day: 'Wed', revenue: 5100 },
  { day: 'Thu', revenue: 4800 },
  { day: 'Fri', revenue: 7200 },
  { day: 'Sat', revenue: 8900 },
  { day: 'Sun', revenue: 6500 },
];

const appointmentsData = [
  { id: 1, time: '09:00 AM', client: 'Eleanor Vance', service: 'Signature Gold Facial', stylist: 'Sarah J.', status: 'In Progress' },
  { id: 2, time: '10:30 AM', client: 'Victoria Sterling', service: 'Botox Consultation', stylist: 'Dr. Andrea', status: 'Waiting' },
  { id: 3, time: '11:00 AM', client: 'Claire Dunphy', service: 'Microneedling', stylist: 'Maria C.', status: 'Scheduled' },
  { id: 4, time: '01:00 PM', client: 'Samantha Jones', service: 'Laser Hair Removal', stylist: 'Jessica T.', status: 'Scheduled' },
];

export function AdminDashboard() {
  return (
    <div className="max-w-6xl mx-auto space-y-8">
      
      {/* Header Section */}
      <div className="flex items-end justify-between">
        <div>
          <h1 className="font-serif text-3xl text-[#1C1C1C] mb-2">Dashboard</h1>
          <p className="text-sm text-[#8C8A84]">
            Here's what's happening at Andrea's Aesthetic & Wellness Clinic today.
          </p>
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

      {/* Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <MetricCard title="Today's Revenue" value="₱85,400" trend="+12%" />
        <MetricCard title="Appointments" value="24" trend="Stable" />
        <MetricCard title="New Clients" value="6" trend="+2" />
      </div>

      {/* Today's Appointments Table */}
      <div className="bg-white border border-[#E8E6E1] p-6">
        <div className="flex items-center justify-between mb-6">
          <h3 className="font-serif text-xl text-[#1C1C1C]">Today's Appointments</h3>
          <button className="text-sm text-[#C4A47C] hover:text-[#1C1C1C] transition-colors">
            View full schedule
          </button>
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
                  <td className="px-4 py-4 whitespace-nowrap font-medium text-[#1C1C1C]">{apt.time}</td>
                  <td className="px-4 py-4 whitespace-nowrap">{apt.client}</td>
                  <td className="px-4 py-4 whitespace-nowrap text-[#8C8A84]">{apt.service}</td>
                  <td className="px-4 py-4 whitespace-nowrap">{apt.stylist}</td>
                  <td className="px-4 py-4 whitespace-nowrap">
                    <span className={`px-2.5 py-1 text-[11px] uppercase tracking-wider ${
                      apt.status === 'In Progress' ? 'bg-[#F5F5F0] text-[#1C1C1C]' :
                      apt.status === 'Waiting' ? 'bg-[#FCF7ED] text-[#C4A47C]' :
                      'bg-white border border-[#E8E6E1] text-[#8C8A84]'
                    }`}>
                      {apt.status}
                    </span>
                  </td>
                  <td className="px-4 py-4 whitespace-nowrap text-right">
                    <button className="text-[#8C8A84] hover:text-[#1C1C1C] transition-colors">
                      <MoreHorizontal size={18} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Weekly Revenue Overview */}
      <div className="bg-white border border-[#E8E6E1] p-6">
        <div className="flex items-center justify-between mb-8">
          <h3 className="font-serif text-xl text-[#1C1C1C]">Weekly Revenue Overview</h3>
          <div className="flex items-center gap-2 text-sm text-[#8C8A84]">
            <span className="h-3 w-3 rounded-full bg-[#1C1C1C]"></span>
            Current Week
          </div>
        </div>
        
        <div className="h-[300px] w-full">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={revenueData} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
              <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#E8E6E1" />
              <XAxis 
                dataKey="day" 
                axisLine={false} 
                tickLine={false} 
                tick={{ fill: '#8C8A84', fontSize: 12 }}
                dy={10}
              />
              <YAxis 
                axisLine={false} 
                tickLine={false} 
                tick={{ fill: '#8C8A84', fontSize: 12 }}
                tickFormatter={(value) => `₱${value}`}
                dx={-10}
              />
              <Tooltip 
                contentStyle={{ backgroundColor: '#1C1C1C', border: 'none', color: '#FAFAF9', fontSize: '13px' }}
                itemStyle={{ color: '#C4A47C' }}
                formatter={(value: number) => [`₱${value.toLocaleString()}`, 'Revenue']}
              />
              <Line 
                type="monotone" 
                dataKey="revenue" 
                stroke="#1C1C1C" 
                strokeWidth={2}
                dot={{ r: 4, fill: '#1C1C1C', strokeWidth: 0 }}
                activeDot={{ r: 6, fill: '#C4A47C', strokeWidth: 0 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>

    </div>
  );
}

function MetricCard({ title, value, trend }: { title: string, value: string, trend: string }) {
  const isPositive = trend.startsWith('+');
  return (
    <div className="bg-white border border-[#E8E6E1] p-6 flex flex-col justify-between">
      <h4 className="text-sm font-medium text-[#8C8A84]">{title}</h4>
      <div className="mt-4 flex items-baseline gap-3">
        <span className="font-serif text-3xl text-[#1C1C1C]">{value}</span>
        <span className={`text-xs font-medium ${isPositive ? 'text-green-600' : 'text-[#8C8A84]'}`}>
          {trend}
        </span>
      </div>
    </div>
  );
}
