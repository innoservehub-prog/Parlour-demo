import React from 'react';
import { Clock, CheckCircle2, CheckCheck, XCircle } from 'lucide-react';

export default function StatusBadge({ status, className = "" }) {
  const normalizedStatus = (status || "Pending").toLowerCase();

  switch (normalizedStatus) {
    case 'confirmed':
      return (
        <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-100 text-emerald-800 border border-emerald-300 ${className}`}>
          <CheckCircle2 className="w-3.5 h-3.5" />
          Confirmed
        </span>
      );
    case 'completed':
      return (
        <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-blue-100 text-blue-800 border border-blue-300 ${className}`}>
          <CheckCheck className="w-3.5 h-3.5" />
          Completed
        </span>
      );
    case 'cancelled':
      return (
        <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-rose-100 text-rose-800 border border-rose-300 ${className}`}>
          <XCircle className="w-3.5 h-3.5" />
          Cancelled
        </span>
      );
    case 'pending':
    default:
      return (
        <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-amber-100 text-amber-800 border border-amber-300 ${className}`}>
          <Clock className="w-3.5 h-3.5" />
          Pending
        </span>
      );
  }
}
