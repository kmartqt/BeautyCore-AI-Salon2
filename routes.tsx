import React, { useState } from 'react';
import { Link, Outlet, useLocation } from 'react-router';
import {
  LayoutDashboard,
  Calendar,
  Users,
  Box,
  TrendingUp,
  UserCog,
  Shield,
  Bell,
  MessageCircle,
  ChevronLeft
} from 'lucide-react';

export function AdminLayout() {
  const [role, setRole] = useState<'staff' | 'admin'>('admin');
  const location = useLocation();

  return (
    <div className="flex h-screen w-full bg-[#FAFAF9] font-sans text-[#1C1C1C] overflow-hidden">
      
      {/* Sidebar */}
      <aside className="w-64 flex flex-col border-r border-[#E8E6E1] bg-white h-full z-10">
        <div className="p-6 pb-2">
          <h2 className="font-serif text-xl tracking-wide text-[#1C1C1C]">Andrea's</h2>
          <p className="text-[10px] uppercase tracking-widest text-[#8C8A84] mt-1">Aesthetic & Wellness</p>
        </div>
        
        <nav className="flex-1 overflow-y-auto py-6 flex flex-col gap-1 px-3">
          <NavItem 
            to="/admin" 
            icon={<LayoutDashboard size={18} />} 
            label="Dashboard" 
            active={location.pathname === '/admin'} 
          />
          <NavItem 
            to="/admin/appointments" 
            icon={<Calendar size={18} />} 
            label="Appointments" 
            active={location.pathname === '/admin/appointments'} 
          />
          <NavItem 
            to="/admin/clients" 
            icon={<Users size={18} />} 
            label="Client CRM" 
            active={location.pathname === '/admin/clients'} 
          />
          <NavItem 
            to="/admin/inventory" 
            icon={<Box size={18} />} 
            label="Inventory" 
            active={location.pathname === '/admin/inventory'} 
          />
          <NavItem 
            to="/admin/trends" 
            icon={<TrendingUp size={18} />} 
            label="Market Trends" 
            active={location.pathname === '/admin/trends'} 
          />
          <NavItem 
            to="/admin/notifications" 
            icon={<Bell size={18} />} 
            label="Notifications" 
            active={location.pathname === '/admin/notifications'} 
          />
          
          <div className="mt-8 mb-2 px-4">
            <h3 className="text-xs font-semibold text-[#8C8A84] uppercase tracking-wider">Workspace</h3>
          </div>
          
          <NavItem 
            to="/admin/staff" 
            icon={<UserCog size={18} />} 
            label="Staff Workspace" 
            active={location.pathname === '/admin/staff'} 
          />
          <NavItem 
            to="/admin/settings" 
            icon={<Shield size={18} />} 
            label="Admin Command" 
            adminOnly 
            active={location.pathname === '/admin/settings'} 
          />
        </nav>

        <div className="p-4 border-t border-[#E8E6E1]">
          <div className="flex items-center gap-3 p-2 rounded-md hover:bg-[#FAFAF9] transition-colors cursor-pointer">
            <div className="h-8 w-8 rounded-full bg-[#1C1C1C] text-[#C4A47C] flex items-center justify-center font-serif text-sm">
              AA
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium text-[#1C1C1C] truncate">Andrea's Clinic</p>
              <p className="text-xs text-[#8C8A84] truncate">Owner Account</p>
            </div>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col h-full overflow-hidden">
        
        {/* Topbar */}
        <header className="h-16 border-b border-[#E8E6E1] bg-white flex items-center justify-between px-8 shrink-0">
          <div className="flex items-center gap-4">
            <Link to="/" className="flex items-center gap-2 text-sm text-[#8C8A84] hover:text-[#1C1C1C] transition-colors">
              <ChevronLeft size={16} />
              <span>Back to site</span>
            </Link>
            <div className="h-4 w-px bg-[#E8E6E1]" />
            <p className="text-xs text-[#8C8A84]">
              Role-gated shells: choose Staff or Admin to view the appropriate workspace.
            </p>
          </div>
          
          <div className="flex items-center gap-6">
            <div className="flex items-center bg-[#F5F5F0] rounded-full p-1 border border-[#E8E6E1]">
              <button 
                onClick={() => setRole('staff')}
                className={`px-4 py-1.5 text-xs font-medium rounded-full transition-all ${role === 'staff' ? 'bg-white shadow-sm text-[#1C1C1C]' : 'text-[#8C8A84] hover:text-[#1C1C1C]'}`}
              >
                Staff
              </button>
              <button 
                onClick={() => setRole('admin')}
                className={`px-4 py-1.5 text-xs font-medium rounded-full transition-all ${role === 'admin' ? 'bg-white shadow-sm text-[#1C1C1C]' : 'text-[#8C8A84] hover:text-[#1C1C1C]'}`}
              >
                Admin
              </button>
            </div>
            
            <Link to="/admin/notifications" className="relative text-[#1C1C1C] hover:text-[#C4A47C] transition-colors">
              <Bell size={20} />
              <span className="absolute top-0 right-0 w-2 h-2 bg-[#C4A47C] rounded-full transform translate-x-1/2 -translate-y-1/2" />
            </Link>
            
            <div className="h-8 w-8 rounded-full bg-[#E8E6E1] text-[#1C1C1C] flex items-center justify-center font-medium text-sm border border-[#D1CFCA]">
              ST
            </div>
          </div>
        </header>

        {/* Scrollable Dashboard Body */}
        <div className="flex-1 overflow-y-auto p-8 relative">
          <Outlet />
          
          {/* Floating Action Button */}
          <button className="fixed bottom-6 right-6 h-14 w-14 bg-[#1C1C1C] text-[#C4A47C] rounded-full flex items-center justify-center shadow-lg hover:bg-[#2A2A2A] transition-transform hover:scale-105 z-50">
            <MessageCircle size={24} />
          </button>
        </div>
      </main>
    </div>
  );
}

function NavItem({ icon, label, to, active = false, adminOnly = false }: { icon: React.ReactNode, label: string, to: string, active?: boolean, adminOnly?: boolean }) {
  return (
    <Link to={to} className={`flex items-center justify-between px-4 py-2.5 rounded-md cursor-pointer transition-colors group ${
      active ? 'bg-[#F5F5F0] text-[#1C1C1C]' : 'text-[#8C8A84] hover:bg-[#FAFAF9] hover:text-[#1C1C1C]'
    }`}>
      <div className="flex items-center gap-3">
        <span className={`${active ? 'text-[#1C1C1C]' : 'text-[#8C8A84] group-hover:text-[#1C1C1C]'}`}>
          {icon}
        </span>
        <span className="text-sm font-medium">{label}</span>
      </div>
      {adminOnly && (
        <span className="text-[9px] uppercase tracking-wider border border-[#E8E6E1] px-1.5 py-0.5 rounded text-[#8C8A84]">
          Admin Only
        </span>
      )}
    </Link>
  );
}