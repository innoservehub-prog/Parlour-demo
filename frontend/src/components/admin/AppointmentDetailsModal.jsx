import React from 'react';
import { 
  X, 
  User, 
  Phone, 
  Mail, 
  Calendar, 
  Clock, 
  Sparkles, 
  MessageSquare, 
  CheckCircle2, 
  CheckCheck, 
  XCircle, 
  MessageCircle,
  Hash
} from 'lucide-react';
import StatusBadge from '../common/StatusBadge';
import { BUSINESS_INFO } from '../../config/business';

export default function AppointmentDetailsModal({ 
  appointment, 
  onClose, 
  onUpdateStatus, 
  onSendWhatsApp 
}) {
  if (!appointment) return null;

  return (
    <div
      className="fixed inset-0 z-50 bg-black/70 backdrop-blur-xs flex items-center justify-center p-4 sm:p-6 animate-fadeIn"
      onClick={onClose}
    >
      <div
        className="relative max-w-2xl w-full bg-white rounded-3xl overflow-hidden shadow-2xl border border-parlour-rose/20 max-h-[90vh] flex flex-col justify-between animate-scaleUp"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="p-6 bg-parlour-blush border-b border-parlour-rose/20 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-parlour-burgundy text-parlour-gold-light flex items-center justify-center font-serif font-bold">
              {appointment.customerName ? appointment.customerName.charAt(0).toUpperCase() : 'A'}
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="font-serif font-bold text-xl text-parlour-burgundy">
                  {appointment.customerName}
                </h3>
                <StatusBadge status={appointment.status} />
              </div>
              <span className="text-xs text-parlour-muted font-mono">
                Booking ID: #{appointment.id}
              </span>
            </div>
          </div>

          <button
            onClick={onClose}
            aria-label="Close details"
            className="w-8 h-8 rounded-full bg-white text-parlour-muted hover:text-parlour-burgundy flex items-center justify-center shadow-xs"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Modal Body Content */}
        <div className="p-6 space-y-6 overflow-y-auto">
          
          {/* Key Appointment Meta Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            
            <div className="p-4 rounded-2xl bg-parlour-cream border border-parlour-rose/15 space-y-1">
              <span className="text-[11px] font-bold uppercase tracking-wider text-parlour-muted block">
                Requested Service
              </span>
              <p className="font-serif font-bold text-base text-parlour-burgundy flex items-center gap-1.5">
                <Sparkles className="w-4 h-4 text-parlour-gold" />
                {appointment.service}
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-parlour-cream border border-parlour-rose/15 space-y-1">
              <span className="text-[11px] font-bold uppercase tracking-wider text-parlour-muted block">
                Scheduled Slot
              </span>
              <p className="font-semibold text-sm text-parlour-burgundy flex items-center gap-1.5">
                <Calendar className="w-4 h-4 text-parlour-rose-dark" />
                {appointment.preferredDate} at {appointment.preferredTime}
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-parlour-cream border border-parlour-rose/15 space-y-1">
              <span className="text-[11px] font-bold uppercase tracking-wider text-parlour-muted block">
                Phone Number
              </span>
              <p className="font-semibold text-sm text-parlour-burgundy flex items-center gap-1.5">
                <Phone className="w-4 h-4 text-emerald-600" />
                <a href={`tel:${appointment.phone}`} className="hover:underline">
                  {appointment.phone}
                </a>
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-parlour-cream border border-parlour-rose/15 space-y-1">
              <span className="text-[11px] font-bold uppercase tracking-wider text-parlour-muted block">
                Email Address
              </span>
              <p className="font-semibold text-sm text-parlour-burgundy flex items-center gap-1.5 truncate">
                <Mail className="w-4 h-4 text-parlour-rose-muted" />
                {appointment.email || 'Not provided'}
              </p>
            </div>

          </div>

          {/* Customer Message / Special Notes */}
          <div className="p-4 rounded-2xl bg-parlour-blush/40 border border-parlour-rose/20 space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-parlour-burgundy flex items-center gap-1.5">
              <MessageSquare className="w-3.5 h-3.5 text-parlour-rose-dark" />
              Customer Notes / Requests
            </span>
            <p className="text-sm text-parlour-charcoal/90 leading-relaxed font-light italic">
              {appointment.message ? `"${appointment.message}"` : 'No additional notes entered.'}
            </p>
          </div>

          {/* Booking Timestamp */}
          <div className="text-xs text-parlour-muted flex items-center justify-between border-t border-parlour-rose/10 pt-4">
            <span>
              Booked on: <strong>{new Date(appointment.createdAt).toLocaleString()}</strong>
            </span>
            <span>Salon: {BUSINESS_INFO.shortName}</span>
          </div>

        </div>

        {/* Modal Footer Actions */}
        <div className="p-6 bg-parlour-cream border-t border-parlour-rose/20 flex flex-wrap items-center justify-between gap-3">
          
          {/* WhatsApp Direct Contact Button */}
          <button
            onClick={() => onSendWhatsApp(appointment)}
            className="px-5 py-2.5 rounded-full text-xs font-semibold text-white bg-emerald-600 hover:bg-emerald-700 shadow-sm flex items-center gap-1.5 transition-colors"
          >
            <MessageCircle className="w-4 h-4" />
            WhatsApp Customer
          </button>

          {/* Quick Status Changers */}
          <div className="flex flex-wrap items-center gap-2">
            {appointment.status !== 'Confirmed' && (
              <button
                onClick={() => onUpdateStatus(appointment.id, 'Confirmed')}
                className="px-4 py-2 rounded-full text-xs font-semibold text-emerald-800 bg-emerald-100 hover:bg-emerald-200 transition-colors flex items-center gap-1"
              >
                <CheckCircle2 className="w-3.5 h-3.5" />
                Confirm
              </button>
            )}

            {appointment.status !== 'Completed' && (
              <button
                onClick={() => onUpdateStatus(appointment.id, 'Completed')}
                className="px-4 py-2 rounded-full text-xs font-semibold text-blue-800 bg-blue-100 hover:bg-blue-200 transition-colors flex items-center gap-1"
              >
                <CheckCheck className="w-3.5 h-3.5" />
                Complete
              </button>
            )}

            {appointment.status !== 'Cancelled' && (
              <button
                onClick={() => onUpdateStatus(appointment.id, 'Cancelled')}
                className="px-4 py-2 rounded-full text-xs font-semibold text-rose-800 bg-rose-100 hover:bg-rose-200 transition-colors flex items-center gap-1"
              >
                <XCircle className="w-3.5 h-3.5" />
                Cancel
              </button>
            )}
          </div>

        </div>
      </div>
    </div>
  );
}
