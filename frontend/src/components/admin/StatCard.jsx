import React from 'react';
import { Calendar, Clock, CheckCircle2, CheckCheck, XCircle } from 'lucide-react';

export default function StatCard({ title, count, type, activeFilter, onClick }) {
  const getStyling = () => {
    switch (type) {
      case 'pending':
        return {
          icon: <Clock className="w-5 h-5 text-amber-600" />,
          bg: 'bg-amber-50',
          border: 'border-amber-200',
          badgeText: 'text-amber-700',
          activeBg: 'ring-2 ring-amber-400 bg-amber-50/80',
        };
      case 'confirmed':
        return {
          icon: <CheckCircle2 className="w-5 h-5 text-emerald-600" />,
          bg: 'bg-emerald-50',
          border: 'border-emerald-200',
          badgeText: 'text-emerald-700',
          activeBg: 'ring-2 ring-emerald-400 bg-emerald-50/80',
        };
      case 'completed':
        return {
          icon: <CheckCheck className="w-5 h-5 text-blue-600" />,
          bg: 'bg-blue-50',
          border: 'border-blue-200',
          badgeText: 'text-blue-700',
          activeBg: 'ring-2 ring-blue-400 bg-blue-50/80',
        };
      case 'cancelled':
        return {
          icon: <XCircle className="w-5 h-5 text-rose-600" />,
          bg: 'bg-rose-50',
          border: 'border-rose-200',
          badgeText: 'text-rose-700',
          activeBg: 'ring-2 ring-rose-400 bg-rose-50/80',
        };
      case 'total':
      default:
        return {
          icon: <Calendar className="w-5 h-5 text-parlour-burgundy" />,
          bg: 'bg-parlour-blush',
          border: 'border-parlour-rose/25',
          badgeText: 'text-parlour-burgundy',
          activeBg: 'ring-2 ring-parlour-rose bg-parlour-blush',
        };
    }
  };

  const style = getStyling();
  const isCurrent = activeFilter === type;

  return (
    <div
      onClick={onClick}
      className={`rounded-3xl p-5 border ${style.border} ${style.bg} ${
        isCurrent ? style.activeBg : 'hover:shadow-soft'
      } cursor-pointer transition-all duration-200 flex flex-col justify-between`}
    >
      <div className="flex items-center justify-between mb-3">
        <span className="text-xs font-bold uppercase tracking-wider text-parlour-charcoal/70">
          {title}
        </span>
        <div className="p-2 rounded-xl bg-white shadow-xs">
          {style.icon}
        </div>
      </div>

      <div className="flex items-baseline justify-between">
        <span className="font-serif text-3xl font-bold text-parlour-burgundy">
          {count}
        </span>
        <span className={`text-[11px] font-semibold ${style.badgeText}`}>
          {isCurrent ? '● Active Filter' : 'Click to filter'}
        </span>
      </div>
    </div>
  );
}
