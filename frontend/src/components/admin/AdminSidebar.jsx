import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  Sparkles, 
  LayoutDashboard, 
  CalendarDays, 
  LogOut, 
  X,
  ExternalLink
} from 'lucide-react';
import { useAuth } from '../../context/AuthContext';
import { BUSINESS_INFO } from '../../config/business';

export default function AdminSidebar({ isOpen, onClose }) {
  const { logout, currentUser } = useAuth();
  const location = useLocation();

  const navItems = [
    { name: 'Dashboard Overview', path: '/admin/dashboard', icon: LayoutDashboard },
    { name: 'Appointments', path: '/admin/dashboard', icon: CalendarDays },
  ];

  return (
    <>
      {/* Mobile Backdrop */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/60 z-40 lg:hidden backdrop-blur-xs animate-fadeIn"
          onClick={onClose}
        />
      )}

      {/* Sidebar Container */}
      <aside
        className={`fixed top-0 bottom-0 left-0 z-50 w-72 bg-parlour-burgundy-deep text-parlour-blush border-r border-parlour-rose/20 flex flex-col justify-between transition-transform duration-300 ease-in-out lg:translate-x-0 ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        {/* Top Header & Brand */}
        <div>
          <div className="p-6 border-b border-white/10 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-parlour-gold to-parlour-rose flex items-center justify-center text-parlour-burgundy shadow-md">
                <Sparkles className="w-5 h-5" />
              </div>
              <div>
                <h2 className="font-serif font-bold text-lg text-white leading-tight">
                  AURA ADMIN
                </h2>
                <span className="text-[10px] uppercase tracking-widest text-parlour-gold-light font-medium">
                  Parlour Management
                </span>
              </div>
            </div>

            <button
              onClick={onClose}
              className="lg:hidden p-1.5 rounded-lg text-white/70 hover:text-white hover:bg-white/10"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Admin User Profile Capsule */}
          <div className="p-4 mx-4 my-4 rounded-2xl bg-white/5 border border-white/10 text-xs">
            <p className="text-parlour-blush-soft/60">Signed in as:</p>
            <p className="font-semibold text-parlour-gold-light truncate mt-0.5">
              {currentUser?.email || 'admin@aurasalon.com'}
            </p>
          </div>

          {/* Navigation Links */}
          <nav className="px-4 space-y-1.5">
            {navItems.map((item, idx) => {
              const active = location.pathname === item.path && idx === 0;
              const Icon = item.icon;
              return (
                <Link
                  key={idx}
                  to={item.path}
                  onClick={() => onClose && onClose()}
                  className={`flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-all ${
                    active
                      ? 'bg-parlour-burgundy text-parlour-gold-light font-semibold border-l-4 border-parlour-gold shadow-sm'
                      : 'text-parlour-blush-soft/80 hover:bg-white/5 hover:text-white'
                  }`}
                >
                  <Icon className="w-4 h-4 text-parlour-gold-light" />
                  <span>{item.name}</span>
                </Link>
              );
            })}
          </nav>
        </div>

        {/* Bottom Actions */}
        <div className="p-4 border-t border-white/10 space-y-2">
          <Link
            to="/"
            target="_blank"
            className="flex items-center justify-between w-full px-4 py-2.5 rounded-xl text-xs font-medium text-parlour-blush-soft/70 hover:text-white hover:bg-white/5 transition-colors"
          >
            <span className="flex items-center gap-2">
              <ExternalLink className="w-3.5 h-3.5" />
              View Public Website
            </span>
          </Link>

          <button
            onClick={() => logout()}
            className="flex items-center gap-2.5 w-full px-4 py-3 rounded-xl text-sm font-medium text-rose-300 hover:bg-rose-950/40 hover:text-rose-200 border border-rose-900/30 transition-colors"
          >
            <LogOut className="w-4 h-4" />
            <span>Logout</span>
          </button>
        </div>
      </aside>
    </>
  );
}
