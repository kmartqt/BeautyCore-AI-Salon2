import React from 'react';
import { Filter, CheckCircle2, Calendar, AlertTriangle, MessageCircle, Info } from 'lucide-react';

const notificationsData = [
  { id: 1, type: 'booking', title: 'New Appointment Booked', message: 'Samantha Jones booked a Signature Gold Facial for tomorrow at 2:00 PM.', time: '10 mins ago', unread: true, icon: Calendar },
  { id: 2, type: 'alert', title: 'Low Inventory Alert', message: 'Botox Vials (100U) stock has dropped below the minimum threshold (2 remaining).', time: '1 hour ago', unread: true, icon: AlertTriangle },
  { id: 3, type: 'message', title: 'New Client Message', message: 'Eleanor Vance requested to reschedule her upcoming consultation.', time: '3 hours ago', unread: false, icon: MessageCircle },
  { id: 4, type: 'system', title: 'System Update', message: 'Your weekly revenue and performance report is ready to view.', time: '1 day ago', unread: false, icon: Info },
  { id: 5, type: 'booking', title: 'Appointment Cancelled', message: 'Victoria Sterling cancelled her Botox Consultation for today.', time: '1 day ago', unread: false, icon: Calendar },
  { id: 6, type: 'system', title: 'New Staff Member Added', message: 'Dr. Michael Roberts has been added to the Injectables team.', time: '2 days ago', unread: false, icon: Info },
];

export function AdminNotifications() {
  return (
    <div className="max-w-4xl mx-auto space-y-8 h-full flex flex-col">
      <div className="flex items-end justify-between shrink-0">
        <div>
          <h1 className="font-serif text-3xl text-[#1C1C1C] mb-2">Notifications</h1>
          <p className="text-sm text-[#8C8A84]">
            Stay updated with bookings, alerts, and system messages.
          </p>
        </div>
        <div className="flex gap-4">
          <button className="px-4 py-2 border border-[#E8E6E1] text-sm text-[#1C1C1C] bg-white hover:bg-[#F5F5F0] transition-colors rounded-none flex items-center gap-2">
            <CheckCircle2 size={16} />
            Mark all as read
          </button>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row justify-between items-center gap-4 bg-white border border-[#E8E6E1] p-4 shrink-0">
        <div className="flex bg-[#F5F5F0] border border-[#E8E6E1] p-1 w-full sm:w-auto">
          <button className="px-4 py-1.5 text-xs font-medium bg-white shadow-sm text-[#1C1C1C] flex-1 sm:flex-none">All</button>
          <button className="px-4 py-1.5 text-xs font-medium text-[#8C8A84] hover:text-[#1C1C1C] flex-1 sm:flex-none">Unread (2)</button>
          <button className="px-4 py-1.5 text-xs font-medium text-[#8C8A84] hover:text-[#1C1C1C] flex-1 sm:flex-none">Alerts</button>
        </div>
        <div className="flex items-center gap-3 w-full sm:w-auto">
          <button className="flex items-center gap-2 px-4 py-2 border border-[#E8E6E1] text-sm text-[#1C1C1C] bg-white hover:bg-[#F5F5F0] transition-colors rounded-none whitespace-nowrap">
            <Filter size={16} />
            Filter
          </button>
        </div>
      </div>

      <div className="bg-white border border-[#E8E6E1] flex-1 overflow-hidden flex flex-col">
        <div className="overflow-y-auto flex-1">
          <div className="divide-y divide-[#E8E6E1]">
            {notificationsData.map((note) => {
              const Icon = note.icon;
              return (
                <div key={note.id} className={`p-6 flex gap-4 hover:bg-[#FAFAF9] transition-colors ${note.unread ? 'bg-[#FAFAF9]' : 'bg-white'}`}>
                  <div className={`mt-1 flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center ${
                    note.type === 'alert' ? 'bg-red-50 text-red-600' : 
                    note.type === 'booking' ? 'bg-[#FCF7ED] text-[#C4A47C]' : 
                    'bg-[#F5F5F0] text-[#1C1C1C]'
                  }`}>
                    <Icon size={20} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <h4 className={`text-sm ${note.unread ? 'font-medium text-[#1C1C1C]' : 'font-medium text-[#1C1C1C]'}`}>
                          {note.title}
                        </h4>
                        <p className={`text-sm mt-1 ${note.unread ? 'text-[#1C1C1C]' : 'text-[#8C8A84]'}`}>
                          {note.message}
                        </p>
                      </div>
                      <span className="text-xs text-[#8C8A84] whitespace-nowrap">{note.time}</span>
                    </div>
                  </div>
                  <div className="flex items-start">
                    {note.unread && (
                      <div className="w-2.5 h-2.5 rounded-full bg-[#C4A47C] mt-2"></div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}